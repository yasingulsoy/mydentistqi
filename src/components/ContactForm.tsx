"use client";

import { useState } from "react";
import { PhoneField } from "./PhoneField";
import type { Dict, Locale } from "@/data/content";

const inputClass =
  "h-[58px] w-full rounded-[10px] border border-line bg-surface px-4 text-[16px] text-ink outline-none transition-colors placeholder:text-placeholder focus:border-brand-500";

export function ContactForm({
  t,
  locale,
}: {
  t: Dict["hero"]["form"];
  locale: Locale;
}) {
  const [sent, setSent] = useState(false);

  // TODO: gerçek gönderim ucu (API route / e-posta servisi) henüz bağlı değil.
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full rounded-[20px] bg-surface px-7 py-8 shadow-[0_24px_60px_-20px_rgba(10,25,40,0.35)] sm:pb-12 sm:pt-16"
    >
      <div className="flex flex-col gap-6">
        <label className="sr-only" htmlFor="ad-soyad">{t.name}</label>
        <input id="ad-soyad" name="adSoyad" type="text" required placeholder={t.name} className={inputClass} />

        <PhoneField t={t} locale={locale} />

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
