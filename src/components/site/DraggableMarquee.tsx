"use client";

import {
  PointerEvent as ReactPointerEvent,
  ReactNode,
  useEffect,
  useRef,
} from "react";

type DraggableMarqueeProps = {
  children: ReactNode;
  /** Auto-scroll speed in pixels per second. */
  speed?: number;
  /** Direction of auto-scroll. 'left' = content moves left (default). */
  direction?: "left" | "right";
  className?: string;
};

/**
 * Marquee that auto-scrolls continuously but can be grabbed and dragged
 * by the user. While dragging, auto-scroll is paused. On release, auto
 * scroll resumes from the user's final position. No snap, no re-render
 * flicker — position is controlled via direct DOM transform.
 *
 * Children should be a doubled list (e.g., [...items, ...items]) so
 * the loop is seamless when the track wraps around.
 */
export function DraggableMarquee({
  children,
  speed = 50,
  direction = "left",
  className,
}: DraggableMarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(0);
  const halfWidthRef = useRef(0);
  const isDraggingRef = useRef(false);
  const dragStartRef = useRef({ x: 0, startPos: 0 });
  const prefersReducedRef = useRef(false);

  // Sign of auto-scroll velocity: negative = leftward movement.
  const directionSign = direction === "left" ? -1 : 1;

  useEffect(() => {
    prefersReducedRef.current =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  // Keep halfWidthRef in sync with actual track width (handles images
  // loading, viewport resize, content changes).
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const measure = () => {
      halfWidthRef.current = track.scrollWidth / 2;
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(track);
    window.addEventListener("load", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("load", measure);
    };
  }, []);

  // RAF loop: advance position when not dragging, write straight to
  // transform (no React re-render on every frame).
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let lastTime = performance.now();
    let rafId: number;

    const wrap = (pos: number, half: number) => {
      if (half <= 0) return pos;
      let next = pos;
      while (next <= -half) next += half;
      while (next > 0) next -= half;
      return next;
    };

    const tick = (now: number) => {
      const dt = now - lastTime;
      lastTime = now;
      if (!isDraggingRef.current && !prefersReducedRef.current) {
        positionRef.current +=
          directionSign * speed * (dt / 1000);
        positionRef.current = wrap(
          positionRef.current,
          halfWidthRef.current,
        );
      }
      track.style.transform = `translate3d(${positionRef.current}px, 0, 0)`;
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [speed, directionSign]);

  const wrap = (pos: number, half: number) => {
    if (half <= 0) return pos;
    let next = pos;
    while (next <= -half) next += half;
    while (next > 0) next -= half;
    return next;
  };

  const handlePointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    el.setPointerCapture(e.pointerId);
    isDraggingRef.current = true;
    dragStartRef.current = {
      x: e.clientX,
      startPos: positionRef.current,
    };
  };

  const handlePointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    const deltaX = e.clientX - dragStartRef.current.x;
    const next = wrap(
      dragStartRef.current.startPos + deltaX,
      halfWidthRef.current,
    );
    positionRef.current = next;
  };

  const handlePointerUp = (e: ReactPointerEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    if (el.hasPointerCapture(e.pointerId)) {
      el.releasePointerCapture(e.pointerId);
    }
    isDraggingRef.current = false;
  };

  return (
    <div
      className={`cursor-grab select-none active:cursor-grabbing ${className || ""}`}
      style={{ touchAction: "pan-y" }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      <div
        ref={trackRef}
        className="flex w-max items-center"
        style={{ willChange: "transform" }}
      >
        {children}
      </div>
    </div>
  );
}
