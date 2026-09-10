import type { Locale } from "./content";

/**
 * ŞABLON HUKUKİ METİNLER.
 *
 * Bu metinler sağlık turizmi aracılık hizmeti veren bir işletme için
 * hazırlanmış taslaklardır; KVKK ve GDPR başlıklarını kapsar ama
 * HUKUKİ DANIŞMANLIK DEĞİLDİR. Yayına almadan önce:
 *   1. `draft: true` değerini false yap (sayfadaki uyarı kutusu kalkar),
 *   2. köşeli parantezli [...] alanları gerçek şirket bilgileriyle doldur,
 *   3. bir avukata inceletmeden yayına alma.
 */

export type LegalBlock = string | { list: string[] };

export type LegalSection = {
  heading: string;
  blocks: LegalBlock[];
};

export type LegalDoc = {
  slug: string;
  title: string;
  description: string;
  updatedLabel: string;
  updatedAt: string;
  backToHome: string;
  /** true iken sayfanın üstünde "taslak metin" uyarısı gösterilir. */
  draft: boolean;
  draftNotice: string;
  sections: LegalSection[];
};

export type LegalDocs = { privacy: LegalDoc; terms: LegalDoc };

const COMPANY = "[Şirket Unvanı]";
const COMPANY_EN = "[Company Legal Name]";

