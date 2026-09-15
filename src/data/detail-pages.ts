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
    key: "hair",
    icon: "hair",
    image: "/images/tedaviler/sac-ekimi-desktop.webp",
    slug: {
      tr: "sac-ekimi",
      en: "hair-transplant",
      de: "haartransplantation",
      bg: "transplantatsiya-na-kosa",
      ar: "hair-transplant",
      fr: "greffe-de-cheveux",
      es: "injerto-capilar",
    },
  },
  {
    key: "dental",
    icon: "tooth",
    image: "/images/tedaviler/dis-tedavisi-desktop.webp",
    slug: {
      tr: "dis-tedavisi",
      en: "dental-treatment",
      de: "zahnbehandlung",
      bg: "zabno-lechenie",
      ar: "dental-treatment",
      fr: "soins-dentaires",
      es: "tratamiento-dental",
    },
  },
  {
    key: "face",
    icon: "face",
    image: "/images/tedaviler/yuz-estetigi-desktop.webp",
    slug: {
      tr: "yuz-estetigi",
      en: "facial-aesthetics",
      de: "gesichtsaesthetik",
      bg: "litseva-estetika",
      ar: "facial-aesthetics",
      fr: "esthetique-du-visage",
      es: "estetica-facial",
    },
  },
  {
    key: "ortho",
    icon: "ortho",
    image: "/images/tedaviler/ortopedi-desktop.webp",
    slug: {
      tr: "ortopedi",
      en: "orthopedics",
      de: "orthopaedie",
      bg: "ortopediya",
      ar: "orthopedics",
      fr: "orthopedie",
      es: "ortopedia",
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
