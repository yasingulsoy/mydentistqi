/**
 * İki dilli içerik. Türkçe metinler Figma tasarımından birebir alındı;
 * İngilizce sürüm bunların çevirisidir.
 *
 * Tasarımdaki 3 yazım hatası düzeltildi (orijinali yorum satırında):
 *  - "pkred ve şeffaf bir süreçle yönetiliz"  -> "akredite ve şeffaf bir süreçle yönetiyoruz"
 *  - "Doktor & Klinik Eştirme"                -> "Doktor & Klinik Eşleştirme"
 *  - "Tercüman Eklibi" (footer)               -> "Tercüman Ekibi"
 */

export type Locale = "tr" | "en";

export type TreatmentIconKey = "hair" | "tooth" | "face" | "ortho";
export type ServiceIconKey =
  | "plane"
  | "hotel"
  | "people"
  | "person"
  | "diamond"
  | "shield";

/** Görseller ve ikonlar dile göre değişmiyor, burada tutuluyor. */
export const treatmentAssets: {
  slug: string;
  icon: TreatmentIconKey;
  image: string;
}[] = [
  { slug: "sac-ekimi", icon: "hair", image: "/images/tedaviler/sac-ekimi-desktop.webp" },
  { slug: "dis-tedavisi", icon: "tooth", image: "/images/tedaviler/dis-tedavileri-desktop.webp" },
  { slug: "yuz-estetigi", icon: "face", image: "/images/tedaviler/yuz-estetigi-desktop.webp" },
  { slug: "ortopedi", icon: "ortho", image: "/images/tedaviler/ortopedi-desktop.webp" },
];

export const destinationAssets: { slug: string; image: string }[] = [
  { slug: "turkiye", image: "/images/noktalar/turkiye-desktop.webp" },
  { slug: "almanya", image: "/images/noktalar/almanya-desktop.webp" },
  { slug: "portekiz", image: "/images/noktalar/portekiz-desktop.webp" },
];

export const heroPillIcons: TreatmentIconKey[] = ["hair", "tooth", "face", "ortho"];

/** Yörünge diyagramındaki sıra = altıgen yerleşim sırası. */
export const serviceIcons: ServiceIconKey[] = [
  "plane",
  "people",
  "diamond",
  "shield",
  "person",
  "hotel",
];

export const partners = [
  { name: "HOSPİTADENT", suffix: ["HASTANELER", "GRUBU"] },
  { name: "ACIBADEM", suffix: ["HEALTHPOINT"] },
  { name: "DENTGROUP", suffix: ["TURKEY"] },
  { name: "LIV HOSPITAL", suffix: ["ULUSLARARASI"] },
  { name: "MEMORIAL", suffix: ["HASTANELER", "GRUBU"] },
  { name: "NP İSTANBUL", suffix: ["BEYİN", "HASTANESİ"] },
];

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

export type Dict = {
  locale: Locale;
  htmlLang: string;
  meta: {
    title: string;
    description: string;
    keywords: string[];
    ogAlt: string;
  };
  /** Sayfanin tek H1'i. Tasarimda hero basligi olmadigi icin gorsel olarak gizli. */
  h1: string;
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
      sent: string;
      countryLabel: string;
      searchCountry: string;
      noResults: string;
      invalidPhone: string;
    };
  };
  treatments: {
    eyebrow: string;
    title: string;
    description: string;
    link: string;
    items: { title: string; description: string }[];
  };
  partners: { eyebrow: string; title: string; imageAlt: string };
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
  footer: {
    description: string;
    columns: { title: string; links: { label: string; href: string }[] }[];
    contactTitle: string;
    address: string[];
    legal: string;
    privacy: string;
    terms: string;
  };
};

