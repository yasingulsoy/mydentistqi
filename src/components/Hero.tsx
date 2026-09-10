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
      {/* Sayfanın tek H1'i. Tasarımda hero başlığı yok, bu yüzden görsel
          olarak gizli ama arama motorları ve ekran okuyucular için var. */}
      <h1 className="sr-only">{dict.h1}</h1>

      <div className="mx-auto w-full max-w-[1240px] lg:grid lg:h-[870px] lg:grid-cols-[568px_568px] lg:justify-between lg:px-5">
        {/* Görsel: mobil ve masaüstü farklı kırpımlar, <picture> ile sadece
            eşleşen dosya indiriliyor (iki ayrı <Image> ikisini de indiriyordu). */}
        <div className="relative lg:order-2 lg:pt-24">
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet="/images/hero/hero-desktop.webp"
              width={568}
              height={710}
            />
            {/* <picture> art direction gerektirdiği için ham <img>;
                görseller zaten hedef boyutta WebP olarak hazır. */}
            <img
              src="/images/hero/hero-mobile.webp"
              alt={hero.imageAlt}
              width={709}
              height={854}
              fetchPriority="high"
              decoding="async"
              className="h-auto w-full object-cover lg:h-[710px] lg:w-[568px] lg:rounded-[4px]"
            />
          </picture>

          {/* Telefon / tablet: görselin üzerinde duran CTA */}
          <a
            href="#iletisim"
            className="absolute bottom-8 left-1/2 w-[min(292px,72%)] -translate-x-1/2 rounded-full bg-brand-500 py-4 text-center text-[16px] font-medium text-white shadow-[0_14px_30px_-12px_rgba(0,0,0,0.6)] transition-colors hover:bg-brand-600 lg:hidden"
          >
            {nav.cta}
          </a>

          {/* Masaüstü: görselin sağına taşan yüzen tedavi etiketleri */}
          <ul className="absolute right-[-25px] top-[133px] hidden flex-col gap-4 lg:flex">
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

        {/* Form */}
        <div className="px-5 py-14 sm:py-20 lg:order-1 lg:flex lg:items-center lg:px-0 lg:py-0">
          <ContactForm t={hero.form} />
        </div>
      </div>
    </section>
  );
}
