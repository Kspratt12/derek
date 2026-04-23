"use client";

import { motion, useReducedMotion } from "framer-motion";

type Fact = {
  icon: (props: { className?: string }) => JSX.Element;
  headline: string;
  detail: string;
};

// Custom stroked SVGs (different visual language from Lucide's line style)
// so this section does not share the 'every icon is Lucide' tell.
function HouseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <path
        d="M4 11L12 4L20 11V20H15V14H9V20H4V11Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M2 12L12 3L22 12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CrossedWrenchesIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <path
        d="M6 5 L10 9 M14 15 L19 20"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle
        cx="5"
        cy="5"
        r="2.2"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
      />
      <circle
        cx="19"
        cy="19"
        r="2.2"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
      />
      <path
        d="M18 5 L14 9 M10 15 L5 20"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle
        cx="19"
        cy="5"
        r="2.2"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
      />
      <circle
        cx="5"
        cy="19"
        r="2.2"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
      />
    </svg>
  );
}

function RetroPhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <path
        d="M5 9 Q5 5 9 5 L11 5 Q11 7 10.5 8.5 L8.5 9.5 Q10 13 14.5 15.5 L15.5 13.5 Q17 13 19 13 L19 15 Q19 19 15 19 Q9 19 5 15 Q5 13 5 9 Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M14 7 L17 7 M14 4 L17 4"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <path
        d="M12 22 Q6 15 6 10 Q6 5 12 5 Q18 5 18 10 Q18 15 12 22 Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="10"
        r="2.2"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
      />
    </svg>
  );
}

const facts: Fact[] = [
  {
    icon: HouseIcon,
    headline: "Family Owned",
    detail: "One mechanic. One standard. One name on every invoice.",
  },
  {
    icon: CrossedWrenchesIcon,
    headline: "Mobile Only",
    detail: "No tow truck, no shop drop-off. Derek comes to your driveway.",
  },
  {
    icon: RetroPhoneIcon,
    headline: "Always Answering",
    detail: "Breakdown calls get picked up. 24/7, year-round.",
  },
  {
    icon: MapPinIcon,
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
              className="group flex cursor-default items-start gap-4 transition-transform duration-300 hover:-translate-y-0.5"
            >
              <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-accent/15 ring-1 ring-accent/30 transition-all duration-300 group-hover:scale-110 group-hover:bg-accent/30 group-hover:ring-accent/60">
                <Icon className="h-5 w-5 text-accent-hover" />
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
