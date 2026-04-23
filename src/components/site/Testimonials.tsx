import { ClipboardCheck, HandshakeIcon, Undo2 } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "./Reveal";

type Promise = {
  icon: typeof HandshakeIcon;
  number: string;
  title: string;
  body: string;
};

const promises: Promise[] = [
  {
    icon: ClipboardCheck,
    number: "01",
    title: "I Quote Before I Work",
    body: "No wrench turns until you've seen the price and said yes. If the job changes mid-way, I stop and tell you before I keep going.",
  },
  {
    icon: HandshakeIcon,
    number: "02",
    title: "I Show Up When I Say",
    body: "Real time windows I actually keep. Not 'sometime between 8 and 5.' If I'm running late, you'll hear from me before the window closes.",
  },
  {
    icon: Undo2,
    number: "03",
    title: "If It's Not Right, I'm Back",
    body: "My labor is backed by my name. Something I fixed isn't holding up, I come back and make it right. Parts carry manufacturer warranty on top of that.",
  },
];

export function Testimonials() {
  return (
    <section
      id="promise"
      aria-labelledby="promise-heading"
      className="relative py-20 sm:py-28"
    >
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow">Derek&apos;s Word</p>
            <h2 id="promise-heading" className="section-title mt-3">
              Three Promises.
              <br />
              <span className="text-accent-hover">Every Job.</span>
            </h2>
            <p className="mt-5 text-lg text-muted">
              Derek runs on referrals and repeat work. That only happens if
              he delivers the same thing every time, to every customer.
              These are the three things he doesn&apos;t break on.
            </p>
          </Reveal>

          <StaggerGroup className="space-y-5 lg:col-span-8">
            {promises.map(({ icon: Icon, number, title, body }) => (
              <StaggerItem key={number}>
                <article className="card-premium group flex gap-6 p-7 sm:p-8">
                  <div className="flex flex-col items-center">
                    <span className="font-heading text-5xl font-bold leading-none text-accent/30 transition-colors group-hover:text-accent-hover/70">
                      {number}
                    </span>
                    <span className="mt-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/15 ring-1 ring-accent/30">
                      <Icon className="h-5 w-5 text-accent-hover" aria-hidden />
                    </span>
                  </div>
                  <div className="flex-1 border-l border-border pl-6">
                    <h3 className="font-heading text-xl font-bold uppercase text-ink sm:text-2xl">
                      {title}
                    </h3>
                    <p className="mt-2 text-ink/80">{body}</p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
