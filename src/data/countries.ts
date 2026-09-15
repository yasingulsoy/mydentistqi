import type { Locale } from "./locales";

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
  min: number;
  max: number;
};

export const countries: Country[] = [
  { iso2: "TR", dial: "+90", min: 10, max: 10 },
  { iso2: "DE", dial: "+49", min: 9, max: 11 },
  { iso2: "GB", dial: "+44", min: 9, max: 10 },
  { iso2: "NL", dial: "+31", min: 9, max: 9 },
  { iso2: "FR", dial: "+33", min: 9, max: 9 },
  { iso2: "BE", dial: "+32", min: 8, max: 9 },
  { iso2: "AT", dial: "+43", min: 7, max: 13 },
  { iso2: "CH", dial: "+41", min: 9, max: 9 },
  { iso2: "PT", dial: "+351", min: 9, max: 9 },
  { iso2: "ES", dial: "+34", min: 9, max: 9 },
  { iso2: "IT", dial: "+39", min: 9, max: 11 },
  { iso2: "SE", dial: "+46", min: 7, max: 9 },
  { iso2: "NO", dial: "+47", min: 8, max: 8 },
  { iso2: "DK", dial: "+45", min: 8, max: 8 },
  { iso2: "FI", dial: "+358", min: 9, max: 10 },
  { iso2: "IE", dial: "+353", min: 9, max: 9 },
  { iso2: "PL", dial: "+48", min: 9, max: 9 },
  { iso2: "RO", dial: "+40", min: 9, max: 9 },
  { iso2: "BG", dial: "+359", min: 8, max: 9 },
  { iso2: "GR", dial: "+30", min: 10, max: 10 },
  { iso2: "UA", dial: "+380", min: 9, max: 9 },
  { iso2: "RU", dial: "+7", min: 10, max: 10 },
  { iso2: "AZ", dial: "+994", min: 9, max: 9 },
  { iso2: "GE", dial: "+995", min: 9, max: 9 },
  { iso2: "KZ", dial: "+7", min: 10, max: 10 },
  { iso2: "IQ", dial: "+964", min: 9, max: 10 },
  { iso2: "IR", dial: "+98", min: 10, max: 10 },
  { iso2: "SA", dial: "+966", min: 9, max: 9 },
  { iso2: "AE", dial: "+971", min: 9, max: 9 },
  { iso2: "QA", dial: "+974", min: 8, max: 8 },
  { iso2: "KW", dial: "+965", min: 8, max: 8 },
  { iso2: "BH", dial: "+973", min: 8, max: 8 },
  { iso2: "OM", dial: "+968", min: 8, max: 8 },
  { iso2: "JO", dial: "+962", min: 9, max: 9 },
  { iso2: "LB", dial: "+961", min: 7, max: 8 },
  { iso2: "IL", dial: "+972", min: 9, max: 9 },
  { iso2: "EG", dial: "+20", min: 10, max: 10 },
  { iso2: "LY", dial: "+218", min: 9, max: 9 },
  { iso2: "DZ", dial: "+213", min: 9, max: 9 },
  { iso2: "MA", dial: "+212", min: 9, max: 9 },
  { iso2: "TN", dial: "+216", min: 8, max: 8 },
  { iso2: "US", dial: "+1", min: 10, max: 10 },
  { iso2: "CA", dial: "+1", min: 10, max: 10 },
  { iso2: "AU", dial: "+61", min: 9, max: 9 },
];

export const defaultCountry =
  countries.find((c) => c.iso2 === "TR") ?? countries[0];

/**
 * Ülke adları ELLE ÇEVRİLMİYOR — `Intl.DisplayNames` her dilde doğrusunu
 * veriyor (44 ülke x 7 dil = 308 dizgiyi elle yazmak hem hataya açık hem
 * bakımı imkânsız). Node 20+ ve tüm güncel tarayıcılarda tam ICU var;
 * yine de desteklenmeyen bir ortamda ISO koduna düşüyoruz.
 */
const displayNames = new Map<Locale, Intl.DisplayNames | null>();

function formatterFor(locale: Locale) {
  if (!displayNames.has(locale)) {
    try {
      displayNames.set(locale, new Intl.DisplayNames([locale], { type: "region" }));
    } catch {
      displayNames.set(locale, null);
    }
  }
  return displayNames.get(locale) ?? null;
}

export function countryName(country: Country, locale: Locale) {
  return formatterFor(locale)?.of(country.iso2) ?? country.iso2;
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
