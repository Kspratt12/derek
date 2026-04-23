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
  { name: "Moog", src: "/images/moog.png" },
  { name: "Denso", src: "/images/denso.png" },
  { name: "Snap-On", src: "/images/snap-on.png" },
];

export function TrustStrip() {
  return (
    <section
      aria-label="Parts brands Derek installs"
      className="relative border-y border-border bg-bg/80 py-14 sm:py-16"
    >
      <div className="container">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5">
            <ShieldCheck
              className="h-4 w-4 text-accent-hover"
              aria-hidden
            />
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

        <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-8 sm:gap-x-10 lg:gap-x-14">
          {brands.map(({ name, src }) => (
            <li
              key={name}
              className="flex h-10 w-[110px] items-center justify-center sm:h-12 sm:w-[130px] lg:w-[120px]"
              aria-label={name}
            >
              <div className="relative h-full w-full opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0">
                <Image
                  src={src}
                  alt={`${name} logo`}
                  fill
                  sizes="130px"
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
