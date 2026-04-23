import { Wrench } from "lucide-react";

const items = [
  "I come to your driveway",
  "Quotes before work begins",
  "Raleigh, NC",
  "No tow. No waiting room.",
  "Family owned",
  "Nights, weekends, emergencies",
  "Fleets and commercial",
  "(919) 798-4452",
];

export function Marquee() {
  // Doubled so translateX(-50%) loops seamlessly; pause on hover.
  const loop = [...items, ...items];

  return (
    <div
      aria-hidden
      className="group/mq relative overflow-hidden border-y border-border bg-accent/10 py-4"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-bg to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-bg to-transparent sm:w-24" />

      <div
        className="flex w-max animate-marquee whitespace-nowrap group-hover/mq:[animation-play-state:paused] motion-reduce:animate-none"
        style={{ willChange: "transform" }}
      >
        {loop.map((text, i) => (
          <div key={i} className="mr-10 flex items-center gap-10">
            <span className="font-heading text-sm font-bold uppercase tracking-[0.3em] text-ink/85 sm:text-base">
              {text}
            </span>
            <Wrench className="h-4 w-4 text-accent-hover" aria-hidden />
          </div>
        ))}
      </div>
    </div>
  );
}
