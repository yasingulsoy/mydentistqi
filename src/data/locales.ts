/**
 * Dil kayıt defteri — sitedeki TEK dil/rota doğruluk kaynağı.
 *
 * Türkçe kökte (`/`), diğer diller ön ekli (`/en`, `/de`, ...). Yeni bir dil
 * eklemek için: buraya bir satır, `content/<kod>.ts`, `detail-pages` ve
 * `legal` sözlüklerine karşılığı. TypeScript eksik kalanı derlemede söyler.
 */

export const LOCALES = ["tr", "en"] as const;

export type Locale = (typeof LOCALES)[number];

/** Kökte (ön eksiz) yayınlanan dil. */
export const defaultLocale: Locale = "tr";

export type LocaleMeta = {
  code: Locale;
  /** <html lang> değeri */
  htmlLang: string;
  /** <html dir> değeri — Arapça için "rtl" */
  dir: "ltr" | "rtl";
  /** Dil değiştiricide görünen ad; DAİMA kendi dilinde yazılır. */
  label: string;
  /** Dar ekranlardaki kısa rozet */
  short: string;
  /** Open Graph `og:locale` */
  ogLocale: string;
};

export const localeMeta: Record<Locale, LocaleMeta> = {
  tr: { code: "tr", htmlLang: "tr", dir: "ltr", label: "Türkçe", short: "TR", ogLocale: "tr_TR" },
  en: { code: "en", htmlLang: "en", dir: "ltr", label: "English", short: "EN", ogLocale: "en_US" },
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/** Dilin ana sayfa yolu: tr -> "/", diğerleri -> "/en" gibi. */
export const localePath: Record<Locale, string> = Object.fromEntries(
  LOCALES.map((l) => [l, l === defaultLocale ? "/" : `/${l}`]),
) as Record<Locale, string>;

/** URL'nin dil ön eki dizisi: tr -> [], en -> ["en"] */
export function localePrefix(locale: Locale): string[] {
  return locale === defaultLocale ? [] : [locale];
}

/* ------------------------------------------------------------------ */
/*  Yerelleştirilmiş yol segmentleri                                   */
/* ------------------------------------------------------------------ */

/**
 * URL segmentleri de çevrilir: /tedaviler/... <-> /en/treatments/...
 *
 * Kiril ve Arap alfabeli dillerde segmentler bilinçli olarak LATİN
 * harfle yazıldı; yüzde kodlanmış URL'ler paylaşılırken bozuluyor.
 */
export type SegmentKey = "treatments" | "destinations" | "privacy" | "terms";

export const segments: Record<Locale, Record<SegmentKey, string>> = {
  tr: {
    treatments: "tedaviler",
    destinations: "rotalar",
    privacy: "gizlilik-politikasi",
    terms: "kullanim-sartlari",
  },
  en: {
    treatments: "treatments",
    destinations: "destinations",
    privacy: "privacy-policy",
    terms: "terms-of-use",
  },
};

/** Dizi hâlindeki yolu URL'ye çevirir: [] -> "/", ["en","x"] -> "/en/x" */
export function toHref(path: string[]): string {
  return path.length === 0 ? "/" : `/${path.join("/")}`;
}

/**
 * Bölüm çıpalarını tam yola çevirir: "#tedaviler" -> "/#tedaviler" (tr).
 * Alt sayfalarda (gizlilik, tedavi detayı) çıpaların çalışması için gerekli.
 */
export function sectionHref(locale: Locale, anchor: string) {
  const base = localePath[locale];
  return base === "/" ? `/${anchor}` : `${base}${anchor}`;
}
