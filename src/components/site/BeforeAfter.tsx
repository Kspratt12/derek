"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";

type Pair = {
  title: string;
  subtitle: string;
  before: { src: string; alt: string };
  after: { src: string; alt: string };
};

const pairs: Pair[] = [
  {
    title: "Brake Rotor Replacement",
    subtitle: "Worn rotor off, fresh rotor on. Driveway job, same afternoon.",
    before: {
      src: "/images/rotor-1-before.jpg",
      alt: "Worn brake rotor before replacement",
    },
    after: {
      src: "/images/rotor-2-after.jpg",
      alt: "Brake rotor after replacement",
    },
  },
  {
    title: "Fleet Pressure Wash",
    subtitle: "Work truck covered in job-site grit to showroom clean. On-site.",
    before: {
      src: "/images/truck-before.jpg",
      alt: "Dirty fleet truck before pressure washing",
    },
    after: {
      src: "/images/truck-after.jpg",
      alt: "Fleet truck after pressure washing",
    },
  },
];

function Slider({ pair }: { pair: Pair }) {
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  // Track first-touch origin so we can decide if the user wants to
  // scroll the page (vertical) or drag the slider (horizontal).
  const intentRef = useRef<{
    pointerId: number;
    x: number;
    y: number;
    decided: boolean;
  } | null>(null);

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, next)));
  }, []);

  return (
    <figure className="card-premium overflow-hidden p-0">
      <div
        ref={containerRef}
        className="relative aspect-[4/3] w-full select-none overflow-hidden"
        style={{
          cursor: dragging ? "grabbing" : "grab",
          touchAction: "pan-y",
        }}
        role="slider"
        aria-label={`Before and after slider: ${pair.title}`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        tabIndex={0}
        onPointerDown={(e) => {
          // Mouse / pen: commit to dragging immediately.
          if (e.pointerType !== "touch") {
            const el = e.currentTarget;
            el.setPointerCapture(e.pointerId);
            setDragging(true);
            setFromClientX(e.clientX);
            return;
          }
          // Touch: wait to see direction before committing.
          intentRef.current = {
            pointerId: e.pointerId,
            x: e.clientX,
            y: e.clientY,
            decided: false,
          };
        }}
        onPointerMove={(e) => {
          // If we've already committed to dragging, update position.
          if (dragging) {
            setFromClientX(e.clientX);
            return;
          }
          // Touch intent phase: decide horizontal drag vs vertical scroll.
          const intent = intentRef.current;
          if (!intent || intent.decided || intent.pointerId !== e.pointerId) {
            return;
          }
          const dx = Math.abs(e.clientX - intent.x);
          const dy = Math.abs(e.clientY - intent.y);
          // Wait until the user has moved at least ~10px in some direction.
          if (dx < 10 && dy < 10) return;
          intent.decided = true;
          if (dx > dy) {
            // Horizontal intent: take over the touch as a drag.
            const el = e.currentTarget;
            el.setPointerCapture(e.pointerId);
            setDragging(true);
            setFromClientX(e.clientX);
          }
          // Vertical intent: do nothing so the browser can scroll
          // the page naturally (touch-action: pan-y allows this).
        }}
        onPointerUp={(e) => {
          intentRef.current = null;
          const el = e.currentTarget;
          if (el.hasPointerCapture(e.pointerId)) {
            el.releasePointerCapture(e.pointerId);
          }
          setDragging(false);
        }}
        onPointerCancel={() => {
          intentRef.current = null;
          setDragging(false);
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") {
            e.preventDefault();
            setPosition((p) => Math.max(0, p - 4));
          }
          if (e.key === "ArrowRight") {
            e.preventDefault();
            setPosition((p) => Math.min(100, p + 4));
          }
        }}
      >
        {/* After image fills the whole frame. */}
        <Image
          src={pair.after.src}
          alt={pair.after.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="pointer-events-none object-cover"
          draggable={false}
        />

        {/* Before image layered on top, clipped from the right via clipPath. */}
        <Image
          src={pair.before.src}
          alt={pair.before.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="pointer-events-none object-cover"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          draggable={false}
        />

        {/* Corner labels */}
        <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 font-heading text-[10px] uppercase tracking-[0.2em] text-ink">
          Before
        </span>
        <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-accent/90 px-3 py-1 font-heading text-[10px] uppercase tracking-[0.2em] text-ink">
          After
        </span>

        {/* Divider + handle */}
        <div
          className="pointer-events-none absolute inset-y-0 z-10 w-0.5 bg-accent-hover shadow-[0_0_20px_rgba(100,170,60,0.6)]"
          style={{ left: `calc(${position}% - 1px)` }}
        >
          <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-accent-hover bg-bg shadow-[0_0_20px_rgba(100,170,60,0.5)]">
            <MoveHorizontal
              className="h-5 w-5 text-accent-hover"
              aria-hidden
            />
          </div>
        </div>
      </div>

      <figcaption className="p-5">
        <div className="font-heading text-lg font-bold uppercase text-ink">
          {pair.title}
        </div>
        <div className="mt-1 text-sm text-muted">{pair.subtitle}</div>
      </figcaption>
    </figure>
  );
}

export function BeforeAfter() {
  return (
    <section
      id="before-after"
      aria-labelledby="before-after-heading"
      className="relative bg-[#0F0F0F] py-20 sm:py-28"
    >
      <div className="container">
        <div className="max-w-3xl">
          <p className="eyebrow">Before / After</p>
          <h2 id="before-after-heading" className="section-title mt-3">
            Drag To Compare.
          </h2>
          <p className="mt-4 text-lg text-muted">
            Same vehicle, before and after. Drag the handle to see what
            Derek pulled up to versus what he left behind.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {pairs.map((p) => (
            <Slider key={p.title} pair={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
