import Image from "next/image";

const WHITE = "/logo/mydentist-logo-white.svg";
const DARK = "/logo/mydentist-logo-dark.svg";

/**
 * Marka logosu. Kaynak dosyalar `public/logo/` altında:
 * tam logo 486x153, ikon 152x152 (SVG + @300 PNG, beyaz ve siyah).
 *
 * tone:
 *  - "light" -> her zaman beyaz logo (footer gibi iki temada da koyu zeminler)
 *  - "dark"  -> her zaman siyah logo
 *  - "auto"  -> temaya göre değişir (navbar: açık temada beyaz zemin, koyu
 *               temada lacivert zemin). İki SVG de basılır, CSS ile gösterilir;
 *               toplam 15 KB olduğu için ek istek maliyeti önemsiz.
 *
 * Next 16'da `.svg` uzantılı src otomatik `unoptimized` işlenir.
 */
export function Logo({
  tone = "light",
  priority = false,
  className = "",
}: {
  tone?: "light" | "dark" | "auto";
  priority?: boolean;
  className?: string;
}) {
  const size = `h-8 w-auto lg:h-10 ${className}`;

  if (tone === "auto") {
    return (
      <>
        <Image
          src={DARK}
          alt="MyDentist"
          width={486}
          height={153}
          priority={priority}
          className={`${size} dark:hidden`}
        />
        <Image
          src={WHITE}
          alt=""
          aria-hidden="true"
          width={486}
          height={153}
          priority={priority}
          className={`${size} hidden dark:block`}
        />
      </>
    );
  }

  return (
    <Image
      src={tone === "light" ? WHITE : DARK}
      alt="MyDentist"
      width={486}
      height={153}
      priority={priority}
      className={size}
    />
  );
}
