"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { Phone, ArrowRight, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

type HeroSlide = {
  src: string;
  alt: string;
  objectPosition: string;
};

const slides: HeroSlide[] = [
  {
    src: "/images/main-hero.png",
    alt: "",
    objectPosition: "center 40%",
  },
  {
    src: "/images/hero-2.png",
    alt: "",
    objectPosition: "center 35%",
  },
  {
    src: "/images/hero-1.png",
    alt: "",
    objectPosition: "center 35%",
  },
];

const SLIDE_DURATION_MS = 7000;

export function Hero() {
  const shouldReduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (shouldReduce) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION_MS);
    return () => clearInterval(timer);
  }, [shouldReduce]);

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
        {/* Cinematic crossfade slideshow with slow Ken Burns zoom. */}
        <AnimatePresence initial={false}>
          <motion.div
            key={slides[index].src}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.6, ease: "easeInOut" },
              scale: {
                duration: SLIDE_DURATION_MS / 1000 + 2,
                ease: "linear",
              },
            }}
          >
            <Image
              src={slides[index].src}
              alt={slides[index].alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover opacity-[0.85]"
              style={{ objectPosition: slides[index].objectPosition }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Left-column darken for text readability; right side shows photo. */}
        <div className="absolute inset-0 bg-gradient-to-r from-bg/90 via-bg/50 to-transparent" />
        {/* Bottom fade into the next section. */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg/70" />
        {/* Green accent wash top-right. */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_30%,rgba(45,80,22,0.22),transparent_55%)]" />
        <div className="absolute inset-0 grid-lines opacity-20" />
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
            className="mt-6 max-w-2xl text-lg text-ink/85 sm:text-xl"
          >
            On-site auto repair and fleet maintenance in Raleigh, Clayton,
            Garner, Smithfield, Knightdale, and Wendell. No tow truck. No
            waiting room. Just quality work at your driveway.
          </motion.p>

          <motion.div
            {...fadeUp(0.4)}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4"
          >
            {/* Call button hidden on mobile because the sticky MobileCallBar
                already provides a persistent CALL DEREK CTA. */}
            <Button
              asChild
              size="lg"
              className="hidden w-full sm:inline-flex sm:w-auto"
            >
              <a href="tel:+19197984452" className="gap-2">
                <Phone className="h-5 w-5" />
                Call (919) 798-4452
              </a>
            </Button>
            <Button asChild size="lg" className="w-full sm:hidden">
              <a href="#contact" className="gap-2">
                Request Service
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="hidden w-full sm:inline-flex sm:w-auto"
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

          {/* Slide indicators: dots at the bottom of the hero */}
          <motion.div
            {...fadeUp(0.7)}
            className="mt-10 flex items-center gap-2"
            aria-hidden
          >
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show hero slide ${i + 1}`}
                className={`h-1 rounded-full transition-all duration-500 ${
                  index === i
                    ? "w-10 bg-accent-hover"
                    : "w-4 bg-ink/25 hover:bg-ink/50"
                }`}
              />
            ))}
          </motion.div>
        </div>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent to-transparent" />
    </section>
  );
}
