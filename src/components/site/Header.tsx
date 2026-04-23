"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#meet-derek", label: "Meet Derek" },
  { href: "/#work", label: "Work" },
  { href: "/#faq", label: "FAQ" },
];

function LiveDot() {
  return (
    <span className="relative inline-flex h-2 w-2">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-hover opacity-75" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-hover" />
    </span>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-border/80 bg-bg/90 backdrop-blur-lg shadow-[0_8px_30px_-15px_rgba(0,0,0,0.6)]"
            : "border-b border-transparent bg-gradient-to-b from-bg/80 to-bg/40 backdrop-blur-sm"
        }`}
      >
        <div className="container flex h-16 items-center justify-between sm:h-20">
          {/* Brand lockup */}
          <Link
            href="/"
            aria-label="Derek's Maintenance home"
            className="group flex items-center gap-3"
          >
            <div className="relative">
              <div className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-accent/40 transition-all duration-300 group-hover:ring-accent sm:h-12 sm:w-12">
                <Image
                  src="/images/logo.jpg"
                  alt="Derek's Maintenance LLC logo"
                  fill
                  sizes="48px"
                  className="object-cover"
                  priority
                />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-bg bg-accent-hover" />
            </div>
            <div className="hidden sm:block">
              <div className="font-heading text-base font-bold uppercase tracking-wide text-ink leading-none">
                Derek&apos;s Maintenance
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-muted">
                Mobile Mechanic · Raleigh NC
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav
            aria-label="Primary"
            className="hidden items-center gap-1 lg:flex"
          >
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="relative rounded-md px-3 py-2 font-heading text-sm uppercase tracking-wide text-ink/80 transition-colors hover:text-ink"
              >
                <span className="relative z-10">{label}</span>
                <span className="absolute inset-x-3 bottom-1 h-[2px] origin-left scale-x-0 bg-accent-hover transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          {/* Right rail */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Live availability badge: desktop only */}
            <span className="hidden items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 xl:inline-flex">
              <LiveDot />
              <span className="font-heading text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-hover">
                Available 24/7
              </span>
            </span>

            {/* Phone: shown on sm+ */}
            <a
              href="tel:+19197984452"
              className="hidden items-center gap-2 rounded-md border border-border/60 px-3 py-2 font-heading text-sm uppercase tracking-wide text-ink transition-all hover:border-accent hover:text-accent-hover md:inline-flex"
            >
              <Phone className="h-4 w-4" aria-hidden />
              (919) 798-4452
            </a>

            {/* Phone icon for mobile */}
            <a
              href="tel:+19197984452"
              aria-label="Call Derek"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-ink transition-all hover:border-accent hover:text-accent-hover md:hidden"
            >
              <Phone className="h-5 w-5" />
            </a>

            <Button asChild size="sm" className="hidden h-10 sm:inline-flex">
              <a href="/#contact">Request Service</a>
            </Button>

            {/* Mobile menu toggle */}
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-ink lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="drawer"
            className="fixed inset-0 z-50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
            role="dialog"
            aria-modal="true"
          >
            <div className="absolute inset-0 bg-bg/80 backdrop-blur-md" />
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
              className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col border-l border-border bg-bg p-6 shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <span className="font-heading text-sm uppercase tracking-[0.25em] text-accent-hover">
                  Menu
                </span>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-ink"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="mt-10 flex flex-col gap-1">
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="group flex items-center justify-between rounded-lg border border-border/60 px-5 py-4 font-heading text-lg font-bold uppercase tracking-wide text-ink transition-all hover:border-accent hover:bg-surface/60"
                  >
                    {label}
                    <span className="text-accent-hover opacity-0 transition-opacity group-hover:opacity-100">
                      →
                    </span>
                  </Link>
                ))}
              </nav>

              <div className="mt-auto space-y-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5">
                  <LiveDot />
                  <span className="font-heading text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-hover">
                    Available 24/7
                  </span>
                </span>
                <Button asChild size="lg" className="w-full">
                  <a href="tel:+19197984452" onClick={() => setMenuOpen(false)}>
                    <Phone className="mr-2 h-5 w-5" />
                    Call (919) 798-4452
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full"
                >
                  <a href="/#contact" onClick={() => setMenuOpen(false)}>
                    Request Service
                  </a>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
