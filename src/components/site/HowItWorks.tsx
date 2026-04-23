import { PhoneCall, ClipboardCheck, Wrench, CreditCard } from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    title: "Call or Text",
    body: "Tell Derek your vehicle, what's wrong, and where you are. Usually a same-day response.",
  },
  {
    icon: ClipboardCheck,
    title: "Get a Quote",
    body: "Clear, honest pricing before any wrench turns. No surprises, no upsell pressure.",
  },
  {
    icon: Wrench,
    title: "Derek Shows Up",
    body: "He comes to your driveway, parking lot, or fleet yard with the parts and tools.",
  },
  {
    icon: CreditCard,
    title: "Pay When Done",
    body: "Cash, card, or transfer. You only pay after the job is finished and the vehicle runs right.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="relative border-t border-border bg-surface/20 py-20 sm:py-28"
    >
      <div className="container">
        <div className="max-w-3xl">
          <p className="eyebrow">How It Works</p>
          <h2 id="process-heading" className="section-title mt-3">
            Four Steps. No Waiting Room.
          </h2>
          <p className="mt-4 text-lg text-muted">
            The process is simple because it has to be. You have a vehicle
            that isn&apos;t working and you need it fixed.
          </p>
        </div>

        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, body }, i) => (
            <li
              key={title}
              className="relative rounded-xl border border-border bg-bg/60 p-6"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/15 ring-1 ring-accent/30">
                  <Icon className="h-5 w-5 text-accent-hover" aria-hidden />
                </span>
                <span className="font-heading text-sm font-bold uppercase tracking-wider text-accent-hover">
                  Step {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 font-heading text-xl font-bold uppercase text-ink">
                {title}
              </h3>
              <p className="mt-2 text-ink/75">{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
