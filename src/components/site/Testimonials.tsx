import { Reveal, StaggerGroup, StaggerItem } from "./Reveal";

type Promise = {
  n: string;
  pullQuote: string;
  body: string;
};

const promises: Promise[] = [
  {
    n: "01",
    pullQuote: "I quote before I work.",
    body: "No wrench turns until you've seen the price and said yes. If the job changes mid-way, I stop and tell you before I keep going.",
  },
  {
    n: "02",
    pullQuote: "I show up when I say.",
    body: "Real time windows I actually keep. Not 'sometime between 8 and 5.' If I'm running late, you'll hear from me before the window closes.",
  },
  {
    n: "03",
    pullQuote: "If it's not right, I'm back.",
    body: "My labor is backed by my name. Something I fixed isn't holding up, I come back and make it right. Parts carry manufacturer warranty on top.",
  },
];

export function Testimonials() {
  return (
    <section
      id="promise"
      aria-labelledby="promise-heading"
      className="relative overflow-hidden py-20 sm:py-24"
    >
      <div className="container">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">My Word On It</p>
          <h2 id="promise-heading" className="section-title mt-3">
            Three Things
            <br />
            <span className="text-accent-hover">I Don&apos;t Break On.</span>
          </h2>
        </Reveal>

        <StaggerGroup
          className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8 lg:gap-12"
          stagger={0.12}
        >
          {promises.map(({ n, pullQuote, body }) => (
            <StaggerItem key={n}>
              <article className="relative pt-8">
                <span
                  aria-hidden
                  className="pointer-events-none absolute -top-2 left-0 select-none font-heading font-bold leading-none text-accent/15"
                  style={{ fontSize: "clamp(5rem, 9vw, 8rem)" }}
                >
                  {n}
                </span>

                <div className="relative">
                  <p className="font-heading text-[10px] font-bold uppercase tracking-[0.35em] text-accent-hover">
                    Promise {n}
                  </p>
                  <p className="mt-3 font-heading text-2xl font-bold uppercase leading-[1] tracking-tight text-ink sm:text-3xl lg:text-[32px]">
                    &ldquo;{pullQuote}&rdquo;
                  </p>
                  <p className="mt-4 text-ink/75">{body}</p>
                  <div
                    className="mt-5 h-[2px] w-14 bg-accent-hover"
                    aria-hidden
                  />
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal className="mt-14 text-center" delay={0.2}>
          <p className="flex items-center justify-center gap-3 font-heading text-sm uppercase tracking-[0.35em] text-muted">
            <span aria-hidden className="inline-block h-px w-8 bg-accent-hover" />
            <span className="text-accent-hover">Derek</span>
            <span aria-hidden className="inline-block h-px w-8 bg-accent-hover" />
          </p>
        </Reveal>
      </div>
    </section>
  );
}
