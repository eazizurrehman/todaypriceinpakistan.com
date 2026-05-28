import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://todaypriceinpakistan.com",
      lastModified: new Date(),
      changeFrequency: "hourly",
      priority: 1,
    },
    {
      url: "https://todaypriceinpakistan.com/gold-rate-today",
      lastModified: new Date(),
      changeFrequency: "hourly",
      priority: 0.9,
    },
  ];
}
