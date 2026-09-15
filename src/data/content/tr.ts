/**
 * Türkçe içerik — Figma tasarımından BİREBİR alındı, çeviri değildir.
 * Diğer dillerin kaynağı budur.
 *
 * Tasarımdaki 3 yazım hatası düzeltildi (orijinali yorum satırında):
 *  - "pkred ve şeffaf bir süreçle yönetiliz"  -> "akredite ve şeffaf bir süreçle yönetiyoruz"
 *  - "Doktor & Klinik Eştirme"                -> "Doktor & Klinik Eşleştirme"
 *  - "Tercüman Eklibi" (footer)               -> "Tercüman Ekibi"
 */

import type { Dict } from "../dict";

export const tr: Dict = {
  locale: "tr",
  htmlLang: "tr",
  meta: {
    title: "MyDentist | Uluslararası Sağlık Turizmi",
    description:
      "Uluslararası sağlık turizmi alanında güvenilir çözüm ortağınız. Saç ekimi, diş tedavisi, yüz estetiği ve ortopedi alanlarında akredite klinikler ve uzman doktorlar.",
    keywords: [
      "sağlık turizmi",
      "medikal turizm",
      "saç ekimi",
      "diş tedavisi",
      "implant",
      "gülüş tasarımı",
      "yüz estetiği",
      "ortopedi",
      "Türkiye'de tedavi",
    ],
    ogAlt: "MyDentist — uluslararası sağlık turizmi",
  },
  h1: "MyDentist — Uluslararası Sağlık Turizmi ve Tedavi Danışmanlığı",
  skipToContent: "İçeriğe geç",
  nav: {
    links: [
      { label: "Ana Sayfa", href: "#ana-sayfa" },
      // Figma'nın 709px düzeninde bu link yok; dar ekranlarda gizleniyor.
      { label: "Hakkımızda", href: "#hakkimizda", wideOnly: true },
      { label: "Tedaviler", href: "#tedaviler" },
      { label: "Anlaşmalı Kurumlar", href: "#anlasmali-kurumlar" },
      { label: "Rotalar", href: "#rotalar" },
      { label: "İletişim", href: "#iletisim" },
    ],
    cta: "Ücretsiz Danışma",
    menuLabel: "Menüyü aç/kapat",
    themeToggle: "Koyu / açık temayı değiştir",
  },
  hero: {
    imageAlt: "Sağlık turizmi ile Türkiye'de tedavi olan mutlu bir hasta",
    pills: ["Saç Ekimi", "Diş Tasarımı & Diş Sağlığı", "Yüz Estetiği", "Ortopedi"],
    form: {
      name: "Ad Soyad",
      phone: "Telefon Numarası",
      email: "Mail Adresi",
      submit: "Gönder",
      sent: "Talebiniz alındı. En kısa sürede sizinle iletişime geçeceğiz.",
      countryLabel: "Ülke kodu",
      searchCountry: "Ülke ara",
      noResults: "Sonuç bulunamadı",
      invalidPhone: "Seçtiğiniz ülke için geçerli bir telefon numarası girin.",
    },
  },
  treatments: {
    eyebrow: "TEDAVİLER",
    title: "Öne Çıkan Tedaviler",
    description:
      "Uzman doktorlarımız ve akredite kliniklerimizle en çok tercih edilen tedavi alanlarımız.",
    link: "Detaylı Bilgi",
    items: [
      {
        title: "Saç Ekimi",
        description:
          "Doğal görünümlü saç ekimi yöntemleri ile kalıcı ve estetik sonuçlar.",
      },
      {
        title: "Diş Tedavisi",
        description: "Estetik gülüş tasarımı, implant ve tüm diş sağlığı hizmetleri.",
      },
      {
        title: "Yüz Estetiği",
        description:
          "Botoks, dolgu, yüz germe ve daha fazlası ile genç ve dinamik görünüm.",
      },
      {
        title: "Ortopedi",
        description: "Diz, kalça ve eklem tedavilerinde modern cerrahi çözümler.",
      },
    ],
  },
  partners: {
    eyebrow: "İŞ BİRLİĞİ YAPTIĞIMIZ KURUMLAR",
    title: "Anlaşmalı Kurumlar",
    goToPage: "Sayfaya git",
  },
  process: {
    eyebrow: "POPÜLER SÜRECİ",
    title: "Nasıl İşliyor?",
    // Tasarımda "Uzman doktorlarımız, pkred ve şeffaf bir süreçle yönetiliz." yazıyordu
    description: "Uzman doktorlarımız, akredite ve şeffaf bir süreçle yönetiyoruz.",
    steps: [
      {
        no: "01",
        title: "İlk İletişim",
        description:
          "Bize ulaşın, ihtiyaçlarınızı dinleyelim ve ön bilgi alışverişi yapalım.",
      },
      {
        no: "02",
        title: "Bilgi Değerlendirme",
        description:
          "Tıbbi bilgilerinizi inceler, en uygun tedavi planını belirleriz.",
      },
      {
        no: "03",
        // Tasarımda "Doktor & Klinik Eştirme" yazıyordu
        title: "Doktor & Klinik Eşleştirme",
        description: "Uzman doktor ve klinik alternatiflerini sizinle paylaşırız.",
      },
      {
        no: "04",
        title: "Seyahat Planlaması",
        description: "Uçuş, konaklama ve tüm transfer hizmetlerini düzenleriz.",
      },
      {
        no: "05",
        title: "Tedavi",
        description:
          "Tedaviniz güvenli, konforlu ve uluslararası standartlarda gerçekleştirilir.",
      },
      {
        no: "06",
        title: "Takip & Destek",
        description:
          "Tedavi sonrası takip ve danışmanlık desteği sunmaya devam ederiz.",
      },
    ],
  },
  destinations: {
    eyebrow: "ROTALAR",
    title: "Popüler Noktalar",
    cta: "Keşfedin",
    items: [
      { title: "Türkiye", cities: "İstanbul, Antalya, Bodrum" },
      { title: "Almanya", cities: "Frankfurt" },
      { title: "Portekiz", cities: "Lizbon, Porto" },
    ],
  },
  stats: [
    {
      value: "5+",
      label: "Ülke",
      description: "Dünyanın dört bir yanından mutlu hastalarımıza hizmet veriyoruz.",
    },
    {
      value: "25.000+",
      label: "Hasta",
      description: "Yıllık binlerce uluslararası hasta bizimle sağlığına kavuşuyor.",
    },
    {
      value: "150+",
      label: "Uzman Doktor",
      description: "Alanında deneyimli ve uluslararası sertifikalı doktor kadromuz.",
    },
    {
      value: "98%",
      label: "Memnuniyet Oranı",
      description: "Hastalarımızın memnuniyeti bizim en büyük motivasyonumuz.",
    },
  ],
  testimonials: {
    prev: "Önceki yorum",
    next: "Sonraki yorum",
    label: "Hasta yorumları",
    goTo: "Yoruma git",
    // İlk yorum tasarımdan geldi. Diğerleri YER TUTUCU - yayına almadan önce
    // gerçek hasta yorumlarıyla değiştir. Sahte yorum yapısal veriye (schema.org
    // Review/AggregateRating) bilerek yazılmıyor.
    items: [
      {
        name: "Anna L.",
        country: "Fransa",
        rating: 5,
        quote:
          "İmplantlar için İstanbul'a geldim. Tüm süreç boyunca ekip inanılmaz destek oldu. Klinik, otel, transfer her şey mükemmeldi. Sonuçtan ve hizmetten çok memnunum.",
      },
      {
        name: "Michael B.",
        country: "Almanya",
        rating: 5,
        quote:
          "Saç ekimi için geldim. Konsültasyondan operasyona kadar her adım önceden planlanmıştı. Tercüman desteği sayesinde hiçbir aşamada zorlanmadım.",
      },
      {
        name: "Sofia R.",
        country: "Portekiz",
        rating: 5,
        quote:
          "Gülüş tasarımım için İzmir'deydim. Klinik çok modern, ekip çok ilgiliydi. Ülkeme döndükten sonra kontroller online devam etti.",
      },
      {
        name: "James W.",
        country: "İngiltere",
        rating: 5,
        quote:
          "Diz protezi ameliyatı oldum. Havalimanı karşılama, otel, transfer... hiçbir şeyi tek başıma düşünmek zorunda kalmadım. Süreç baştan sona şeffaftı.",
      },
      {
        name: "Lena K.",
        country: "Hollanda",
        rating: 5,
        quote:
          "Yüz estetiği için araştırma yaparken çok fazla seçenek vardı. Bana en uygun kliniği ve doktoru bulmamda gerçekten yol gösterdiler.",
      },
    ],
  },
  faq: {
    eyebrow: "SIK SORULAN SORULAR",
    items: [
      {
        question: "Tedavi için Türkiye'ye gitmeden önce ne yapmalıyım?",
        answer:
          "Tıbbi geçmişinizi ve raporlarınızı ekibimizle paylaşarak ön değerlendirme sürecini başlatabilirsiniz.",
      },
      {
        question: "Konaklama ve transfer hizmetleri dahil mi?",
        answer:
          "Havalimanı karşılama, otel konaklaması ve klinik transferleri paketinize dahildir. Detaylar tedavi planınıza göre netleşir.",
      },
      {
        question: "Tedavi sonrası kontroller nasıl yapılıyor?",
        answer:
          "Ülkenize döndükten sonra online kontrol görüşmeleri planlanır, gerekli durumlarda anlaşmalı kliniklerimize yönlendirme yapılır.",
      },
      {
        question: "Hangi dillerde hizmet veriyorsunuz?",
        answer:
          "Türkçe, İngilizce, Almanca, Fransızca ve Arapça dillerinde tercüman desteği sağlıyoruz.",
      },
    ],
  },
  services: {
    eyebrow: "TAM HİZMET DESTEĞİ",
    title: "Seyahatinizin Her Adımında Yanınızdayız",
    description:
      "Tedaviniz boyunca ihtiyaç duyacağınız tüm hizmetleri tek noktadan sunuyoruz. Konforunuz ve güvenliğiniz bizim önceliğimizdir.",
    cta: "Hizmetlerimizi Keşfedin",
    labels: [
      "Havaalanı Hizmeti",
      "Tercüman Ekibi",
      "Güvenilir Acentalar",
      "Kaliteli ve Saygın\nSağlık Kuruluşları",
      "Profesyonel\nDanışmanlar",
      "Otel Konaklama",
    ],
  },
  detail: {
    treatmentsCrumb: "Tedaviler",
    destinationsCrumb: "Rotalar",
    highlights: "ÖNE ÇIKAN BİLGİLER",
    faqTitle: "Sık Sorulan Sorular",
    otherTreatments: "Diğer tedaviler",
    otherDestinations: "Diğer rotalar",
    medicalNotice:
      "Bu sayfadaki bilgiler genel bilgilendirme amaçlıdır; tıbbi tavsiye niteliği taşımaz ve hekim muayenesinin yerine geçmez. Süreler ve sonuçlar kişiden kişiye değişir. Nihai değerlendirmeyi yalnızca sizi muayene eden hekim yapabilir.",
    clinicsTitle: "Bu ülkedeki anlaşmalı kliniklerimiz",
    ctaTitle: "Ücretsiz ön değerlendirme",
    ctaText:
      "Raporlarınızı ve sorularınızı paylaşın; size uygun klinik ve hekim alternatiflerini, tahmini süre ve süreç planıyla birlikte sunalım.",
  },
  footer: {
    description:
      "Uluslararası sağlık turizmi alanında güvenilir çözüm ortağınız, sağlıklı yarınlar için yanınızdayız.",
    columns: [
      {
        title: "HIZLI LINKLER",
        links: [
          { label: "Ana Sayfa", href: "#ana-sayfa" },
          { label: "Hakkımızda", href: "#hakkimizda" },
          { label: "Tedaviler", href: "#tedaviler" },
          { label: "Anlaşmalı Kurumlar", href: "#anlasmali-kurumlar" },
          { label: "Rotalar", href: "#rotalar" },
          { label: "İletişim", href: "#iletisim" },
        ],
      },
      {
        title: "HİZMETLERİMİZ",
        links: [
          { label: "Havaalanı Hizmeti", href: "#hizmetler" },
          { label: "Otel Konaklama", href: "#hizmetler" },
          // Tasarımda "Tercüman Eklibi" yazıyordu
          { label: "Tercüman Ekibi", href: "#hizmetler" },
          { label: "Profesyonel Danışmanlar", href: "#hizmetler" },
          { label: "Güvenilir Acentalar", href: "#hizmetler" },
          { label: "Sağlık Kuruluşları", href: "#hizmetler" },
        ],
      },
    ],
    contactTitle: "İLETİŞİM",
    address: ["...Mah. ...Cad.", "No: 123 .... / İstanbul"],
    legal: "Tüm hakları saklıdır.",
    privacy: "Gizlilik Politikası",
    terms: "Kullanım Şartları",
  },
};