const tr: LegalDocs = {
  privacy: {
    slug: "gizlilik-politikasi",
    title: "Gizlilik Politikası ve KVKK Aydınlatma Metni",
    description:
      "MyDentist olarak kişisel verilerinizi ve sağlık verilerinizi nasıl işlediğimizi, kimlerle paylaştığımızı ve haklarınızı açıklıyoruz.",
    updatedLabel: "Son güncelleme",
    updatedAt: "10 Eylül 2026",
    backToHome: "Ana sayfaya dön",
    draft: true,
    draftNotice:
      "Bu metin bir şablondur. Yayına almadan önce köşeli parantez içindeki alanları doldurun ve bir hukuk danışmanına inceletin.",
    sections: [
      {
        heading: "1. Veri sorumlusu",
        blocks: [
          `Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") ve Avrupa Birliği Genel Veri Koruma Tüzüğü ("GDPR") kapsamında, veri sorumlusu sıfatıyla ${COMPANY} tarafından hazırlanmıştır.`,
          {
            list: [
              `Unvan: ${COMPANY}`,
              "Adres: [Açık adres]",
              "MERSİS / Vergi No: [Numara]",
              "E-posta: info@mydentist.com",
              "KEP adresi: [KEP adresi]",
            ],
          },
        ],
      },
      {
        heading: "2. İşlediğimiz kişisel veriler",
        blocks: [
          "Web sitemizdeki iletişim formunu doldurduğunuzda veya bizimle iletişime geçtiğinizde aşağıdaki verileri işleriz:",
          {
            list: [
              "Kimlik verisi: ad, soyad",
              "İletişim verisi: telefon numarası, e-posta adresi, ülke bilgisi",
              "Sağlık verisi: tedavi talebiniz kapsamında bizimle paylaştığınız tıbbi geçmiş, raporlar, görüntüler ve teşhis bilgileri",
              "İşlem güvenliği verisi: IP adresi, tarayıcı ve cihaz bilgisi, site kullanım kayıtları",
              "Seyahat verisi: pasaport bilgisi, uçuş ve konaklama tercihleri (yalnızca organizasyon talep ettiğinizde)",
            ],
          },
          "Sağlık verileri KVKK m.6 ve GDPR m.9 uyarınca özel nitelikli kişisel veridir ve yalnızca açık rızanız ile işlenir.",
        ],
      },
      {
        heading: "3. İşleme amaçlarımız",
        blocks: [
          {
            list: [
              "Tedavi talebinizi değerlendirmek ve size uygun klinik/doktor alternatiflerini sunmak",
              "Ön değerlendirme, fiyatlandırma ve teklif süreçlerini yürütmek",
              "Seyahat, konaklama, transfer ve tercüman hizmetlerini organize etmek",
              "Tedavi sonrası takip ve danışmanlık desteği sağlamak",
              "Yasal yükümlülüklerimizi yerine getirmek ve olası uyuşmazlıklarda hakkımızı korumak",
            ],
          },
        ],
      },
      {
        heading: "4. Hukuki sebepler",
        blocks: [
          "Kişisel verileriniz; sözleşmenin kurulması veya ifası için gerekli olması (KVKK m.5/2-c, GDPR m.6/1-b), hukuki yükümlülüğümüzün yerine getirilmesi (KVKK m.5/2-ç, GDPR m.6/1-c) ve meşru menfaatimiz (GDPR m.6/1-f) hukuki sebeplerine dayanarak işlenir.",
          "Sağlık verileriniz yalnızca açık rızanıza dayanarak (KVKK m.6/2, GDPR m.9/2-a) işlenir. Açık rızanızı dilediğiniz zaman geri çekebilirsiniz; geri çekme, o ana kadar yapılan işlemenin hukuka uygunluğunu etkilemez.",
        ],
      },
      {
        heading: "5. Verilerin aktarılması",
        blocks: [
          "Hizmetin niteliği gereği verileriniz aşağıdaki taraflarla, yalnızca gerekli olan kapsamda paylaşılır:",
          {
            list: [
              "Anlaşmalı hastane, klinik ve hekimler",
              "Seyahat acentesi, havayolu, otel ve transfer sağlayıcıları",
              "Tercümanlık hizmeti sağlayıcıları",
              "Yasal olarak bilgi talep etmeye yetkili kamu kurum ve kuruluşları",
              "Barındırma, e-posta ve CRM altyapısı sağlayıcılarımız",
            ],
          },
          "Yurt dışına aktarım söz konusu olduğunda, KVKK m.9 ve GDPR Bölüm V uyarınca açık rızanız alınır veya standart sözleşme hükümleri gibi uygun güvenceler sağlanır.",
        ],
      },
      {
        heading: "6. Saklama süresi",
        blocks: [
          "Kişisel verilerinizi, işleme amacının gerektirdiği süre boyunca ve ilgili mevzuatta öngörülen zamanaşımı süreleri sona erene kadar saklarız. Süre dolduğunda veriler silinir, yok edilir veya anonim hâle getirilir.",
        ],
      },
      {
        heading: "7. Çerezler",
        blocks: [
          "Sitemizde oturumun sürdürülmesi ve dil tercihinizin hatırlanması için zorunlu çerezler kullanılır. Analitik veya pazarlama çerezleri kullanılması hâlinde, bunlar yalnızca onayınızla çalıştırılır ve tarayıcı ayarlarınızdan dilediğiniz zaman engelleyebilirsiniz.",
        ],
      },
      {
        heading: "8. Haklarınız",
        blocks: [
          "KVKK m.11 ve GDPR m.15-22 uyarınca aşağıdaki haklara sahipsiniz:",
          {
            list: [
              "Kişisel verilerinizin işlenip işlenmediğini öğrenme ve bunlara erişim talep etme",
              "Eksik veya yanlış işlenmiş verilerin düzeltilmesini isteme",
              "Silinmesini veya yok edilmesini isteme",
              "İşlemenin kısıtlanmasını isteme ve işlemeye itiraz etme",
              "Verilerinizin taşınabilirliğini talep etme",
              "Otomatik sistemlerle analiz sonucu aleyhinize bir sonuç doğmasına itiraz etme",
              "Kanuna aykırı işleme nedeniyle uğradığınız zararın giderilmesini talep etme",
            ],
          },
        ],
      },
      {
        heading: "9. Veri güvenliği",
        blocks: [
          "Verilerinizi yetkisiz erişime, kayba ve ifşaya karşı korumak için erişim yetkilendirmesi, şifreleme, güvenli iletişim (HTTPS) ve düzenli denetim gibi idari ve teknik tedbirleri uygularız.",
        ],
      },
      {
        heading: "10. Başvuru",
        blocks: [
          `Haklarınızı kullanmak için taleplerinizi info@mydentist.com adresine veya ${COMPANY} açık adresine yazılı olarak iletebilirsiniz. Başvurularınız en geç 30 gün içinde sonuçlandırılır. Sonuçtan memnun kalmazsanız Kişisel Verileri Koruma Kurumu'na veya bulunduğunuz ülkedeki yetkili veri koruma otoritesine şikâyette bulunabilirsiniz.`,
        ],
      },
      {
        heading: "11. Değişiklikler",
        blocks: [
          "Bu politikada değişiklik yapma hakkımız saklıdır. Güncel sürüm her zaman bu sayfada yayımlanır ve sayfanın üstündeki tarih güncellenir.",
        ],
      },
    ],
  },

  terms: {
    slug: "kullanim-sartlari",
    title: "Kullanım Şartları",
    description:
      "MyDentist web sitesinin ve aracılık hizmetlerinin kullanımına ilişkin şartlar, sorumluluk sınırları ve tıbbi sorumluluk reddi.",
    updatedLabel: "Son güncelleme",
    updatedAt: "10 Eylül 2026",
    backToHome: "Ana sayfaya dön",
    draft: true,
    draftNotice:
      "Bu metin bir şablondur. Yayına almadan önce köşeli parantez içindeki alanları doldurun ve bir hukuk danışmanına inceletin.",
    sections: [
      {
        heading: "1. Taraflar ve kapsam",
        blocks: [
          `Bu kullanım şartları, ${COMPANY} ("MyDentist", "biz") tarafından işletilen bu web sitesini ziyaret eden veya hizmetlerimizden yararlanan tüm kullanıcılar için geçerlidir. Siteyi kullanarak bu şartları kabul etmiş sayılırsınız.`,
        ],
      },
      {
        heading: "2. Hizmetimizin niteliği",
        blocks: [
          "MyDentist bir sağlık turizmi aracılık ve danışmanlık hizmeti sunar. Tıbbi teşhis, tedavi veya cerrahi müdahale hizmeti vermiyoruz.",
          "Tüm tıbbi işlemler, ilgili ülkenin mevzuatına göre ruhsatlandırılmış anlaşmalı hastaneler, klinikler ve bu kurumlarda görev yapan hekimler tarafından, kendi sorumlulukları altında gerçekleştirilir. Hasta–hekim ilişkisi doğrudan sizinle sağlık kuruluşu arasında kurulur.",
        ],
      },
      {
        heading: "3. Tıbbi sorumluluk reddi",
        blocks: [
          "Sitede yer alan tedavi açıklamaları, süreç anlatımları ve benzeri içerikler yalnızca genel bilgilendirme amaçlıdır; tıbbi tavsiye niteliği taşımaz ve hekim muayenesinin yerine geçmez.",
          "Hiçbir tedavi sonucu garanti edilmez. Tedavi sonuçları kişiden kişiye değişir ve nihai değerlendirme yalnızca sizi muayene eden hekim tarafından yapılabilir. Acil sağlık durumlarında lütfen doğrudan acil servise başvurun.",
        ],
      },
      {
        heading: "4. Kullanıcı yükümlülükleri",
        blocks: [
          {
            list: [
              "Formlarda ve yazışmalarda verdiğiniz bilgilerin doğru, güncel ve eksiksiz olmasından siz sorumlusunuz",
              "Sağlık geçmişinizi, kullandığınız ilaçları ve alerjilerinizi eksiksiz bildirmeniz tedavi güvenliğiniz açısından zorunludur",
              "Siteyi hukuka aykırı amaçlarla, otomatik veri toplama araçlarıyla veya sistemin işleyişini bozacak şekilde kullanamazsınız",
              "18 yaşından küçükseniz hizmetlerimizden yalnızca veli veya vasinizin onayıyla yararlanabilirsiniz",
            ],
          },
        ],
      },
      {
        heading: "5. Teklif, rezervasyon ve iptal",
        blocks: [
          "Site üzerinden ilettiğiniz talepler bağlayıcı bir rezervasyon oluşturmaz; yalnızca ön görüşme başlatır. Fiyatlar, tedavi kapsamı, ödeme koşulları ve iptal/iade şartları sizinle imzalanacak ayrı hizmet sözleşmesinde düzenlenir.",
          "Sitede yer alan fiyat ve kampanya bilgileri bilgilendirme amaçlıdır; kur değişimleri ve tedavi planındaki farklılıklar nedeniyle değişebilir.",
        ],
      },
      {
        heading: "6. Fikri mülkiyet",
        blocks: [
          `Sitedeki tüm metin, görsel, logo, tasarım ve yazılım unsurlarının hakları ${COMPANY} veya lisans verenlerine aittir. Yazılı izin olmaksızın kopyalanamaz, çoğaltılamaz veya ticari amaçla kullanılamaz.`,
        ],
      },
      {
        heading: "7. Üçüncü taraf bağlantıları",
        blocks: [
          "Site, anlaşmalı kurumlara veya üçüncü taraflara ait bağlantılar içerebilir. Bu sitelerin içeriğinden, gizlilik uygulamalarından veya hizmetlerinden sorumlu değiliz.",
        ],
      },
      {
        heading: "8. Sorumluluğun sınırlandırılması",
        blocks: [
          "Sitenin kesintisiz veya hatasız çalışacağı garanti edilmez. Mevzuatın izin verdiği ölçüde; sitenin kullanımından doğan dolaylı zararlardan, veri kaybından veya kâr kaybından sorumlu değiliz.",
          "Anlaşmalı sağlık kuruluşlarının veya diğer hizmet sağlayıcıların kusurundan doğan tıbbi sorumluluk ilgili kuruma aittir.",
        ],
      },
      {
        heading: "9. Uygulanacak hukuk ve yetki",
        blocks: [
          "Bu şartlara Türkiye Cumhuriyeti hukuku uygulanır. Uyuşmazlıkların çözümünde [İl] Mahkemeleri ve İcra Daireleri yetkilidir. Tüketici sıfatına sahip kullanıcıların tüketici hakem heyetlerine ve tüketici mahkemelerine başvurma hakkı saklıdır.",
        ],
      },
      {
        heading: "10. Değişiklikler ve iletişim",
        blocks: [
          "Bu şartları güncelleme hakkımız saklıdır; güncel sürüm bu sayfada yayımlanır. Sorularınız için info@mydentist.com adresinden bize ulaşabilirsiniz.",
        ],
      },
    ],
  },
};

