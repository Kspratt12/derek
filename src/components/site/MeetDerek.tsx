import Image from "next/image";
import { Phone, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

export function MeetDerek() {
  return (
    <section
      id="meet-derek"
      aria-labelledby="meet-derek-heading"
      className="relative overflow-hidden border-y border-border py-20 sm:py-28"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-bg via-surface/50 to-bg"
      />
      <div
        aria-hidden
        className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="container relative">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:mx-0">
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-accent/40 via-accent/10 to-transparent blur-xl" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-accent/30 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]">
                <Image
                  src="/images/custom-hat.jpg"
                  alt="Derek's Maintenance branded hat on the dashboard of a customer's vehicle"
                  fill
                  sizes="(max-width: 1024px) 80vw, 40vw"
                  className="object-cover"
                  quality={95}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg via-bg/60 to-transparent p-6 pt-16">
                  <p className="font-heading text-xs uppercase tracking-[0.3em] text-accent-hover">
                    Every Customer
                  </p>
                  <p className="mt-2 font-heading text-lg font-bold uppercase text-ink">
                    Gets The Same Derek
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 rotate-6 rounded-xl border-2 border-accent bg-bg px-5 py-4 shadow-xl">
                <p className="font-heading text-[10px] uppercase tracking-[0.3em] text-accent-hover">
                  Since
                </p>
                <p className="font-heading text-3xl font-bold text-ink">
                  Day One
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.15}>
            <p className="eyebrow">Meet The Mechanic</p>
            <h2
              id="meet-derek-heading"
              className="section-title mt-3"
            >
              You Call Derek.
              <br />
              <span className="text-accent-hover">Derek Answers.</span>
            </h2>

            <div className="mt-8 space-y-5 text-lg text-ink/85">
              <div className="relative border-l-2 border-accent pl-6">
                <Quote
                  className="absolute -left-3 -top-2 h-6 w-6 text-accent-hover"
                  aria-hidden
                />
                <p>
                  I run this thing myself. When you call, you get me. Not a
                  receptionist, not a service writer, not somebody who&apos;s
                  never seen your car before.
                </p>
              </div>

              <p>
                I quote the job before I turn a wrench. I show up when I say I
                will. And if something isn&apos;t right after I leave, I come
                back and fix it.
              </p>

              <p className="text-ink/70">
                That&apos;s how I run my business because it&apos;s the only
                way I&apos;d want somebody to run a business for me.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <span
                aria-hidden
                className="inline-block h-px w-10 bg-accent-hover"
              />
              <span className="font-heading text-sm font-bold uppercase tracking-[0.3em] text-accent-hover">
                Derek
              </span>
              <span className="text-xs text-muted">Owner &amp; Mechanic</span>
            </div>

            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Button asChild size="lg">
                <a href="tel:+19197984452" className="gap-2">
                  <Phone className="h-5 w-5" />
                  Talk To Derek
                </a>
              </Button>
              <p className="font-heading text-sm uppercase tracking-[0.25em] text-muted">
                Raleigh, NC · Family Owned
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
