import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/content";
import { legalPath } from "@/data/legal";
import { detailPath, destinationPages, treatmentPages } from "@/data/detail-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pair = (
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
        priority: Math.round((priority - 0.1) * 10) / 10,
        alternates: { languages },
      },
    ];
  };

  return [
    ...pair("", "/en", 1),
    ...treatmentPages.flatMap((p) =>
      pair(detailPath("treatment", "tr", p), detailPath("treatment", "en", p), 0.8),
    ),
    ...destinationPages.flatMap((p) =>
      pair(detailPath("destination", "tr", p), detailPath("destination", "en", p), 0.7),
    ),
    ...pair(legalPath("tr", "privacy"), legalPath("en", "privacy"), 0.4),
    ...pair(legalPath("tr", "terms"), legalPath("en", "terms"), 0.4),
  ];
}
