"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  StarIcon,
} from "./icons";
import type { Dict } from "@/data/content";

const AUTOPLAY_MS = 7000;
const SWIPE_THRESHOLD = 50;

function Testimonials({ t }: { t: Dict["testimonials"] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = t.items.length;
  const many = count > 1;

  const dragStart = useRef<number | null>(null);
  const dragDelta = useRef(0);

  const go = useCallback(
    (next: number) => setIndex(((next % count) + count) % count),
    [count],
  );

  // Otomatik kaydırma - fare/klavye etkileşiminde ve reduced-motion'da durur.
  useEffect(() => {
    if (!many || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % count), AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [many, paused, count]);

  function onPointerDown(e: React.PointerEvent) {
    if (!many) return;
    dragStart.current = e.clientX;
    dragDelta.current = 0;
    setPaused(true);
  }

  function onPointerMove(e: React.PointerEvent) {
    if (dragStart.current === null) return;
    dragDelta.current = e.clientX - dragStart.current;
  }

  function onPointerUp() {
    if (dragStart.current === null) return;
    if (Math.abs(dragDelta.current) > SWIPE_THRESHOLD) {
      go(index + (dragDelta.current < 0 ? 1 : -1));
    }
    dragStart.current = null;
    dragDelta.current = 0;
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (!many) return;
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(index - 1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      go(index + 1);
    }
  }

  return (
    <section
      aria-roledescription="carousel"
      aria-label={t.label}
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className="relative flex h-full flex-col overflow-hidden rounded-[20px] bg-[image:var(--gradient-testimonial)] p-7 outline-none focus-visible:ring-2 focus-visible:ring-white/40 lg:p-8"
    >
      {/* Oklar sabit; içerik altlarından kayar */}
      <div className="absolute end-7 top-7 z-10 flex gap-2 lg:end-8 lg:top-8">
        <button
          type="button"
          onClick={() => go(index - 1)}
          disabled={!many}
          aria-label={t.prev}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white transition-colors enabled:hover:bg-white/10 disabled:opacity-40 sm:h-8 sm:w-8"
        >
          <ChevronLeftIcon className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => go(index + 1)}
          disabled={!many}
          aria-label={t.next}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white transition-colors enabled:hover:bg-white/10 disabled:opacity-40 sm:h-8 sm:w-8"
        >
          <ChevronRightIcon className="h-4 w-4" />
        </button>
      </div>

      <div
        className="flex-1 overflow-hidden"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        style={{ touchAction: "pan-y" }}
      >
        <ul
          className="flex h-full transition-transform duration-500 ease-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {t.items.map((item, i) => (
            <li
              key={item.name}
              className="w-full shrink-0"
              aria-hidden={i !== index}
              aria-roledescription="slide"
              aria-label={`${i + 1} / ${count}`}
            >
              <div className="flex items-center gap-3.5 pe-24">
                <span className="h-11 w-11 shrink-0 rounded-full bg-[image:var(--gradient-avatar)]" />
                <div>
                  <p className="text-[15px] text-white">
                    <span className="font-semibold">{item.name}</span>{" "}
                    <span className="text-[13px] text-white/60">{item.country}</span>
                  </p>
                  <div className="mt-1.5 flex gap-1" aria-label={`${item.rating} / 5`}>
                    {Array.from({ length: item.rating }).map((_, n) => (
                      <StarIcon key={n} className="h-3.5 w-3.5 text-brand-500" />
                    ))}
                  </div>
                </div>
              </div>

              <blockquote className="mt-7 text-[16px] leading-[1.75] text-white/90">
                {item.quote}
              </blockquote>
            </li>
          ))}
        </ul>
      </div>

      {/* Nokta göstergeleri - kartın altındaki boşluğu da dolduruyor.
          Noktanın GÖRÜNÜMÜ 6px kalıyor ama dokunma alanı sözde-elemanla
          44px yüksekliğe çıkarılıyor: telefonda 6x6 piksellik bir hedefe
          basmak mümkün değil. Mobilde aradaki boşluk da biraz açılıyor ki
          komşu hedefler üst üste binmesin. */}
      {many && (
        <div className="mt-8 flex items-center gap-3 sm:gap-2">
          {t.items.map((item, i) => (
            <button
              key={item.name}
              type="button"
              onClick={() => go(i)}
              aria-label={`${t.goTo} ${i + 1}`}
              aria-current={i === index}
              className={`relative h-1.5 rounded-full transition-all before:absolute before:-inset-x-1.5 before:-inset-y-[19px] before:content-[''] ${
                i === index ? "w-6 bg-brand-500" : "w-1.5 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}

function Faq({ t }: { t: Dict["faq"] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="h-full rounded-[20px] border border-cream-200 bg-surface-soft p-7 lg:p-8">
      <p className="eyebrow">{t.eyebrow}</p>

      <div className="mt-6">
        {t.items.map((faq, i) => {
          const open = openIndex === i;
          return (
            <div key={faq.question} className="border-b border-line-soft last:border-b-0">
              <h3>
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? -1 : i)}
                  aria-expanded={open}
                  className="flex w-full items-start justify-between gap-4 py-4 text-start"
                >
                  <span className="text-[15px] font-semibold leading-snug text-ink">{faq.question}</span>
                  <ChevronDownIcon
                    className={`mt-0.5 h-4 w-4 shrink-0 text-brand-700 transition-transform ${open ? "rotate-180" : ""}`}
                  />
                </button>
              </h3>
              {open && (
                <p className="-mt-1 pb-5 pe-8 text-[14px] leading-[1.65] text-muted">{faq.answer}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function TestimonialsFaq({ dict }: { dict: Dict }) {
  return (
    <section className="bg-cream pb-16 sm:pb-24 lg:pb-[100px]">
      {/* min-w-0 ŞART: bu iki div grid öğesi ve varsayılan `min-width: auto`
          ile içeriklerinin min-content genişliğinin altına inemiyorlar.
          Karuselin şeridi 5 x %100 olduğu için min-content 1256px çıkıyor,
          sütun o kadar şişiyor ve TÜM SAYFA telefonda yatay kayıyordu. */}
      <div className="section-x grid gap-6 sm:grid-cols-2 lg:gap-12">
        <div data-reveal className="h-full min-w-0">
          <Testimonials t={dict.testimonials} />
        </div>
        <div data-reveal className="h-full min-w-0" style={{ "--reveal-delay": "120ms" } as React.CSSProperties}>
          <Faq t={dict.faq} />
        </div>
      </div>
    </section>
  );
}
