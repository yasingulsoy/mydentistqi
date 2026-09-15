import type { Locale, TreatmentIconKey } from "./content";

/**
 * "Detaylı Bilgi" ve "Keşfedin" bağlantılarının açtığı alt sayfalar.
 *
 * İÇERİK TASLAKTIR. Tıbbi metinler bilinçli olarak genel tutuldu; kesin
 * süre/başarı oranı/fiyat iddiası yok. Yayına almadan önce klinik ekibe
 * doğrulatın ve `draft: true` değerini kaldırın.
 */

export type Highlight = { label: string; value: string };

export type DetailSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
};

export type DetailContent = {
  title: string;
  tagline: string;
  metaDescription: string;
  intro: string[];
  highlights: Highlight[];
  sections: DetailSection[];
  faq: { question: string; answer: string }[];
};

export type DetailPage = {
  key: string;
  slug: Record<Locale, string>;
  image: string;
  icon?: TreatmentIconKey;
  content: Record<Locale, DetailContent>;
};

export type DetailKind = "treatment" | "destination";

export const detailBase: Record<DetailKind, Record<Locale, string>> = {
  treatment: { tr: "/tedaviler", en: "/en/treatments" },
  destination: { tr: "/rotalar", en: "/en/destinations" },
};

/* ------------------------------------------------------------------ */
/*  TEDAVİLER                                                          */
/* ------------------------------------------------------------------ */

