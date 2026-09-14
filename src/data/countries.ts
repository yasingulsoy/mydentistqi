import type { Locale } from "./content";

/**
 * Telefon alanındaki ülke listesi.
 *
 * Sağlık turizminde gerçekçi kaynak pazarlar seçildi; yeni ülke eklemek için
 * buraya bir satır ve `CountryFlag.tsx` içine bayrağı eklemek yeterli.
 *
 * min/max = ulusal numaranın hane sayısı (baştaki 0 hariç). Aralıklar bilerek
 * biraz geniş tutuldu: yanlışlıkla geçerli numarayı reddetmek, gevşek
 * doğrulamadan daha kötü bir sonuç verir.
 */
export type Country = {
  iso2: string;
  dial: string;
  tr: string;
  en: string;
  min: number;
  max: number;
};

export const countries: Country[] = [
  { iso2: "TR", dial: "+90", tr: "Türkiye", en: "Türkiye", min: 10, max: 10 },
  { iso2: "DE", dial: "+49", tr: "Almanya", en: "Germany", min: 9, max: 11 },
  { iso2: "GB", dial: "+44", tr: "Birleşik Krallık", en: "United Kingdom", min: 9, max: 10 },
  { iso2: "NL", dial: "+31", tr: "Hollanda", en: "Netherlands", min: 9, max: 9 },
  { iso2: "FR", dial: "+33", tr: "Fransa", en: "France", min: 9, max: 9 },
  { iso2: "BE", dial: "+32", tr: "Belçika", en: "Belgium", min: 8, max: 9 },
  { iso2: "AT", dial: "+43", tr: "Avusturya", en: "Austria", min: 7, max: 13 },
  { iso2: "CH", dial: "+41", tr: "İsviçre", en: "Switzerland", min: 9, max: 9 },
  { iso2: "PT", dial: "+351", tr: "Portekiz", en: "Portugal", min: 9, max: 9 },
  { iso2: "ES", dial: "+34", tr: "İspanya", en: "Spain", min: 9, max: 9 },
  { iso2: "IT", dial: "+39", tr: "İtalya", en: "Italy", min: 9, max: 11 },
  { iso2: "SE", dial: "+46", tr: "İsveç", en: "Sweden", min: 7, max: 9 },
  { iso2: "NO", dial: "+47", tr: "Norveç", en: "Norway", min: 8, max: 8 },
  { iso2: "DK", dial: "+45", tr: "Danimarka", en: "Denmark", min: 8, max: 8 },
  { iso2: "FI", dial: "+358", tr: "Finlandiya", en: "Finland", min: 9, max: 10 },
  { iso2: "IE", dial: "+353", tr: "İrlanda", en: "Ireland", min: 9, max: 9 },
  { iso2: "PL", dial: "+48", tr: "Polonya", en: "Poland", min: 9, max: 9 },
  { iso2: "RO", dial: "+40", tr: "Romanya", en: "Romania", min: 9, max: 9 },
  { iso2: "BG", dial: "+359", tr: "Bulgaristan", en: "Bulgaria", min: 8, max: 9 },
  { iso2: "GR", dial: "+30", tr: "Yunanistan", en: "Greece", min: 10, max: 10 },
  { iso2: "UA", dial: "+380", tr: "Ukrayna", en: "Ukraine", min: 9, max: 9 },
  { iso2: "RU", dial: "+7", tr: "Rusya", en: "Russia", min: 10, max: 10 },
  { iso2: "AZ", dial: "+994", tr: "Azerbaycan", en: "Azerbaijan", min: 9, max: 9 },
  { iso2: "GE", dial: "+995", tr: "Gürcistan", en: "Georgia", min: 9, max: 9 },
  { iso2: "KZ", dial: "+7", tr: "Kazakistan", en: "Kazakhstan", min: 10, max: 10 },
  { iso2: "IQ", dial: "+964", tr: "Irak", en: "Iraq", min: 9, max: 10 },
  { iso2: "IR", dial: "+98", tr: "İran", en: "Iran", min: 10, max: 10 },
  { iso2: "SA", dial: "+966", tr: "Suudi Arabistan", en: "Saudi Arabia", min: 9, max: 9 },
  { iso2: "AE", dial: "+971", tr: "Birleşik Arap Emirlikleri", en: "United Arab Emirates", min: 9, max: 9 },
  { iso2: "QA", dial: "+974", tr: "Katar", en: "Qatar", min: 8, max: 8 },
  { iso2: "KW", dial: "+965", tr: "Kuveyt", en: "Kuwait", min: 8, max: 8 },
  { iso2: "BH", dial: "+973", tr: "Bahreyn", en: "Bahrain", min: 8, max: 8 },
  { iso2: "OM", dial: "+968", tr: "Umman", en: "Oman", min: 8, max: 8 },
  { iso2: "JO", dial: "+962", tr: "Ürdün", en: "Jordan", min: 9, max: 9 },
  { iso2: "LB", dial: "+961", tr: "Lübnan", en: "Lebanon", min: 7, max: 8 },
  { iso2: "IL", dial: "+972", tr: "İsrail", en: "Israel", min: 9, max: 9 },
  { iso2: "EG", dial: "+20", tr: "Mısır", en: "Egypt", min: 10, max: 10 },
  { iso2: "LY", dial: "+218", tr: "Libya", en: "Libya", min: 9, max: 9 },
  { iso2: "DZ", dial: "+213", tr: "Cezayir", en: "Algeria", min: 9, max: 9 },
  { iso2: "MA", dial: "+212", tr: "Fas", en: "Morocco", min: 9, max: 9 },
  { iso2: "TN", dial: "+216", tr: "Tunus", en: "Tunisia", min: 8, max: 8 },
  { iso2: "US", dial: "+1", tr: "Amerika Birleşik Devletleri", en: "United States", min: 10, max: 10 },
  { iso2: "CA", dial: "+1", tr: "Kanada", en: "Canada", min: 10, max: 10 },
  { iso2: "AU", dial: "+61", tr: "Avustralya", en: "Australia", min: 9, max: 9 },
];

export const defaultCountry =
  countries.find((c) => c.iso2 === "TR") ?? countries[0];

export function countryName(country: Country, locale: Locale) {
  return locale === "tr" ? country.tr : country.en;
}

/** Baştaki sıfırları ve rakam dışı karakterleri temizler. */
export function toNationalDigits(value: string) {
  return value.replace(/\D/g, "").replace(/^0+/, "");
}

export function isValidNumber(country: Country, nationalDigits: string) {
  const n = nationalDigits.length;
  return n >= country.min && n <= country.max;
}

/** Forma gidecek uluslararası biçim: +905321234567 */
export function toE164(country: Country, nationalDigits: string) {
  return `${country.dial}${nationalDigits}`;
}
