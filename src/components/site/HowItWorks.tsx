import { Reveal, StaggerGroup, StaggerItem } from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Call Or Text",
    body: "Tell me your vehicle, what's wrong, and where you are. Usually a same-day response.",
  },
  {
    n: "02",
    title: "Get A Quote",
    body: "Clear, honest pricing before I turn a single wrench. No surprises, no upsell pressure.",
  },
  {
    n: "03",
    title: "I Show Up",
    body: "Your driveway, parking lot, or fleet yard. Tools and the right parts in the truck.",
  },
  {
    n: "04",
    title: "Pay When It's Done",
    body: "Cash, card, Zelle, or Cash App. You pay when the vehicle runs right. Not a minute before.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="relative border-t border-border bg-surface/20 py-24 sm:py-32"
    >
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <p className="eyebrow">The Process</p>
              <h2
                id="process-heading"
                className="mt-4 font-heading font-bold uppercase leading-[0.95] tracking-tight text-ink"
                style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
              >
                From Call
                <br />
                <span className="text-accent-hover">To Keys Back.</span>
              </h2>
              <p className="mt-6 max-w-sm text-lg text-muted">
                Four steps. No waiting rooms, no runaround, no middlemen.
                Here&apos;s exactly how it goes.
              </p>
            </div>
          </Reveal>

          <StaggerGroup className="lg:col-span-8" stagger={0.08}>
            <ol className="divide-y divide-border/60 border-y border-border/60">
              {steps.map(({ n, title, body }, i) => (
                <StaggerItem key={n}>
                  <li className="group relative grid grid-cols-[auto_1fr] gap-6 py-8 transition-colors hover:bg-accent/[0.03] sm:grid-cols-[auto_1fr_auto] sm:gap-10 sm:py-10">
                    <div
                      className="font-heading text-6xl font-bold leading-none text-accent/40 transition-colors group-hover:text-accent-hover sm:text-7xl lg:text-8xl"
                      aria-hidden
                    >
                      {n}
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-ink sm:text-2xl lg:text-3xl">
                        {title}
                      </h3>
                      <p className="mt-3 max-w-xl text-ink/75 sm:text-lg">
                        {body}
                      </p>
                    </div>
                    <div
                      aria-hidden
                      className="hidden self-center font-heading text-[10px] uppercase tracking-[0.3em] text-muted/60 sm:block"
                    >
                      Step {i + 1} of {steps.length}
                    </div>
                  </li>
                </StaggerItem>
              ))}
            </ol>
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
