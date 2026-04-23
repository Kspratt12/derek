import Image from "next/image";
import Link from "next/link";
import { Clock, Mail, Phone } from "lucide-react";
import { cities } from "@/lib/cities";
import { services } from "@/lib/services";

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg pb-28 pt-16 text-ink sm:pb-16">
      <div className="container">
        <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-full ring-1 ring-accent/40">
                <Image
                  src="/images/logo.jpg"
                  alt="Derek's Maintenance LLC"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-heading text-lg font-bold uppercase tracking-wide">
                  Derek&apos;s Maintenance
                </div>
                <div className="text-xs text-muted">
                  Mobile Mechanic, Raleigh NC
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-2 text-sm text-muted">
              <a
                href="tel:+19197984452"
                className="flex items-center gap-2 hover:text-accent-hover"
              >
                <Phone className="h-4 w-4" /> (919) 798-4452
              </a>
              <a
                href="mailto:dereksmaintenance@gmail.com"
                className="flex items-center gap-2 hover:text-accent-hover"
              >
                <Mail className="h-4 w-4" /> dereksmaintenance@gmail.com
              </a>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" /> 24/7 for emergencies
              </span>
            </div>
          </div>

          <div>
            <p className="eyebrow">Services</p>
            <ul className="mt-4 space-y-2 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-ink/75 hover:text-accent-hover"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">Service Area</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {cities.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/${c.slug}`}
                    className="text-ink/75 hover:text-accent-hover"
                  >
                    {c.name}, NC
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">Quick Links</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/" className="text-ink/75 hover:text-accent-hover">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#process"
                  className="text-ink/75 hover:text-accent-hover"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/#reviews"
                  className="text-ink/75 hover:text-accent-hover"
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="text-ink/75 hover:text-accent-hover"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-ink/75 hover:text-accent-hover"
                >
                  Request Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center text-xs text-muted/80">
          © 2026 Derek&apos;s Maintenance LLC. Raleigh, NC. Mobile mechanic
          serving Wake and Johnston counties.
        </div>
      </div>
    </footer>
  );
}
