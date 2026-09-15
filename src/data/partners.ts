import type { Locale } from "./locales";

/**
 * Anlaşmalı klinikler.
 *
 * Türkiye'de yalnızca Hospitadent; kalanlar Avrupa'daki anlaşmalı klinikler
 * (kaynak: "Avrupa Klinikler MyDentist.docx", 15 Eylül 2026).
 *
 * Fotoğraflar `public/images/klinikler/` altında, 768x512 WebP olarak
 * optimize edildi. Hospitadent için mevcut bina görseli kullanılıyor.
 */
export type Clinic = {
  slug: string;
  name: string;
  /** Bayrak ve ülkeye göre filtreleme için ISO 3166-1 alpha-2 */
  countryCode: string;
  city: Record<Locale, string>;
  phone: string;
  address: string;
  image: string;
};

const CITY: Record<string, Record<Locale, string>> = {
  istanbul: {
    tr: "İstanbul", en: "Istanbul", de: "Istanbul", bg: "Истанбул",
    ar: "إسطنبول", fr: "Istanbul", es: "Estambul",
  },
  budapest: {
    tr: "Budapeşte", en: "Budapest", de: "Budapest", bg: "Будапеща",
    ar: "بودابست", fr: "Budapest", es: "Budapest",
  },
  berlin: {
    tr: "Berlin", en: "Berlin", de: "Berlin", bg: "Берлин",
    ar: "برلين", fr: "Berlin", es: "Berlín",
  },
  lisbon: {
    tr: "Lizbon", en: "Lisbon", de: "Lissabon", bg: "Лисабон",
    ar: "لشبونة", fr: "Lisbonne", es: "Lisboa",
  },
  bucharest: {
    tr: "Bükreş", en: "Bucharest", de: "Bukarest", bg: "Букурещ",
    ar: "بوخارست", fr: "Bucarest", es: "Bucarest",
  },
  paris: {
    tr: "Paris", en: "Paris", de: "Paris", bg: "Париж",
    ar: "باريس", fr: "Paris", es: "París",
  },
  dublin: {
    tr: "Dublin", en: "Dublin", de: "Dublin", bg: "Дъблин",
    ar: "دبلن", fr: "Dublin", es: "Dublín",
  },
};

