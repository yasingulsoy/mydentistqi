"use client";

import { useState } from "react";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  StarIcon,
} from "./icons";
import type { Dict } from "@/data/content";

function Testimonials({ t }: { t: Dict["testimonials"] }) {
  const [index, setIndex] = useState(0);
  const item = t.items[index];
  const many = t.items.length > 1;

  const step = (dir: number) =>
    setIndex((i) => (i + dir + t.items.length) % t.items.length);

  return (
    <div className="rounded-[20px] bg-[linear-gradient(150deg,#2c3f57_0%,#334c68_55%,#3a5878_100%)] p-7 lg:p-8">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <span className="h-11 w-11 shrink-0 rounded-full bg-[linear-gradient(160deg,#cfe0ee,#8fb2cd)]" />
          <div>
            <p className="text-[15px] text-white">
              <span className="font-semibold">{item.name}</span>{" "}
              <span className="text-[13px] text-white/60">{item.country}</span>
            </p>
            <div className="mt-1.5 flex gap-1" aria-label={`${item.rating} / 5`}>
              {Array.from({ length: item.rating }).map((_, i) => (
                <StarIcon key={i} className="h-3.5 w-3.5 text-brand-500" />
              ))}
            </div>
          </div>
        </div>

        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => step(-1)}
            disabled={!many}
            aria-label={t.prev}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/25 text-white transition-colors enabled:hover:bg-white/10 disabled:opacity-40"
          >
            <ChevronLeftIcon className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            disabled={!many}
            aria-label={t.next}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/25 text-white transition-colors enabled:hover:bg-white/10 disabled:opacity-40"
          >
            <ChevronRightIcon className="h-4 w-4" />
          </button>
        </div>
      </div>

      <blockquote className="mt-7 text-[16px] leading-[1.75] text-white/90">
        {item.quote}
      </blockquote>
    </div>
  );
}

function Faq({ t }: { t: Dict["faq"] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="rounded-[20px] border border-cream-200 bg-[#FDFBF7] p-7 lg:p-8">
      <p className="eyebrow">{t.eyebrow}</p>

      <div className="mt-6">
        {t.items.map((faq, i) => {
          const open = openIndex === i;
          return (
            <div key={faq.question} className="border-b border-[#EAE4D9] last:border-b-0">
              <h3>
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? -1 : i)}
                  aria-expanded={open}
                  className="flex w-full items-start justify-between gap-4 py-4 text-left"
                >
                  <span className="text-[15px] font-semibold leading-snug text-ink">{faq.question}</span>
                  <ChevronDownIcon
                    className={`mt-0.5 h-4 w-4 shrink-0 text-brand-700 transition-transform ${open ? "rotate-180" : ""}`}
                  />
                </button>
              </h3>
              {open && (
                <p className="-mt-1 pb-5 pr-8 text-[14px] leading-[1.65] text-muted">{faq.answer}</p>
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
      <div className="section-x grid gap-6 sm:grid-cols-2 lg:gap-12">
        <Testimonials t={dict.testimonials} />
        <Faq t={dict.faq} />
      </div>
    </section>
  );
}
