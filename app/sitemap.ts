import type { MetadataRoute } from "next";
import { getPublicUrl } from "@/lib/public-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getPublicUrl();

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/confirm-email`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0,
    },
  ];
}
