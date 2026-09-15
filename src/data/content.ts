/**
 * İçerik giriş noktası.
 *
 * Bileşenler hep buradan içe aktarır (`@/data/content`); diller
 * `content/<dil>.ts` altında ayrı dosyalarda durur ki her biri tek başına
 * okunabilir/çevrilebilir olsun.
 */

import type { Dict } from "./dict";
import { LOCALES, type Locale } from "./locales";
import { tr } from "./content/tr";
import { en } from "./content/en";

export type { Dict } from "./dict";
export type {
  TreatmentIconKey,
  ServiceIconKey,
} from "./dict";
export { heroPillIcons, serviceIcons } from "./dict";
export { siteUrl, brand, isPlaceholder } from "./site";
export {
  LOCALES,
  defaultLocale,
  localeMeta,
  localePath,
  localePrefix,
  isLocale,
  segments,
  toHref,
  sectionHref,
} from "./locales";
export type { Locale, LocaleMeta, SegmentKey } from "./locales";

export const content: Record<Locale, Dict> = { tr, en };

/** Sözlüğü güvenle almak için — bilinmeyen dil varsayılana düşer. */
export function dictOf(locale: Locale): Dict {
  return content[locale];
}

/** Derleme anı güvenlik ağı: her dilin sözlüğü var mı? */
const missing = LOCALES.filter((l) => !content[l]);
if (missing.length) {
  throw new Error(`Eksik dil sözlüğü: ${missing.join(", ")}`);
}
