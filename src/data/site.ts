/**
 * Sayfadaki tüm metinler burada. Figma tasarımından birebir alındı.
 *
 * Tasarımdaki 3 yazım hatası düzeltildi (orijinali yorum satırında):
 *  - "pkred ve şeffaf bir süreçle yönetiliz"  -> "akredite ve şeffaf bir süreçle yönetiyoruz"
 *  - "Doktor & Klinik Eştirme"                -> "Doktor & Klinik Eşleştirme"
 *  - "Tercüman Eklibi" (footer)               -> "Tercüman Ekibi"
 */

export const brand = {
  name: "MyDentist",
  legalName: "MyDentist",
  email: "info@mydentist.com",
  phones: ["+00 000 000 00 00", "+00 000 000 00 00"],
  address: ["...Mah. ...Cad.", "No: 123 .... / İstanbul"],
  description:
    "Uluslararası sağlık turizmi alanında güvenilir çözüm ortağınız, sağlıklı yarınlar için yanınızdayız.",
};

export const navLinks = [
  { label: "Ana Sayfa", href: "#ana-sayfa" },
  /** Figma'nın 709px düzeninde bu link yok; dar ekranlarda gizleniyor. */
  { label: "Hakkımızda", href: "#hakkimizda", wideOnly: true },
  { label: "Tedaviler", href: "#tedaviler" },
  { label: "Anlaşmalı Kurumlar", href: "#anlasmali-kurumlar" },
  { label: "Rotalar", href: "#rotalar" },
  { label: "İletişim", href: "#iletisim" },
];

/** Hero görselinin üzerinde duran yüzen etiketler */
export const heroPills = [
  { label: "Saç Ekimi", icon: "hair" as const },
  { label: "Diş Tasarımı & Diş Sağlığı", icon: "tooth" as const },
  { label: "Yüz Estetiği", icon: "face" as const },
  { label: "Ortopedi", icon: "ortho" as const },
];

export const treatments = [
  {
    slug: "sac-ekimi",
    title: "Saç Ekimi",
    description:
      "Doğal görünümlü saç ekimi yöntemleri ile kalıcı ve estetik sonuçlar.",
    icon: "hair" as const,
    image: "/images/tedaviler/sac-ekimi-desktop.webp",
  },
  {
    slug: "dis-tedavisi",
    title: "Diş Tedavisi",
    description: "Estetik gülüş tasarımı, implant ve tüm diş sağlığı hizmetleri.",
    icon: "tooth" as const,
    image: "/images/tedaviler/dis-tedavileri-desktop.webp",
  },
  {
    slug: "yuz-estetigi",
    title: "Yüz Estetiği",
    description:
      "Botoks, dolgu, yüz germe ve daha fazlası ile genç ve dinamik görünüm.",
    icon: "face" as const,
    image: "/images/tedaviler/yuz-estetigi-desktop.webp",
  },
  {
    slug: "ortopedi",
    title: "Ortopedi",
    description: "Diz, kalça ve eklem tedavilerinde modern cerrahi çözümler.",
    icon: "ortho" as const,
    image: "/images/tedaviler/ortopedi-desktop.webp",
  },
];

export const partners = [
  { name: "HOSPİTADENT", suffix: ["HASTANELER", "GRUBU"] },
  { name: "ACIBADEM", suffix: ["HEALTHPOINT"] },
  { name: "DENTGROUP", suffix: ["TURKEY"] },
  { name: "LIV HOSPITAL", suffix: ["ULUSLARARASI"] },
  { name: "MEMORIAL", suffix: ["HASTANELER", "GRUBU"] },
  { name: "NP İSTANBUL", suffix: ["BEYİN", "HASTANESİ"] },
];

export const processSteps = [
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
    description:
      "Uzman doktor ve klinik alternatiflerini sizinle paylaşırız.",
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
];

export const destinations = [
  {
    slug: "turkiye",
    title: "Türkiye",
    cities: "İstanbul, Antalya, Bodrum",
    image: "/images/noktalar/turkiye-desktop.webp",
  },
  {
    slug: "almanya",
    title: "Almanya",
    cities: "Frankfurt",
    image: "/images/noktalar/almanya-desktop.webp",
  },
  {
    slug: "portekiz",
    title: "Portekiz",
    cities: "Lizbon, Porto",
    image: "/images/noktalar/portekiz-desktop.webp",
  },
];

export const stats = [
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
];

/**
 * Tasarımda tek yorum vardı (Anna L.). Karusel oklarını çalıştırmak için
 * buraya yeni kayıt eklemen yeterli; tek kayıt varken oklar pasif görünür.
 */
export const testimonials = [
  {
    name: "Anna L.",
    country: "Fransa",
    rating: 5,
    quote:
      "İmplantlar için İstanbul'a geldim. Tüm süreç boyunca ekip inanılmaz destek oldu. Klinik, otel, transfer her şey mükemmeldi. Sonuçtan ve hizmetten çok memnunum.",
  },
];

/**
 * Tasarımda sadece ilk sorunun cevabı açıktı; diğer üçünün metni
 * tasarımda yoktu, aşağıdakiler yer tutucudur - gerçek metinlerle değiştir.
 */
export const faqs = [
  {
    question: "Tedavi için Türkiye'ye gitmeden önce ne yapmalıyım?",
    answer:
      "Tıbbi geçmişinizi ve raporlarınızı ekibimizle paylaşarak ön değerlendirme sürecini başlatabilirsiniz.",
  },
  {
    question: "Konaklama ve transfer hizmetleri dahil mi?",
    answer:
      "Havalimanı karşılama, otel konaklaması ve klinik transferleri paketinize dahildir. Detaylar tedavi planınıza göre netleşir.",
    placeholder: true,
  },
  {
    question: "Tedavi sonrası kontroller nasıl yapılıyor?",
    answer:
      "Ülkenize döndükten sonra online kontrol görüşmeleri planlanır, gerekli durumlarda anlaşmalı kliniklerimize yönlendirme yapılır.",
    placeholder: true,
  },
  {
    question: "Hangi dillerde hizmet veriyorsunuz?",
    answer:
      "Türkçe, İngilizce, Almanca, Fransızca ve Arapça dillerinde tercüman desteği sağlıyoruz.",
    placeholder: true,
  },
];

export const services = [
  { label: "Havaalanı Hizmeti", icon: "plane" as const },
  { label: "Tercüman Ekibi", icon: "people" as const },
  { label: "Güvenilir Acentalar", icon: "diamond" as const },
  { label: "Kaliteli ve Saygın\nSağlık Kuruluşları", icon: "shield" as const },
  { label: "Profesyonel\nDanışmanlar", icon: "person" as const },
  { label: "Otel Konaklama", icon: "hotel" as const },
];

export const footerColumns = [
  {
    title: "HIZLI LINKLER",
    links: [
      "Ana Sayfa",
      "Hakkımızda",
      "Tedaviler",
      "Anlaşmalı Kurumlar",
      "Rotalar",
      "İletişim",
    ],
  },
  {
    title: "HİZMETLERİMİZ",
    links: [
      "Havaalanı Hizmeti",
      "Otel Konaklama",
      // Tasarımda "Tercüman Eklibi" yazıyordu
      "Tercüman Ekibi",
      "Profesyonel Danışmanlar",
      "Güvenilir Acentalar",
      "Sağlık Kuruluşları",
    ],
  },
];
