import Link from "next/link";
import { ArrowRight, Home, Phone, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-20 text-center">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(45,80,22,0.2),transparent_60%)]"
      />
      <div className="absolute inset-0 grid-lines opacity-30" aria-hidden />

      <div className="relative">
        <div className="flex justify-center">
          <span className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-accent/15 ring-1 ring-accent/30">
            <Wrench className="h-8 w-8 text-accent-hover" aria-hidden />
          </span>
        </div>

        <p className="mt-8 font-heading text-sm font-bold uppercase tracking-[0.4em] text-accent-hover">
          Page Not Found
        </p>

        <h1 className="mt-4 font-heading font-bold uppercase leading-[0.95] tracking-tight text-ink" style={{ fontSize: "clamp(4rem, 16vw, 10rem)" }}>
          4<span className="text-accent-hover">0</span>4
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg text-ink/80">
          Looks like that page took a wrong turn. Happens to the best of us.
          Let&apos;s get you back on the road.
        </p>

        <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:gap-4">
          <Button asChild size="lg">
            <Link href="/" className="gap-2">
              <Home className="h-5 w-5" />
              Back To Home
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="tel:+19197984452" className="gap-2">
              <Phone className="h-5 w-5" />
              Call Derek
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
        </div>

        <p className="mt-10 font-heading text-xs uppercase tracking-[0.3em] text-muted">
          Derek&apos;s Maintenance · Raleigh, NC · 24/7
        </p>
      </div>
    </main>
  );
}
