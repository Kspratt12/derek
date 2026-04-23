import type { MetadataRoute } from "next";
import { cities } from "@/lib/cities";
import { services } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://dereksmaintenance.com";
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
  ];

  const cityRoutes: MetadataRoute.Sitemap = cities.map((c) => ({
    url: `${base}/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...cityRoutes, ...serviceRoutes];
}
