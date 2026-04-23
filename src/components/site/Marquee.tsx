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
  // Double the items so the loop is seamless (translateX -50% lands on a copy).
  const loop = [...items, ...items];

  return (
    <div
      aria-hidden
      className="relative overflow-hidden border-y border-border bg-accent/10 py-4"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg to-transparent" />
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {loop.map((text, i) => (
          <div key={i} className="flex items-center gap-10">
            <span className="font-heading text-sm font-bold uppercase tracking-[0.3em] text-ink/90 sm:text-base">
              {text}
            </span>
            <Wrench className="h-4 w-4 text-accent-hover" aria-hidden />
          </div>
        ))}
      </div>
    </div>
  );
}
