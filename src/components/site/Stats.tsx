"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HomeIcon, MapPin, PhoneCall, Wrench } from "lucide-react";

type Fact = {
  icon: typeof Wrench;
  headline: string;
  detail: string;
};

const facts: Fact[] = [
  {
    icon: HomeIcon,
    headline: "Family Owned",
    detail: "One mechanic. One standard. One name on every invoice.",
  },
  {
    icon: Wrench,
    headline: "Mobile Only",
    detail: "No tow truck, no shop drop-off. Derek comes to your driveway.",
  },
  {
    icon: PhoneCall,
    headline: "Always Answering",
    detail: "Breakdown calls get picked up. 24/7, year-round.",
  },
  {
    icon: MapPin,
    headline: "Wake & Johnston",
    detail: "Raleigh, Clayton, Garner, Smithfield, Knightdale, Wendell.",
  },
];

export function Stats() {
  const shouldReduce = useReducedMotion();

  return (
    <section
      aria-label="Real facts about Derek's Maintenance"
      className="relative border-b border-border bg-gradient-to-b from-bg via-surface/40 to-bg py-16 sm:py-20"
    >
      <div className="absolute inset-0 grid-lines opacity-30" aria-hidden />
      <div className="container relative">
        <motion.ul
          initial={shouldReduce ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {facts.map(({ icon: Icon, headline, detail }) => (
            <motion.li
              key={headline}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="group flex items-start gap-4"
            >
              <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-accent/15 ring-1 ring-accent/30 transition-colors group-hover:bg-accent/25">
                <Icon className="h-5 w-5 text-accent-hover" aria-hidden />
              </span>
              <div>
                <p className="font-heading text-lg font-bold uppercase tracking-wide text-ink">
                  {headline}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {detail}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
