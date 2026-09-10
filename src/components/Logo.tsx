/**
 * Figma'daki MyDentist logo denemelerine dayanan tipografik wordmark.
 *
 * Figma'daki logolar vektör değil gömülü görsel olduğu için dışarı
 * aktarılamadı. Gerçek logoyu Figma'dan SVG olarak export edip
 * `public/logo.svg` olarak kaydedersen, buradaki <span> blokunu
 * <Image src="/logo.svg" .../> ile değiştirmen yeterli.
 */
export function Logo({
  tone = "light",
  className = "",
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  const text = tone === "light" ? "text-white" : "text-ink";

  return (
    <span
      className={`inline-flex items-center gap-2 ${text} ${className}`}
      aria-label="MyDentist"
    >
      {/* Gülümseme işareti */}
      <svg
        viewBox="0 0 32 32"
        className="h-8 w-8 shrink-0"
        aria-hidden="true"
        fill="none"
      >
        <circle cx="16" cy="16" r="16" className="fill-brand-500" />
        <path
          d="M9 14.5c1.6 0 2.4-1.1 2.4-2.6 0-1.1-.7-1.9-1.7-1.9-1 0-1.7.8-1.7 1.9 0 3.6 2.9 6.4 7 6.4 3.4 0 6.2-1.9 7.2-4.6"
          stroke="#fff"
          strokeWidth="2.1"
          strokeLinecap="round"
        />
      </svg>

      <span className="text-[19px] leading-none tracking-tight">
        <span className="font-bold">My</span>
        <span className="font-light">Dentist</span>
      </span>
    </span>
  );
}
