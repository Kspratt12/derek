import { Phone } from "lucide-react";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-accent-hover/40 bg-bg/95 backdrop-blur-lg sm:hidden">
      {/* Live availability strip */}
      <div className="flex items-center justify-center gap-2 border-b border-border/40 bg-accent/5 py-1.5">
        <span className="relative inline-flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-hover opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-hover" />
        </span>
        <span className="font-heading text-[9px] font-bold uppercase tracking-[0.3em] text-accent-hover">
          Available Now · Answers Fast
        </span>
      </div>

      {/* Main call CTA */}
      <div className="p-3">
        <a
          href="tel:+19197984452"
          className="group flex h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-md bg-accent font-heading text-base font-semibold uppercase tracking-wide text-ink shadow-[0_8px_24px_-8px_rgba(45,80,22,0.65)] transition-all active:scale-[0.98]"
        >
          <Phone className="h-5 w-5" />
          Call Derek: (919) 798-4452
        </a>
      </div>
    </div>
  );
}
