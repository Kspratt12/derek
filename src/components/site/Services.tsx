import { Check, Truck, Wrench } from "lucide-react";

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
    <section id="services" aria-labelledby="services-heading" className="relative py-20 sm:py-28">
      <div className="container">
        <div className="max-w-3xl">
          <p className="eyebrow">What Derek Handles</p>
          <h2 id="services-heading" className="section-title mt-3">
            Services Built Around Your Schedule
          </h2>
          <p className="mt-4 text-lg text-muted">
            From a quick oil change in your driveway to a fleet of trucks that
            can&apos;t afford downtime. Derek brings the shop to you.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          <article className="lg:col-span-3 relative overflow-hidden rounded-xl border border-border bg-surface/60 p-8 sm:p-10">
            <div className="absolute left-0 top-0 h-full w-1 bg-accent" aria-hidden />
            <div className="flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/15 ring-1 ring-accent/30">
                <Wrench className="h-6 w-6 text-accent-hover" aria-hidden />
              </span>
              <p className="eyebrow">Primary Service</p>
            </div>
            <h3 className="mt-5 font-heading text-3xl font-bold uppercase text-ink sm:text-4xl">
              Mobile Auto Repair
            </h3>
            <p className="mt-3 text-ink/75">
              Cars, trucks, and SUVs. Diagnostics through final torque,
              right where your vehicle sits.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {mobileRepair.map((item) => (
                <Bullet key={item} label={item} />
              ))}
            </ul>
          </article>

          <article className="lg:col-span-2 relative overflow-hidden rounded-xl border border-border bg-surface/60 p-8 sm:p-10">
            <div className="absolute left-0 top-0 h-full w-1 bg-accent" aria-hidden />
            <div className="flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/15 ring-1 ring-accent/30">
                <Truck className="h-6 w-6 text-accent-hover" aria-hidden />
              </span>
              <p className="eyebrow">For Businesses</p>
            </div>
            <h3 className="mt-5 font-heading text-3xl font-bold uppercase text-ink sm:text-4xl">
              Fleet Maintenance
              <span className="block text-accent-hover">& Washing</span>
            </h3>
            <p className="mt-3 text-ink/75">
              Keep your fleet on the road. Service on your lot, on your
              schedule.
            </p>
            <ul className="mt-6 grid gap-3">
              {fleet.map((item) => (
                <Bullet key={item} label={item} />
              ))}
            </ul>
          </article>
        </div>

        <p className="mt-10 text-center font-heading text-lg italic text-muted">
          If it drives, Derek can fix it.
        </p>
      </div>
    </section>
  );
}