export const treatmentPages: DetailPage[] = [
  {
    key: "hair",
    icon: "hair",
    slug: { tr: "sac-ekimi", en: "hair-transplant" },
    image: "/images/tedaviler/sac-ekimi-desktop.webp",
    content: {
      tr: {
        title: "Saç Ekimi",
        tagline: "FUE ve DHI yöntemleriyle doğal görünümlü, kalıcı sonuçlar",
        metaDescription:
          "Saç ekimi yöntemleri, süreç, iyileşme ve sık sorulan sorular. MyDentist ile akredite kliniklerde saç ekimi planlaması.",
        intro: [
          "Saç ekimi, kişinin kendi saç köklerinin dökülmenin görüldüğü bölgeye aktarıldığı mikrocerrahi bir işlemdir. Nakledilen kökler genetik olarak dökülmeye dirençli bölgeden alındığı için sonuç kalıcıdır.",
          "Uygunluk, saç kaybının derecesine ve donör bölgenin yoğunluğuna göre değişir. Bu değerlendirmeyi yalnızca sizi muayene eden hekim yapabilir; aşağıdaki bilgiler genel bilgilendirme amaçlıdır.",
        ],
        highlights: [
          { label: "İşlem süresi", value: "6–8 saat" },
          { label: "Anestezi", value: "Lokal" },
          { label: "Günlük hayata dönüş", value: "2–3 gün" },
          { label: "Sonucun oturması", value: "12–18 ay" },
        ],
        sections: [
          {
            heading: "Uygulanan yöntemler",
            list: [
              "FUE (Follicular Unit Extraction) — kökler tek tek alınır, iz bırakmayan en yaygın yöntemdir",
              "DHI (Direct Hair Implantation) — kanal açma ve yerleştirme tek adımda yapılır, sık yerleşim sağlar",
              "Safir FUE — safir uçlu aletlerle daha küçük kanallar açılır, iyileşme süresi kısalabilir",
            ],
          },
          {
            heading: "Süreç nasıl ilerliyor?",
            paragraphs: [
              "Fotoğraflarınız ve saç kaybı geçmişiniz üzerinden ön değerlendirme yapılır, size uygun klinik ve hekim alternatifleri paylaşılır. Türkiye'ye varışınızda hekim muayenesi ve saç çizgisi tasarımı yapılır.",
              "İşlem aynı gün veya ertesi gün gerçekleştirilir. Ertesi gün ilk yıkama kontrolü yapılır ve bakım talimatları anlatılır.",
            ],
          },
          {
            heading: "İyileşme ve sonrası",
            paragraphs: [
              "İlk günlerde ekim bölgesinde kabuklanma ve hafif kızarıklık normaldir. İlk 2–4 hafta içinde ekilen saçların dökülmesi (şok dökülme) beklenen bir aşamadır; kökler yerinde kalır ve yeni saçlar çıkmaya başlar.",
              "Tedavi sonrası takip görüşmeleri ülkenize döndükten sonra online olarak sürdürülür.",
            ],
          },
        ],
        faq: [
          {
            question: "Saç ekimi acı verir mi?",
            answer:
              "İşlem lokal anestezi altında yapılır, bu nedenle işlem sırasında ağrı hissedilmez. Anestezi sonrası hafif hassasiyet olabilir ve hekiminizin önerdiği ağrı kesicilerle kontrol altına alınır.",
          },
          {
            question: "Kaç greft gerekir?",
            answer:
              "Greft sayısı saç kaybının derecesine ve hedeflenen yoğunluğa göre değişir. Net sayı ancak muayene sonrası hekim tarafından belirlenir.",
          },
          {
            question: "Sonuçlar ne zaman görünür?",
            answer:
              "Yeni saçlar genellikle 3–4. aydan itibaren çıkmaya başlar. Nihai görünüm 12–18 ay içinde oturur.",
          },
        ],
      },
      en: {
        title: "Hair Transplant",
        tagline: "Natural-looking, permanent results with FUE and DHI techniques",
        metaDescription:
          "Hair transplant techniques, the process, recovery and frequently asked questions. Plan your treatment with MyDentist at accredited clinics.",
        intro: [
          "A hair transplant is a microsurgical procedure in which your own hair follicles are moved to the area affected by hair loss. Because the follicles are taken from a genetically resistant donor area, the result is permanent.",
          "Suitability depends on the degree of hair loss and the density of your donor area. Only the physician examining you can make that assessment; the information below is general guidance.",
        ],
        highlights: [
          { label: "Procedure time", value: "6–8 hours" },
          { label: "Anaesthesia", value: "Local" },
          { label: "Back to daily life", value: "2–3 days" },
          { label: "Final result", value: "12–18 months" },
        ],
        sections: [
          {
            heading: "Techniques we work with",
            list: [
              "FUE (Follicular Unit Extraction) — follicles are extracted individually; the most common scar-free method",
              "DHI (Direct Hair Implantation) — channel opening and placement happen in one step, allowing dense placement",
              "Sapphire FUE — sapphire-tipped tools open smaller channels, which can shorten recovery",
            ],
          },
          {
            heading: "How the process works",
            paragraphs: [
              "A pre-assessment is made from your photographs and hair loss history, and suitable clinic and physician options are shared with you. On arrival you have a physical examination and your hairline is designed.",
              "The procedure takes place the same day or the following day. The first wash and check-up is carried out the next day, together with aftercare instructions.",
            ],
          },
          {
            heading: "Recovery and aftercare",
            paragraphs: [
              "Crusting and mild redness in the recipient area are normal in the first days. Shedding of the transplanted hairs within the first 2–4 weeks (shock loss) is an expected stage; the follicles stay in place and new hair begins to grow.",
              "Follow-up consultations continue online after you return home.",
            ],
          },
        ],
        faq: [
          {
            question: "Is a hair transplant painful?",
            answer:
              "The procedure is performed under local anaesthesia, so you do not feel pain during it. Mild tenderness afterwards is managed with the pain relief your physician recommends.",
          },
          {
            question: "How many grafts will I need?",
            answer:
              "The number of grafts depends on the degree of hair loss and the density you are aiming for. An exact figure can only be set by the physician after an examination.",
          },
          {
            question: "When will I see results?",
            answer:
              "New hair usually starts to appear from the third or fourth month. The final appearance settles within 12–18 months.",
          },
        ],
      },
    },
  },

  {
    key: "dental",
    icon: "tooth",
    slug: { tr: "dis-tedavisi", en: "dental-treatment" },
    image: "/images/tedaviler/dis-tedavileri-desktop.webp",
    content: {
      tr: {
        title: "Diş Tedavisi",
        tagline: "İmplant, gülüş tasarımı ve estetik diş hekimliği",
        metaDescription:
          "İmplant, zirkonyum kaplama, lamina ve gülüş tasarımı. Akredite kliniklerde diş tedavisi planlaması ve süreç bilgileri.",
        intro: [
          "Diş tedavisi başlığı altında implanttan estetik gülüş tasarımına kadar geniş bir hizmet yelpazesi yer alır. Hangi tedavinin uygun olduğu, ağız içi muayene ve radyolojik görüntüleme sonrasında belirlenir.",
          "Tedavi planı kişiye özeldir; diş sayısı, kemik yapısı ve genel sağlık durumu planı doğrudan etkiler.",
        ],
        highlights: [
          { label: "Tedavi süresi", value: "3–7 gün" },
          { label: "Anestezi", value: "Lokal" },
          { label: "Önerilen konaklama", value: "5–7 gün" },
          { label: "İmplant entegrasyonu", value: "3–6 ay" },
        ],
        sections: [
          {
            heading: "Sunulan tedaviler",
            list: [
              "Diş implantı — eksik dişlerin kalıcı olarak tamamlanması",
              "Zirkonyum ve porselen kaplama — renk ve form düzeltmesi",
              "Lamina (veneer) — minimal aşındırmayla estetik ön yüz kaplaması",
              "Gülüş tasarımı — yüz hatlarına uygun bütüncül planlama",
              "Diş beyazlatma ve genel diş sağlığı hizmetleri",
            ],
          },
          {
            heading: "Kaç ziyaret gerekir?",
            paragraphs: [
              "Kaplama ve lamina işlemleri genellikle tek ziyarette, 5–7 günlük bir programla tamamlanır.",
              "İmplant tedavisi iki aşamalıdır: ilk ziyarette implant yerleştirilir, kemik entegrasyonu için 3–6 ay beklenir, ikinci ziyarette üst yapı tamamlanır. Bazı vakalarda geçici protez ilk ziyarette takılabilir.",
            ],
          },
          {
            heading: "Tedavi sonrası",
            paragraphs: [
              "İlk günlerde hassasiyet ve hafif şişlik olabilir. Hekiminizin verdiği beslenme ve ağız bakımı talimatlarına uymanız iyileşmeyi hızlandırır.",
              "Kontroller ülkenize döndükten sonra online sürdürülür; gerekli durumlarda anlaşmalı kliniklerimize yönlendirme yapılır.",
            ],
          },
        ],
        faq: [
          {
            question: "İmplant için tek seferde gelmek yeterli mi?",
            answer:
              "Çoğu vakada iki ziyaret gerekir. Kemik yapınız uygunsa bazı durumlarda tek seferde tamamlanabilen protokoller uygulanabilir; bunu hekiminiz değerlendirir.",
          },
          {
            question: "Tedavi garantili mi?",
            answer:
              "Garanti süresi kullanılan malzemeye ve kliniğe göre değişir. Koşullar tedavi öncesinde yazılı olarak paylaşılır.",
          },
          {
            question: "Tedavi sırasında ağrı olur mu?",
            answer:
              "İşlemler lokal anestezi altında yapılır. Sonrasında oluşabilecek hassasiyet, önerilen ilaçlarla kontrol altına alınır.",
          },
        ],
      },
      en: {
        title: "Dental Treatment",
        tagline: "Implants, smile design and aesthetic dentistry",
        metaDescription:
          "Dental implants, zirconium crowns, veneers and smile design. Treatment planning and process information at accredited clinics.",
        intro: [
          "Dental treatment covers a wide range of services, from implants to aesthetic smile design. Which treatment suits you is determined after an oral examination and radiological imaging.",
          "Every treatment plan is individual; the number of teeth, bone structure and general health directly affect it.",
        ],
        highlights: [
          { label: "Treatment time", value: "3–7 days" },
          { label: "Anaesthesia", value: "Local" },
          { label: "Recommended stay", value: "5–7 days" },
          { label: "Implant integration", value: "3–6 months" },
        ],
        sections: [
          {
            heading: "Treatments we offer",
            list: [
              "Dental implants — a permanent solution for missing teeth",
              "Zirconium and porcelain crowns — colour and shape correction",
              "Veneers — aesthetic front surfaces with minimal reduction",
              "Smile design — holistic planning that suits your facial features",
              "Teeth whitening and general dental health services",
            ],
          },
          {
            heading: "How many visits are needed?",
            paragraphs: [
              "Crowns and veneers are usually completed in a single visit over a 5–7 day programme.",
              "Implant treatment has two stages: the implant is placed on the first visit, 3–6 months are allowed for bone integration, and the restoration is completed on the second visit. In some cases a temporary prosthesis can be fitted on the first visit.",
            ],
          },
          {
            heading: "After treatment",
            paragraphs: [
              "Sensitivity and mild swelling are possible in the first days. Following your physician's dietary and oral care instructions speeds up recovery.",
              "Check-ups continue online after you return home, with referral to our partner clinics where needed.",
            ],
          },
        ],
        faq: [
          {
            question: "Is a single trip enough for implants?",
            answer:
              "Most cases require two visits. If your bone structure allows, protocols that can be completed in one trip may be an option — your physician will assess this.",
          },
          {
            question: "Is the treatment guaranteed?",
            answer:
              "The guarantee period depends on the materials used and the clinic. The conditions are shared with you in writing before treatment.",
          },
          {
            question: "Will the treatment hurt?",
            answer:
              "Procedures are carried out under local anaesthesia. Any sensitivity afterwards is managed with the medication recommended to you.",
          },
        ],
      },
    },
  },

  {
    key: "face",
    icon: "face",
    slug: { tr: "yuz-estetigi", en: "facial-aesthetics" },
    image: "/images/tedaviler/yuz-estetigi-desktop.webp",
    content: {
      tr: {
        title: "Yüz Estetiği",
        tagline: "Cerrahi ve cerrahi olmayan yüz gençleştirme uygulamaları",
        metaDescription:
          "Botoks, dolgu, yüz germe ve burun estetiği. Yüz estetiği uygulamaları, iyileşme süreci ve sık sorulan sorular.",
        intro: [
          "Yüz estetiği, hem cerrahi hem de cerrahi olmayan yöntemleri kapsar. Amaç, yüz hatlarının doğal dengesini koruyarak daha dinlenmiş ve genç bir görünüm elde etmektir.",
          "Hangi uygulamanın uygun olduğu cilt yapısı, yaş ve beklentiye göre değişir. Nihai karar, sizi muayene eden hekimle birlikte verilir.",
        ],
        highlights: [
          { label: "İşlem süresi", value: "30 dk – 4 saat" },
          { label: "Anestezi", value: "Lokal veya genel" },
          { label: "Sosyal iyileşme", value: "3–14 gün" },
          { label: "Kalıcılık", value: "Uygulamaya göre değişir" },
        ],
        sections: [
          {
            heading: "Uygulamalar",
            list: [
              "Botoks — mimik kaynaklı çizgilerin yumuşatılması",
              "Dolgu — hacim kaybının giderilmesi ve kontur düzenleme",
              "Yüz germe — sarkmanın cerrahi olarak düzeltilmesi",
              "Burun estetiği (rinoplasti) — form ve fonksiyon düzenlemesi",
              "İp askı ve cilt gençleştirme uygulamaları",
            ],
          },
          {
            heading: "Cerrahi mi, cerrahi olmayan mı?",
            paragraphs: [
              "Botoks ve dolgu gibi uygulamalar kısa sürer, iğne ile yapılır ve günlük hayata dönüş genellikle aynı gündür. Etkileri geçicidir ve belirli aralıklarla tekrarlanması gerekir.",
              "Yüz germe ve rinoplasti gibi cerrahi işlemler daha uzun sürer, ameliyathane koşulları gerektirir ve iyileşme süresi daha uzundur; buna karşılık sonuçları uzun vadelidir.",
            ],
          },
          {
            heading: "İyileşme süreci",
            paragraphs: [
              "Cerrahi olmayan uygulamalarda hafif kızarıklık ve morluk birkaç gün içinde geçer. Cerrahi işlemlerde ödem ve morluk 1–2 hafta sürebilir.",
              "Güneşten korunma, hekiminizin önerdiği bakım ürünlerinin kullanımı ve kontrol randevularına uyum sonucu doğrudan etkiler.",
            ],
          },
        ],
        faq: [
          {
            question: "Sonuçlar doğal görünür mü?",
            answer:
              "Doğallık, uygulanan dozun ve tekniğin kişinin yüz yapısına uygun planlanmasıyla ilgilidir. Deneyimli bir hekimle çalışmak bu açıdan belirleyicidir.",
          },
          {
            question: "Kaç gün kalmam gerekir?",
            answer:
              "Cerrahi olmayan uygulamalar için 1–2 gün yeterlidir. Cerrahi işlemlerde kontroller nedeniyle 7–10 günlük konaklama önerilir.",
          },
          {
            question: "Birden fazla işlem aynı anda yapılabilir mi?",
            answer:
              "Bazı işlemler kombine edilebilir. Buna, genel sağlık durumunuz ve işlemlerin toplam süresi değerlendirilerek hekiminiz karar verir.",
          },
        ],
      },
      en: {
        title: "Facial Aesthetics",
        tagline: "Surgical and non-surgical facial rejuvenation",
        metaDescription:
          "Botox, fillers, face lifts and rhinoplasty. Facial aesthetic procedures, recovery and frequently asked questions.",
        intro: [
          "Facial aesthetics covers both surgical and non-surgical methods. The aim is a more rested, youthful appearance while preserving the natural balance of your features.",
          "Which procedure suits you depends on your skin, age and expectations. The final decision is made together with the physician examining you.",
        ],
        highlights: [
          { label: "Procedure time", value: "30 min – 4 hours" },
          { label: "Anaesthesia", value: "Local or general" },
          { label: "Social recovery", value: "3–14 days" },
          { label: "Longevity", value: "Varies by procedure" },
        ],
        sections: [
          {
            heading: "Procedures",
            list: [
              "Botox — softening expression lines",
              "Fillers — restoring lost volume and refining contours",
              "Face lift — surgical correction of sagging",
              "Rhinoplasty — adjusting both form and function",
              "Thread lifts and skin rejuvenation treatments",
            ],
          },
          {
            heading: "Surgical or non-surgical?",
            paragraphs: [
              "Treatments such as Botox and fillers are quick, injection-based, and you can usually return to daily life the same day. Their effects are temporary and need repeating at intervals.",
              "Surgical procedures such as face lifts and rhinoplasty take longer, require an operating theatre and involve a longer recovery — but their results are long-lasting.",
            ],
          },
          {
            heading: "Recovery",
            paragraphs: [
              "After non-surgical treatments, mild redness and bruising settle within a few days. After surgery, swelling and bruising can last one to two weeks.",
              "Sun protection, using the products your physician recommends and attending follow-up appointments all directly affect the result.",
            ],
          },
        ],
        faq: [
          {
            question: "Will the results look natural?",
            answer:
              "A natural result comes from planning the dose and technique around your own facial structure. Working with an experienced physician is decisive here.",
          },
          {
            question: "How many days should I stay?",
            answer:
              "One to two days is enough for non-surgical treatments. For surgery, a stay of 7–10 days is recommended to allow for check-ups.",
          },
          {
            question: "Can several procedures be combined?",
            answer:
              "Some procedures can be combined. Your physician decides this by assessing your general health and the total duration of the procedures.",
          },
        ],
      },
    },
  },

  {
    key: "ortho",
    icon: "ortho",
    slug: { tr: "ortopedi", en: "orthopedics" },
    image: "/images/tedaviler/ortopedi-desktop.webp",
    content: {
      tr: {
        title: "Ortopedi",
        tagline: "Diz ve kalça protezi, eklem ve spor yaralanmaları cerrahisi",
        metaDescription:
          "Diz protezi, kalça protezi ve artroskopik eklem cerrahisi. Ortopedik tedavi süreci, hastanede kalış ve rehabilitasyon bilgileri.",
        intro: [
          "Ortopedik tedaviler, eklem ağrısı ve hareket kısıtlılığının yaşam kalitesini düşürdüğü durumlarda gündeme gelir. Cerrahi, genellikle ilaç ve fizik tedavi gibi seçenekler yeterli olmadığında değerlendirilir.",
          "Tedavi kararı; röntgen ve MR görüntüleri, ağrı düzeyi ve genel sağlık durumu birlikte değerlendirilerek verilir.",
        ],
        highlights: [
          { label: "Hastanede kalış", value: "3–5 gün" },
          { label: "Anestezi", value: "Genel veya spinal" },
          { label: "Toplam konaklama", value: "10–14 gün" },
          { label: "Fizik tedavi", value: "4–6 hafta" },
        ],
        sections: [
          {
            heading: "Tedavi alanları",
            list: [
              "Total diz protezi — ileri kireçlenmede eklem yüzeylerinin değiştirilmesi",
              "Total kalça protezi — kalça ekleminin yenilenmesi",
              "Artroskopi — kapalı yöntemle menisküs ve bağ onarımı",
              "Omuz ve dirsek cerrahisi",
              "Spor yaralanmaları ve bağ rekonstrüksiyonu",
            ],
          },
          {
            heading: "Süreç nasıl ilerliyor?",
            paragraphs: [
              "Mevcut görüntülemelerinizi ve raporlarınızı paylaşmanızla ön değerlendirme başlar. Uygun hastane ve cerrah alternatifleri sunulur.",
              "Varışınızda ameliyat öncesi tetkikler yapılır, ameliyat ve hastane süreci planlanır. Taburculuk sonrası fizik tedaviye erken dönemde başlanır.",
            ],
          },
          {
            heading: "Rehabilitasyon",
            paragraphs: [
              "Protez cerrahisinde iyileşmenin en belirleyici aşaması fizik tedavidir. İlk haftalar yürüme yardımcılarıyla desteklenir, hareket açıklığı kademeli olarak artırılır.",
              "Ülkenize döndükten sonra egzersiz programınız paylaşılır ve online takip görüşmeleriyle süreç izlenir.",
            ],
          },
        ],
        faq: [
          {
            question: "Ameliyattan sonra ne zaman yürüyebilirim?",
            answer:
              "Protez cerrahisinde çoğu hasta ilk 24–48 saat içinde destekle ayağa kaldırılır. Bağımsız yürüme süresi kişiye ve uygulanan işleme göre değişir.",
          },
          {
            question: "Uçuş için ne kadar beklemeliyim?",
            answer:
              "Uçuş izni cerrahınız tarafından verilir. Protez cerrahisinde genellikle 10–14 günlük bir bekleme önerilir; bu süre pıhtı riski açısından önemlidir.",
          },
          {
            question: "Protezin ömrü ne kadardır?",
            answer:
              "Kullanılan malzeme, yaş ve aktivite düzeyi ömrü etkiler. Beklenen süreyi cerrahınız kendi vakanız için değerlendirir.",
          },
        ],
      },
      en: {
        title: "Orthopedics",
        tagline: "Knee and hip replacement, joint and sports injury surgery",
        metaDescription:
          "Knee replacement, hip replacement and arthroscopic joint surgery. Treatment process, hospital stay and rehabilitation information.",
        intro: [
          "Orthopedic treatment comes into play when joint pain and restricted movement reduce quality of life. Surgery is usually considered when options such as medication and physiotherapy are no longer enough.",
          "The treatment decision is made by assessing X-ray and MRI images, pain levels and general health together.",
        ],
        highlights: [
          { label: "Hospital stay", value: "3–5 days" },
          { label: "Anaesthesia", value: "General or spinal" },
          { label: "Total stay", value: "10–14 days" },
          { label: "Physiotherapy", value: "4–6 weeks" },
        ],
        sections: [
          {
            heading: "Areas we cover",
            list: [
              "Total knee replacement — resurfacing the joint in advanced arthritis",
              "Total hip replacement — renewing the hip joint",
              "Arthroscopy — keyhole repair of the meniscus and ligaments",
              "Shoulder and elbow surgery",
              "Sports injuries and ligament reconstruction",
            ],
          },
          {
            heading: "How the process works",
            paragraphs: [
              "The pre-assessment starts when you share your existing imaging and reports. Suitable hospital and surgeon options are then presented.",
              "On arrival, pre-operative tests are carried out and the surgery and hospital stay are planned. Physiotherapy begins early after discharge.",
            ],
          },
          {
            heading: "Rehabilitation",
            paragraphs: [
              "In joint replacement surgery, physiotherapy is the most decisive stage of recovery. The first weeks are supported with walking aids and the range of motion is increased gradually.",
              "Your exercise programme is shared with you after you return home and progress is monitored through online follow-ups.",
            ],
          },
        ],
        faq: [
          {
            question: "When can I walk after surgery?",
            answer:
              "In joint replacement, most patients are helped to their feet with support within the first 24–48 hours. The time to independent walking varies by person and procedure.",
          },
          {
            question: "How long before I can fly?",
            answer:
              "Clearance to fly is given by your surgeon. After joint replacement a wait of 10–14 days is usually advised, which matters for clot risk.",
          },
          {
            question: "How long does a joint replacement last?",
            answer:
              "Material, age and activity level all affect longevity. Your surgeon will assess the expected lifespan for your own case.",
          },
        ],
      },
    },
  },
];

