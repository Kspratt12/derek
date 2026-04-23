import Image from "next/image";
import { ShieldCheck } from "lucide-react";

type Brand = {
  name: string;
  src: string;
};

const brands: Brand[] = [
  { name: "NAPA", src: "/images/napa.png" },
  { name: "AC Delco", src: "/images/acdelco.png" },
  { name: "Bosch", src: "/images/Bosch.png" },
  { name: "Motorcraft", src: "/images/Motorcraft_Logo.png" },
  { name: "Mobil", src: "/images/Mobil.png" },
  { name: "Pennzoil", src: "/images/Pennzoil.png" },
  { name: "Castrol", src: "/images/Castrol.png" },
  { name: "Gates", src: "/images/gates.png" },
  { name: "Moog", src: "/images/moog.png" },
  { name: "Monroe", src: "/images/monroe.png" },
  { name: "Akebono", src: "/images/Akebono.png" },
  { name: "Denso", src: "/images/denso.png" },
  { name: "Snap-On", src: "/images/snap-on.png" },
  { name: "Milwaukee", src: "/images/Milwaukee.png" },
];

export function TrustStrip() {
  // Double the array so translateX(-50%) loops seamlessly.
  const loop = [...brands, ...brands];

  return (
    <section
      aria-label="Parts brands Derek installs"
      className="relative border-y border-border bg-bg/80 py-14 sm:py-16"
    >
      <div className="container">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5">
            <ShieldCheck className="h-4 w-4 text-accent-hover" aria-hidden />
            <span className="font-heading text-[10px] font-semibold uppercase tracking-[0.3em] text-accent-hover">
              Quality Parts
            </span>
          </span>
          <h2 className="font-heading text-xl font-bold uppercase tracking-wide text-ink/90 sm:text-2xl">
            Brands Derek Installs
          </h2>
          <p className="max-w-xl text-sm text-muted">
            The parts and tools professional shops use, installed at your
            driveway.
          </p>
        </div>
      </div>

      {/* Scrolling marquee, matching the vehicle-brands treatment.
          Paused on hover so users can inspect any single logo. */}
      <div
        aria-hidden
        className="group/marquee relative mt-10 overflow-hidden"
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-bg to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-bg to-transparent sm:w-32" />

        <ul
          className="flex w-max animate-marquee-slow items-center group-hover/marquee:[animation-play-state:paused] motion-reduce:animate-none"
          style={{ willChange: "transform" }}
        >
          {loop.map(({ name, src }, i) => (
            <li
              key={`${name}-${i}`}
              className="mr-14 flex h-12 w-[120px] flex-none items-center justify-center sm:mr-20 sm:h-14 sm:w-[140px]"
              aria-label={name}
            >
              <div className="relative h-full w-full opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0">
                <Image
                  src={src}
                  alt={`${name} logo`}
                  fill
                  sizes="140px"
                  className="object-contain"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <ul className="sr-only">
        {brands.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </section>
  );
}
