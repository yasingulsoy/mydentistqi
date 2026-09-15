import {
  AE, AT, AU, AZ, BE, BG, BH, CA, CH, CZ, DE, DK, DZ, EG, ES, FI, FR, GB, GE,
  GR, HU, IE, IL, IQ, IR, IT, JO, KW, KZ, LB, LY, MA, NL, NO, OM, PL, PT, QA,
  RO, RU, SA, SE, TN, TR, UA, US,
} from "country-flag-icons/react/3x2";

/**
 * Bayraklar `country-flag-icons` paketinden (MIT, gerçek SVG'ler).
 * Adlandırılmış import kullanılıyor ki bundle'a yalnızca listedekiler girsin —
 * paketin tamamı 265 bayrak içeriyor.
 *
 * Windows emoji bayrakları (🇹🇷) göstermediği, harf olarak yazdığı için
 * emoji yerine SVG şart.
 */
const FLAGS: Record<string, React.ComponentType<{ className?: string; title?: string }>> = {
  AE, AT, AU, AZ, BE, BG, BH, CA, CH, CZ, DE, DK, DZ, EG, ES, FI, FR, GB, GE,
  GR, HU, IE, IL, IQ, IR, IT, JO, KW, KZ, LB, LY, MA, NL, NO, OM, PL, PT, QA,
  RO, RU, SA, SE, TN, TR, UA, US,
};

export function CountryFlag({
  iso2,
  title,
  className = "h-[13px] w-[19px] shrink-0 rounded-[2px] object-cover",
}: {
  iso2: string;
  title?: string;
  className?: string;
}) {
  const Flag = FLAGS[iso2];
  if (!Flag) {
    // Listede olmayan bir ülke eklenirse yerine ISO kodu gösterilir.
    return (
      <span
        className="flex h-[13px] w-[19px] shrink-0 items-center justify-center rounded-[2px] bg-line text-[8px] font-semibold text-body"
        aria-hidden="true"
      >
        {iso2}
      </span>
    );
  }
  return <Flag className={className} title={title} />;
}
