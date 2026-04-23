import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://dereksmaintenance.com/sitemap.xml",
    host: "https://dereksmaintenance.com",
  };
}
