import { ArrowRight, Facebook, Star } from "lucide-react";
import { GoogleIcon } from "./GoogleIcon";
import { Reveal } from "./Reveal";

// Swap GOOGLE_REVIEW_URL once Derek sets up his Google Business Profile.
// Format: https://g.page/r/YOUR_PLACE_ID/review
const GOOGLE_REVIEW_URL: string | null = null;
const FACEBOOK_URL =
  "https://www.facebook.com/people/Dereks-Maintenance-LLC/61561437975449/";

function MockReviewCard() {
  return (
    <figure
      className="relative mx-auto w-full max-w-md"
      aria-label="Example of what a Google review will look like"
    >
      {/* Stacked back-card for depth */}
      <div
        aria-hidden
        className="absolute -right-3 -top-3 h-full w-full rotate-[3deg] rounded-2xl border border-border bg-surface/40"
      />

      <div className="relative rounded-2xl border-2 border-dashed border-accent/40 bg-bg p-6 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)] sm:p-7">
        {/* Google header row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GoogleIcon className="h-5 w-5" />
            <span className="font-heading text-xs font-semibold uppercase tracking-[0.25em] text-muted">
              Google Review
            </span>
          </div>
          <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 font-heading text-[9px] font-bold uppercase tracking-[0.2em] text-accent-hover">
            Yours
          </span>
        </div>

        {/* Avatar + name row */}
        <div className="mt-5 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/20 ring-1 ring-accent/40">
            <span className="font-heading text-base font-bold text-accent-hover">
              ?
            </span>
          </div>
          <div>
            <div className="font-heading text-sm font-bold uppercase tracking-wide text-ink/50">
              Your name
            </div>
            <div className="text-xs text-muted">Raleigh, NC</div>
          </div>
        </div>

        {/* Star rating */}
        <div className="mt-4 flex items-center gap-0.5 text-accent-hover">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-current" aria-hidden />
          ))}
          <span className="ml-2 font-heading text-xs uppercase tracking-wider text-muted">
            5 stars
          </span>
        </div>

        {/* Quote body placeholder */}
        <blockquote className="mt-4 text-ink/60">
          &ldquo;Your story about how Derek showed up, shot straight on the
          price, and got your vehicle running right will go here.&rdquo;
        </blockquote>

        {/* Footer */}
        <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs text-muted">
          <span>Posted from your phone</span>
          <span className="font-heading uppercase tracking-wider">
            Pending
          </span>
        </div>
      </div>
    </figure>
  );
}

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
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: Derek's ask */}
          <Reveal className="lg:col-span-7">
            <div
              className="mb-4 inline-flex items-center gap-1 text-accent-hover"
              aria-hidden
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>

            <p className="eyebrow">Early Days</p>
            <h2 id="first-review-heading" className="section-title mt-3">
              Be My
              <br />
              <span className="text-accent-hover">First Review.</span>
            </h2>

            <div className="mt-6 max-w-xl space-y-4 text-lg text-ink/85">
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

            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:gap-4">
              {GOOGLE_REVIEW_URL ? (
                <a
                  href={GOOGLE_REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shine inline-flex h-14 items-center justify-center gap-2 rounded-md bg-white px-7 font-heading text-base font-semibold uppercase tracking-wide text-gray-900 transition-all hover:-translate-y-[1px] hover:shadow-[0_10px_30px_-8px_rgba(0,0,0,0.5)]"
                >
                  <GoogleIcon className="h-5 w-5" />
                  Leave A Google Review
                  <ArrowRight className="h-5 w-5" />
                </a>
              ) : (
                <span className="inline-flex h-14 items-center justify-center gap-2 rounded-md border-2 border-dashed border-accent/40 bg-bg/40 px-7 font-heading text-base font-semibold uppercase tracking-wide text-muted">
                  <GoogleIcon className="h-5 w-5 opacity-60" />
                  Google Reviews Coming Soon
                </span>
              )}

              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine inline-flex h-14 items-center justify-center gap-2 rounded-md border-2 border-accent px-7 font-heading text-base font-semibold uppercase tracking-wide text-accent transition-all hover:bg-accent hover:text-ink hover:shadow-[0_0_0_3px_rgba(45,80,22,0.2)]"
              >
                <Facebook className="h-5 w-5" />
                Follow On Facebook
              </a>
            </div>

            <p className="mt-6 font-heading text-xs uppercase tracking-[0.3em] text-muted">
              Referrals are the highest compliment you can pay me.
            </p>
          </Reveal>

          {/* Right: mock review card */}
          <Reveal className="lg:col-span-5" direction="right" delay={0.15}>
            <MockReviewCard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
