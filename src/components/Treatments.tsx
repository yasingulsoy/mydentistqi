import Image from "next/image";
import { SectionHeading } from "./SectionHeading";
import { ArrowRightIcon, treatmentIcons } from "./icons";
import { treatmentAssets, type Dict } from "@/data/content";

export function Treatments({ dict }: { dict: Dict }) {
  const t = dict.treatments;

  return (
    <section id="tedaviler" className="bg-cream py-16 sm:py-24 lg:py-[100px]">
      <div className="section-x">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} description={t.description} />

        {/* Dar telefonlarda yatay kaydırma, 640px üstünde 4'lü satır */}
        <ul className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 sm:mt-12 sm:grid sm:grid-cols-4 sm:overflow-visible sm:pb-0 lg:gap-6">
          {t.items.map((item, i) => {
            const asset = treatmentAssets[i];
            const Icon = treatmentIcons[asset.icon];
            return (
              <li key={asset.slug} className="w-[230px] shrink-0 snap-start sm:w-auto">
                <article className="flex h-full flex-col overflow-hidden rounded-[14px] border border-cream-200 bg-white">
                  <div className="relative">
                    <Image
                      src={asset.image}
                      alt={item.title}
                      width={280}
                      height={180}
                      className="aspect-[280/180] w-full object-cover"
                    />
                    <span className="absolute -bottom-5 left-5 flex h-10 w-10 items-center justify-center rounded-[10px] bg-white shadow-[0_6px_16px_-6px_rgba(10,25,40,0.3)]">
                      <Icon className="h-5 w-5 text-sky-ink" />
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col px-5 pb-6 pt-9">
                    <h3 className="font-serif text-[20px] leading-tight text-ink">{item.title}</h3>
                    <p className="mt-2.5 text-[15px] leading-[1.6] text-body">{item.description}</p>
                    <a
                      href={`#${asset.slug}`}
                      className="mt-auto inline-flex items-center gap-2 pt-5 text-[14px] font-medium text-brand-700 transition-opacity hover:opacity-75"
                    >
                      {t.link}
                      <ArrowRightIcon className="h-4 w-4" />
                    </a>
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
