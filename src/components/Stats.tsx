import type { Dict } from "@/data/content";

export function Stats({ dict }: { dict: Dict }) {
  return (
    <section className="bg-cream py-14 sm:py-16 lg:py-20">
      <div className="section-x">
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
          {dict.stats.map((stat, i) => (
            <li
              key={stat.label}
              data-reveal
              style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
              className="rounded-[14px] border border-cream-200 bg-surface px-5 py-7 transition-colors duration-300 hover:border-brand-500/40 lg:px-6 lg:py-8"
            >
              <p className="font-serif text-[26px] leading-none text-ink lg:text-[35px]">{stat.value}</p>
              <p className="mt-7 text-[15px] font-semibold text-ink">{stat.label}</p>
              <p className="mt-3 text-[13px] leading-[1.6] text-muted">{stat.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
