import Link from "next/link";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { SectionHeading } from "./SectionHeading";
import { RevealObserver } from "./RevealObserver";
import { ArrowRightIcon } from "./icons";
import { localePath, siteUrl, type Dict, type Locale } from "@/data/content";
import {
  articlePath,
  articlesOf,
  blogPath,
  type ArticleCategory,
} from "@/data/articles";

/** Belgedeki sıra; listede de bu sırayla gruplanıyor. */
const CATEGORIES: ArticleCategory[] = ["implant", "zirconia", "all-on", "dental"];

export function BlogIndex({
  dict,
  alternates,
}: {
  dict: Dict;
  alternates: Record<Locale, string>;
}) {
  const t = dict.blog;
  const locale = dict.locale;
  const home = localePath[locale];
  const pageUrl = `${siteUrl}${blogPath(locale)}`;
  const list = articlesOf(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: t.title,
        description: t.description,
        inLanguage: dict.htmlLang,
        isPartOf: { "@id": `${siteUrl}/#website` },
      },
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
          { "@type": "ListItem", position: 2, name: t.crumb },
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
              <li aria-current="page" className="text-ink">
                {t.crumb}
              </li>
            </ol>
          </nav>

          <SectionHeading
            className="mt-6"
            eyebrow={t.eyebrow}
            title={t.title}
            description={t.description}
            reveal={false}
          />

          {CATEGORIES.map((category) => {
            const items = list.filter((a) => a.category === category);
            if (!items.length) return null;

            return (
              <section key={category} className="mt-14 first:mt-12">
                <h2 className="font-serif text-[22px] leading-snug text-ink sm:text-[26px]">
                  {t.categories[category]}
                </h2>

                <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((article, i) => {
                    // articlesOf() zaten o dilde metni olanları veriyor.
                    const c = article.content[locale]!;
                    return (
                      <li
                        key={article.key}
                        data-reveal
                        style={
                          {
                            "--reveal-delay": `${Math.min(i, 5) * 70}ms`,
                          } as React.CSSProperties
                        }
                      >
                        <Link
                          href={articlePath(locale, article)}
                          className="group flex h-full flex-col rounded-[14px] border border-line bg-surface p-6 transition-shadow hover:shadow-[0_14px_34px_-18px_rgba(10,25,40,0.35)]"
                        >
                          <h3 className="font-serif text-[18px] leading-snug text-ink">
                            {c.title}
                          </h3>
                          <p className="mt-2.5 line-clamp-3 text-[14px] leading-[1.6] text-body">
                            {c.metaDescription}
                          </p>
                          <span className="mt-auto inline-flex items-center gap-2 pt-5 text-[14px] font-medium text-brand-700">
                            {t.readMore}
                            <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:-scale-x-100" />
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </section>
            );
          })}
        </div>
      </main>

      <Footer dict={dict} />
    </>
  );
}
