import { Clock, Handshake, Truck } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "./Reveal";

const items = [
  {
    icon: Truck,
    title: "Comes To You",
    body: "No tow truck needed. Most repairs done on-site at your driveway, parking lot, or fleet yard.",
  },
  {
    icon: Handshake,
    title: "Honest Pricing",
    body: "Clear quotes before any work begins. No surprise fees, no upsell games.",
  },
  {
    icon: Clock,
    title: "Available 24/7",
    body: "Breakdown at 2am? Call. Fleet down on a workday? Call. Derek answers.",
  },
];

export function WhyDerek() {
  return (
    <section
      id="why"
      aria-labelledby="why-heading"
      className="relative py-20 sm:py-28"
    >
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Why Derek</p>
          <h2 id="why-heading" className="section-title mt-3">
            Why Customers Trust Derek
          </h2>
        </Reveal>

        <StaggerGroup className="mt-12 grid gap-5 md:grid-cols-3">
          {items.map(({ icon: Icon, title, body }) => (
            <StaggerItem key={title}>
              <article className="card-premium group h-full p-8">
                <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-accent/0 via-accent to-accent/0" />
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/15 ring-1 ring-accent/30">
                  <Icon className="h-6 w-6 text-accent-hover" aria-hidden />
                </span>
                <h3 className="mt-5 font-heading text-2xl font-bold uppercase text-ink">
                  {title}
                </h3>
                <p className="mt-2 text-ink/75">{body}</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
