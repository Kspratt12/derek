import { ShieldCheck } from "lucide-react";

const brands = [
  "NAPA",
  "AC Delco",
  "Bosch",
  "Motorcraft",
  "Moog",
  "Denso",
  "Snap-On",
  "Milwaukee",
];

export function TrustStrip() {
  return (
    <section
      aria-label="Parts and tools Derek trusts"
      className="relative border-y border-border bg-bg/80 py-10"
    >
      <div className="container">
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/15 ring-1 ring-accent/30">
              <ShieldCheck
                className="h-5 w-5 text-accent-hover"
                aria-hidden
              />
            </span>
            <div>
              <p className="eyebrow">Trusted Parts &amp; Tools</p>
              <p className="mt-1 text-sm text-muted">
                Derek installs parts from the brands professional shops use.
              </p>
            </div>
          </div>

          <ul
            className="grid grid-cols-4 gap-x-8 gap-y-4 sm:grid-cols-4 lg:grid-cols-8 lg:gap-x-10"
            aria-label="Brands Derek works with"
          >
            {brands.map((b) => (
              <li
                key={b}
                className="flex items-center justify-center font-heading text-sm font-bold uppercase tracking-[0.2em] text-muted/80 transition-colors hover:text-ink"
              >
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
