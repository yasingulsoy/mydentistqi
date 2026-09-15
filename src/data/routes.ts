/**
 * URL <-> sayfa çözümleyici.
 *
 * Sitedeki HER sayfa tek bir opsiyonel catch-all rotasından (`[[...path]]`)
 * geçiyor. Sebep: Türkçe kökte dururken diğer diller ön ekli, üstelik yol
 * segmentleri de çevriliyor (`/tedaviler/sac-ekimi` <-> `/en/treatments/
 * hair-transplant`). Bunu `[locale]/[section]/[slug]` ile kurmak next.config
 * içinde kırılgan rewrite regex'leri gerektiriyordu; burada ise üretilen URL
 * listesi ne diyorsa site birebir o.
 */

import {
  detailPages,
  findBySlug,
  type DetailKind,
  type DetailPage,
} from "./detail-pages";
import { legal, legalSlug, type LegalDocKey } from "./legal";
import {
  LOCALES,
  localePrefix,
  segments,
  toHref,
  type Locale,
  type SegmentKey,
} from "./locales";

export type { LegalDocKey };

export type Route =
  | { kind: "home"; locale: Locale }
  | { kind: "detail"; locale: Locale; detailKind: DetailKind; page: DetailPage }
  | { kind: "legal"; locale: Locale; doc: LegalDocKey };

/** Detay türünün hangi yol segmentini kullandığı. */
const DETAIL_SEGMENT: Record<DetailKind, SegmentKey> = {
  treatment: "treatments",
  destination: "destinations",
};

/* ------------------------------------------------------------------ */
/*  Yol üretimi                                                        */
/* ------------------------------------------------------------------ */

/** Rotayı segment dizisine çevirir. Ana sayfa (tr) -> [] */
export function routeSegments(route: Route): string[] {
  const prefix = localePrefix(route.locale);
  switch (route.kind) {
    case "home":
      return prefix;
    case "detail":
      return [
        ...prefix,
        segments[route.locale][DETAIL_SEGMENT[route.detailKind]],
        route.page.slug[route.locale],
      ];
    case "legal":
      return [...prefix, legalSlug(route.locale, route.doc)];
  }
}

export function routeHref(route: Route): string {
  return toHref(routeSegments(route));
}

/** Aynı sayfanın diğer dillerdeki hâli — hreflang ve dil değiştirici için. */
export function translateRoute(route: Route, locale: Locale): Route {
  return { ...route, locale };
}

/**
 * `alternates.languages` için hazır nesne. `x-default` çağıran tarafta
 * ekleniyor, çünkü Metadata tipinde ayrı bir anahtar.
 */
export function routeAlternates(route: Route): Record<Locale, string> {
  return Object.fromEntries(
    LOCALES.map((l) => [l, routeHref(translateRoute(route, l))]),
  ) as Record<Locale, string>;
}

/* ------------------------------------------------------------------ */
/*  Yol çözümleme                                                      */
/* ------------------------------------------------------------------ */

/**
 * URL segmentlerini rotaya çevirir; eşleşme yoksa null (sayfa 404 verir).
 *
 * Not: ön eksiz yollar varsayılan dile (Türkçe) ait sayılır, bu yüzden
 * dil ön eki ile segment adları çakışamaz — "en" adında bir tedavi slug'ı
 * olsaydı sorun olurdu, yoktur.
 */
export function resolveRoute(path: string[] | undefined): Route | null {
  const parts = path ?? [];
  const maybeLocale = parts[0];
  const prefixed = LOCALES.find(
    (l) => l !== "tr" && l === maybeLocale,
  );
  const locale: Locale = prefixed ?? "tr";
  const rest = prefixed ? parts.slice(1) : parts;

  if (rest.length === 0) return { kind: "home", locale };

  const seg = segments[locale];

  if (rest.length === 1) {
    for (const doc of Object.keys(legal[locale]) as LegalDocKey[]) {
      if (legalSlug(locale, doc) === rest[0]) return { kind: "legal", locale, doc };
    }
    return null;
  }

  if (rest.length === 2) {
    const kind: DetailKind | null =
      rest[0] === seg.treatments
        ? "treatment"
        : rest[0] === seg.destinations
          ? "destination"
          : null;
    if (!kind) return null;
    const page = findBySlug(kind, locale, rest[1]);
    return page ? { kind: "detail", locale, detailKind: kind, page } : null;
  }

  return null;
}

/* ------------------------------------------------------------------ */
/*  Statik üretim                                                      */
/* ------------------------------------------------------------------ */

/** Sitedeki tüm rotalar — generateStaticParams ve sitemap burayı kullanır. */
export function allRoutes(): Route[] {
  const routes: Route[] = [];
  for (const locale of LOCALES) {
    routes.push({ kind: "home", locale });
    for (const doc of Object.keys(legal[locale]) as LegalDocKey[]) {
      routes.push({ kind: "legal", locale, doc });
    }
    for (const [detailKind, pages] of Object.entries(detailPages) as [
      DetailKind,
      DetailPage[],
    ][]) {
      for (const page of pages) {
        routes.push({ kind: "detail", locale, detailKind, page });
      }
    }
  }
  return routes;
}
