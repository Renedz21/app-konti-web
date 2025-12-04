import type { MetadataRoute } from "next";
import { getPublicUrl } from "@/lib/public-url";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getPublicUrl();
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    host: baseUrl,
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
