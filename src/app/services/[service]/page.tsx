import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock,
  MapPin,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Contact } from "@/components/site/Contact";
import { FAQ } from "@/components/site/FAQ";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { HowItWorks } from "@/components/site/HowItWorks";
import { MobileCallBar } from "@/components/site/MobileCallBar";
import { Testimonials } from "@/components/site/Testimonials";
import { cities } from "@/lib/cities";
import { services, getServiceBySlug } from "@/lib/services";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { service: string };
}): Metadata {
  const service = getServiceBySlug(params.service);
  if (!service) return {};

  const title = `${service.name} in Raleigh NC | Derek's Maintenance LLC`;
  const description = `${service.name.toLowerCase()} in Raleigh and surrounding areas. On-site service, honest pricing, same-day availability. Call Derek at (919) 798-4452.`;

  return {
    title,
    description,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title,
      description,
      url: `https://dereksmaintenance.com/services/${service.slug}`,
      type: "website",
    },
  };
}

export default function ServicePage({
  params,
}: {
  params: { service: string };
}) {
  const service = getServiceBySlug(params.service);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== service.slug);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.intro,
    provider: {
      "@type": "AutoRepair",
      name: "Derek's Maintenance LLC",
      telephone: "+1-919-798-4452",
    },
    areaServed: cities.map((c) => ({ "@type": "City", name: c.name })),
    serviceType: service.shortName,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://dereksmaintenance.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://dereksmaintenance.com/#services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.shortName,
        item: `https://dereksmaintenance.com/services/${service.slug}`,
      },
    ],
  };

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main>
        <section
          id="top"
          aria-labelledby="service-heading"
          className="relative isolate overflow-hidden border-b border-border"
        >
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-bg via-surface/60 to-bg" />
            <div className="absolute inset-0 grid-lines opacity-40" />
          </div>

          <div className="container py-20 sm:py-28 lg:py-32">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted">
              <ol className="flex items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-accent-hover">
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>Services</li>
                <li aria-hidden>/</li>
                <li className="text-ink/80">{service.shortName}</li>
              </ol>
            </nav>

            <div className="max-w-4xl">
              <span className="eyebrow eyebrow-plain flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                Mobile Service
              </span>

              <h1
                id="service-heading"
                className="mt-4 font-heading text-4xl font-bold uppercase leading-[0.95] tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-7xl"
              >
                Mobile {service.shortName}
                <br />
                <span className="text-accent-hover">In Raleigh, NC.</span>
              </h1>

              <p className="mt-6 max-w-3xl text-lg text-ink/80 sm:text-xl">
                {service.intro}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <a href="tel:+19197984452" className="gap-2">
                    <Phone className="h-5 w-5" />
                    Call (919) 798-4452
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <a href="#contact" className="gap-2">
                    Get A Quote
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4 text-accent-hover" aria-hidden />
                  Same-day availability
                </span>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-accent-hover" aria-hidden />
                  Raleigh and surrounding areas
                </span>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="includes-heading"
          className="py-20 sm:py-28"
        >
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="eyebrow">What&apos;s Included</p>
                <h2 id="includes-heading" className="section-title mt-3">
                  What Derek Handles
                </h2>
                <ul className="mt-8 space-y-3">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2
                        className="mt-0.5 h-5 w-5 flex-none text-accent-hover"
                        aria-hidden
                      />
                      <span className="text-ink/90">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 rounded-xl border border-border bg-surface/40 p-6">
                  <p className="eyebrow">Pricing</p>
                  <p className="mt-3 text-ink/85">{service.priceNote}</p>
                </div>
              </div>

              <aside>
                <div className="rounded-xl border border-border bg-surface/60 p-8">
                  <p className="eyebrow eyebrow-plain flex items-center gap-2">
                    <AlertTriangle
                      className="h-4 w-4 text-accent-hover"
                      aria-hidden
                    />
                    Common Symptoms
                  </p>
                  <h3 className="mt-3 font-heading text-2xl font-bold uppercase text-ink">
                    When To Call Derek
                  </h3>
                  <ul className="mt-6 space-y-3">
                    {service.symptoms.map((s) => (
                      <li
                        key={s}
                        className="flex items-start gap-3 border-b border-border/60 pb-3 last:border-0 last:pb-0"
                      >
                        <span className="mt-2 inline-block h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                        <span className="text-ink/85">{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 rounded-xl border border-border bg-bg/60 p-6">
                  <p className="eyebrow">Why Mobile Works For This Job</p>
                  <p className="mt-3 text-ink/85">{service.whyMobile}</p>
                  <p className="mt-4 text-sm text-muted">
                    <strong className="text-ink">Vehicles: </strong>
                    {service.commonVehicles}
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <HowItWorks />
        <Testimonials />
        <FAQ />

        <section className="border-y border-border bg-surface/20 py-16">
          <div className="container">
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <p className="eyebrow">Other Services</p>
                <h2 className="section-title mt-3">More From Derek</h2>
                <ul className="mt-6 space-y-3">
                  {otherServices.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="group flex items-center justify-between rounded-lg border border-border bg-bg/60 p-4 transition-colors hover:border-accent/60"
                      >
                        <span className="font-heading font-bold uppercase tracking-wide text-ink group-hover:text-accent-hover">
                          {s.name}
                        </span>
                        <ArrowRight
                          className="h-5 w-5 text-accent-hover"
                          aria-hidden
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="eyebrow">Service Area</p>
                <h2 className="section-title mt-3">Where Derek Works</h2>
                <ul className="mt-6 grid grid-cols-2 gap-3">
                  {cities.map((c) => (
                    <li key={c.slug}>
                      <Link
                        href={`/${c.slug}`}
                        className="group flex items-center gap-2 rounded-lg border border-border bg-bg/60 p-3 text-sm transition-colors hover:border-accent/60"
                      >
                        <MapPin
                          className="h-4 w-4 flex-none text-accent-hover"
                          aria-hidden
                        />
                        <span className="text-ink group-hover:text-accent-hover">
                          {c.name}, NC
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
