/**
 * Figma'dan ölçülen başlık boyutları:
 *  - "lg" (36px): Öne Çıkan Tedaviler, Popüler Noktalar, Seyahatinizin Her Adımında
 *  - "md" (28px): Anlaşmalı Kurumlar, Nasıl İşliyor?
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "dark",
  size = "lg",
  className = "",
  titleClassName = "",
  descClassName = "",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  /** "dark" = açık zeminde koyu yazı, "light" = lacivert zeminde beyaz yazı */
  tone?: "dark" | "light";
  size?: "lg" | "md";
  className?: string;
  titleClassName?: string;
  descClassName?: string;
}) {
  return (
    <div className={className}>
      <p className="eyebrow">{eyebrow}</p>
      <h2
        className={`mt-3 font-serif leading-[1.18] ${
          size === "lg"
            ? "text-[28px] sm:text-[36px]"
            : "text-[24px] sm:text-[28px]"
        } ${tone === "light" ? "text-white" : "text-ink"} ${titleClassName}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 max-w-[520px] text-[15px] leading-[1.6] ${
            tone === "light" ? "text-white/70" : "text-body"
          } ${descClassName}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
