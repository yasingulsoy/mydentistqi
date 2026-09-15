import { SectionHeading } from "./SectionHeading";
import type { Dict } from "@/data/content";

export function HowItWorks({ dict }: { dict: Dict }) {
  const t = dict.process;

  return (
    <section id="surec" className="bg-surface py-16 sm:py-24 lg:py-[100px]">
      <div className="section-x lg:grid lg:grid-cols-[minmax(0,1fr)_650px] lg:items-start lg:gap-12">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          description={t.description}
          size="md"
          className="lg:pt-4"
        />

        <ul className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:flex sm:flex-wrap sm:justify-center sm:gap-x-0 lg:mt-0">
          {t.steps.map((step, i) => (
            <li
              key={step.no}
              data-reveal
              style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
              className="group flex flex-col items-center text-center sm:w-[160px]"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sky-soft text-[14px] font-semibold text-sky-ink transition-transform duration-300 group-hover:scale-110">
                {step.no}
              </span>
              <h3 className="mt-4 text-[14px] font-semibold leading-snug text-ink">{step.title}</h3>
              <p className="mt-2.5 px-1 text-[13px] leading-[1.6] text-muted">{step.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