/* ------------------------------------------------------------------ */
/*  ROTALAR                                                            */
/* ------------------------------------------------------------------ */

export const destinationPages: DetailPage[] = [
  {
    key: "turkiye",
    slug: { tr: "turkiye", en: "turkiye" },
    image: "/images/noktalar/turkiye-desktop.webp",
    content: {
      tr: {
        title: "Türkiye",
        tagline: "İstanbul, Antalya ve Bodrum'da akredite sağlık kuruluşları",
        metaDescription:
          "Türkiye'de sağlık turizmi: akredite hastaneler, şehirler, ulaşım ve pratik bilgiler. İstanbul, Antalya ve Bodrum'da tedavi planlaması.",
        intro: [
          "Türkiye, uluslararası akreditasyona sahip hastane sayısı, deneyimli hekim kadrosu ve güçlü havayolu bağlantılarıyla sağlık turizminin merkezlerinden biridir.",
          "Tedavinin yanı sıra konaklama, transfer ve tercüman hizmetleri tek noktadan organize edilir.",
        ],
        highlights: [
          { label: "Öne çıkan şehirler", value: "İstanbul, Antalya, Bodrum" },
          { label: "Dil desteği", value: "Türkçe, İngilizce, Almanca, Arapça" },
          { label: "Para birimi", value: "Türk lirası (TRY)" },
          { label: "Vize", value: "Uyruğa göre değişir" },
        ],
        sections: [
          {
            heading: "Şehirler",
            list: [
              "İstanbul — en geniş hastane ve klinik ağı, tüm branşlarda seçenek, yoğun uçuş bağlantısı",
              "Antalya — tedaviyi dinlenme dönemiyle birleştirmek isteyenler için sahil şehri",
              "Bodrum — sakin bir iyileşme dönemi arayanlar için tercih edilen destinasyon",
            ],
          },
          {
            heading: "Neden Türkiye?",
            paragraphs: [
              "Uluslararası akreditasyona sahip çok sayıda hastane, saç ekimi ve diş tedavisi başta olmak üzere birçok alanda yüksek vaka deneyimi sunar.",
              "Avrupa ve Orta Doğu'dan kısa uçuş süreleri, tedavi sürecini tek seyahate sığdırmayı kolaylaştırır.",
            ],
          },
          {
            heading: "Pratik bilgiler",
            paragraphs: [
              "Vize koşulları uyruğunuza göre değişir; birçok ülke için elektronik vize veya vizesiz giriş uygulanır. Güncel durumu seyahat öncesinde ekibimizle birlikte kontrol ederiz.",
              "Havalimanı karşılama, otel–klinik transferleri ve tercüman desteği paket kapsamında planlanır.",
            ],
          },
        ],
        faq: [
          {
            question: "Refakatçi getirebilir miyim?",
            answer:
              "Evet. Refakatçiniz için konaklama ve transfer düzenlemeleri aynı program içinde yapılabilir.",
          },
          {
            question: "Tedavi süresince nerede kalacağım?",
            answer:
              "Kliniğe yakın, anlaşmalı otellerde konaklama planlanır. Tercihlerinizi baştan paylaşmanız yeterlidir.",
          },
          {
            question: "Dil konusunda sorun yaşar mıyım?",
            answer:
              "Tedavi süresince tercüman desteği sağlanır; muayene ve bilgilendirmeler kendi dilinizde aktarılır.",
          },
        ],
      },
      en: {
        title: "Türkiye",
        tagline: "Accredited healthcare institutions in Istanbul, Antalya and Bodrum",
        metaDescription:
          "Health tourism in Türkiye: accredited hospitals, cities, travel and practical information. Plan treatment in Istanbul, Antalya and Bodrum.",
        intro: [
          "Türkiye is one of the centres of health tourism, with a large number of internationally accredited hospitals, experienced physicians and strong airline connections.",
          "Alongside treatment, accommodation, transfers and interpreting are organised from a single point.",
        ],
        highlights: [
          { label: "Main cities", value: "Istanbul, Antalya, Bodrum" },
          { label: "Language support", value: "Turkish, English, German, Arabic" },
          { label: "Currency", value: "Turkish lira (TRY)" },
          { label: "Visa", value: "Depends on nationality" },
        ],
        sections: [
          {
            heading: "Cities",
            list: [
              "Istanbul — the widest hospital and clinic network, options in every speciality, dense flight connections",
              "Antalya — a coastal city for those combining treatment with a period of rest",
              "Bodrum — a preferred destination for a quiet recovery",
            ],
          },
          {
            heading: "Why Türkiye?",
            paragraphs: [
              "A large number of internationally accredited hospitals offer high case experience in many fields, particularly hair transplants and dental treatment.",
              "Short flight times from Europe and the Middle East make it easier to fit the treatment process into a single trip.",
            ],
          },
          {
            heading: "Practical information",
            paragraphs: [
              "Visa requirements depend on your nationality; many countries have electronic visas or visa-free entry. We check the current situation with you before travel.",
              "Airport pick-up, hotel–clinic transfers and interpreter support are planned as part of your package.",
            ],
          },
        ],
        faq: [
          {
            question: "Can I bring a companion?",
            answer:
              "Yes. Accommodation and transfer arrangements for your companion can be made within the same programme.",
          },
          {
            question: "Where will I stay during treatment?",
            answer:
              "Accommodation is arranged in partner hotels close to the clinic. Just share your preferences at the start.",
          },
          {
            question: "Will language be a problem?",
            answer:
              "Interpreter support is provided throughout treatment, so examinations and explanations reach you in your own language.",
          },
        ],
      },
    },
  },

  {
    key: "almanya",
    slug: { tr: "almanya", en: "germany" },
    image: "/images/noktalar/almanya-desktop.webp",
    content: {
      tr: {
        title: "Almanya",
        tagline: "Frankfurt'ta ileri teknoloji donanımlı sağlık kuruluşları",
        metaDescription:
          "Almanya'da sağlık turizmi: Frankfurt'taki kliniklerle ileri tedavi seçenekleri, ulaşım ve pratik bilgiler.",
        intro: [
          "Almanya, ileri teknoloji donanımı ve sıkı kalite standartlarıyla özellikle karmaşık vakalarda tercih edilen bir destinasyondur.",
          "Frankfurt, merkezi konumu ve güçlü havayolu bağlantılarıyla tedavi planlamasını kolaylaştırır.",
        ],
        highlights: [
          { label: "Öne çıkan şehir", value: "Frankfurt" },
          { label: "Dil desteği", value: "Almanca, İngilizce, Türkçe" },
          { label: "Para birimi", value: "Euro (EUR)" },
          { label: "Vize", value: "Schengen — uyruğa göre değişir" },
        ],
        sections: [
          {
            heading: "Öne çıkan alanlar",
            list: [
              "İleri onkolojik tedaviler ve ikinci görüş değerlendirmeleri",
              "Kardiyoloji ve kalp cerrahisi",
              "Nöroloji ve omurga cerrahisi",
              "Ortopedi ve robotik cerrahi uygulamaları",
            ],
          },
          {
            heading: "Neden Almanya?",
            paragraphs: [
              "Sıkı denetlenen sağlık sistemi ve geniş uzmanlık ağı, özellikle karmaşık ve çok disiplinli vakalar için güçlü bir seçenek sunar.",
              "İkinci görüş almak isteyen hastalar için mevcut raporlarınız üzerinden uzaktan değerlendirme süreci başlatılabilir.",
            ],
          },
          {
            heading: "Pratik bilgiler",
            paragraphs: [
              "Almanya Schengen bölgesindedir; vize gereksinimi uyruğunuza göre değişir ve tedavi amaçlı seyahatlerde ek belgeler istenebilir. Başvuru sürecinde size gerekli davet ve randevu belgeleri sağlanır.",
              "Konaklama, transfer ve tercüman hizmetleri tedavi programınızla birlikte planlanır.",
            ],
          },
        ],
        faq: [
          {
            question: "Vize sürecinde destek alabilir miyim?",
            answer:
              "Evet. Randevu teyidi ve tedavi planı gibi başvuruda istenen belgeleri hazırlayarak size iletiriz. Başvuruyu ilgili konsolosluğa siz yaparsınız.",
          },
          {
            question: "Raporlarım Almanca'ya çevrilmeli mi?",
            answer:
              "Genellikle Almanca veya İngilizce çeviri istenir. Çeviri sürecinde yönlendirme sağlarız.",
          },
          {
            question: "Uzaktan ikinci görüş mümkün mü?",
            answer:
              "Birçok klinik, mevcut görüntüleme ve raporlar üzerinden uzaktan değerlendirme sunar. Seyahat gerekip gerekmediği bu değerlendirme sonrasında netleşir.",
          },
        ],
      },
      en: {
        title: "Germany",
        tagline: "Technologically advanced healthcare institutions in Frankfurt",
        metaDescription:
          "Health tourism in Germany: advanced treatment options with Frankfurt clinics, travel and practical information.",
        intro: [
          "Germany is a preferred destination for complex cases, thanks to advanced technology and strict quality standards.",
          "Frankfurt's central location and strong airline connections make treatment planning straightforward.",
        ],
        highlights: [
          { label: "Main city", value: "Frankfurt" },
          { label: "Language support", value: "German, English, Turkish" },
          { label: "Currency", value: "Euro (EUR)" },
          { label: "Visa", value: "Schengen — depends on nationality" },
        ],
        sections: [
          {
            heading: "Key specialities",
            list: [
              "Advanced oncological treatment and second opinion assessments",
              "Cardiology and cardiac surgery",
              "Neurology and spinal surgery",
              "Orthopedics and robotic surgery",
            ],
          },
          {
            heading: "Why Germany?",
            paragraphs: [
              "A tightly regulated health system and a broad network of specialists make it a strong option, particularly for complex, multidisciplinary cases.",
              "For patients seeking a second opinion, a remote assessment can be started from your existing reports.",
            ],
          },
          {
            heading: "Practical information",
            paragraphs: [
              "Germany is in the Schengen area; visa requirements depend on your nationality and additional documents may be requested for medical travel. We provide the invitation and appointment documents needed for your application.",
              "Accommodation, transfers and interpreting are planned together with your treatment programme.",
            ],
          },
        ],
        faq: [
          {
            question: "Can you help with the visa process?",
            answer:
              "Yes. We prepare and send you the documents requested in the application, such as appointment confirmation and treatment plan. You submit the application to the relevant consulate yourself.",
          },
          {
            question: "Do my reports need translating into German?",
            answer:
              "A German or English translation is usually requested. We guide you through the translation process.",
          },
          {
            question: "Is a remote second opinion possible?",
            answer:
              "Many clinics offer a remote assessment based on existing imaging and reports. Whether travel is needed becomes clear after that assessment.",
          },
        ],
      },
    },
  },

  {
    key: "portekiz",
    slug: { tr: "portekiz", en: "portugal" },
    image: "/images/noktalar/portekiz-desktop.webp",
    content: {
      tr: {
        title: "Portekiz",
        tagline: "Lizbon ve Porto'da tedavi ve iyileşme dönemi",
        metaDescription:
          "Portekiz'de sağlık turizmi: Lizbon ve Porto'daki klinikler, ulaşım, iklim ve pratik bilgiler.",
        intro: [
          "Portekiz, ılıman iklimi ve sakin şehir yapısıyla tedavi sonrası iyileşme dönemini geçirmek için elverişli bir destinasyondur.",
          "Lizbon ve Porto, Avrupa'nın birçok noktasından doğrudan uçuşlarla ulaşılabilir konumdadır.",
        ],
        highlights: [
          { label: "Öne çıkan şehirler", value: "Lizbon, Porto" },
          { label: "Dil desteği", value: "Portekizce, İngilizce" },
          { label: "Para birimi", value: "Euro (EUR)" },
          { label: "Vize", value: "Schengen — uyruğa göre değişir" },
        ],
        sections: [
          {
            heading: "Şehirler",
            list: [
              "Lizbon — geniş klinik ağı ve yoğun uçuş bağlantısı",
              "Porto — daha sakin bir ortamda tedavi ve iyileşme dönemi",
            ],
          },
          {
            heading: "Neden Portekiz?",
            paragraphs: [
              "Ilıman iklim, uzun iyileşme dönemi gerektiren işlemlerden sonra konforlu bir dinlenme süreci sunar.",
              "Avrupa Birliği standartlarında sağlık altyapısı ve İngilizce'nin yaygın kullanımı, süreci kolaylaştıran etkenlerdir.",
            ],
          },
          {
            heading: "Pratik bilgiler",
            paragraphs: [
              "Portekiz Schengen bölgesindedir; vize gereksinimi uyruğunuza göre değişir. Gerekli belgelerin hazırlanmasında destek sağlanır.",
              "Konaklama tercihinizi tedavi planınıza göre şehir merkezi veya sahil bölgesi olarak düzenleyebiliriz.",
            ],
          },
        ],
        faq: [
          {
            question: "İyileşme dönemi için ne kadar kalmalıyım?",
            answer:
              "Süre uygulanan işleme göre değişir. Tedavi planınız hazırlanırken önerilen konaklama süresi net olarak paylaşılır.",
          },
          {
            question: "Tedavi sonrası seyahat edebilir miyim?",
            answer:
              "Uçuş izni hekiminiz tarafından verilir. Bu izin alınmadan dönüş bileti planlanmaz.",
          },
          {
            question: "İngilizce yeterli olur mu?",
            answer:
              "Portekiz'de İngilizce yaygın kullanılır. Ayrıca tedavi süresince tercüman desteği sağlanır.",
          },
        ],
      },
      en: {
        title: "Portugal",
        tagline: "Treatment and recovery in Lisbon and Porto",
        metaDescription:
          "Health tourism in Portugal: clinics in Lisbon and Porto, travel, climate and practical information.",
        intro: [
          "With its mild climate and calm cities, Portugal is a comfortable destination for the recovery period after treatment.",
          "Lisbon and Porto are reachable by direct flights from many points across Europe.",
        ],
        highlights: [
          { label: "Main cities", value: "Lisbon, Porto" },
          { label: "Language support", value: "Portuguese, English" },
          { label: "Currency", value: "Euro (EUR)" },
          { label: "Visa", value: "Schengen — depends on nationality" },
        ],
        sections: [
          {
            heading: "Cities",
            list: [
              "Lisbon — a broad clinic network and dense flight connections",
              "Porto — treatment and recovery in a quieter setting",
            ],
          },
          {
            heading: "Why Portugal?",
            paragraphs: [
              "The mild climate offers a comfortable rest period after procedures that need a longer recovery.",
              "Healthcare infrastructure at EU standards and the widespread use of English both make the process easier.",
            ],
          },
          {
            heading: "Practical information",
            paragraphs: [
              "Portugal is in the Schengen area; visa requirements depend on your nationality. We support you in preparing the necessary documents.",
              "We can arrange accommodation in the city centre or by the coast, according to your treatment plan.",
            ],
          },
        ],
        faq: [
          {
            question: "How long should I stay for recovery?",
            answer:
              "The duration depends on the procedure. The recommended length of stay is shared clearly when your treatment plan is prepared.",
          },
          {
            question: "Can I travel after treatment?",
            answer:
              "Clearance to fly is given by your physician. No return ticket is planned before that clearance.",
          },
          {
            question: "Is English enough?",
            answer:
              "English is widely spoken in Portugal. Interpreter support is also provided throughout treatment.",
          },
        ],
      },
    },
  },
];

/* ------------------------------------------------------------------ */
/*  Yardımcılar                                                        */
/* ------------------------------------------------------------------ */

export function pagesOf(kind: DetailKind) {
  return kind === "treatment" ? treatmentPages : destinationPages;
}

export function detailPath(kind: DetailKind, locale: Locale, page: DetailPage) {
  return `${detailBase[kind][locale]}/${page.slug[locale]}`;
}

export function findBySlug(kind: DetailKind, locale: Locale, slug: string) {
  return pagesOf(kind).find((p) => p.slug[locale] === slug);
}
