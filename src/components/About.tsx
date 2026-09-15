import { SectionHeading } from "./SectionHeading";
import type { Dict } from "@/data/content";

/**
 * "Hakkımızda" bölümü.
 *
 * `#hakkimizda` çıpası önceden "Nasıl İşliyor?" bölümündeydi — gerçek bir
 * hakkımızda metni yoktu. Navigasyondaki sıra (Ana Sayfa → Hakkımızda →
 * Tedaviler) ile eşleşmesi için hero'nun hemen altında duruyor.
 */
export function About({ dict }: { dict: Dict }) {
  const t = dict.about;

  return (
    <section id="hakkimizda" className="bg-surface py-16 sm:py-24 lg:py-[100px]">
      <div className="section-x lg:grid lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:gap-16">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          titleClassName="lg:max-w-[380px]"
        />

        <div className="mt-8 flex flex-col gap-5 lg:mt-0">
          {t.paragraphs.map((paragraph, i) => (
            <p
              key={paragraph.slice(0, 40)}
              data-reveal
              style={
                { "--reveal-delay": `${i * 90}ms` } as React.CSSProperties
              }
              className="text-[15px] leading-[1.75] text-body sm:text-[16px]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
