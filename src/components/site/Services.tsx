import Image from "next/image";
import { Check, Truck, Wrench } from "lucide-react";
import { Reveal } from "./Reveal";

const mobileRepair = [
  "Brakes and rotors",
  "Engine diagnostics",
  "Catalytic converters",
  "Ignition coils",
  "Actuators and electrical",
  "Oil changes and maintenance",
  "Spark plugs",
  "Belts and hoses",
];

const fleet = [
  "Dump truck service",
  "Commercial vehicle maintenance",
  "Fleet pressure washing",
  "On-site repairs at your lot",
];

function Bullet({ label }: { label: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent/20 ring-1 ring-accent/40">
        <Check className="h-3 w-3 text-accent-hover" aria-hidden />
      </span>
      <span className="text-base text-ink/90">{label}</span>
    </li>
  );
}

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative overflow-hidden py-20 sm:py-28"
    >
      <div className="container">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">What Derek Handles</p>
          <h2 id="services-heading" className="section-title mt-3">
            From Driveway Oil Changes
            <br />
            <span className="text-accent-hover">To Fleet-Down Mornings</span>
          </h2>
          <p className="mt-4 text-lg text-muted">
            Derek brings the shop to you. One mechanic, one truck, the tools
            and parts for most jobs on-site.
          </p>
        </Reveal>

        {/* ROW 1: Mobile Auto Repair. Photo on left, text on right. */}
        <Reveal className="mt-16">
          <div className="grid items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="relative lg:col-span-6">
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-accent/30 to-transparent blur-xl" />
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-accent/20 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)]">
                <Image
                  src="/images/parts.jpg"
                  alt="Two suspension components side by side showing the worn original and the fresh replacement"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  quality={92}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              <div className="absolute -right-4 bottom-6 z-10 rotate-[-4deg] rounded-xl border-2 border-accent bg-bg px-5 py-3 shadow-xl sm:right-6">
                <p className="font-heading text-[10px] uppercase tracking-[0.3em] text-accent-hover">
                  Old vs New
                </p>
                <p className="font-heading text-sm font-bold uppercase text-ink">
                  Replacement Work
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center lg:col-span-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/15 ring-1 ring-accent/30">
                  <Wrench className="h-6 w-6 text-accent-hover" aria-hidden />
                </span>
                <p className="eyebrow">Primary Service</p>
              </div>
              <h3 className="mt-5 font-heading text-3xl font-bold uppercase text-ink sm:text-4xl lg:text-5xl">
                Mobile Auto Repair
              </h3>
              <p className="mt-4 text-lg text-ink/80">
                Cars, trucks, SUVs. Diagnostics through final torque, right
                where your vehicle sits. Parts and tools in the truck, job
                done where you parked.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {mobileRepair.map((item) => (
                  <Bullet key={item} label={item} />
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        {/* ROW 2: Fleet. Text on left, photo on right. Alternating rhythm. */}
        <Reveal className="mt-20" delay={0.1}>
          <div className="grid items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="order-2 flex flex-col justify-center lg:order-1 lg:col-span-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/15 ring-1 ring-accent/30">
                  <Truck className="h-6 w-6 text-accent-hover" aria-hidden />
                </span>
                <p className="eyebrow">For Businesses</p>
              </div>
              <h3 className="mt-5 font-heading text-3xl font-bold uppercase text-ink sm:text-4xl lg:text-5xl">
                Fleet Maintenance
                <span className="block text-accent-hover">& Washing</span>
              </h3>
              <p className="mt-4 text-lg text-ink/80">
                Your trucks earn when they&apos;re on the road. Derek works
                around your schedule (after hours, weekends, at your lot) so
                downtime doesn&apos;t cost billable days.
              </p>
              <ul className="mt-6 grid gap-3">
                {fleet.map((item) => (
                  <Bullet key={item} label={item} />
                ))}
              </ul>
            </div>

            <div className="relative order-1 lg:order-2 lg:col-span-6">
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-bl from-accent/30 to-transparent blur-xl" />
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-accent/20 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)]">
                <Image
                  src="/images/pics-2.jpg"
                  alt="Heavy-duty clutch components in their shipping boxes ready for installation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  quality={92}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              <div className="absolute -left-4 bottom-6 z-10 rotate-[3deg] rounded-xl border-2 border-accent bg-bg px-5 py-3 shadow-xl sm:left-6">
                <p className="font-heading text-[10px] uppercase tracking-[0.3em] text-accent-hover">
                  Heavy Duty
                </p>
                <p className="font-heading text-sm font-bold uppercase text-ink">
                  On Your Lot
                </p>
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
