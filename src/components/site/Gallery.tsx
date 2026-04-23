"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

type Job = {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
};

const jobs: Job[] = [
  {
    src: "/images/mustang.jpg",
    alt: "2012 Ford Mustang 5.0 with hood up under a carport",
    title: "2012 Mustang 5.0",
    subtitle: "Engine harness and lowering springs",
  },
  {
    src: "/images/cadillac.jpg",
    alt: "Chevy Tahoe with hood up in a driveway",
    title: "Chevy Tahoe",
    subtitle: "Door actuator, washer nozzles, brakes",
  },
  {
    src: "/images/catalytic-converter.jpg",
    alt: "Underneath view of a vehicle catalytic converter installation",
    title: "Nissan Rogue",
    subtitle: "Catalytic converter and ignition coil",
  },
  {
    src: "/images/mustang-transformer.jpg",
    alt: "Maroon Chevy Camaro with hood up in a service bay",
    title: "Camaro SS",
    subtitle: "Shop work, full diagnostic pass",
  },
  {
    src: "/images/porsche.jpg",
    alt: "Porsche Cayenne with hood up in a driveway",
    title: "Porsche Cayenne",
    subtitle: "Engine bay service, on-site",
  },
  {
    src: "/images/plugs.jpg",
    alt: "Old and new spark plugs held in a gloved hand",
    title: "Spark Plug Swap",
    subtitle: "Old vs new, tune-up complete",
  },
  {
    src: "/images/filter.jpg",
    alt: "Fresh air filter installation",
    title: "Filter Service",
    subtitle: "Air filter swap, routine maintenance",
  },
  {
    src: "/images/dump-truck.jpg",
    alt: "Derek's yellow service truck at dusk",
    title: "Fleet Service",
    subtitle: "Dump truck and fleet maintenance",
  },
  {
    src: "/images/nice-truck.jpg",
    alt: "Semi truck with bright green accent lighting",
    title: "Commercial Truck",
    subtitle: "On-site fleet work, after hours",
  },
];

export function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const shouldReduce = useReducedMotion();

  const close = useCallback(() => setOpenIndex(null), []);
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i + 1) % jobs.length)),
    [],
  );
  const prev = useCallback(
    () =>
      setOpenIndex((i) =>
        i === null ? null : (i - 1 + jobs.length) % jobs.length,
      ),
    [],
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [openIndex, close, next, prev]);

  const current = openIndex !== null ? jobs[openIndex] : null;

  return (
    <section
      id="work"
      aria-labelledby="gallery-heading"
      className="relative border-y border-border bg-surface/30 py-20 sm:py-28"
    >
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">Recent Jobs</p>
            <h2 id="gallery-heading" className="section-title mt-3">
              Work From My Truck.
            </h2>
          </div>
          <p className="max-w-md text-muted sm:text-right">
            Jobs from driveways, fleet yards, and a few days in the shop.
            Every photo here is mine. Click any one to zoom.
          </p>
        </div>

        <motion.div
          initial={shouldReduce ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.07 } },
          }}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {jobs.map((job, i) => (
            <motion.button
              key={job.src}
              type="button"
              onClick={() => setOpenIndex(i)}
              aria-label={`View ${job.title} full size`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="card-premium group overflow-hidden p-0 text-left"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={job.src}
                  alt={job.alt}
                  fill
                  loading={i < 3 ? "eager" : "lazy"}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={90}
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-accent/90 px-3 py-1 font-heading text-[10px] uppercase tracking-[0.2em] text-ink">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-bg/80 opacity-0 ring-1 ring-accent/40 transition-opacity duration-300 group-hover:opacity-100">
                  <ZoomIn className="h-4 w-4 text-accent-hover" aria-hidden />
                </span>
              </div>
              <div className="p-5">
                <div className="font-heading text-lg font-bold uppercase text-ink">
                  {job.title}
                </div>
                <div className="mt-1 text-sm text-muted">{job.subtitle}</div>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {current && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={current.title}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-bg/80 ring-1 ring-accent/40 transition hover:bg-bg"
            >
              <X className="h-5 w-5 text-ink" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous"
              className="absolute left-4 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-bg/80 ring-1 ring-accent/40 transition hover:bg-bg sm:left-8"
            >
              <ChevronLeft className="h-6 w-6 text-ink" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next"
              className="absolute right-4 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-bg/80 ring-1 ring-accent/40 transition hover:bg-bg sm:right-8"
            >
              <ChevronRight className="h-6 w-6 text-ink" />
            </button>

            <motion.figure
              key={current.src}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-full w-full max-w-5xl"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl ring-1 ring-accent/30">
                <Image
                  src={current.src}
                  alt={current.alt}
                  fill
                  sizes="100vw"
                  quality={95}
                  className="object-contain"
                  priority
                />
              </div>
              <figcaption className="mt-4 text-center">
                <div className="font-heading text-xl font-bold uppercase text-ink">
                  {current.title}
                </div>
                <div className="mt-1 text-sm text-muted">
                  {current.subtitle}
                </div>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
