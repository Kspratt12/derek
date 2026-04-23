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
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <div className="container">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">My Word On It</p>
          <h2
            id="promise-heading"
            className="section-title mt-3"
          >
            Three Things
            <br />
            <span className="text-accent-hover">I Don&apos;t Break On.</span>
          </h2>
        </Reveal>

        <StaggerGroup className="mt-20 space-y-24 sm:space-y-32" stagger={0.15}>
          {promises.map(({ n, pullQuote, body }, i) => {
            const isRight = i % 2 === 1;
            return (
              <StaggerItem key={n}>
                <article
                  className={`relative grid items-center gap-8 lg:grid-cols-12 ${
                    isRight ? "" : ""
                  }`}
                >
                  {/* Ghost number as oversized background type */}
                  <div
                    aria-hidden
                    className={`pointer-events-none absolute top-1/2 -translate-y-1/2 select-none font-heading font-bold leading-none text-accent/10 ${
                      isRight ? "right-0 lg:right-[-2%]" : "left-0 lg:left-[-2%]"
                    }`}
                    style={{ fontSize: "clamp(10rem, 22vw, 20rem)" }}
                  >
                    {n}
                  </div>

                  <div
                    className={`relative lg:col-span-7 ${
                      isRight
                        ? "lg:col-start-6 lg:text-right"
                        : "lg:col-start-1 lg:col-end-8"
                    }`}
                  >
                    <p className="font-heading text-xs font-bold uppercase tracking-[0.4em] text-accent-hover">
                      Promise {n}
                    </p>
                    <p
                      className="mt-4 font-heading font-bold uppercase leading-[0.95] tracking-tight text-ink"
                      style={{ fontSize: "clamp(2.25rem, 6.5vw, 5rem)" }}
                    >
                      &ldquo;{pullQuote}&rdquo;
                    </p>
                    <p
                      className={`mt-6 max-w-xl text-lg text-ink/75 sm:text-xl ${
                        isRight ? "lg:ml-auto" : ""
                      }`}
                    >
                      {body}
                    </p>
                    <div
                      className={`mt-6 inline-block h-[3px] w-20 bg-accent-hover ${
                        isRight ? "lg:ml-auto lg:block" : ""
                      }`}
                      aria-hidden
                    />
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        <Reveal className="mt-20 text-center" delay={0.2}>
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
