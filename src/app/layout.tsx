import type { Metadata, Viewport } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dereksmaintenance.com"),
  title: {
    default: "Mobile Mechanic Raleigh NC | Derek's Maintenance LLC",
    template: "%s | Derek's Maintenance LLC",
  },
  description:
    "Mobile mechanic in Raleigh, NC. On-site auto repair and fleet maintenance in Raleigh, Clayton, Garner, Smithfield, Knightdale, and Wendell. Available 24/7. Call (919) 798-4452.",
  keywords: [
    "mobile mechanic Raleigh",
    "mobile mechanic near me",
    "mobile auto repair Raleigh NC",
    "mobile mechanic Clayton NC",
    "mobile mechanic Garner NC",
    "mobile mechanic Smithfield NC",
    "fleet maintenance Raleigh",
    "mobile brake repair Raleigh",
    "24/7 mechanic Raleigh",
    "Derek's Maintenance",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Mobile Mechanic Raleigh NC | Derek's Maintenance LLC",
    description:
      "On-site auto repair and fleet maintenance across Raleigh and surrounding areas. Available 24/7.",
    url: "https://dereksmaintenance.com",
    siteName: "Derek's Maintenance LLC",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Mechanic Raleigh NC | Derek's Maintenance LLC",
    description: "On-site auto repair and fleet maintenance. Available 24/7.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Derek's Maintenance LLC",
  image: "https://dereksmaintenance.com/images/logo.jpg",
  "@id": "https://dereksmaintenance.com",
  url: "https://dereksmaintenance.com",
  telephone: "+1-919-798-4452",
  email: "dereksmaintenance@gmail.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Raleigh",
    addressRegion: "NC",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 35.7796,
    longitude: -78.6382,
  },
  areaServed: [
    { "@type": "City", name: "Raleigh" },
    { "@type": "City", name: "Clayton" },
    { "@type": "City", name: "Garner" },
    { "@type": "City", name: "Smithfield" },
    { "@type": "City", name: "Knightdale" },
    { "@type": "City", name: "Wendell" },
  ],
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
  sameAs: [] as string[],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Mobile Mechanic Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mobile Auto Repair",
          description:
            "On-site auto repair for cars, trucks, and SUVs in Raleigh and surrounding areas.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Brake Repair",
          description: "Rotor and brake pad replacement at your driveway.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Engine Diagnostics",
          description: "Check engine light diagnostics and repair.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Fleet Maintenance",
          description:
            "On-site fleet maintenance and pressure washing for commercial vehicles.",
        },
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#1A1A1A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        {children}
      </body>
    </html>
  );
}
