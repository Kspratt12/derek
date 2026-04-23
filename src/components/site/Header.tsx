"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/80 bg-bg/95 backdrop-blur supports-[backdrop-filter]:bg-bg/80">
      <div className="container flex h-16 items-center justify-between sm:h-20">
        <Link href="#top" aria-label="Derek's Maintenance home" className="flex items-center gap-3">
          <div className="relative h-8 w-8 overflow-hidden rounded-full ring-1 ring-accent/40 sm:h-10 sm:w-10">
            <Image
              src="/images/logo.jpg"
              alt="Derek's Maintenance LLC logo"
              fill
              sizes="40px"
              className="object-cover"
              priority
            />
          </div>
          <div className="hidden sm:block">
            <div className="font-heading text-base font-bold uppercase tracking-wide text-ink">
              Derek&apos;s Maintenance
            </div>
            <div className="-mt-0.5 text-[10px] uppercase tracking-[0.2em] text-muted">
              Mobile Mechanic, Raleigh NC
            </div>
          </div>
        </Link>

        <nav className="flex items-center gap-2 sm:gap-4">
          <a
            href="tel:+19197984452"
            className="hidden items-center gap-2 rounded-md px-3 py-2 font-heading text-sm uppercase tracking-wide text-ink hover:text-accent-hover sm:inline-flex"
          >
            <Phone className="h-4 w-4" aria-hidden />
            (919) 798-4452
          </a>
          <a
            href="tel:+19197984452"
            aria-label="Call Derek"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-ink hover:border-accent hover:text-accent-hover sm:hidden"
          >
            <Phone className="h-5 w-5" />
          </a>
          <Button asChild size="sm" className="h-10">
            <a href="#contact">Request Service</a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
