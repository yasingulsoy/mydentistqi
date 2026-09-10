import Link from "next/link";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { localePath, siteUrl, type Dict } from "@/data/content";
import type { LegalDoc } from "@/data/legal";

export function LegalPage({
  dict,
  doc,
  path,
}: {
  dict: Dict;
  doc: LegalDoc;
  path: string;
}) {
  const home = localePath[dict.locale];
  const pageUrl = `${siteUrl}${path}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: doc.title,
        description: doc.description,
        inLanguage: dict.htmlLang,
        isPartOf: { "@id": `${siteUrl}/#website` },
        dateModified: doc.updatedAt,
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
          { "@type": "ListItem", position: 2, name: doc.title },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <a
        href="#icerik"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-[15px] focus:font-medium focus:text-ink"
      >
        {dict.skipToContent}
      </a>

      <Navbar dict={dict} />

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
                {doc.title}
              </li>
            </ol>
          </nav>

          <h1 className="mt-6 max-w-[820px] font-serif text-[28px] leading-[1.18] text-ink sm:text-[36px]">
            {doc.title}
          </h1>
          <p className="mt-3 text-[14px] text-muted">
            {doc.updatedLabel}: {doc.updatedAt}
          </p>

          {doc.draft && (
            <p
              role="note"
              className="mt-8 max-w-[820px] rounded-[12px] border border-brand-500/35 bg-brand-500/10 px-5 py-4 text-[14px] leading-[1.6] text-ink"
            >
              {doc.draftNotice}
            </p>
          )}

          <article className="mt-10 max-w-[820px]">
            {doc.sections.map((section) => (
              <section key={section.heading} className="mt-9 first:mt-0">
                <h2 className="font-serif text-[20px] leading-snug text-ink sm:text-[22px]">
                  {section.heading}
                </h2>
                {section.blocks.map((block, i) =>
                  typeof block === "string" ? (
                    <p key={i} className="mt-3 text-[15px] leading-[1.75] text-body">
                      {block}
                    </p>
                  ) : (
                    <ul key={i} className="mt-3 flex flex-col gap-2">
                      {block.list.map((item) => (
                        <li
                          key={item}
                          className="relative pl-5 text-[15px] leading-[1.7] text-body before:absolute before:left-0 before:top-[0.65em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  ),
                )}
              </section>
            ))}
          </article>

          <Link
            href={home}
            className="mt-12 inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-[15px] text-ink transition-colors hover:bg-ink/5"
          >
            ← {doc.backToHome}
          </Link>
        </div>
      </main>

      <Footer dict={dict} />
    </>
  );
}
