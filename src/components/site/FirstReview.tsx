import { ArrowRight, Facebook, Star } from "lucide-react";
import { Reveal } from "./Reveal";

// Swap GOOGLE_REVIEW_URL once Derek sets up his Google Business Profile.
// Format will be: https://g.page/r/YOUR_PLACE_ID/review
const GOOGLE_REVIEW_URL: string | null = null;
const FACEBOOK_URL =
  "https://www.facebook.com/people/Dereks-Maintenance-LLC/61561437975449/";

export function FirstReview() {
  return (
    <section
      id="reviews"
      aria-labelledby="first-review-heading"
      className="relative border-y border-border bg-surface/30 py-20 sm:py-24"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(45,80,22,0.15),transparent_50%)]"
      />

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <div
              className="mb-4 inline-flex items-center gap-1 text-accent-hover"
              aria-hidden
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>

            <p className="eyebrow">Early Days</p>
            <h2
              id="first-review-heading"
              className="section-title mt-3"
            >
              Be My
              <br />
              <span className="text-accent-hover">First Review.</span>
            </h2>

            <div className="mx-auto mt-8 max-w-2xl space-y-4 text-lg text-ink/85">
              <p>
                I don&apos;t have a stack of Google reviews yet. I&apos;m
                building this business from the phone call up, one honest
                job at a time.
              </p>
              <p className="text-ink/70">
                If I show up, do right by you, and your vehicle runs the
                way it should, I&apos;d appreciate your words. A family
                business lives or dies on its neighbors&apos; names.
              </p>
            </div>
          </Reveal>

          <Reveal className="mt-10" delay={0.15}>
            <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:gap-4">
              {GOOGLE_REVIEW_URL ? (
                <a
                  href={GOOGLE_REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shine inline-flex h-14 items-center justify-center gap-2 rounded-md bg-accent px-8 font-heading text-base font-semibold uppercase tracking-wide text-ink transition-all hover:bg-accent-hover hover:-translate-y-[1px] hover:shadow-[0_10px_30px_-8px_rgba(45,80,22,0.5)] sm:text-lg"
                >
                  <Star className="h-5 w-5 fill-current" />
                  Leave A Google Review
                  <ArrowRight className="h-5 w-5" />
                </a>
              ) : (
                <span className="inline-flex h-14 items-center justify-center gap-2 rounded-md border-2 border-dashed border-accent/40 bg-bg/40 px-8 font-heading text-base font-semibold uppercase tracking-wide text-muted sm:text-lg">
                  <Star className="h-5 w-5" />
                  Google Reviews Coming Soon
                </span>
              )}

              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine inline-flex h-14 items-center justify-center gap-2 rounded-md border-2 border-accent px-8 font-heading text-base font-semibold uppercase tracking-wide text-accent transition-all hover:bg-accent hover:text-ink hover:shadow-[0_0_0_3px_rgba(45,80,22,0.2)] sm:text-lg"
              >
                <Facebook className="h-5 w-5" />
                Follow On Facebook
              </a>
            </div>
          </Reveal>

          <Reveal className="mt-8" delay={0.3}>
            <p className="font-heading text-xs uppercase tracking-[0.3em] text-muted">
              Referrals are the highest compliment you can pay me.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
