/** Türkçe hukuki metinler (KVKK + GDPR taslağı). */

import type { LegalDocs } from "../legal";

const COMPANY = "[Şirket Unvanı]";

export const tr: LegalDocs = {
  privacy: {
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