const tr: Dict = {
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
    imageAlt: "Anlaşmalı sağlık kuruluşumuzun binası",
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

const en: Dict = {
  locale: "en",
  htmlLang: "en",
  meta: {
    title: "MyDentist | International Health Tourism",
    description:
      "Your trusted partner in international health tourism. Accredited clinics and expert doctors for hair transplants, dental treatment, facial aesthetics and orthopedics.",
    keywords: [
      "health tourism",
      "medical tourism Turkey",
      "hair transplant",
      "dental treatment",
      "dental implants",
      "smile design",
      "facial aesthetics",
      "orthopedics",
      "treatment in Türkiye",
    ],
    ogAlt: "MyDentist — international health tourism",
  },
  h1: "MyDentist — International Health Tourism and Treatment Consultancy",
  skipToContent: "Skip to content",
  nav: {
    links: [
      { label: "Home", href: "#ana-sayfa" },
      { label: "About Us", href: "#hakkimizda", wideOnly: true },
      { label: "Treatments", href: "#tedaviler" },
      { label: "Partner Institutions", href: "#anlasmali-kurumlar" },
      { label: "Destinations", href: "#rotalar" },
      { label: "Contact", href: "#iletisim" },
    ],
    cta: "Free Consultation",
    menuLabel: "Toggle menu",
    themeToggle: "Switch dark / light theme",
  },
  hero: {
    imageAlt: "A happy patient treated in Türkiye through health tourism",
    pills: [
      "Hair Transplant",
      "Smile Design & Dental Health",
      "Facial Aesthetics",
      "Orthopedics",
    ],
    form: {
      name: "Full Name",
      phone: "Phone Number",
      email: "Email Address",
      submit: "Send",
      sent: "We have received your request. We will contact you shortly.",
      countryLabel: "Country code",
      searchCountry: "Search country",
      noResults: "No results found",
      invalidPhone: "Enter a valid phone number for the selected country.",
    },
  },
  treatments: {
    eyebrow: "TREATMENTS",
    title: "Featured Treatments",
    description:
      "The treatment areas most preferred by our expert doctors and accredited clinics.",
    link: "Learn More",
    items: [
      {
        title: "Hair Transplant",
        description:
          "Permanent and aesthetic results with natural-looking hair transplant techniques.",
      },
      {
        title: "Dental Treatment",
        description:
          "Aesthetic smile design, implants and all dental health services.",
      },
      {
        title: "Facial Aesthetics",
        description:
          "Botox, fillers, face lifts and more for a young and dynamic appearance.",
      },
      {
        title: "Orthopedics",
        description:
          "Modern surgical solutions for knee, hip and joint treatments.",
      },
    ],
  },
  partners: {
    eyebrow: "INSTITUTIONS WE WORK WITH",
    title: "Partner Institutions",
    imageAlt: "The building of our partner healthcare institution",
  },
  process: {
    eyebrow: "OUR PROCESS",
    title: "How Does It Work?",
    description:
      "Our expert doctors guide you through an accredited and transparent process.",
    steps: [
      {
        no: "01",
        title: "First Contact",
        description:
          "Get in touch so we can listen to your needs and exchange initial information.",
      },
      {
        no: "02",
        title: "Assessment",
        description:
          "We review your medical information and determine the most suitable treatment plan.",
      },
      {
        no: "03",
        title: "Doctor & Clinic Matching",
        description: "We share expert doctor and clinic options with you.",
      },
      {
        no: "04",
        title: "Travel Planning",
        description:
          "We arrange your flights, accommodation and all transfer services.",
      },
      {
        no: "05",
        title: "Treatment",
        description:
          "Your treatment is carried out safely, comfortably and to international standards.",
      },
      {
        no: "06",
        title: "Follow-up & Support",
        description:
          "We continue to provide post-treatment follow-up and consultancy support.",
      },
    ],
  },
  destinations: {
    eyebrow: "DESTINATIONS",
    title: "Popular Destinations",
    cta: "Discover",
    items: [
      { title: "Türkiye", cities: "Istanbul, Antalya, Bodrum" },
      { title: "Germany", cities: "Frankfurt" },
      { title: "Portugal", cities: "Lisbon, Porto" },
    ],
  },
  stats: [
    {
      value: "5+",
      label: "Countries",
      description: "We serve happy patients from all around the world.",
    },
    {
      value: "25,000+",
      label: "Patients",
      description:
        "Thousands of international patients regain their health with us every year.",
    },
    {
      value: "150+",
      label: "Expert Doctors",
      description:
        "Our experienced and internationally certified medical team.",
    },
    {
      value: "98%",
      label: "Satisfaction Rate",
      description: "Our patients' satisfaction is our greatest motivation.",
    },
  ],
  testimonials: {
    prev: "Previous review",
    next: "Next review",
    label: "Patient reviews",
    goTo: "Go to review",
    // The first review comes from the design. The rest are PLACEHOLDERS -
    // replace them with real patient reviews before going live. They are
    // deliberately not emitted as schema.org Review/AggregateRating data.
    items: [
      {
        name: "Anna L.",
        country: "France",
        rating: 5,
        quote:
          "I came to Istanbul for implants. The team was incredibly supportive throughout the entire process. The clinic, the hotel and the transfers were all perfect. I am very happy with the result and the service.",
      },
      {
        name: "Michael B.",
        country: "Germany",
        rating: 5,
        quote:
          "I came for a hair transplant. Every step from the consultation to the operation was planned in advance. Thanks to the interpreter support I never struggled at any stage.",
      },
      {
        name: "Sofia R.",
        country: "Portugal",
        rating: 5,
        quote:
          "I was in Izmir for my smile design. The clinic was very modern and the team was extremely attentive. My check-ups continued online after I returned home.",
      },
      {
        name: "James W.",
        country: "United Kingdom",
        rating: 5,
        quote:
          "I had knee replacement surgery. Airport pick-up, hotel, transfers... I never had to arrange a single thing myself. The whole process was transparent.",
      },
      {
        name: "Lena K.",
        country: "Netherlands",
        rating: 5,
        quote:
          "There were so many options when I was researching facial aesthetics. They genuinely guided me to the clinic and the doctor that suited me best.",
      },
    ],
  },
  faq: {
    eyebrow: "FREQUENTLY ASKED QUESTIONS",
    items: [
      {
        question: "What should I do before travelling to Türkiye for treatment?",
        answer:
          "You can start the pre-assessment process by sharing your medical history and reports with our team.",
      },
      {
        question: "Are accommodation and transfer services included?",
        answer:
          "Airport pick-up, hotel accommodation and clinic transfers are included in your package. The details are confirmed according to your treatment plan.",
      },
      {
        question: "How are post-treatment check-ups carried out?",
        answer:
          "Online follow-up consultations are scheduled after you return home, and you are referred to our partner clinics whenever needed.",
      },
      {
        question: "Which languages do you offer support in?",
        answer:
          "We provide interpreter support in Turkish, English, German, French and Arabic.",
      },
    ],
  },
  services: {
    eyebrow: "FULL SERVICE SUPPORT",
    title: "By Your Side at Every Step of Your Journey",
    description:
      "We provide every service you may need throughout your treatment from a single point. Your comfort and safety are our priority.",
    cta: "Explore Our Services",
    labels: [
      "Airport Service",
      "Interpreter Team",
      "Trusted Agencies",
      "Quality and Reputable\nHealthcare Institutions",
      "Professional\nConsultants",
      "Hotel Accommodation",
    ],
  },
  footer: {
    description:
      "Your trusted partner in international health tourism, by your side for healthier tomorrows.",
    columns: [
      {
        title: "QUICK LINKS",
        links: [
          { label: "Home", href: "#ana-sayfa" },
          { label: "About Us", href: "#hakkimizda" },
          { label: "Treatments", href: "#tedaviler" },
          { label: "Partner Institutions", href: "#anlasmali-kurumlar" },
          { label: "Destinations", href: "#rotalar" },
          { label: "Contact", href: "#iletisim" },
        ],
      },
      {
        title: "OUR SERVICES",
        links: [
          { label: "Airport Service", href: "#hizmetler" },
          { label: "Hotel Accommodation", href: "#hizmetler" },
          { label: "Interpreter Team", href: "#hizmetler" },
          { label: "Professional Consultants", href: "#hizmetler" },
          { label: "Trusted Agencies", href: "#hizmetler" },
          { label: "Healthcare Institutions", href: "#hizmetler" },
        ],
      },
    ],
    contactTitle: "CONTACT",
    address: ["...Mah. ...Cad.", "No: 123 .... / Istanbul"],
    legal: "All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
  },
};

export const content: Record<Locale, Dict> = { tr, en };

/** Dil değiştirici için: mevcut dilin karşısındaki sayfanın yolu. */
export const localePath: Record<Locale, string> = { tr: "/", en: "/en" };

/**
 * Bölüm çıpalarını tam yola çevirir: "#tedaviler" -> "/#tedaviler" (tr).
 * Alt sayfalarda (gizlilik, kullanım şartları) çıpaların çalışması için gerekli.
 */
export function sectionHref(locale: Locale, anchor: string) {
  const base = localePath[locale];
  return base === "/" ? `/${anchor}` : `${base}${anchor}`;
}
