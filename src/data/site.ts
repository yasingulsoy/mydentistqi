/** Dilden bağımsız site sabitleri. */

/**
 * Canonical / Open Graph / sitemap mutlak URL üretmek için gerekli.
 * Yayına almadan önce .env dosyasında NEXT_PUBLIC_SITE_URL değerini
 * gerçek alan adıyla ayarla, yoksa canonical'lar yanlış çıkar.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://mydentist.example.com"
).replace(/\/$/, "");

/** Telefon numaraları ülkesiyle birlikte; arayüzde bayrakla gösteriliyor. */
export type BrandPhone = { countryCode: string; number: string };

export const brand = {
  name: "MyDentist",
  email: "info@mydentist.com",
  phones: [
    { countryCode: "TR", number: "+90 216 900 17 69" },
    { countryCode: "GB", number: "+44 20 3519 3455" },
  ] as BrandPhone[],
  /** Sosyal medya profilleri (JSON-LD sameAs). Gerçek adresler gelince doldur. */
  social: [] as string[],
};

/**
 * Kayıtlı adres (Birleşik Krallık). Adres çevrilmez — her dilde aynı yazılır,
 * bu yüzden sözlükte değil burada.
 */
export const brandAddress = {
  street: "Lister House, 11-12 Wimpole St",
  locality: "London",
  postalCode: "W1G 9ST",
  country: "United Kingdom",
  countryCode: "GB",
  lines: ["Lister House, 11-12 Wimpole St", "London W1G 9ST", "United Kingdom"],
};

/** Tasarımdan gelen yer tutucu değerler yapısal veriye yazılmamalı. */
export function isPlaceholder(value: string) {
  return /0{3}|\.{3}|example\.com/.test(value);
}
