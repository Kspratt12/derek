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
      className="relative border-y border-border bg-bg/90 py-10 sm:py-12"
    >
      <div className="container">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="pill-chrome inline-flex items-center gap-2 rounded-full px-4 py-1.5">
            <Car className="relative h-4 w-4 text-[#1A1A1A]" aria-hidden />
            <span
              className="relative font-heading text-[10px] font-semibold uppercase tracking-[0.3em] text-[#1A1A1A]"
              style={{ textShadow: "0 1px 0 rgba(255,255,255,0.25)" }}
            >
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
      <div aria-hidden className="relative mt-7 overflow-hidden">
        {/* Edge fades so logos feather in and out of view */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-bg to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-bg to-transparent sm:w-32" />

        <ul
          className="flex w-max animate-marquee-slow items-center motion-reduce:animate-none"
          style={{ willChange: "transform" }}
        >
          {loop.map(({ name, src, scale = 1 }, i) => (
            <li
              key={`${name}-${i}`}
              className="mr-14 flex h-12 w-[120px] flex-none items-center justify-center sm:mr-20 sm:h-14 sm:w-[140px]"
              aria-label={name}
            >
              <div
                className="relative h-full w-full"
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
