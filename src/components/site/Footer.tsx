import Image from "next/image";
import { Clock, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-bg pb-28 pt-14 text-center sm:pb-14">
      <div className="container">
        <div className="mx-auto flex max-w-md flex-col items-center gap-4">
          <div className="relative h-14 w-14 overflow-hidden rounded-full ring-1 ring-accent/40">
            <Image
              src="/images/logo.jpg"
              alt="Derek's Maintenance LLC"
              fill
              sizes="56px"
              className="object-cover"
            />
          </div>
          <div className="font-heading text-xl font-bold uppercase tracking-wide text-ink">
            Derek&apos;s Maintenance LLC
          </div>

          <div className="flex flex-col items-center gap-2 text-sm text-muted sm:flex-row sm:gap-5">
            <a
              href="tel:+19197984452"
              className="inline-flex items-center gap-2 hover:text-accent-hover"
            >
              <Phone className="h-4 w-4" /> (919) 798-4452
            </a>
            <a
              href="mailto:dereksmaintenance@gmail.com"
              className="inline-flex items-center gap-2 hover:text-accent-hover"
            >
              <Mail className="h-4 w-4" /> dereksmaintenance@gmail.com
            </a>
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4" /> Always Open
            </span>
          </div>

          <p className="mt-4 text-xs text-muted/80">
            © 2026 Derek&apos;s Maintenance LLC. Raleigh, NC.
          </p>
        </div>
      </div>
    </footer>
  );
}
