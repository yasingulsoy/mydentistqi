"use client";

import { useState } from "react";
import type { Dict } from "@/data/content";

const inputClass =
  "h-[58px] w-full rounded-[10px] border border-[#E6E6E6] bg-white px-4 text-[16px] text-ink outline-none transition-colors placeholder:text-[#9AA5AE] focus:border-brand-500";

export function ContactForm({ t }: { t: Dict["hero"]["form"] }) {
  const [sent, setSent] = useState(false);

  // TODO: gerçek gönderim ucu (API route / e-posta servisi) henüz bağlı değil.
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full rounded-[20px] bg-white px-7 py-8 shadow-[0_24px_60px_-20px_rgba(10,25,40,0.35)] sm:pb-12 sm:pt-16"
    >
      <div className="flex flex-col gap-6">
        <label className="sr-only" htmlFor="ad-soyad">{t.name}</label>
        <input id="ad-soyad" name="adSoyad" type="text" required placeholder={t.name} className={inputClass} />

        <label className="sr-only" htmlFor="telefon">{t.phone}</label>
        <div className="flex h-[58px] w-full items-center gap-2 rounded-[10px] border border-[#E6E6E6] bg-white pl-3 pr-4 focus-within:border-brand-500">
          <span className="flex shrink-0 items-center gap-1.5">
            <svg viewBox="0 0 36 24" className="h-[18px] w-[27px] rounded-[3px]" role="img" aria-label={t.countryAlt}>
              <rect width="36" height="24" fill="#E30A17" />
              <circle cx="15" cy="12" r="6" fill="#fff" />
              <circle cx="16.8" cy="12" r="4.8" fill="#E30A17" />
              <path d="m23.4 12 4.35-1.41-2.69 3.7v-4.58l2.69 3.7L23.4 12Z" fill="#fff" />
            </svg>
            <svg viewBox="0 0 10 6" className="h-1.5 w-2.5 fill-[#6B7885]" aria-hidden="true">
              <path d="M0 0h10L5 6 0 0Z" />
            </svg>
          </span>
          <input id="telefon" name="telefon" type="tel" required placeholder={t.phone}
            className="h-full w-full bg-transparent text-[16px] text-ink outline-none placeholder:text-[#9AA5AE]" />
        </div>

        <label className="sr-only" htmlFor="mail">{t.email}</label>
        <input id="mail" name="mail" type="email" required placeholder={t.email} className={inputClass} />

        <button
          type="submit"
          className="mt-1.5 h-[52px] w-full rounded-full bg-brand-500 text-[16px] font-medium text-white shadow-[0_10px_24px_-10px_rgba(217,124,82,0.9)] transition-colors hover:bg-brand-600"
        >
          {t.submit}
        </button>

        {sent && (
          <p role="status" className="text-center text-[14px] text-brand-700">{t.sent}</p>
        )}
      </div>
    </form>
  );
}
