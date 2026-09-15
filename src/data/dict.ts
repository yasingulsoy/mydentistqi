/**
 * Sayfadaki her metnin tip tanımı.
 *
 * Bu tip 7 dilin SÖZLEŞMESİ: `content/<dil>.ts` dosyalarının hepsi bunu
 * karşılamak zorunda, eksik alan derleme hatası verir. Yeni bir metin
 * eklerken önce buraya alanı ekle, sonra TypeScript sana hangi dillerde
 * eksik kaldığını tek tek söyler.
 */

import type { Locale } from "./locales";

export type TreatmentIconKey = "implant" | "smile" | "crown" | "allon4";
export type ServiceIconKey =
  | "plane"
  | "hotel"
  | "people"
  | "person"
  | "diamond"
  | "shield";

/** Hero etiketlerinin ikon sırası (görseller detail-pages.ts içinde). */
export const heroPillIcons: TreatmentIconKey[] = ["implant", "smile", "crown", "allon4"];

/** Yörünge diyagramındaki sıra = altıgen yerleşim sırası. */
export const serviceIcons: ServiceIconKey[] = [
  "plane",
  "people",
  "diamond",
  "shield",
  "person",
  "hotel",
];

export type Dict = {
  locale: Locale;
  htmlLang: string;
  meta: {
    title: string;
    description: string;
    keywords: string[];
    ogAlt: string;
  };
  /**
   * Sayfanın tek H1'i — hero'da GÖRÜNÜR.
   *
   * Tasarımda hero metni yoktu ve H1 ekran okuyuculara gizli veriliyordu;
   * sol sütun boş kalıyor, form 227px aşağıda sarkıyordu. Başlığı görünür
   * yapmak hem o boşluğu anlamlı dolduruyor hem de gizli H1 sorununu
   * çözüyor. Metin uydurulmadı, meta.description'dan türetildi.
   */
  h1: string;
  /** H1'in altındaki tek satırlık açıklama. */
  heroLead: string;
  skipToContent: string;
  nav: {
    links: { label: string; href: string; wideOnly?: boolean }[];
    cta: string;
    menuLabel: string;
    themeToggle: string;
  };
  hero: {
    imageAlt: string;
    pills: string[];
    form: {
      name: string;
      phone: string;
      email: string;
      submit: string;
      /** Gönderim sürerken butonun metni */
      sending: string;
      sent: string;
      /** Otomasyona ulaşılamadığında gösterilen metin */
      error: string;
      countryLabel: string;
      searchCountry: string;
      noResults: string;
      invalidPhone: string;
    };
  };
  /** "Hakkımızda" bölümü — navigasyondaki #hakkimizda çıpası buraya bağlı. */
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
  };
  treatments: {
    eyebrow: string;
    title: string;
    description: string;
    link: string;
    items: { title: string; description: string }[];
  };
  partners: { eyebrow: string; title: string; goToPage: string };
  process: {
    eyebrow: string;
    title: string;
    description: string;
    steps: { no: string; title: string; description: string }[];
  };
  destinations: {
    eyebrow: string;
    title: string;
    cta: string;
    items: { title: string; cities: string }[];
  };
  stats: { value: string; label: string; description: string }[];
  testimonials: {
    prev: string;
    next: string;
    label: string;
    goTo: string;
    items: { name: string; country: string; rating: number; quote: string }[];
  };
  faq: { eyebrow: string; items: { question: string; answer: string }[] };
  services: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    labels: string[];
  };
  /** Sayfa altındaki iletişim bölümü (#iletisim çıpası buraya bağlı). */
  contact: {
    eyebrow: string;
    title: string;
    description: string;
  };
  detail: {
    treatmentsCrumb: string;
    destinationsCrumb: string;
    highlights: string;
    faqTitle: string;
    otherTreatments: string;
    otherDestinations: string;
    medicalNotice: string;
    clinicsTitle: string;
    ctaTitle: string;
    ctaText: string;
  };
  footer: {
    description: string;
    columns: { title: string; links: { label: string; href: string }[] }[];
    contactTitle: string;
    legal: string;
    privacy: string;
    terms: string;
  };
};
