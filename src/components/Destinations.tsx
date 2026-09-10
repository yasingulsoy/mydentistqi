import Image from "next/image";
import { SectionHeading } from "./SectionHeading";
import { ArrowRightIcon } from "./icons";
import { destinationAssets, type Dict } from "@/data/content";

export function Destinations({ dict }: { dict: Dict }) {
  const t = dict.destinations;

  return (
    <section id="rotalar" className="bg-cream pt-16 sm:pt-24 lg:pt-[100px]">
      <div className="section-x">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} />

        <ul className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 sm:mt-12 sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0 lg:gap-6">
          {t.items.map((place, i) => {
            const asset = destinationAssets[i];
            return (
              <li key={asset.slug} className="w-[260px] shrink-0 snap-start sm:w-auto">
                <article className="relative aspect-[384/340] overflow-hidden rounded-[14px]">
                  <Image
                    src={asset.image}
                    alt={`${place.title} - ${place.cities}`}
                    fill
                    sizes="(min-width: 1024px) 384px, (min-width: 640px) 33vw, 260px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/25 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-6 lg:p-7">
                    <h3 className="font-serif text-[24px] leading-tight text-white">{place.title}</h3>
                    <p className="mt-1 text-[14px] text-white/80">{place.cities}</p>
                    <a
                      href={`#${asset.slug}`}
                      className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/15 px-5 py-2.5 text-[14px] text-white backdrop-blur-sm transition-colors hover:bg-white/25"
                    >
                      {t.cta}
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
