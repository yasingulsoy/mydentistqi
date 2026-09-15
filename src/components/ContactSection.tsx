import { ContactForm } from "./ContactForm";
import { SectionHeading } from "./SectionHeading";
import { brand, isPlaceholder, type Dict } from "@/data/content";
import { MailIcon, PhoneIcon } from "./icons";

/**
 * Sayfa altındaki iletişim formu.
 *
 * Hero'daki formun aynısı; ziyaretçi sayfayı sonuna kadar okuduğunda
 * başa dönmek zorunda kalmasın diye. `#iletisim` çıpası da buraya
 * bağlı — navbar ve footer'daki "İletişim" linkleri bu bölüme iniyor.
 */
export function ContactSection({ dict }: { dict: Dict }) {
  const phones = brand.phones.filter((p) => !isPlaceholder(p));

  return (
    <section id="iletisim" className="bg-cream py-20 lg:py-28">
      <div className="section-x">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div data-reveal>
            <SectionHeading
              eyebrow={dict.contact.eyebrow}
              title={dict.contact.title}
              description={dict.contact.description}
              reveal={false}
            />

            <ul className="mt-8 flex flex-col gap-4">
              <li className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-sky-soft">
                  <MailIcon className="h-[18px] w-[18px] text-sky-ink" />
                </span>
                <a
                  href={`mailto:${brand.email}`}
                  className="text-[15px] text-body transition-colors hover:text-ink"
                  dir="ltr"
                >
                  {brand.email}
                </a>
              </li>

              {phones.map((phone) => (
                <li key={phone} className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-sky-soft">
                    <PhoneIcon className="h-[18px] w-[18px] text-sky-ink" />
                  </span>
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="text-[15px] text-body transition-colors hover:text-ink"
                    dir="ltr"
                  >
                    {phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div data-reveal style={{ "--reveal-delay": "120ms" } as React.CSSProperties}>
            <ContactForm t={dict.hero.form} locale={dict.locale} variant="plain" />
          </div>
        </div>
      </div>
    </section>
  );
}
