import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/site";
import { defaultLocale } from "@/data/locales";
import { allRoutes, routeHref, routeHreflangs, type Route } from "@/data/routes";

/** Sayfa türüne göre temel öncelik; çeviriler bir kademe altta. */
const PRIORITY: Record<Route["kind"], number> = {
  home: 1,
  detail: 0.8,
  blog: 0.6,
  article: 0.5,
  legal: 0.4,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return allRoutes().map((route) => {
    const base = PRIORITY[route.kind];
    const priority =
      route.locale === defaultLocale
        ? base
        : Math.round((base - 0.1) * 10) / 10;

    // Blog her dilde yok; sitemap'te olmayan dili göstermemek için
    // routeAlternates değil routeHreflangs kullanılıyor.
    const languages = Object.fromEntries(
      Object.entries(routeHreflangs(route)).map(([l, href]) => [
        l,
        `${siteUrl}${href}`,
      ]),
    );

    return {
      url: `${siteUrl}${routeHref(route)}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority,
      alternates: { languages },
    };
  });
}
