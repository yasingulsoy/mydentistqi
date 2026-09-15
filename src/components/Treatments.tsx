import Image from "next/image";
import { SectionHeading } from "./SectionHeading";
import { ArrowRightIcon, treatmentIcons } from "./icons";
import Link from "next/link";
import { type Dict } from "@/data/content";
import { detailPath, treatmentPages } from "@/data/detail-pages";

export function Treatments({ dict }: { dict: Dict }) {
  const t = dict.treatments;

  return (
    <section id="tedaviler" className="bg-cream py-16 sm:py-24 lg:py-[100px]">
      <div className="section-x">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} description={t.description} />

        {/* Dar telefonlarda yatay kaydırma, 640px üstünde 4'lü satır */}
        <ul className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 sm:mt-12 sm:grid sm:grid-cols-4 sm:overflow-visible sm:pb-0 lg:gap-6">
          {t.items.map((item, i) => {
            const detail = treatmentPages[i];
            const Icon = treatmentIcons[detail.icon!];
            return (
              <li
                key={detail.key}
                data-reveal
                style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
                className="w-[230px] shrink-0 snap-start sm:w-auto"
              >
                <article className="group flex h-full flex-col overflow-hidden rounded-[14px] border border-cream-200 bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-[0_18px_40px_-24px_rgba(10,25,40,0.45)]">
                  <div className="relative">
                    <Image
                      src={detail.image}
                      alt={item.title}
                      width={280}
                      height={180}
                      className="aspect-[280/180] w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                    />
                    <span className="absolute -bottom-5 start-5 flex h-10 w-10 items-center justify-center rounded-[10px] bg-surface shadow-[0_6px_16px_-6px_rgba(10,25,40,0.3)]">
                      <Icon className="h-5 w-5 text-sky-ink" />
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col px-5 pb-6 pt-9">
                    <h3 className="font-serif text-[20px] leading-tight text-ink">{item.title}</h3>
                    <p className="mt-2.5 text-[15px] leading-[1.6] text-body">{item.description}</p>
                    <Link
                      href={detailPath("treatment", dict.locale, detail)}
                      className="mt-auto inline-flex items-center gap-2 pt-5 text-[14px] font-medium text-brand-700 transition-opacity hover:opacity-75 [&>svg]:transition-transform [&>svg]:duration-300 group-hover:[&>svg]:translate-x-1"
                    >
                      {t.link}
                      <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
