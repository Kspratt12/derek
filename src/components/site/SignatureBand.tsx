"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export function SignatureBand() {
  const shouldReduce = useReducedMotion();

  return (
    <section
      aria-label="Derek's Maintenance signature statement"
      className="relative isolate overflow-hidden border-y border-accent/30 bg-bg py-24 sm:py-32"
    >
      {/* Photo layer, angled and bleeding in from right */}
      <div
        aria-hidden
        className="absolute inset-y-0 right-[-10%] w-[70%] opacity-30 sm:opacity-40 lg:right-[-5%] lg:w-[55%]"
      >
        <div className="relative h-full w-full">
          <Image
            src="/images/custom-hat.jpg"
            alt=""
            fill
            sizes="70vw"
            className="object-cover"
            style={{ objectPosition: "center 30%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/50 via-transparent to-bg/50" />
        </div>
      </div>

      {/* Diagonal stripe overlay */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent 0, transparent 12px, rgba(245, 241, 232, 1) 12px, rgba(245, 241, 232, 1) 13px)",
        }}
      />

      {/* Grid lines behind */}
      <div className="absolute inset-0 grid-lines opacity-40" aria-hidden />

      <div className="container relative">
        <div className="max-w-4xl">
          <motion.p
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-sm font-bold uppercase tracking-[0.4em] text-accent-hover"
          >
            Est. Raleigh, NC · Family Owned
          </motion.p>

          <motion.h2
            initial={shouldReduce ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-heading font-bold uppercase leading-[0.88] tracking-tight text-ink"
            style={{ fontSize: "clamp(3rem, 10vw, 9rem)" }}
          >
            If It Drives,
            <br />
            <span className="relative inline-block">
              <span className="text-accent-hover">Derek Fixes It.</span>
              <svg
                aria-hidden
                viewBox="0 0 600 20"
                preserveAspectRatio="none"
                className="absolute -bottom-2 left-0 h-3 w-full text-accent"
              >
                <path
                  d="M 5 15 Q 150 2, 300 12 T 595 8"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h2>

          <motion.div
            initial={shouldReduce ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 font-heading text-xs uppercase tracking-[0.3em] text-ink/60 sm:text-sm"
          >
            <span>One Mechanic</span>
            <span className="text-accent-hover">·</span>
            <span>One Standard</span>
            <span className="text-accent-hover">·</span>
            <span>One Call</span>
          </motion.div>
        </div>
      </div>

      {/* Rotated corner stamp */}
      <motion.div
        aria-hidden
        initial={shouldReduce ? false : { opacity: 0, rotate: -12, scale: 0.8 }}
        whileInView={{ opacity: 1, rotate: -12, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 80 }}
        className="pointer-events-none absolute right-6 top-6 hidden sm:block lg:right-10 lg:top-10"
      >
        <div className="relative flex h-28 w-28 items-center justify-center rounded-full border-[3px] border-accent/70 bg-bg/80 backdrop-blur lg:h-32 lg:w-32">
          <div className="absolute inset-1 rounded-full border border-accent/40" />
          <div className="text-center">
            <div className="font-heading text-[8px] font-bold uppercase tracking-[0.3em] text-accent-hover">
              Available
            </div>
            <div className="font-heading text-3xl font-bold leading-none text-ink lg:text-4xl">
              24/7
            </div>
            <div className="font-heading text-[8px] font-bold uppercase tracking-[0.3em] text-accent-hover">
              Emergency
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
