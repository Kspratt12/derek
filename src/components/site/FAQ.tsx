"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "Is mobile more expensive than a shop?",
    a: "Usually it's the same or less. I don't have a shop to pay rent on, so my labor rate reflects that. You also save the tow, the ride home, and a wasted day.",
  },
  {
    q: "What if you can't fix it in my driveway?",
    a: "If a job really needs a lift or specialty equipment, I tell you before I start and help line up the right shop. No guessing and no charge for the trip.",
  },
  {
    q: "How do I pay you?",
    a: "Cash, card, Zelle, or Cash App. You pay when the job is done and the vehicle runs right. Not before.",
  },
  {
    q: "Do you cover my area?",
    a: "I run Raleigh, Clayton, Garner, Smithfield, Knightdale, and Wendell regularly. Outside that, call me and I'll tell you straight whether I can make it.",
  },
  {
    q: "Are you actually available 24/7?",
    a: "For emergencies, yes. Breakdowns, fleet-down mornings, and no-starts get the phone answered day or night. Routine stuff is booked during normal hours.",
  },
  {
    q: "Do you work on fleets?",
    a: "Yes. Dump trucks, box trucks, service vans, landscaping rigs. I come to your lot on your schedule so your trucks keep earning.",
  },
  {
    q: "Do you warranty your work?",
    a: "Yes. Parts carry whatever the manufacturer offers. My labor is backed by my name. Something I fixed isn't holding up, I come back and make it right.",
  },
  {
    q: "How fast can you get to me?",
    a: "Same-day response is the norm. Emergencies jump the line. For routine jobs I usually schedule within a day or two depending on parts.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const shouldReduce = useReducedMotion();

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative isolate overflow-hidden border-t border-border bg-surface/20 py-16 sm:py-20"
    >
      {/* Oversized faded question-mark watermark on the left column,
          gives the header some visual anchor without adding motion. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-4 top-4 select-none font-heading font-bold leading-none text-accent/[0.06] sm:-left-2 sm:top-6 lg:left-0"
        style={{ fontSize: "clamp(12rem, 20vw, 22rem)" }}
      >
        ?
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <p className="eyebrow">Straight Answers</p>
            <h2 id="faq-heading" className="section-title mt-3">
              What People
              <br />
              Usually <em className="font-serif italic text-ink/95">Ask Me</em>
            </h2>
            <p className="mt-4 text-lg text-muted">
              If your question isn&apos;t here, just call. I&apos;ll shoot
              straight either way.
            </p>
          </Reveal>

          <Reveal className="lg:col-span-3" delay={0.15}>
            <ul className="divide-y divide-border rounded-xl border border-border bg-bg/60">
              {faqs.map(({ q, a }, i) => {
                const isOpen = open === i;
                return (
                  <li key={q}>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-surface/40"
                    >
                      <span className="font-heading text-lg font-bold uppercase tracking-wide text-ink">
                        {q}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 flex-none text-accent-hover transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        aria-hidden
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={
                            shouldReduce ? false : { height: 0, opacity: 0 }
                          }
                          animate={{ height: "auto", opacity: 1 }}
                          exit={
                            shouldReduce ? undefined : { height: 0, opacity: 0 }
                          }
                          transition={{ duration: 0.28, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-5 text-ink/80">{a}</div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
