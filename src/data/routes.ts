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
import { articlesOf, findArticle, hasBlog, type Article } from "./articles";
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
  | { kind: "legal"; locale: Locale; doc: LegalDocKey }
  | { kind: "blog"; locale: Locale }
  | { kind: "article"; locale: Locale; article: Article };

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
    case "blog":
      return [...prefix, segments[route.locale].blog];
    case "article":
      return [...prefix, segments[route.locale].blog, route.article.key];
  }
}

export function routeHref(route: Route): string {
  return toHref(routeSegments(route));
}

/**
 * Aynı sayfanın başka bir dildeki hâli.
 *
 * Blog her dilde YOK (İspanyolca'da makale yok) ve bir makale yalnızca
 * metni olan dillerde var. Karşılığı olmayan dillerde ana sayfaya
 * düşüyoruz; böylece dil değiştirici 404'e götürmüyor ve hreflang
 * olmayan bir sayfayı göstermiyor.
 */
export function translateRoute(route: Route, locale: Locale): Route {
  if (route.kind === "blog" && !hasBlog(locale)) {
    return { kind: "home", locale };
  }
  if (route.kind === "article" && !route.article.content[locale]) {
    return { kind: "home", locale };
  }
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

/**
 * hreflang için: SADECE bu sayfanın gerçekten karşılığı olan diller.
 * `routeAlternates` dil değiştirici içindir ve karşılığı olmayan dilde
 * ana sayfaya düşer; hreflang'de bunu yapmak "bu sayfanın İspanyolcası
 * ana sayfadır" demek olur ve yanlıştır.
 */
export function routeHreflangs(route: Route): Partial<Record<Locale, string>> {
  const out: Partial<Record<Locale, string>> = {};
  for (const l of LOCALES) {
    const t = translateRoute(route, l);
    if (t.kind === route.kind) out[l] = routeHref(t);
  }
  return out;
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
    if (rest[0] === seg.blog) {
      return hasBlog(locale) ? { kind: "blog", locale } : null;
    }
    for (const doc of Object.keys(legal[locale]) as LegalDocKey[]) {
      if (legalSlug(locale, doc) === rest[0]) return { kind: "legal", locale, doc };
    }
    return null;
  }

  if (rest.length === 2) {
    if (rest[0] === seg.blog) {
      const article = findArticle(locale, rest[1]);
      return article ? { kind: "article", locale, article } : null;
    }
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
    if (hasBlog(locale)) {
      routes.push({ kind: "blog", locale });
      for (const article of articlesOf(locale)) {
        routes.push({ kind: "article", locale, article });
      }
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
