import Link from "next/link";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { RevealObserver } from "./RevealObserver";
import { ArrowRightIcon } from "./icons";
import { localePath, siteUrl, type Dict, type Locale } from "@/data/content";
import { articlePath, articlesOf, blogPath, type Article } from "@/data/articles";

/**
 * Tek makale sayfası.
 *
 * Belgedeki her makalenin 4. bölümü "Sık Sorulan Soru" ve altında bir
 * soru + bir cevap paragrafı var; onu FAQPage yapısal verisine
 * dönüştürüyoruz. Diğer bölümler düz başlık + paragraf.
 */
export function ArticlePage({
  dict,
  alternates,
  article,
}: {
  dict: Dict;
  alternates: Record<Locale, string>;
  article: Article;
}) {
  const t = dict.blog;
  const locale = dict.locale;
  const home = localePath[locale];
  // Bu bileşen yalnızca o dilde metni olan makaleler için render ediliyor.
  const c = article.content[locale]!;
  const pageUrl = `${siteUrl}${articlePath(locale, article.key)}`;

  /**
   * SSS bölümü: 2 paragraflı ve ilki soru işaretiyle biten bölüm
   * (ilki soru, ikincisi cevap). 162 makalenin hepsinde tam olarak bir
   * tane var. Arapça "؟" ayrı bir karakter, Fransızca'da soru işaretinden
   * önce boşluk var — ikisi de kapsanıyor.
   */
  const faq = c.sections.find(
    (s) =>
      s.paragraphs.length === 2 && /[?؟]\s*$/.test(s.paragraphs[0]),
  );
  const faqPair = faq ? faq.paragraphs : null;

  const related = articlesOf(locale)
    .filter((a) => a.category === article.category && a.key !== article.key)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        url: pageUrl,
        headline: c.title,
        description: c.metaDescription,
        inLanguage: dict.htmlLang,
        isPartOf: { "@id": `${siteUrl}/#website` },
        publisher: { "@id": `${siteUrl}/#organization` },
        articleSection: t.categories[article.category],
      },
      ...(faqPair
        ? [
            {
              "@type": "FAQPage",
              "@id": `${pageUrl}#faq`,
              mainEntity: [
                {
                  "@type": "Question",
                  name: faqPair[0],
                  acceptedAnswer: { "@type": "Answer", text: faqPair[1] },
                },
              ],
            },
          ]
        : []),
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: dict.nav.links[0].label,
            item: `${siteUrl}${home === "/" ? "" : home}`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: t.crumb,
            item: `${siteUrl}${blogPath(locale)}`,
          },
          { "@type": "ListItem", position: 3, name: c.title },
        ],
      },
    ],
  };

  return (
    <>
      <RevealObserver />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <a
        href="#icerik"
        className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-surface focus:px-4 focus:py-2 focus:text-[15px] focus:font-medium focus:text-ink"
      >
        {dict.skipToContent}
      </a>

      <Navbar dict={dict} alternates={alternates} />

      <main id="icerik" className="bg-cream">
        <div className="section-x py-14 lg:py-20">
          <nav aria-label="breadcrumb" className="text-[13px] text-body">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href={home} className="transition-colors hover:text-brand-700">
                  {dict.nav.links[0].label}
                </Link>
              </li>
              <li aria-hidden="true" className="text-muted">
                /
              </li>
              <li>
                <Link
                  href={blogPath(locale)}
                  className="transition-colors hover:text-brand-700"
                >
                  {t.crumb}
                </Link>
              </li>
              <li aria-hidden="true" className="text-muted">
                /
              </li>
              <li aria-current="page" className="text-ink">
                {c.title}
              </li>
            </ol>
          </nav>

          <p className="eyebrow mt-6">{t.categories[article.category]}</p>
          <h1 className="mt-3 max-w-[820px] font-serif text-[28px] leading-[1.18] text-ink sm:text-[36px]">
            {c.title}
          </h1>

          <article className="mt-10 max-w-[820px]">
            {c.sections.map((section) => (
              <section key={section.heading} className="mt-9 first:mt-0">
                <h2 className="font-serif text-[20px] leading-snug text-ink sm:text-[22px]">
                  {section.heading}
                </h2>
                {section.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="mt-3 text-[15px] leading-[1.75] text-body"
                  >
                    {p}
                  </p>
                ))}
              </section>
            ))}

            {/* Tıbbi sorumluluk reddi — sitedeki tedavi sayfalarıyla aynı disiplin */}
            <p
              role="note"
              className="mt-10 rounded-[12px] border border-line bg-surface px-5 py-4 text-[14px] leading-[1.65] text-body"
            >
              {t.notice}
            </p>
          </article>

          {related.length > 0 && (
            <section className="mt-14 max-w-[820px]">
              <h2 className="font-serif text-[20px] leading-snug text-ink sm:text-[22px]">
                {t.related}
              </h2>
              <ul className="mt-5 flex flex-col gap-3">
                {related.map((a) => (
                  <li key={a.key}>
                    <Link
                      href={articlePath(locale, a.key)}
                      className="group flex items-center justify-between gap-4 rounded-[12px] border border-line bg-surface px-5 py-4 text-[15px] text-ink transition-colors hover:border-brand-500/50"
                    >
                      {a.content[locale]!.title}
                      <ArrowRightIcon className="h-4 w-4 shrink-0 text-brand-700 transition-transform duration-200 group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <Link
            href={blogPath(locale)}
            className="mt-12 inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-[15px] text-ink transition-colors hover:bg-ink/5"
          >
            ← {t.backToBlog}
          </Link>
        </div>
      </main>

      <Footer dict={dict} />
    </>
  );
}
