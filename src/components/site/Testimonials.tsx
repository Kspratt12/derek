import { Quote, Star } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "./Reveal";

// Swap these three placeholders with real Google reviews or customer quotes from Derek.
// Keep the structure: short attribution, vehicle + job, 1-2 sentence quote.
const testimonials = [
  {
    quote:
      "Derek came to my driveway the same morning I called. Diagnosed the check engine light, had the part, got it done in under two hours. No shop, no tow, no runaround.",
    name: "James R.",
    detail: "2014 F-150, Raleigh",
  },
  {
    quote:
      "We run a small fleet and downtime costs us. Derek shows up on our lot, works around our trucks being in and out, and his pricing doesn't move on us mid-job.",
    name: "Marcus T.",
    detail: "Fleet client, Garner",
  },
  {
    quote:
      "My brakes were grinding on a Sunday night. Every shop was closed. Derek answered, quoted me honest, showed up Monday morning with rotors and pads.",
    name: "Alicia H.",
    detail: "2018 Nissan Rogue, Clayton",
  },
];

export function Testimonials() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="relative py-20 sm:py-28"
    >
      <div className="container">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">What Customers Say</p>
          <h2 id="reviews-heading" className="section-title mt-3">
            Real Jobs. Real Reviews.
          </h2>
          <p className="mt-4 text-lg text-muted">
            Derek&apos;s business runs on referrals and repeat work. Here&apos;s
            what people say after he shows up.
          </p>
        </Reveal>

        <StaggerGroup className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map(({ quote, name, detail }) => (
            <StaggerItem key={name}>
              <figure className="card-premium relative flex h-full flex-col p-8">
              <Quote
                className="absolute right-6 top-6 h-8 w-8 text-accent/20"
                aria-hidden
              />
              <div
                className="flex items-center gap-0.5 text-accent-hover"
                aria-label="5 out of 5 stars"
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" aria-hidden />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-ink/85">
                &ldquo;{quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="font-heading text-sm font-bold uppercase tracking-wider text-ink">
                  {name}
                </p>
                <p className="text-sm text-muted">{detail}</p>
              </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
