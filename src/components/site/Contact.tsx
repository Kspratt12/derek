"use client";

// Resend / Formspree wiring will replace the onSubmit handler here later.
// For now the form is visual only. Submitting shows a confirmation message.

import { useState } from "react";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";

const serviceAreas = [
  "Raleigh",
  "Clayton",
  "Garner",
  "Smithfield",
  "Knightdale",
  "Wendell",
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative border-t border-border bg-surface/30 py-20 sm:py-28"
    >
      <div className="container">
        <div className="max-w-3xl">
          <p className="eyebrow">Get In Touch</p>
          <h2 id="contact-heading" className="section-title mt-3">
            Request Service
          </h2>
          <p className="mt-4 text-lg text-muted">
            Fill this out and Derek will text or call you back, usually the
            same day.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <form
              className="rounded-xl border border-border bg-bg/60 p-6 sm:p-8"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    autoComplete="name"
                    required
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    placeholder="(919) 555-0123"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="vehicle">Vehicle Year / Make / Model</Label>
                  <Input
                    id="vehicle"
                    name="vehicle"
                    required
                    placeholder="2012 Ford Mustang 5.0"
                  />
                </div>

                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="issue">What&apos;s Wrong?</Label>
                  <Textarea
                    id="issue"
                    name="issue"
                    required
                    rows={4}
                    placeholder="Describe what you&apos;re hearing, seeing, or what needs to be done."
                  />
                </div>

                <div className="space-y-3 sm:col-span-2">
                  <Label>Preferred Contact Method</Label>
                  <RadioGroup
                    defaultValue="text"
                    name="contact_method"
                    className="flex flex-col gap-3 sm:flex-row sm:gap-6"
                  >
                    {[
                      { value: "call", label: "Call" },
                      { value: "text", label: "Text" },
                      { value: "email", label: "Email" },
                    ].map((opt) => (
                      <label
                        key={opt.value}
                        htmlFor={`contact-${opt.value}`}
                        className="flex cursor-pointer items-center gap-3 rounded-md border border-border bg-surface px-4 py-3 transition-colors hover:border-accent/60"
                      >
                        <RadioGroupItem
                          id={`contact-${opt.value}`}
                          value={opt.value}
                        />
                        <span className="text-sm font-medium text-ink">
                          {opt.label}
                        </span>
                      </label>
                    ))}
                  </RadioGroup>
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="mt-6 w-full gap-2"
                disabled={submitted}
              >
                {submitted ? (
                  "Request Received"
                ) : (
                  <>
                    Send Request
                    <Send className="h-5 w-5" />
                  </>
                )}
              </Button>

              {submitted ? (
                <p
                  role="status"
                  className="mt-4 rounded-md border border-accent/40 bg-accent/10 p-3 text-sm text-ink"
                >
                  Thanks. Derek will be in touch, usually same day. For
                  emergencies, call <a href="tel:+19197984452" className="underline">(919) 798-4452</a>.
                </p>
              ) : (
                <p className="mt-3 text-xs text-muted">
                  By submitting, you agree to be contacted about your service
                  request.
                </p>
              )}
            </form>
          </div>

          <aside className="lg:col-span-2">
            <div className="rounded-xl border border-border bg-gradient-to-br from-bg via-surface/70 to-bg p-6 sm:p-8">
              <p className="eyebrow">Call Direct</p>
              <a
                href="tel:+19197984452"
                className="mt-3 block font-heading text-4xl font-bold leading-none text-accent-hover transition-colors hover:text-ink sm:text-5xl"
              >
                (919) 798-4452
              </a>
              <p className="mt-3 italic text-muted">Call or text anytime.</p>

              <div className="mt-6 space-y-3 border-t border-border pt-5">
                <div className="flex items-center gap-3 text-ink">
                  <Clock className="h-5 w-5 flex-none text-accent-hover" />
                  <span>Always Open, 24/7 Mobile Service</span>
                </div>
                <div className="flex items-center gap-3 text-ink">
                  <Mail className="h-5 w-5 flex-none text-accent-hover" />
                  <a
                    href="mailto:dereksmaintenance@gmail.com"
                    className="hover:text-accent-hover break-all"
                  >
                    dereksmaintenance@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-ink">
                  <Phone className="h-5 w-5 flex-none text-accent-hover" />
                  <a href="tel:+19197984452" className="hover:text-accent-hover">
                    (919) 798-4452
                  </a>
                </div>
              </div>

              <div className="mt-6 border-t border-border pt-5">
                <p className="eyebrow mb-3">Service Area</p>
                <ul className="grid grid-cols-2 gap-y-2">
                  {serviceAreas.map((area) => (
                    <li
                      key={area}
                      className="flex items-center gap-2 text-sm text-ink/90"
                    >
                      <MapPin className="h-4 w-4 text-accent-hover" aria-hidden />
                      {area}, NC
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
