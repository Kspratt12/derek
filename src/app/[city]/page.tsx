import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Clock, MapPin, Phone, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Contact } from "@/components/site/Contact";
import { FAQ } from "@/components/site/FAQ";
import { FirstReview } from "@/components/site/FirstReview";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { HowItWorks } from "@/components/site/HowItWorks";
import { MobileCallBar } from "@/components/site/MobileCallBar";
import { Testimonials } from "@/components/site/Testimonials";
import { cities, getCityBySlug } from "@/lib/cities";
import { services } from "@/lib/services";

export const dynamicParams = false;

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { city: string };
}): Metadata {
  const city = getCityBySlug(params.city);
  if (!city) return {};

  const title = `Mobile Mechanic ${city.fullName} | Derek's Maintenance LLC`;
  const description = `Mobile mechanic serving ${city.fullName} and nearby areas. On-site auto repair, brake work, engine diagnostics, and fleet maintenance. Call Derek at (919) 798-4452.`;

  return {
    title,
    description,
    alternates: { canonical: `/${city.slug}` },
    openGraph: {
      title,
      description,
      url: `https://dereksmaintenance.com/${city.slug}`,
      type: "website",
    },
  };
}

export default function CityPage({ params }: { params: { city: string } }) {
  const city = getCityBySlug(params.city);
  if (!city) notFound();

  const otherCities = cities.filter((c) => c.slug !== city.slug);

  const citySchema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: `Derek's Maintenance LLC · Mobile Mechanic ${city.fullName}`,
    image: "https://dereksmaintenance.com/images/logo.jpg",
    "@id": `https://dereksmaintenance.com/${city.slug}`,
    url: `https://dereksmaintenance.com/${city.slug}`,
    telephone: "+1-919-798-4452",
    email: "dereksmaintenance@gmail.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: city.name,
      addressRegion: "NC",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "City",
      name: city.name,
      containedInPlace: { "@type": "AdministrativeArea", name: city.county },
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
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
        name: `Mobile Mechanic ${city.fullName}`,
        item: `https://dereksmaintenance.com/${city.slug}`,
      },
    ],
  };

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main>
        <section
          id="top"
          aria-labelledby="city-heading"
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
                <li className="text-ink/80">{city.name}</li>
              </ol>
            </nav>

            <div className="max-w-4xl">
              <span className="eyebrow flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                {city.county}
              </span>

              <h1
                id="city-heading"
                className="mt-4 font-heading text-4xl font-bold uppercase leading-[0.95] tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-7xl"
              >
                {city.headline.split(" in ")[0]}
                <br />
                <span className="text-accent-hover">in {city.fullName}</span>
              </h1>

              <p className="mt-6 max-w-3xl text-lg text-ink/80 sm:text-xl">
                {city.intro}
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
                    Request Service
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4 text-accent-hover" aria-hidden />
                  Available 24/7
                </span>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-accent-hover" aria-hidden />
                  {city.driveContext}
                </span>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="local-heading"
          className="py-20 sm:py-28"
        >
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="eyebrow">Serving {city.name}</p>
                <h2
                  id="local-heading"
                  className="section-title mt-3"
                >
                  Built For The Way {city.name} Actually Drives
                </h2>
                <p className="mt-5 text-lg text-ink/80">
                  {city.commuterNote}
                </p>
                <p className="mt-4 text-ink/75">{city.localScenario}</p>

                <div className="mt-8">
                  <p className="eyebrow mb-3">Neighborhoods Served</p>
                  <ul className="grid grid-cols-2 gap-y-2 text-sm text-ink/90">
                    {city.neighborhoods.map((n) => (
                      <li key={n} className="flex items-center gap-2">
                        <MapPin
                          className="h-4 w-4 flex-none text-accent-hover"
                          aria-hidden
                        />
                        {n}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <aside className="rounded-xl border border-border bg-surface/60 p-8">
                <p className="eyebrow">Services in {city.name}</p>
                <h3 className="mt-3 font-heading text-2xl font-bold uppercase text-ink">
                  What Derek Handles Locally
                </h3>
                <ul className="mt-6 space-y-4">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="group flex items-start gap-3 rounded-lg border border-border bg-bg/60 p-4 transition-colors hover:border-accent/60"
                      >
                        <Wrench
                          className="mt-0.5 h-5 w-5 flex-none text-accent-hover"
                          aria-hidden
                        />
                        <div>
                          <p className="font-heading text-base font-bold uppercase tracking-wide text-ink group-hover:text-accent-hover">
                            {s.shortName} in {city.name}
                          </p>
                          <p className="mt-1 text-sm text-ink/70">
                            {s.intro.split(".")[0]}.
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="#contact"
                      className="group flex items-start gap-3 rounded-lg border border-border bg-bg/60 p-4 transition-colors hover:border-accent/60"
                    >
                      <Wrench
                        className="mt-0.5 h-5 w-5 flex-none text-accent-hover"
                        aria-hidden
                      />
                      <div>
                        <p className="font-heading text-base font-bold uppercase tracking-wide text-ink group-hover:text-accent-hover">
                          Oil changes, tune-ups, and more
                        </p>
                        <p className="mt-1 text-sm text-ink/70">
                          Full mobile service in {city.name}. Call for a quote.
                        </p>
                      </div>
                    </Link>
                  </li>
                </ul>
              </aside>
            </div>
          </div>
        </section>

        <HowItWorks />
        <Testimonials />
        <FirstReview />
        <FAQ />

        <section className="border-y border-border bg-surface/20 py-16">
          <div className="container">
            <p className="eyebrow">Other Areas Derek Serves</p>
            <h2 className="section-title mt-3">Not In {city.name}?</h2>
            <p className="mt-3 max-w-2xl text-ink/75">
              Derek covers the whole Raleigh area. Pick your city below or
              just call.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {otherCities.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/${c.slug}`}
                    className="group flex items-center justify-between rounded-lg border border-border bg-bg/60 p-4 transition-colors hover:border-accent/60"
                  >
                    <span className="font-heading font-bold uppercase tracking-wide text-ink group-hover:text-accent-hover">
                      Mobile Mechanic {c.name}
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
        </section>

        <Contact />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
