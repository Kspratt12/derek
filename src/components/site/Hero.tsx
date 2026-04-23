"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Phone, ArrowRight, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const shouldReduce = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: shouldReduce ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        {/* Layered dark background with green accent wash and subtle grid. */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg via-surface/40 to-bg" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(45,80,22,0.25),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_10%_80%,rgba(45,80,22,0.15),transparent_55%)]" />
        <div className="absolute inset-0 grid-lines opacity-40" />

        {/* Oversized watermark-style accent: huge faded EST. mark in corner. */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-8 bottom-8 select-none font-heading font-bold uppercase leading-none text-accent/[0.06] sm:-right-4 sm:bottom-12"
          style={{ fontSize: "clamp(12rem, 28vw, 30rem)" }}
        >
          NC
        </div>

        {!shouldReduce && (
          <motion.div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(45,80,22,0.12),transparent_60%)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4 }}
          />
        )}
      </div>

      <div className="container relative flex min-h-[90vh] flex-col justify-center py-20 sm:min-h-[88vh] sm:py-24 lg:py-28">
        <div className="max-w-4xl">
          <motion.div
            {...fadeUp(0)}
            className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2 sm:gap-x-5"
          >
            <span className="eyebrow flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
              Raleigh, NC
            </span>
            <span className="h-3 w-px bg-border/80" aria-hidden />
            <span className="eyebrow flex items-center gap-2 text-ink/60">
              Available 24/7
            </span>
            <span className="h-3 w-px bg-border/80" aria-hidden />
            <span className="eyebrow flex items-center gap-2 text-ink/60">
              Family Owned
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            id="hero-heading"
            className="font-heading text-5xl font-bold uppercase leading-[0.95] tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-[84px]"
          >
            Raleigh&apos;s
            <br />
            Mobile Mechanic
            <br />
            <span className="text-accent-hover">Comes To You.</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.25)}
            className="mt-6 max-w-2xl text-lg text-ink/80 sm:text-xl"
          >
            On-site auto repair and fleet maintenance in Raleigh, Clayton,
            Garner, Smithfield, Knightdale, and Wendell. No tow truck. No
            waiting room. Just quality work at your driveway.
          </motion.p>

          <motion.div
            {...fadeUp(0.4)}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4"
          >
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href="tel:+19197984452" className="gap-2">
                <Phone className="h-5 w-5" />
                Call (919) 798-4452
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              <a href="#contact" className="gap-2">
                Request Service Online
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            {...fadeUp(0.55)}
            className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted"
          >
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 text-accent-hover" aria-hidden />
              Available 24/7
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-accent-hover" aria-hidden />
              Raleigh NC and surrounding areas
            </span>
          </motion.div>
        </div>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent to-transparent" />
    </section>
  );
}
