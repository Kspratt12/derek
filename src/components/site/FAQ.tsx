"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "Is a mobile mechanic more expensive than a shop?",
    a: "No. Derek's overhead is lower than a brick-and-mortar shop, so labor is usually equal or less. You also save the tow, the rideshare home, and a day off work sitting in a waiting room.",
  },
  {
    q: "What if you can't fix it at my driveway?",
    a: "If the job needs a lift or specialty equipment, Derek tells you before any work starts and helps coordinate the right shop. No guessing, no surprise charges.",
  },
  {
    q: "What forms of payment do you take?",
    a: "Cash, card, Zelle, and Cash App. You pay when the job is finished and your vehicle runs right, not before.",
  },
  {
    q: "Do you service the whole Raleigh area?",
    a: "Yes. Derek covers Raleigh, Clayton, Garner, Smithfield, Knightdale, and Wendell. Outside that radius, call and he'll tell you straight whether he can make it.",
  },
  {
    q: "Are you really available 24/7?",
    a: "For emergencies, yes. Breakdowns, fleet-down situations, and no-start mornings get the phone answered day or night. Routine maintenance is scheduled during standard hours.",
  },
  {
    q: "Do you do fleet work for small businesses?",
    a: "Yes. Dump trucks, commercial vehicles, pressure washing, and routine fleet maintenance. Derek comes to your lot on your schedule so your trucks keep moving.",
  },
  {
    q: "Do you warranty your work?",
    a: "Yes. Parts carry the manufacturer warranty. Derek's labor is backed by his name. If something he fixed isn't right, he comes back and makes it right.",
  },
  {
    q: "How fast can you get to me?",
    a: "Same-day response is the norm. Emergencies get priority. For routine jobs, Derek typically schedules within 1-3 days depending on parts availability.",
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
      className="relative border-t border-border bg-surface/20 py-20 sm:py-28"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <p className="eyebrow">Questions</p>
            <h2 id="faq-heading" className="section-title mt-3">
              Before You Call
            </h2>
            <p className="mt-4 text-lg text-muted">
              The questions people ask Derek most. If yours isn&apos;t here,
              just call. He&apos;ll shoot straight.
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
