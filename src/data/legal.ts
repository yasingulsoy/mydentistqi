/**
 * ŞABLON HUKUKİ METİNLER.
 *
 * Bu metinler sağlık turizmi aracılık hizmeti veren bir işletme için
 * hazırlanmış taslaklardır; KVKK ve GDPR başlıklarını kapsar ama
 * HUKUKİ DANIŞMANLIK DEĞİLDİR. Yayına almadan önce:
 *   1. `draft: true` değerini false yap (sayfadaki uyarı kutusu kalkar),
 *   2. köşeli parantezli [...] alanları gerçek şirket bilgileriyle doldur,
 *   3. bir avukata inceletmeden yayına alma.
 *
 * Metinler dile göre `legal/<dil>.ts` altında. URL slug'ı burada DEĞİL,
 * `locales.ts` içindeki segment tablosunda — iki yerde tutulursa
 * kaçınılmaz olarak birbirinden ayrı düşüyorlar.
 */

import { localePrefix, segments, toHref, type Locale } from "./locales";

import { tr } from "./legal/tr";
import { en } from "./legal/en";
import { de } from "./legal/de";
import { bg } from "./legal/bg";
import { ar } from "./legal/ar";
import { fr } from "./legal/fr";
import { es } from "./legal/es";

export type LegalBlock = string | { list: string[] };

export type LegalSection = {
  heading: string;
  blocks: LegalBlock[];
};

export type LegalDoc = {
  title: string;
  description: string;
  updatedLabel: string;
  updatedAt: string;
  backToHome: string;
  /** true iken sayfanın üstünde "taslak metin" uyarısı gösterilir. */
  draft: boolean;
  draftNotice: string;
  sections: LegalSection[];
};

export type LegalDocs = { privacy: LegalDoc; terms: LegalDoc };

export type LegalDocKey = keyof LegalDocs;

export const legal: Record<Locale, LegalDocs> = { tr, en, de, bg, ar, fr, es };

/** Belge anahtarının URL segmenti (locales.ts tek doğruluk kaynağı). */
export function legalSlug(locale: Locale, doc: LegalDocKey) {
  return segments[locale][doc];
}

/** Dil + belge -> URL yolu (footer, sitemap ve hreflang bunu kullanır). */
export function legalPath(locale: Locale, doc: LegalDocKey) {
  return toHref([...localePrefix(locale), legalSlug(locale, doc)]);
}
