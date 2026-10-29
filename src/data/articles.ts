/**
 * Blog makaleleri.
 *
 * Kaynak: "MyDentist_27_Konu_9_Dil_243_SEO_Makale.docx" (29 Ekim 2026).
 * Belgede 9 dil var; bunlardan RUSÇA, ROMENCE ve FELEMENKÇE sitede
 * olmadığı için alınmadı (81 makale kullanılmadı). Belgede olmayan
 * İSPANYOLCA ise Türkçe kaynaktan çevrildi — böylece 7 dilin hepsinde
 * blog var.
 *
 * URL'ler belgedeki `/blog/implant-01` biçiminde DEĞİL: her dilde o
 * makalenin kendi SEO anahtar kelimesinden üretilen slug kullanılıyor
 * (`/blog/implant-tedavisi`). `key` ise dilden bağımsız kimlik olarak
 * kalıyor; çeviriler arası eşleşme ve hreflang bunun üzerinden kuruluyor.
 *
 * İÇERİK UYARISI: Makaleler birbirine çok benziyor — her birinin 9
 * paragrafından yalnızca 2'si özgün, 5 paragraf 27 makalenin hepsinde
 * aynı, ortalama uzunluk 136 kelime. Arama motorları bu tür yakın
 * kopya/zayıf sayfaları cezalandırabilir. Daha özgün metinler geldiğinde
 * yalnızca `articles/<dil>.ts` dosyalarını değiştirmek yeterli.
 */

import { LOCALES, localePrefix, segments, toHref, type Locale } from "./locales";

import { tr } from "./articles/tr";
import { en } from "./articles/en";
import { de } from "./articles/de";
import { bg } from "./articles/bg";
import { ar } from "./articles/ar";
import { fr } from "./articles/fr";
import { es } from "./articles/es";

export type ArticleSection = {
  heading: string;
  paragraphs: string[];
};

export type ArticleContent = {
  /** URL slug'ı — her dilde o dilin anahtar kelimesinden üretildi. */
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  /** Hedeflenen arama terimi — şu an yalnızca belgeden taşındı. */
  keyword: string;
  sections: ArticleSection[];
};

/** Makale konusu: dile göre DEĞİŞMEYEN kimlik. */
export type ArticleCategory = "implant" | "zirconia" | "all-on" | "dental";

export type Article = {
  /** URL slug'ı ve sözlük anahtarı; 27 konunun hepsinde dilden bağımsız. */
  key: string;
  category: ArticleCategory;
  content: Partial<Record<Locale, ArticleContent>>;
};

/** Dil -> (makale anahtarı -> metin). */
const TEXTS: Partial<Record<Locale, Record<string, ArticleContent>>> = {
  tr,
  en,
  de,
  bg,
  ar,
  fr,
  es,
};

/** Belgedeki sıra: 5 implant, 5 zirkonyum, 5 All-on, 12 genel tedavi. */
const ORDER: { key: string; category: ArticleCategory }[] = [
  { key: "implant-01", category: "implant" },
  { key: "implant-02", category: "implant" },
  { key: "implant-03", category: "implant" },
  { key: "implant-04", category: "implant" },
  { key: "implant-05", category: "implant" },
  { key: "zirconia-06", category: "zirconia" },
  { key: "zirconia-07", category: "zirconia" },
  { key: "zirconia-08", category: "zirconia" },
  { key: "zirconia-09", category: "zirconia" },
  { key: "zirconia-10", category: "zirconia" },
  { key: "all-on-11", category: "all-on" },
  { key: "all-on-12", category: "all-on" },
  { key: "all-on-13", category: "all-on" },
  { key: "all-on-14", category: "all-on" },
  { key: "all-on-15", category: "all-on" },
  { key: "dental-16", category: "dental" },
  { key: "dental-17", category: "dental" },
  { key: "dental-18", category: "dental" },
  { key: "dental-19", category: "dental" },
  { key: "dental-20", category: "dental" },
  { key: "dental-21", category: "dental" },
  { key: "dental-22", category: "dental" },
  { key: "dental-23", category: "dental" },
  { key: "dental-24", category: "dental" },
  { key: "dental-25", category: "dental" },
  { key: "dental-26", category: "dental" },
  { key: "dental-27", category: "dental" },
];

export const articles: Article[] = ORDER.map(({ key, category }) => {
  const content: Partial<Record<Locale, ArticleContent>> = {};
  for (const locale of LOCALES) {
    const text = TEXTS[locale]?.[key];
    if (text) content[locale] = text;
  }
  if (!Object.keys(content).length) {
    throw new Error(`"${key}" makalesinin hiçbir dilde metni yok.`);
  }
  return { key, category, content };
});

/* ------------------------------------------------------------------ */
/*  Yardımcılar                                                        */
/* ------------------------------------------------------------------ */

/** O dilde metni olan makaleler; sırası belgedeki sıra. */
export function articlesOf(locale: Locale): Article[] {
  return articles.filter((a) => a.content[locale]);
}

/** O dilde blog bölümü gösterilmeli mi? */
export function hasBlog(locale: Locale): boolean {
  return articlesOf(locale).length > 0;
}

/** Dilden bağımsız kimlikle bul (çeviriler arası eşleşme için). */
export function findArticle(locale: Locale, key: string): Article | undefined {
  return articles.find((a) => a.key === key && a.content[locale]);
}

/** URL'den bul — slug o dile özel. */
export function findArticleBySlug(
  locale: Locale,
  slug: string,
): Article | undefined {
  return articles.find((a) => a.content[locale]?.slug === slug);
}

/** Blog listesi yolu: tr -> "/blog", en -> "/en/blog" */
export function blogPath(locale: Locale): string {
  return toHref([...localePrefix(locale), segments[locale].blog]);
}

/** Makale yolu: tr -> "/blog/implant-tedavisi" */
export function articlePath(locale: Locale, article: Article): string {
  const slug = article.content[locale]?.slug;
  if (!slug) {
    throw new Error(`"${article.key}" makalesinin ${locale} sürümü yok.`);
  }
  return toHref([...localePrefix(locale), segments[locale].blog, slug]);
}
