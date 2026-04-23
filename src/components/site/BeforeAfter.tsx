"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
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
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, next)));
  }, []);

  useEffect(() => {
    const handleMove = (e: PointerEvent) => {
      if (!draggingRef.current) return;
      setFromClientX(e.clientX);
    };
    const handleUp = () => {
      draggingRef.current = false;
    };
    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", handleUp);
    window.addEventListener("pointercancel", handleUp);
    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleUp);
      window.removeEventListener("pointercancel", handleUp);
    };
  }, [setFromClientX]);

  return (
    <figure className="card-premium overflow-hidden p-0">
      <div
        ref={containerRef}
        className="relative aspect-[4/3] w-full touch-none select-none overflow-hidden"
        onPointerDown={(e) => {
          draggingRef.current = true;
          setFromClientX(e.clientX);
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 4));
          if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 4));
        }}
        role="slider"
        aria-label={`Before and after slider: ${pair.title}`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        tabIndex={0}
      >
        <Image
          src={pair.after.src}
          alt={pair.after.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />

        <Image
          src={pair.before.src}
          alt={pair.before.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        />

        <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 font-heading text-[10px] uppercase tracking-[0.2em] text-ink">
          Before
        </span>
        <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-accent/90 px-3 py-1 font-heading text-[10px] uppercase tracking-[0.2em] text-ink">
          After
        </span>

        <div
          className="pointer-events-none absolute inset-y-0 z-10 w-0.5 bg-accent-hover shadow-[0_0_20px_rgba(100,170,60,0.6)]"
          style={{ left: `calc(${position}% - 1px)` }}
        >
          <div className="absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-accent-hover bg-bg shadow-[0_0_20px_rgba(100,170,60,0.5)]">
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
      className="relative py-20 sm:py-28"
    >
      <div className="container">
        <div className="max-w-3xl">
          <p className="eyebrow">Before / After</p>
          <h2 id="before-after-heading" className="section-title mt-3">
            See The Work, Drag The Slider
          </h2>
          <p className="mt-4 text-lg text-muted">
            Drag each image to compare what Derek showed up to versus what he
            left behind. Real jobs, no filters.
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
