"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type MarqueeLogoProps = {
  src: string;
  name: string;
  scale?: number;
};

/**
 * Logo wrapper for marquees: watches its own viewport position and
 * lights up (full color, full opacity, slight scale) when it passes
 * through the center band of the screen. Out at the edges it's
 * dimmed and desaturated so the center is the natural focal point.
 */
export function MarqueeLogo({ src, name, scale = 1 }: MarqueeLogoProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inSpotlight, setInSpotlight] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Shrink the observed viewport to a ~20% wide vertical strip in
    // the horizontal middle of the screen. Elements intersecting this
    // strip are in the spotlight.
    const observer = new IntersectionObserver(
      ([entry]) => setInSpotlight(entry.isIntersecting),
      { rootMargin: "0px -40% 0px -40%", threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative h-full w-full transition-all duration-700 ease-out ${
        inSpotlight
          ? "opacity-100 grayscale-0"
          : "opacity-55 grayscale"
      }`}
      style={{
        transform: `scale(${scale * (inSpotlight ? 1.08 : 1)})`,
      }}
    >
      <Image
        src={src}
        alt={`${name} logo`}
        fill
        sizes="140px"
        className="object-contain"
      />
    </div>
  );
}
