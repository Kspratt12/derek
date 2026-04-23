import Image from "next/image";
import { Car } from "lucide-react";

type VehicleBrand = {
  name: string;
  src: string;
};

// Drop logo files into /public/images/vehicles/ (transparent PNG or SVG preferred).
// Filename should match the src path below. When all 8 required are uploaded,
// this strip renders; otherwise the whole section is hidden.
// Grab clean logos from brandfetch.com.
const vehicleBrands: VehicleBrand[] = [
  { name: "Ford", src: "/images/vehicles/ford.png" },
  { name: "Chevrolet", src: "/images/vehicles/chevrolet.png" },
  { name: "Toyota", src: "/images/vehicles/toyota.png" },
  { name: "Honda", src: "/images/vehicles/honda.png" },
  { name: "Nissan", src: "/images/vehicles/nissan.png" },
  { name: "Jeep", src: "/images/vehicles/jeep.png" },
  { name: "Ram", src: "/images/vehicles/ram.png" },
  { name: "GMC", src: "/images/vehicles/gmc.png" },
  // Optional extras (component renders any that exist in the array).
  { name: "Subaru", src: "/images/vehicles/subaru.png" },
  { name: "Hyundai", src: "/images/vehicles/hyundai.png" },
  { name: "Porsche", src: "/images/vehicles/porsche.png" },
];

// Flip to true once logos are dropped in /public/images/vehicles/.
// Keeping this gated so broken images don't render on the live site.
const ENABLED = false;

export function VehicleBrands() {
  if (!ENABLED) return null;

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

        <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-8 sm:gap-x-10 lg:gap-x-12">
          {vehicleBrands.map(({ name, src }) => (
            <li
              key={name}
              className="flex h-10 w-[90px] items-center justify-center sm:h-12 sm:w-[110px]"
              aria-label={name}
            >
              <div className="relative h-full w-full opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0">
                <Image
                  src={src}
                  alt={`${name} logo`}
                  fill
                  sizes="110px"
                  className="object-contain"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