const en: LegalDocs = {
  privacy: {
    slug: "privacy-policy",
    title: "Privacy Policy and Data Protection Notice",
    description:
      "How MyDentist processes your personal and health data, who we share it with, and the rights you have under GDPR and Turkish data protection law.",
    updatedLabel: "Last updated",
    updatedAt: "10 September 2026",
    backToHome: "Back to home",
    draft: true,
    draftNotice:
      "This is a template. Before going live, fill in the bracketed fields and have the text reviewed by a legal advisor.",
    sections: [
      {
        heading: "1. Data controller",
        blocks: [
          `This notice is issued by ${COMPANY_EN} as data controller under the EU General Data Protection Regulation ("GDPR") and Turkish Personal Data Protection Law No. 6698 ("KVKK").`,
          {
            list: [
              `Legal name: ${COMPANY_EN}`,
              "Address: [Full address]",
              "Trade / tax registration number: [Number]",
              "Email: info@mydentist.com",
            ],
          },
        ],
      },
      {
        heading: "2. Personal data we process",
        blocks: [
          "When you complete the contact form on our website or otherwise get in touch, we process the following:",
          {
            list: [
              "Identity data: first name, last name",
              "Contact data: phone number, email address, country",
              "Health data: medical history, reports, images and diagnostic information you share with us in connection with your treatment enquiry",
              "Technical data: IP address, browser and device information, site usage logs",
              "Travel data: passport details, flight and accommodation preferences (only where you ask us to arrange them)",
            ],
          },
          "Health data is a special category of personal data under GDPR Art. 9 and KVKK Art. 6, and is processed only with your explicit consent.",
        ],
      },
      {
        heading: "3. Purposes of processing",
        blocks: [
          {
            list: [
              "Assessing your treatment enquiry and proposing suitable clinics and doctors",
              "Carrying out pre-assessment, pricing and quotation processes",
              "Arranging travel, accommodation, transfer and interpreter services",
              "Providing post-treatment follow-up and consultancy support",
              "Meeting our legal obligations and establishing or defending legal claims",
            ],
          },
        ],
      },
      {
        heading: "4. Legal bases",
        blocks: [
          "We process your personal data on the basis of the performance of a contract (GDPR Art. 6(1)(b)), compliance with a legal obligation (Art. 6(1)(c)) and our legitimate interests (Art. 6(1)(f)).",
          "Your health data is processed solely on the basis of your explicit consent (GDPR Art. 9(2)(a)). You may withdraw your consent at any time; withdrawal does not affect the lawfulness of processing carried out before it.",
        ],
      },
      {
        heading: "5. Sharing and international transfers",
        blocks: [
          "Given the nature of our service, your data is shared, strictly to the extent necessary, with:",
          {
            list: [
              "Partner hospitals, clinics and physicians",
              "Travel agencies, airlines, hotels and transfer providers",
              "Interpreting service providers",
              "Public authorities legally entitled to request information",
              "Our hosting, email and CRM infrastructure providers",
            ],
          },
          "Where data is transferred outside your country, we rely on your explicit consent or put appropriate safeguards in place, such as standard contractual clauses, in line with GDPR Chapter V.",
        ],
      },
      {
        heading: "6. Retention",
        blocks: [
          "We keep your personal data for as long as necessary for the purposes described above and until the statutory limitation periods expire. Once that period ends, the data is deleted, destroyed or anonymised.",
        ],
      },
      {
        heading: "7. Cookies",
        blocks: [
          "We use strictly necessary cookies to maintain your session and remember your language preference. Any analytics or marketing cookies are set only with your consent, and you can block them at any time through your browser settings.",
        ],
      },
      {
        heading: "8. Your rights",
        blocks: [
          "Under GDPR Art. 15-22 and KVKK Art. 11 you have the right to:",
          {
            list: [
              "Be informed whether your data is processed and obtain access to it",
              "Have inaccurate or incomplete data corrected",
              "Request erasure of your data",
              "Request restriction of processing and object to processing",
              "Receive your data in a portable format",
              "Object to decisions based solely on automated processing",
              "Claim compensation for damage caused by unlawful processing",
            ],
          },
        ],
      },
      {
        heading: "9. Security",
        blocks: [
          "We apply administrative and technical safeguards — access control, encryption, secure transport (HTTPS) and regular audits — to protect your data against unauthorised access, loss and disclosure.",
        ],
      },
      {
        heading: "10. Contacting us",
        blocks: [
          `To exercise your rights, write to info@mydentist.com or to the registered address of ${COMPANY_EN}. We respond within 30 days at the latest. If you are not satisfied with our response, you may lodge a complaint with your local supervisory authority or, in Türkiye, with the Personal Data Protection Authority.`,
        ],
      },
      {
        heading: "11. Changes",
        blocks: [
          "We may update this policy. The current version is always published on this page and the date at the top is updated accordingly.",
        ],
      },
    ],
  },

  terms: {
    slug: "terms-of-use",
    title: "Terms of Use",
    description:
      "Terms governing the use of the MyDentist website and our health tourism consultancy services, including medical disclaimers and limitations of liability.",
    updatedLabel: "Last updated",
    updatedAt: "10 September 2026",
    backToHome: "Back to home",
    draft: true,
    draftNotice:
      "This is a template. Before going live, fill in the bracketed fields and have the text reviewed by a legal advisor.",
    sections: [
      {
        heading: "1. Parties and scope",
        blocks: [
          `These terms apply to everyone who visits this website or uses the services operated by ${COMPANY_EN} ("MyDentist", "we"). By using the site you agree to these terms.`,
        ],
      },
      {
        heading: "2. Nature of our service",
        blocks: [
          "MyDentist provides health tourism intermediary and consultancy services. We do not provide medical diagnosis, treatment or surgical procedures.",
          "All medical procedures are performed by partner hospitals, clinics and physicians licensed under the law of the relevant country, under their own responsibility. The patient–physician relationship is established directly between you and the healthcare provider.",
        ],
      },
      {
        heading: "3. Medical disclaimer",
        blocks: [
          "Treatment descriptions, process explanations and similar content on this site are for general information only. They do not constitute medical advice and are not a substitute for examination by a physician.",
          "No treatment outcome is guaranteed. Results vary from person to person and only the physician examining you can make a final assessment. In a medical emergency, please contact emergency services directly.",
        ],
      },
      {
        heading: "4. Your obligations",
        blocks: [
          {
            list: [
              "You are responsible for ensuring the information you provide is accurate, current and complete",
              "For your own safety, you must fully disclose your medical history, medication and allergies",
              "You may not use the site for unlawful purposes, with automated scraping tools, or in a way that disrupts its operation",
              "If you are under 18, you may use our services only with the consent of a parent or guardian",
            ],
          },
        ],
      },
      {
        heading: "5. Quotes, booking and cancellation",
        blocks: [
          "Enquiries submitted through the site do not create a binding booking; they only start an initial consultation. Prices, treatment scope, payment terms and cancellation/refund conditions are set out in a separate service agreement signed with you.",
          "Prices and campaign information shown on the site are indicative and may change due to exchange rates or differences in your treatment plan.",
        ],
      },
      {
        heading: "6. Intellectual property",
        blocks: [
          `All text, images, logos, design and software on this site belong to ${COMPANY_EN} or its licensors. They may not be copied, reproduced or used commercially without written permission.`,
        ],
      },
      {
        heading: "7. Third-party links",
        blocks: [
          "The site may contain links to partner institutions or third parties. We are not responsible for the content, privacy practices or services of those sites.",
        ],
      },
      {
        heading: "8. Limitation of liability",
        blocks: [
          "We do not warrant that the site will operate uninterrupted or error-free. To the extent permitted by law, we are not liable for indirect damages, data loss or loss of profit arising from use of the site.",
          "Medical liability arising from the fault of a partner healthcare institution or other service provider rests with that provider.",
        ],
      },
      {
        heading: "9. Governing law and jurisdiction",
        blocks: [
          "These terms are governed by the laws of the Republic of Türkiye. The courts and enforcement offices of [City] have jurisdiction. Users qualifying as consumers retain their right to apply to consumer arbitration committees and consumer courts.",
        ],
      },
      {
        heading: "10. Changes and contact",
        blocks: [
          "We may update these terms; the current version is published on this page. For questions, contact us at info@mydentist.com.",
        ],
      },
    ],
  },
};

export const legal: Record<Locale, LegalDocs> = { tr, en };

/** Dil + belge -> URL yolu (footer, sitemap ve hreflang bunu kullanır). */
export function legalPath(locale: Locale, doc: keyof LegalDocs) {
  const slug = legal[locale][doc].slug;
  return locale === "tr" ? `/${slug}` : `/en/${slug}`;
}
