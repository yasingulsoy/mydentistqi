/** Dilden bağımsız site sabitleri. */

/**
 * Canonical / Open Graph / sitemap mutlak URL üretmek için gerekli.
 * Yayına almadan önce .env dosyasında NEXT_PUBLIC_SITE_URL değerini
 * gerçek alan adıyla ayarla, yoksa canonical'lar yanlış çıkar.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://mydentist.example.com"
).replace(/\/$/, "");

export const brand = {
  name: "MyDentist",
  email: "info@mydentist.com",
  phones: ["+00 000 000 00 00", "+00 000 000 00 00"],
  /** Sosyal medya profilleri (JSON-LD sameAs). Gerçek adresler gelince doldur. */
  social: [] as string[],
};

/** Tasarımdan gelen yer tutucu değerler yapısal veriye yazılmamalı. */
export function isPlaceholder(value: string) {
  return /0{3}|\.{3}|example\.com/.test(value);
}
