/**
 * "Detaylı Bilgi" ve "Keşfedin" bağlantılarının açtığı alt sayfalar.
 *
 * Bu dosya sayfaların KİMLİĞİNİ tutar (anahtar, dile göre slug, görsel,
 * ikon); metinler `detail-pages/<dil>.ts` altında sayfa anahtarıyla
 * eşlenmiş hâlde durur. Böylece bir dili çevirirken tek dosyaya bakmak
 * yetiyor, 7 dil tek dosyada iç içe geçmiyor.
 *
 * İÇERİK TASLAKTIR. Tıbbi metinler bilinçli olarak genel tutuldu; kesin
 * süre/başarı oranı/fiyat iddiası yok. Yayına almadan önce klinik ekibe
 * doğrulatın.
 */

import type { TreatmentIconKey } from "./dict";
import { LOCALES, localePrefix, segments, toHref, type Locale } from "./locales";

import { tr } from "./detail-pages/tr";
import { en } from "./detail-pages/en";
import { de } from "./detail-pages/de";
import { bg } from "./detail-pages/bg";
import { ar } from "./detail-pages/ar";
import { fr } from "./detail-pages/fr";
import { es } from "./detail-pages/es";

export type Highlight = { label: string; value: string };

export type DetailSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
};

export type DetailContent = {
  title: string;
  tagline: string;
  metaDescription: string;
  intro: string[];
  highlights: Highlight[];
  sections: DetailSection[];
  faq: { question: string; answer: string }[];
};

export type DetailPage = {
  key: string;
  /** Rota sayfalarinda o ulkenin kliniklerini listelemek icin */
  countryCode?: string;
  slug: Record<Locale, string>;
  image: string;
  icon?: TreatmentIconKey;
  content: Record<Locale, DetailContent>;
};

export type DetailKind = "treatment" | "destination";

/** Sayfa kimlikleri — metinler ayrı dosyalarda, burada yalnızca yapı var. */
type PageDef = Omit<DetailPage, "content">;

const TREATMENT_DEFS: PageDef[] = [
  {
    key: "implant",
    icon: "implant",
    // TODO: tedaviye ait gerçek fotoğraf gelince değiştir. Dördü de şu an
    // aynı genel diş görselini kullanıyor.
    image: "/images/tedaviler/dis-tedavileri-desktop.webp",
    slug: {
      tr: "dental-implant",
      en: "dental-implant",
      de: "zahnimplantat",
      bg: "zabni-implanti",
      ar: "dental-implant",
      fr: "implant-dentaire",
      es: "implante-dental",
    },
  },
  {
    key: "zirconium",
    icon: "crown",
    image: "/images/tedaviler/dis-tedavileri-desktop.webp",
    slug: {
      tr: "zirkonyum-kaplama",
      en: "zirconium-crowns",
      de: "zirkonkronen",
      bg: "tsirkonievi-koroni",
      ar: "zirconium-crowns",
      fr: "couronnes-zircone",
      es: "coronas-de-circonio",
    },
  },
  {
    key: "hollywood",
    icon: "smile",
    image: "/images/tedaviler/dis-tedavileri-desktop.webp",
    // "Hollywood Smile" ve "All On Four" yerleşmiş marka/teknik adları;
    // çevrilmiyor, slug'ları her dilde aynı kalıyor.
    slug: {
      tr: "hollywood-smile",
      en: "hollywood-smile",
      de: "hollywood-smile",
      bg: "hollywood-smile",
      ar: "hollywood-smile",
      fr: "hollywood-smile",
      es: "hollywood-smile",
    },
  },
  {
    key: "allonfour",
    icon: "allon4",
    image: "/images/tedaviler/dis-tedavileri-desktop.webp",
    slug: {
      tr: "all-on-four",
      en: "all-on-four",
      de: "all-on-four",
      bg: "all-on-four",
      ar: "all-on-four",
      fr: "all-on-four",
      es: "all-on-four",
    },
  },
];

const DESTINATION_DEFS: PageDef[] = [
  {
    key: "turkiye",
    countryCode: "TR",
    image: "/images/noktalar/turkiye-desktop.webp",
    slug: {
      tr: "turkiye",
      en: "turkiye",
      de: "tuerkei",
      bg: "turtsiya",
      ar: "turkiye",
      fr: "turquie",
      es: "turquia",
    },
  },
  {
    key: "almanya",
    countryCode: "DE",
    image: "/images/noktalar/almanya-desktop.webp",
    slug: {
      tr: "almanya",
      en: "germany",
      de: "deutschland",
      bg: "germaniya",
      ar: "germany",
      fr: "allemagne",
      es: "alemania",
    },
  },
  {
    key: "portekiz",
    countryCode: "PT",
    image: "/images/noktalar/portekiz-desktop.webp",
    slug: {
      tr: "portekiz",
      en: "portugal",
      de: "portugal",
      bg: "portugaliya",
      ar: "portugal",
      fr: "portugal",
      es: "portugal",
    },
  },
];

/** Dil -> (sayfa anahtarı -> metin) */
const TEXTS: Record<Locale, Record<string, DetailContent>> = {
  tr,
  en,
  de,
  bg,
  ar,
  fr,
  es,
};

/** Kimlik + metin birleştirme. Eksik çeviri ilk içe aktarımda patlar. */
function withContent(def: PageDef): DetailPage {
  const content = {} as Record<Locale, DetailContent>;
  for (const locale of LOCALES) {
    const text = TEXTS[locale][def.key];
    if (!text) {
      throw new Error(
        `"${def.key}" alt sayfasının ${locale} çevirisi eksik (detail-pages/${locale}.ts).`,
      );
    }
    content[locale] = text;
  }
  return { ...def, content };
}

export const treatmentPages: DetailPage[] = TREATMENT_DEFS.map(withContent);
export const destinationPages: DetailPage[] = DESTINATION_DEFS.map(withContent);

/** Tür -> sayfa listesi. routes.ts tüm rotaları buradan tarıyor. */
export const detailPages: Record<DetailKind, DetailPage[]> = {
  treatment: treatmentPages,
  destination: destinationPages,
};

/* ------------------------------------------------------------------ */
/*  Yardımcılar                                                        */
/* ------------------------------------------------------------------ */

export function pagesOf(kind: DetailKind) {
  return detailPages[kind];
}

/**
 * Yol üretimi locales.ts'teki segment tablosundan türetiliyor; böylece yeni
 * dil eklerken URL'ler tek yerden yönetiliyor.
 */
export function detailPath(kind: DetailKind, locale: Locale, page: DetailPage) {
  const segment =
    kind === "treatment"
      ? segments[locale].treatments
      : segments[locale].destinations;
  return toHref([...localePrefix(locale), segment, page.slug[locale]]);
}

export function findBySlug(kind: DetailKind, locale: Locale, slug: string) {
  return pagesOf(kind).find((p) => p.slug[locale] === slug);
}
