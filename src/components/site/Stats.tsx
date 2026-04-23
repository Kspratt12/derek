"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Award, Clock, MapPin, Wrench } from "lucide-react";

type Stat = {
  icon: typeof Wrench;
  value: number;
  suffix: string;
  label: string;
};

const stats: Stat[] = [
  { icon: Wrench, value: 500, suffix: "+", label: "Jobs Completed" },
  { icon: Award, value: 5, suffix: ".0★", label: "Customer Rated" },
  { icon: Clock, value: 24, suffix: "/7", label: "Availability" },
  { icon: MapPin, value: 6, suffix: "", label: "Cities Served" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const shouldReduce = useReducedMotion();
  const [value, setValue] = useState(shouldReduce ? to : 0);

  useEffect(() => {
    if (!inView || shouldReduce) return;
    const duration = 1400;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(elapsed / duration, 1);
      // Ease out cubic.
      const eased = 1 - Math.pow(1 - t, 3);
      const next = to < 10 ? +(to * eased).toFixed(1) : Math.round(to * eased);
      setValue(next);
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, to, shouldReduce]);

  const display = to < 10 ? value.toFixed(1) : Math.round(value).toString();

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function Stats() {
  const shouldReduce = useReducedMotion();

  return (
    <section
      aria-label="Derek's Maintenance by the numbers"
      className="relative border-b border-border bg-gradient-to-b from-bg via-surface/40 to-bg py-16"
    >
      <div className="absolute inset-0 grid-lines opacity-30" aria-hidden />
      <div className="container relative">
        <motion.ul
          initial={shouldReduce ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid grid-cols-2 gap-6 md:grid-cols-4"
        >
          {stats.map(({ icon: Icon, value, suffix, label }) => (
            <motion.li
              key={label}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="flex flex-col items-center text-center"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/15 ring-1 ring-accent/30">
                <Icon className="h-6 w-6 text-accent-hover" aria-hidden />
              </span>
              <span className="mt-4 font-heading text-5xl font-bold text-ink sm:text-6xl">
                <Counter to={value} suffix={suffix} />
              </span>
              <span className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-muted">
                {label}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
