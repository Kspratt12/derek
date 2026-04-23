import Image from "next/image";

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
    title: "Cadillac",
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
    src: "/images/rotor-1-before.jpg",
    alt: "Worn brake rotor on a vehicle hub before service",
    title: "Brake Service",
    subtitle: "Rotor and pad replacement",
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
              Real Work, Real Vehicles
            </h2>
          </div>
          <p className="max-w-md text-muted sm:text-right">
            A sample of jobs completed on driveways, at fleet yards, and in
            the shop. No stock photos.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job, i) => (
            <figure
              key={job.src}
              className="group relative overflow-hidden rounded-xl border border-border bg-bg ring-1 ring-accent/10 transition-all hover:ring-accent/40"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={job.src}
                  alt={job.alt}
                  fill
                  loading={i < 3 ? "eager" : "lazy"}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={90}
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-accent/90 px-3 py-1 font-heading text-[10px] uppercase tracking-[0.2em] text-ink">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <figcaption className="p-5">
                <div className="font-heading text-lg font-bold uppercase text-ink">
                  {job.title}
                </div>
                <div className="mt-1 text-sm text-muted">{job.subtitle}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
