import { Phone } from "lucide-react";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-accent-hover/40 bg-bg/95 p-3 backdrop-blur sm:hidden">
      <a
        href="tel:+19197984452"
        className="flex h-12 w-full items-center justify-center gap-2 rounded-md bg-accent font-heading text-base font-semibold uppercase tracking-wide text-ink shadow-lg transition-colors hover:bg-accent-hover"
      >
        <Phone className="h-5 w-5" />
        Call Derek: (919) 798-4452
      </a>
    </div>
  );
}
