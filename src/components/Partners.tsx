"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { CountryFlag } from "./CountryFlag";
import { CLINICS_PER_PAGE, clinicCountry, clinics, type Clinic } from "@/data/partners";
import type { Dict } from "@/data/content";

const SWIPE_THRESHOLD = 50;

function ClinicCard({ clinic, locale }: { clinic: Clinic; locale: Dict["locale"] }) {
  return (
    <div className="flex h-[86px] flex-col items-center justify-center gap-1.5 rounded-[10px] border border-line bg-surface px-3 text-center transition-colors duration-300 hover:border-brand-500/40">
      <span className="line-clamp-2 font-serif text-[13px] font-bold leading-tight text-ink">
        {clinic.name}
      </span>
      <span className="flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.06em] text-muted">
        <CountryFlag iso2={clinic.countryCode} className="h-[9px] w-[13px] shrink-0 rounded-[1px]" />
        {clinic.city[locale]} · {clinicCountry(clinic, locale)}
      </span>
    </div>
  );
}

export function Partners({ dict }: { dict: Dict }) {
  const t = dict.partners;
  const pageCount = Math.ceil(clinics.length / CLINICS_PER_PAGE);
  const [page, setPage] = useState(0);

  const dragStart = useRef<number | null>(null);
  const dragDelta = useRef(0);

  const go = (next: number) => setPage(((next % pageCount) + pageCount) % pageCount);

  function onPointerDown(e: React.PointerEvent) {
    dragStart.current = e.clientX;
    dragDelta.current = 0;
  }
  function onPointerMove(e: React.PointerEvent) {
    if (dragStart.current !== null) dragDelta.current = e.clientX - dragStart.current;
  }
  function onPointerUp() {
    if (dragStart.current === null) return;
    if (Math.abs(dragDelta.current) > SWIPE_THRESHOLD) {
      go(page + (dragDelta.current < 0 ? 1 : -1));
    }
    dragStart.current = null;
    dragDelta.current = 0;
  }
  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(page - 1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      go(page + 1);
    }
  }

  const pages = Array.from({ length: pageCount }, (_, i) =>
    clinics.slice(i * CLINICS_PER_PAGE, (i + 1) * CLINICS_PER_PAGE),
  );
  /** Dar ekrandaki görsel, o sayfanın ilk kliniğini gösterir. */
  const featured = pages[page][0];

  return (
    <section
      id="anlasmali-kurumlar"
      className="bg-surface py-16 sm:py-24 lg:py-[100px]"
    >
      <div className="section-x">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} size="md" />

        <div
          role="group"
          aria-roledescription="carousel"
          aria-label={t.title}
          tabIndex={0}
          onKeyDown={onKeyDown}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          className="mt-12 outline-none focus-visible:ring-2 focus-visible:ring-brand-500/50"
          style={{ touchAction: "pan-y" }}
        >
          {/* Masaüstü: tek sırada 6 klinik, sayfa sayfa */}
          <div className="hidden overflow-hidden lg:block">
            <div
              className="flex transition-transform duration-500 ease-out motion-reduce:transition-none"
              style={{ transform: `translateX(-${page * 100}%)` }}
            >
              {pages.map((group, i) => (
                <div
                  key={i}
                  aria-hidden={i !== page}
                  className="grid w-full shrink-0 grid-cols-6 gap-6"
                >
                  {group.map((clinic) => (
                    <ClinicCard key={clinic.slug} clinic={clinic} locale={dict.locale} />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* 709px tasarımı: solda klinik listesi, sağda o sayfanın görseli */}
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between lg:hidden">
            <div className="grid grid-cols-2 gap-3 sm:w-[210px] sm:shrink-0 sm:grid-cols-1">
              {pages[page].map((clinic) => (
                <ClinicCard key={clinic.slug} clinic={clinic} locale={dict.locale} />
              ))}
            </div>

            <Image
              key={featured.slug}
              src={featured.image}
              alt={`${featured.name} — ${featured.city[dict.locale]}`}
              width={319}
              height={491}
              className="h-[320px] w-full rounded-[14px] object-cover sm:h-[560px] sm:w-[315px]"
            />
          </div>
        </div>

        {/* Karusel noktaları — 16 klinik, sayfa başına 6 = 3 sayfa */}
        <div className="mt-10 flex items-center justify-center gap-2">
          {pages.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setPage(i)}
              aria-label={`${t.goToPage} ${i + 1}`}
              aria-current={i === page}
              className={`h-1.5 rounded-full transition-all ${
                i === page ? "w-6 bg-brand-500" : "w-1.5 bg-dot hover:bg-brand-500/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
