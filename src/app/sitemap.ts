import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/content";
import { legalPath } from "@/data/legal";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const entry = (
    trPath: string,
    enPath: string,
    priority: number,
  ): MetadataRoute.Sitemap => {
    const languages = { tr: `${siteUrl}${trPath}`, en: `${siteUrl}${enPath}` };
    return [
      {
        url: `${siteUrl}${trPath}`,
        lastModified,
        changeFrequency: "monthly",
        priority,
        alternates: { languages },
      },
      {
        url: `${siteUrl}${enPath}`,
        lastModified,
        changeFrequency: "monthly",
        priority: priority - 0.1,
        alternates: { languages },
      },
    ];
  };

  return [
    ...entry("", "/en", 1),
    ...entry(legalPath("tr", "privacy"), legalPath("en", "privacy"), 0.4),
    ...entry(legalPath("tr", "terms"), legalPath("en", "terms"), 0.4),
  ];
}
