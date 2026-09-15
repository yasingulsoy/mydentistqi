import { brand, isPlaceholder, siteUrl, type Dict } from "@/data/content";

/**
 * Yapısal veri. Tasarımdan gelen yer tutucu telefon/adres değerleri
 * bilerek dışarıda bırakılıyor - Google'a sahte iletişim bilgisi vermeyelim.
 */
export function JsonLd({ dict }: { dict: Dict }) {
  const pageUrl = dict.locale === "tr" ? siteUrl : `${siteUrl}/en`;
  const realPhones = brand.phones
    .filter((p) => !isPlaceholder(p.number))
    .map((p) => p.number);

  const organization = {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: brand.name,
    url: siteUrl,
    description: dict.footer.description,
    ...(brand.social.length > 0 ? { sameAs: brand.social } : {}),
    ...(realPhones.length > 0
      ? {
          contactPoint: realPhones.map((telephone) => ({
            "@type": "ContactPoint",
            telephone,
            contactType: "customer service",
            availableLanguage: ["tr", "en"],
          })),
        }
      : {}),
    knowsAbout: dict.treatments.items.map((t) => t.title),
  };

  const website = {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: brand.name,
    inLanguage: dict.htmlLang,
    publisher: { "@id": `${siteUrl}/#organization` },
  };

  const webPage = {
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: dict.meta.title,
    description: dict.meta.description,
    inLanguage: dict.htmlLang,
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#organization` },
  };

  const faq = {
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    inLanguage: dict.htmlLang,
    mainEntity: dict.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const services = {
    "@type": "OfferCatalog",
    "@id": `${pageUrl}#treatments`,
    name: dict.treatments.title,
    inLanguage: dict.htmlLang,
    itemListElement: dict.treatments.items.map((item, i) => ({
      "@type": "Offer",
      position: i + 1,
      itemOffered: {
        "@type": "Service",
        name: item.title,
        description: item.description,
        provider: { "@id": `${siteUrl}/#organization` },
      },
    })),
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [organization, website, webPage, faq, services],
  };

  return (
    <script
      type="application/ld+json"
      // JSON.stringify çıktısı; kullanıcı girdisi içermiyor.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