export const clinics: Clinic[] = [
  {
    slug: "hospitadent",
    name: "Hospitadent",
    countryCode: "TR",
    city: CITY.istanbul,
    phone: "",
    address: "",
    image: "/images/kurumlar/anlasmali-kurumlar-mobile.webp",
  },

  // --- Macaristan ---
  {
    slug: "helvetic-clinics",
    name: "Helvetic Clinics Budapest",
    countryCode: "HU",
    city: CITY.budapest,
    phone: "+36 1 808 8166",
    address: "Révay utca 12, 1065 Budapest",
    image: "/images/klinikler/helvetic-clinics.webp",
  },
  {
    slug: "kreativ-dental",
    name: "Kreativ Dental Clinic",
    countryCode: "HU",
    city: CITY.budapest,
    phone: "+36 1 222 0199",
    address: "Vezér utca 100, 1141 Budapest",
    image: "/images/klinikler/kreativ-dental.webp",
  },
  {
    slug: "uniklinik-budapest",
    name: "Dental and Implant Center Uniklinik",
    countryCode: "HU",
    city: CITY.budapest,
    phone: "+36 1 222 9150",
    address: "Örs vezér tere 2, 1148 Budapest",
    image: "/images/klinikler/uniklinik-budapest.webp",
  },

  // --- Almanya ---
  {
    slug: "ku64-berlin",
    name: "KU64 Berlin",
    countryCode: "DE",
    city: CITY.berlin,
    phone: "+49 30 864 73 20",
    address: "Kurfürstendamm 64, 10707 Berlin",
    image: "/images/klinikler/ku64-berlin.webp",
  },
  {
    slug: "mvz-smile-smile",
    name: "MVZ Smile & Smile",
    countryCode: "DE",
    city: CITY.berlin,
    phone: "+49 30 62 63 780",
    address: "Hermannstraße 147, 12051 Berlin-Neukölln",
    image: "/images/klinikler/mvz-smile-smile.webp",
  },

  // --- Portekiz ---
  {
    slug: "medidental",
    name: "MEDIDENTAL",
    countryCode: "PT",
    city: CITY.lisbon,
    phone: "+351 21 590 0620",
    address: "R. Gilberto Rola 62A 1º, 1350-156 Lisboa",
    image: "/images/klinikler/medidental.webp",
  },
  {
    slug: "the-practice",
    name: "The Practice Dental & Esthetic Clinic",
    countryCode: "PT",
    city: CITY.lisbon,
    phone: "+351 961 880 508",
    address: "Av. António Augusto de Aguiar 148 7A, 1050-021 Lisboa",
    image: "/images/klinikler/the-practice.webp",
  },

  // --- Romanya ---
  {
    slug: "omnia-dental",
    name: "Omnia Dental Clinic",
    countryCode: "RO",
    city: CITY.bucharest,
    phone: "+40 761 575 155",
    address: "Strada Grigore Cobălcescu 42, 010193 București",
    image: "/images/klinikler/omnia-dental.webp",
  },
  {
    slug: "dent-estet",
    name: "Dent Estet",
    countryCode: "RO",
    city: CITY.bucharest,
    phone: "+40 747 104 090",
    address: "Bulevardul Aviatorilor 15, 011852 București",
    image: "/images/klinikler/dent-estet.webp",
  },

  // --- Fransa ---
  {
    slug: "dentego-paris",
    name: "Dentego 4 Paris – Hôtel de Ville",
    countryCode: "FR",
    city: CITY.paris,
    phone: "+33 1 58 39 31 31",
    address: "23 Rue du Renard, 75004 Paris",
    image: "/images/klinikler/dentego-paris.webp",
  },
  {
    slug: "clinadent-victor-hugo",
    name: "Clinadent Paris Victor Hugo",
    countryCode: "FR",
    city: CITY.paris,
    phone: "+33 1 42 25 40 79",
    address: "3 Place Victor Hugo, 75016 Paris",
    image: "/images/klinikler/clinadent-victor-hugo.webp",
  },
  {
    slug: "clinadent-louvre",
    name: "Clinadent Paris 2 – Louvre",
    countryCode: "FR",
    city: CITY.paris,
    phone: "+33 1 86 90 67 59",
    address: "33 Rue du Louvre, 75002 Paris",
    image: "/images/klinikler/clinadent-louvre.webp",
  },

  // --- İrlanda ---
  {
    slug: "smiles-oconnell",
    name: "Smiles Dental O'Connell Street",
    countryCode: "IE",
    city: CITY.dublin,
    phone: "+353 1 507 9201",
    address: "28 O'Connell Street, Dublin 1",
    image: "/images/klinikler/smiles-oconnell.webp",
  },
  {
    slug: "smiles-grand-canal",
    name: "Smiles Dental Grand Canal Square",
    countryCode: "IE",
    city: CITY.dublin,
    phone: "+353 1 525 0680",
    address: "The Marker Residences, 2 Forbes St, Dublin 2",
    image: "/images/klinikler/smiles-grand-canal.webp",
  },
  {
    slug: "dental-care-kimmage",
    name: "Dental Care Ireland Kimmage",
    countryCode: "IE",
    city: CITY.dublin,
    phone: "+353 1 490 9153",
    address: "296 Kimmage Road Lower, Dublin 6W",
    image: "/images/klinikler/dental-care-kimmage.webp",
  },
];

/** Tasarımdaki karusel 6'lı satır gösteriyor; 16 klinik = tam 3 sayfa. */
export const CLINICS_PER_PAGE = 6;

export function clinicsByCountry(code: string) {
  return clinics.filter((c) => c.countryCode === code);
}

/**
 * Klinik ülkesinin adı elle çevrilmiyor; `countryCode` üzerinden
 * `Intl.DisplayNames` ile üretiliyor (bkz. countries.ts'teki aynı gerekçe).
 */
const countryNames = new Map<Locale, Intl.DisplayNames | null>();

export function clinicCountry(clinic: Clinic, locale: Locale) {
  if (!countryNames.has(locale)) {
    try {
      countryNames.set(locale, new Intl.DisplayNames([locale], { type: "region" }));
    } catch {
      countryNames.set(locale, null);
    }
  }
  return countryNames.get(locale)?.of(clinic.countryCode) ?? clinic.countryCode;
}
