import Image from "next/image";
import Link from "next/link";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { RevealObserver } from "./RevealObserver";
import { ArrowRightIcon, treatmentIcons } from "./icons";
import { CountryFlag } from "./CountryFlag";
import { clinicCountry, clinicsByCountry } from "@/data/partners";
import { ContactSection } from "./ContactSection";
import { localePath, sectionHref, siteUrl, type Dict, type Locale } from "@/data/content";
import {
  detailPath,
  pagesOf,
  type DetailKind,
  type DetailPage as DetailPageData,
} from "@/data/detail-pages";

export function DetailPage({
  dict,
  alternates,
  kind,
  page,
}: {
  dict: Dict;
  alternates: Record<Locale, string>;
  kind: DetailKind;
  page: DetailPageData;
}) {
  const c = page.content[dict.locale];
  const t = dict.detail;
  const home = localePath[dict.locale];
  const path = detailPath(kind, dict.locale, page);
  const pageUrl = `${siteUrl}${path}`;
  const crumb = kind === "treatment" ? t.treatmentsCrumb : t.destinationsCrumb;
  const crumbHref = sectionHref(
    dict.locale,
    kind === "treatment" ? "#tedaviler" : "#rotalar",
  );
  const others = pagesOf(kind).filter((p) => p.key !== page.key);
  const Icon = page.icon ? treatmentIcons[page.icon] : null;
  const countryClinics = page.countryCode ? clinicsByCountry(page.countryCode) : [];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: c.title,
        description: c.metaDescription,
        inLanguage: dict.htmlLang,
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#organization` },
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
          { "@type": "ListItem", position: 2, name: crumb },
          { "@type": "ListItem", position: 3, name: c.title },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        inLanguage: dict.htmlLang,
        mainEntity: c.faq.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
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

      <main id="icerik">
        {/* --- Başlık --- */}
        <section className="bg-[image:var(--gradient-hero)]">
          <div className="section-x grid gap-10 py-14 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-center lg:py-20">
            <div>
              <nav aria-label="breadcrumb" className="text-[13px] text-white/60">
                <ol className="flex flex-wrap items-center gap-2">
                  <li>
                    <Link href={home} className="transition-colors hover:text-white">
                      {dict.nav.links[0].label}
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li>
                    <a href={crumbHref} className="transition-colors hover:text-white">
                      {crumb}
                    </a>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li aria-current="page" className="text-white/90">
                    {c.title}
                  </li>
                </ol>
              </nav>

              <div className="mt-6 flex items-center gap-4">
                {Icon && (
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] bg-white/10 backdrop-blur-sm">
                    <Icon className="h-6 w-6 text-white" />
                  </span>
                )}
                <h1 className="font-serif text-[30px] leading-[1.15] text-white sm:text-[40px]">
                  {c.title}
                </h1>
              </div>

              <p className="mt-4 max-w-[520px] text-[16px] leading-[1.6] text-white/70">
                {c.tagline}
              </p>

              <a
                href={sectionHref(dict.locale, "#iletisim")}
                className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-brand-500 px-7 py-4 text-[15px] font-medium text-white transition-all duration-200 hover:bg-brand-600 hover:shadow-[0_10px_24px_-10px_rgba(217,124,82,0.9)]"
              >
                {dict.nav.cta}
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </div>

            <Image
              src={page.image}
              alt={c.title}
              width={420}
              height={280}
              priority
              className="h-[220px] w-full rounded-[14px] object-cover lg:h-[280px]"
            />
          </div>
        </section>

        {/* --- Öne çıkan bilgiler --- */}
        <section className="bg-surface py-12 lg:py-14">
          <div className="section-x">
            <h2 className="eyebrow">{t.highlights}</h2>
            <ul className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
              {c.highlights.map((h, i) => (
                <li
                  key={h.label}
                  data-reveal
                  style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}
                  className="rounded-[14px] border border-cream-200 bg-cream px-5 py-5"
                >
                  <p className="text-[13px] text-muted">{h.label}</p>
                  <p className="mt-1.5 text-[16px] font-semibold text-ink">{h.value}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* --- Giriş + bölümler --- */}
        <section className="bg-surface pb-16 lg:pb-20">
          <div className="section-x">
            <div className="max-w-[840px]">
            {c.intro.map((p) => (
              <p key={p} className="mt-4 text-[17px] leading-[1.75] text-body first:mt-0">
                {p}
              </p>
            ))}

            {c.sections.map((s) => (
              <div key={s.heading} data-reveal className="mt-12">
                <h2 className="font-serif text-[24px] leading-snug text-ink sm:text-[28px]">
                  {s.heading}
                </h2>
                {s.paragraphs?.map((p) => (
                  <p key={p} className="mt-3.5 text-[16px] leading-[1.75] text-body">
                    {p}
                  </p>
                ))}
                {s.list && (
                  <ul className="mt-4 flex flex-col gap-2.5">
                    {s.list.map((item) => (
                      <li
                        key={item}
                        className="relative ps-6 text-[16px] leading-[1.7] text-body before:absolute before:start-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {kind === "treatment" && (
              <p
                role="note"
                className="mt-12 rounded-[12px] border border-cream-200 bg-cream px-5 py-4 text-[14px] leading-[1.65] text-muted"
              >
                {t.medicalNotice}
              </p>
            )}
            </div>
          </div>
        </section>

        {/* --- SSS --- */}
        <section className="bg-cream py-16 lg:py-20">
          <div className="section-x">
            <div className="max-w-[840px]">
            <h2 className="font-serif text-[26px] leading-snug text-ink sm:text-[32px]">
              {t.faqTitle}
            </h2>
            <dl className="mt-8">
              {c.faq.map((f) => (
                <div
                  key={f.question}
                  data-reveal
                  className="border-b border-line-soft py-5 last:border-b-0"
                >
                  <dt className="text-[16px] font-semibold leading-snug text-ink">
                    {f.question}
                  </dt>
                  <dd className="mt-2 text-[15px] leading-[1.7] text-body">{f.answer}</dd>
                </div>
              ))}
            </dl>
            </div>
          </div>
        </section>

        {/* --- Bu ülkedeki anlaşmalı klinikler --- */}
        {countryClinics.length > 0 && (
          <section className="bg-surface py-16 lg:py-20">
            <div className="section-x">
              <h2 className="font-serif text-[24px] leading-snug text-ink sm:text-[28px]">
                {t.clinicsTitle}
              </h2>
              <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {countryClinics.map((clinic, i) => (
                  <li
                    key={clinic.slug}
                    data-reveal
                    style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
                    className="overflow-hidden rounded-[14px] border border-cream-200 bg-surface"
                  >
                    <Image
                      src={clinic.image}
                      alt={clinic.name}
                      width={384}
                      height={220}
                      className="aspect-[384/220] w-full object-cover"
                    />
                    <div className="p-5">
                      <h3 className="font-serif text-[18px] leading-tight text-ink">
                        {clinic.name}
                      </h3>
                      <p className="mt-2 flex items-center gap-2 text-[13px] text-muted">
                        <CountryFlag iso2={clinic.countryCode} />
                        {clinic.city[dict.locale]} · {clinicCountry(clinic, dict.locale)}
                      </p>
                      {clinic.address && (
                        <p className="mt-2 text-[14px] leading-[1.6] text-body">
                          {clinic.address}
                        </p>
                      )}
                      {clinic.phone && (
                        <a
                          href={`tel:${clinic.phone.replace(/\s/g, "")}`}
                          className="mt-3 inline-block text-[14px] font-medium text-brand-700 transition-opacity hover:opacity-75"
                        >
                          {clinic.phone}
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* --- Diğer sayfalar --- */}
        <section className="bg-surface py-16 lg:py-20">
          <div className="section-x">
            <h2 className="font-serif text-[24px] leading-snug text-ink sm:text-[28px]">
              {kind === "treatment" ? t.otherTreatments : t.otherDestinations}
            </h2>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((other, i) => {
                const oc = other.content[dict.locale];
                return (
                  <li
                    key={other.key}
                    data-reveal
                    style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
                  >
                    <Link
                      href={detailPath(kind, dict.locale, other)}
                      className="group flex h-full flex-col overflow-hidden rounded-[14px] border border-cream-200 bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-[0_18px_40px_-24px_rgba(10,25,40,0.45)]"
                    >
                      <Image
                        src={other.image}
                        alt={oc.title}
                        width={384}
                        height={200}
                        className="aspect-[384/200] w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                      />
                      <div className="flex flex-1 flex-col p-5">
                        <h3 className="font-serif text-[20px] leading-tight text-ink">
                          {oc.title}
                        </h3>
                        <p className="mt-2 text-[14px] leading-[1.6] text-body">
                          {oc.tagline}
                        </p>
                        <span className="mt-auto inline-flex items-center gap-2 pt-5 text-[14px] font-medium text-brand-700">
                          {dict.treatments.link}
                          <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* --- Kapanış CTA --- */}
        <section className="bg-[image:var(--gradient-orbit)] py-16 lg:py-20">
          <div className="section-x flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="font-serif text-[26px] leading-snug text-white sm:text-[32px]">
                {t.ctaTitle}
              </h2>
              <p className="mt-3 max-w-[560px] text-[16px] leading-[1.6] text-white/70">
                {t.ctaText}
              </p>
            </div>
            <a
              href={sectionHref(dict.locale, "#iletisim")}
              className="inline-flex shrink-0 items-center gap-2.5 rounded-full bg-brand-500 px-7 py-4 text-[15px] font-medium text-white transition-all duration-200 hover:bg-brand-600 hover:shadow-[0_10px_24px_-10px_rgba(217,124,82,0.9)]"
            >
              {dict.nav.cta}
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>

      <Footer dict={dict} />
    </>
  );
}
