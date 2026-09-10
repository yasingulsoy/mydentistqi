import Image from "next/image";
import { ContactForm } from "./ContactForm";
import { treatmentIcons } from "./icons";
import { heroPillIcons, type Dict } from "@/data/content";

export function Hero({ dict }: { dict: Dict }) {
  const { hero, nav } = dict;

  return (
    <section
      id="ana-sayfa"
      className="bg-navy-800 bg-[linear-gradient(180deg,#253346_0%,#2e4159_50%,#37506c_100%)]"
    >
      {/* --- Telefon / tablet (Figma 709px düzeni): tam genişlik görsel + üstünde CTA --- */}
      <div className="lg:hidden">
        <div className="relative">
          <Image
            src="/images/hero/hero-mobile.webp"
            alt={hero.imageAlt}
            width={709}
            height={854}
            priority
            className="h-auto w-full object-cover"
          />
          <a
            href="#iletisim"
            className="absolute bottom-8 left-1/2 w-[min(292px,72%)] -translate-x-1/2 rounded-full bg-brand-500 py-4 text-center text-[16px] font-medium text-white shadow-[0_14px_30px_-12px_rgba(0,0,0,0.6)] transition-colors hover:bg-brand-600"
          >
            {nav.cta}
          </a>
        </div>

        <div className="section-x py-14 sm:py-20">
          <ContactForm t={hero.form} />
        </div>
      </div>

      {/* --- Masaüstü (Figma 1440px düzeni) --- */}
      <div className="hidden lg:block">
        <div className="section-x relative grid h-[870px] grid-cols-[568px_568px] justify-between">
          <div className="flex items-center">
            <ContactForm t={hero.form} />
          </div>

          <div className="relative pt-24">
            <Image
              src="/images/hero/hero-desktop.webp"
              alt={hero.imageAlt}
              width={568}
              height={710}
              priority
              className="h-[710px] w-[568px] rounded-[4px] object-cover"
            />

            {/* Görselin sağına taşan yüzen tedavi etiketleri */}
            <ul className="absolute right-[-25px] top-[133px] flex flex-col gap-4">
              {hero.pills.map((label, i) => {
                const Icon = treatmentIcons[heroPillIcons[i]];
                return (
                  <li
                    key={label}
                    className="flex min-h-[58px] w-[240px] items-center gap-3 rounded-full bg-white py-2 pl-2.5 pr-4 shadow-[0_12px_30px_-14px_rgba(10,25,40,0.45)]"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[9px] bg-sky-soft">
                      <Icon className="h-[18px] w-[18px] text-sky-ink" />
                    </span>
                    <span className="text-[14px] font-medium text-ink">{label}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
