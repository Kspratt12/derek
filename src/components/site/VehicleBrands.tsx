import Image from "next/image";
import { Car } from "lucide-react";

type VehicleBrand = {
  name: string;
  src: string;
  scale?: number;
};

const vehicleBrands: VehicleBrand[] = [
  { name: "Ford", src: "/images/vehicles/ford.png" },
  { name: "Chevrolet", src: "/images/vehicles/chevrolet.png" },
  { name: "Toyota", src: "/images/vehicles/toyota.png" },
  { name: "Honda", src: "/images/vehicles/honda.png", scale: 1.15 },
  { name: "Nissan", src: "/images/vehicles/nissan.png" },
  { name: "Jeep", src: "/images/vehicles/jeep.png" },
  { name: "Ram", src: "/images/vehicles/ram.png" },
  { name: "GMC", src: "/images/vehicles/gmc.png" },
  { name: "Subaru", src: "/images/vehicles/subaru.png" },
  { name: "Hyundai", src: "/images/vehicles/hyundai.png" },
  { name: "Porsche", src: "/images/vehicles/porsche.png" },
];

const ENABLED = true;

export function VehicleBrands() {
  if (!ENABLED) return null;

  // Double the array so the loop seam is invisible at -50% translate.
  const loop = [...vehicleBrands, ...vehicleBrands];

  return (
    <section
      aria-label="Vehicle brands Derek services"
      className="relative border-y border-border bg-bg/90 py-14 sm:py-16"
    >
      <div className="container">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5">
            <Car className="h-4 w-4 text-accent-hover" aria-hidden />
            <span className="font-heading text-[10px] font-semibold uppercase tracking-[0.3em] text-accent-hover">
              Every Make
            </span>
          </span>
          <h2 className="font-heading text-xl font-bold uppercase tracking-wide text-ink/90 sm:text-2xl">
            Brands Derek Works On
          </h2>
          <p className="max-w-xl text-sm text-muted">
            From daily drivers to weekend toys. Domestic and foreign, new
            and old.
          </p>
        </div>
      </div>

      {/* Marquee band: full-bleed, pauses on hover */}
      <div
        aria-hidden
        className="group/marquee relative mt-10 overflow-hidden"
      >
        {/* Edge fades so logos feather in and out of view */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-bg to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-bg to-transparent sm:w-32" />

        <ul
          className="flex w-max animate-marquee-slow items-center group-hover/marquee:[animation-play-state:paused] motion-reduce:animate-none"
          style={{ willChange: "transform" }}
        >
          {loop.map(({ name, src, scale = 1 }, i) => (
            <li
              key={`${name}-${i}`}
              className="flex h-12 w-[120px] flex-none items-center justify-center pr-14 sm:h-14 sm:w-[140px] sm:pr-20"
              aria-label={name}
            >
              <div
                className="relative h-full w-full opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                style={{ transform: `scale(${scale})` }}
              >
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

      {/* Screen-reader-accessible list (marquee itself is aria-hidden for AT users) */}
      <ul className="sr-only">
        {vehicleBrands.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </section>
  );
}
