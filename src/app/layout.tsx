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
  variable: "--font-oswald",
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Derek's Maintenance LLC | Mobile Mechanic in Raleigh, NC",
  description:
    "Trustworthy mobile mechanic serving Raleigh, Clayton, Garner, Smithfield, Knightdale, and Wendell. On-site auto repair and fleet maintenance, available 24/7.",
  keywords: [
    "mobile mechanic Raleigh",
    "mobile auto repair Clayton NC",
    "fleet maintenance Raleigh",
    "24/7 mechanic",
    "Derek's Maintenance",
  ],
  openGraph: {
    title: "Derek's Maintenance LLC",
    description:
      "Mobile mechanic serving Raleigh and surrounding areas. Available 24/7.",
    type: "website",
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
      <body>{children}</body>
    </html>
  );
}
