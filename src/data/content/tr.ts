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
    title: "MyDentist | Uluslararası Diş Sağlığı Turizmi",
    description:
      "Uluslararası diş sağlığı turizminde güvenilir çözüm ortağınız. Dental implant, Hollywood Smile, zirkonyum kaplama ve All on Four tedavilerinde akredite klinikler ve uzman diş hekimleri.",
    keywords: [
      "diş sağlığı turizmi",
      "medikal turizm",
      "dental implant",
      "Hollywood Smile",
      "zirkonyum kaplama",
      "All on Four",
      "gülüş tasarımı",
      "diş tedavisi",
      "Türkiye'de diş tedavisi",
    ],
    ogAlt: "MyDentist — uluslararası diş sağlığı turizmi",
  },
  h1:
    "Gülüşünüz için doğru tedaviyi birlikte planlayalım",
  heroLead:
    "Diş sağlığınız için ihtiyaçlarınıza uygun tedavi seçeneklerini öğrenin, sürecinizi güvenle planlayın ve size en uygun çözüme kolayca ulaşın.",
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
    imageAlt: "Diş tedavisi için Türkiye'ye gelen mutlu bir hasta",
    pills: [
      "Dental İmplant",
      "Hollywood Smile",
      "Zirkonyum Kaplama",
      "All On Four",
    ],
    form: {
      name: "Ad Soyad",
      phone: "Telefon Numarası",
      email: "Mail Adresi",
      submit: "Gönder",
      sending: "Gönderiliyor…",
      sent: "Talebiniz alındı. En kısa sürede sizinle iletişime geçeceğiz.",
      error:
        "Talebiniz iletilemedi. Lütfen tekrar deneyin veya info@mydentist.com adresine yazın.",
      countryLabel: "Ülke kodu",
      searchCountry: "Ülke ara",
      noResults: "Sonuç bulunamadı",
      invalidPhone: "Seçtiğiniz ülke için geçerli bir telefon numarası girin.",
    },
  },
  about: {
    eyebrow: "HAKKIMIZDA",
    title: "16 yıldır doğru tedaviye güvenle ulaşmanız için buradayız",
    paragraphs: [
      "16 yılı aşkın deneyimimizle, 7'den fazla ülkede oluşturduğumuz klinik ağımız üzerinden bugüne kadar 25.000'den fazla hastanın diş tedavisi sürecine destek olduk. Amacımız; yüksek kalite standartlarını, ulaşılabilir ve ekonomik tedavi seçenekleriyle bir araya getirerek hastalarımızın doğru tedaviye güvenle ulaşmasını sağlamak. İlk değerlendirmeden tedavi planlamasına, randevu sürecinden tedavi sonrasına kadar her aşamada şeffaf, hızlı ve profesyonel bir hizmet sunuyoruz.",
      "Tedavi süreçlerinde modern dijital teknolojilerden yararlanarak daha hızlı, doğru ve verimli bir planlama deneyimi sunuyoruz. Ağız içi fotoğraflar, panoramik röntgenler ve gerekli dijital görüntülemeler üzerinden ön değerlendirme yapılmasını sağlayarak, hastalarımızın zaman kaybetmeden uygun tedavi seçeneklerine ulaşmasına yardımcı oluyoruz. Hızlı iletişim, doğru yönlendirme ve etkin koordinasyon sayesinde sürecin her adımını mümkün olduğunca kolay ve konforlu hale getiriyoruz.",
      "Hizmet anlayışımız tedavinin tamamlanmasıyla sona ermiyor. Tedavi sonrası takip, kontrol süreçleri ve ihtiyaç halinde yeniden değerlendirme konusunda hastalarımızın yanında olmaya devam ediyoruz. Anlaşmalı kliniklerimizin sunduğu tedavi sonrası destek ve garanti koşullarını şeffaf şekilde aktararak, hastalarımızın yalnızca tedavi sırasında değil, sonrasında da kendilerini güvende hissetmelerini önemsiyoruz.",
    ],
  },
  treatments: {
    eyebrow: "TEDAVİLER",
    title: "Öne Çıkan Tedaviler",
    description:
      "Uzman diş hekimlerimiz ve akredite kliniklerimizle en çok tercih edilen tedavi alanlarımız.",
    link: "Detaylı Bilgi",
    items: [
      {
        title: "Dental İmplant",
        description:
          "Eksik dişlerin yerine kalıcı çözüm; doğal görünüm ve rahat çiğneme.",
      },
      {
        title: "Zirkonyum Kaplama",
        description:
          "Doğal diş görünümüne yakın, metal içermeyen dayanıklı kaplama.",
      },
      {
        title: "Hollywood Smile",
        description:
          "Yüz hatlarınıza uygun, bütüncül planlanan estetik gülüş tasarımı.",
      },
      {
        title: "All On Four",
        description:
          "Dört implant üzerine sabit protezle tam çene restorasyonu.",
      },
    ],
  },
  partners: {
    eyebrow: "İŞ BİRLİĞİ YAPTIĞIMIZ KURUMLAR",
    title: "Anlaşmalı Kurumlar",
    goToPage: "Sayfaya git",
  },
  process: {
    eyebrow: "SÜRECİMİZ",
    title: "Nasıl İşliyor?",
    // Tasarımda "Uzman doktorlarımız, pkred ve şeffaf bir süreçle yönetiliz." yazıyordu
    description: "Ücretsiz randevunuzu oluşturabilir veya ağız içi fotoğraf ve röntgenlerinizi bizimle paylaşabilirsiniz. Uzman diş hekimlerimizin değerlendirmesiyle size özel tedavi planınızı kolayca öğrenebilirsiniz.",
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
      value: "7+",
      label: "Ülke",
      description: "Dünyanın dört bir yanından mutlu hastalarımıza hizmet veriyoruz.",
    },
    {
      value: "25.000+",
      label: "Hasta",
      description: "Yıllık binlerce uluslararası hasta bizimle sağlığına kavuşuyor.",
    },
    {
      value: "16+",
      label: "Yıl Deneyim",
      description:
        "16 yılı aşkın süredir diş tedavisi süreçlerinde hastalarımızın yanındayız.",
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
        name: "Elif K.",
        country: "Türkiye",
        rating: 5,
        quote:
          "Zirkonyum kaplama yaptırdım. Renk seçiminden provaya kadar her adımda ne olacağını önceden anlattılar. Sonuç gerçekten doğal görünüyor, kaplama olduğunu kimse anlamıyor.",
      },
      {
        name: "Murat S.",
        country: "Türkiye",
        rating: 5,
        quote:
          "İki implant için başvurdum. Ağız içi fotoğraflarımı gönderdikten sonra planı önceden konuştuk, İstanbul'a gittiğimde hiçbir sürpriz olmadı. Kontrollerim de düzenli yapıldı.",
      },
      {
        name: "Zeynep A.",
        country: "Türkiye",
        rating: 5,
        quote:
          "Hollywood Smile için başvurdum. Provada sonucu önceden görünce içim rahat etti, istediğim birkaç ayarı da orada yaptık. İşlem sonrası kontrollerim hiç aksamadı.",
      },
      {
        name: "Anna L.",
        country: "Fransa",
        rating: 5,
        quote:
          "Gülüş tasarımı için İstanbul'a geldim. Ekip süreç boyunca inanılmaz destek oldu. Klinik, otel ve transferler kusursuzdu. Sonuçtan da hizmetten de çok memnunum.",
      },
      {
        name: "Michael B.",
        country: "Almanya",
        rating: 5,
        quote:
          "All on Four tedavisi oldum. Danışmadan operasyona kadar her adım önceden planlanmıştı. Tercüman desteği sayesinde hiçbir aşamada zorlanmadım.",
      },
      {
        name: "Sofia R.",
        country: "Portekiz",
        rating: 5,
        quote:
          "Zirkonyum kaplamalarım için İzmir'deydim. Klinik çok modern, ekip son derece ilgiliydi. Ülkeme döndükten sonra kontrollerim online devam etti.",
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
  contact: {
    eyebrow: "İLETİŞİM",
    title: "Sorularınızı yanıtlayalım",
    description:
      "Formu doldurun, uzman danışmanlarımız size dönsün. Tedavi planınız, süreç ve seyahat detayları için ücretsiz ön değerlendirme sunuyoruz.",
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
    legal: "Tüm hakları saklıdır.",
    privacy: "Gizlilik Politikası",
    terms: "Kullanım Şartları",
  },
};
