/** Türkçe alt sayfa içerikleri. Diğer dillerin kaynağı budur. */

import type { DetailContent } from "../detail-pages";

export const tr: Record<string, DetailContent> = {
  hair: {
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
  dental: {
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
  face: {
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
  ortho: {
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
  turkiye: {
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
  almanya: {
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
  portekiz: {
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
};
