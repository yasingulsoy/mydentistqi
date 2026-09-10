import Image from "next/image";
import { SectionHeading } from "./SectionHeading";
import { partners, type Dict } from "@/data/content";

function PartnerCard({ partner }: { partner: (typeof partners)[number] }) {
  return (
    <div className="flex h-[71px] items-center justify-center gap-2 rounded-[10px] border border-[#E8E8E8] bg-white px-3 text-center">
      <span className="font-serif text-[15px] font-bold leading-tight text-ink">{partner.name}</span>
      <span className="flex flex-col text-[8px] font-semibold uppercase leading-[1.25] tracking-[0.06em] text-muted">
        {partner.suffix.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </span>
    </div>
  );
}

export function Partners({ dict }: { dict: Dict }) {
  const t = dict.partners;

  return (
    <section id="anlasmali-kurumlar" className="bg-white py-16 sm:py-24 lg:py-[100px]">
      <div className="section-x">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} size="md" />

        {/* Masaüstü: tek sırada 6 kurum */}
        <div className="mt-12 hidden grid-cols-6 gap-6 lg:grid">
          {partners.map((partner) => (
            <PartnerCard key={partner.name} partner={partner} />
          ))}
        </div>

        {/* 709px tasarımı: solda kurum listesi, sağda klinik görseli */}
        <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between lg:hidden">
          <div className="grid grid-cols-2 gap-3 sm:w-[177px] sm:shrink-0 sm:grid-cols-1">
            {partners.map((partner) => (
              <PartnerCard key={partner.name} partner={partner} />
            ))}
          </div>

          <Image
            src="/images/kurumlar/anlasmali-kurumlar-mobile.webp"
            alt={t.imageAlt}
            width={319}
            height={491}
            className="w-full rounded-[14px] object-cover sm:w-[315px]"
          />
        </div>

        {/* Tasarımdaki karusel noktaları. Şu an 6 kurum tek sayfaya sığdığı
            için dekoratif; kurum sayısı arttığında sayfalamaya bağlanacak. */}
        <div className="mt-10 flex items-center justify-center gap-2">
          <span className="h-1.5 w-6 rounded-full bg-brand-500" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#D6D6D6]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#D6D6D6]" />
        </div>
      </div>
    </section>
  );
}
