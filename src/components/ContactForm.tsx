"use client";

import { useId, useState } from "react";
import { PhoneField } from "./PhoneField";
import type { Dict, Locale } from "@/data/content";

const inputClass =
  "h-[58px] w-full rounded-[10px] border border-line bg-surface px-4 text-[16px] text-ink outline-none transition-colors placeholder:text-placeholder focus:border-brand-500";

export function ContactForm({
  t,
  locale,
  variant = "card",
}: {
  t: Dict["hero"]["form"];
  locale: Locale;
  /** "card" = hero'daki yüzen kart, "plain" = bölüm içindeki düz form */
  variant?: "card" | "plain";
}) {
  const [sent, setSent] = useState(false);
  // Form sayfada iki kez var (hero + sayfa altı); sabit id'ler çakışır ve
  // etiket-alan eşleşmesini bozar.
  const uid = useId();

  // TODO: gerçek gönderim ucu (API route / e-posta servisi) henüz bağlı değil.
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={
        variant === "card"
          ? "w-full rounded-[20px] bg-surface px-7 py-8 shadow-[0_24px_60px_-20px_rgba(10,25,40,0.35)] sm:pb-12 sm:pt-16"
          : "w-full rounded-[20px] border border-line bg-surface px-6 py-8 sm:px-8"
      }
    >
      <div className="flex flex-col gap-6">
        <label className="sr-only" htmlFor={`${uid}-ad`}>{t.name}</label>
        <input id={`${uid}-ad`} name="adSoyad" type="text" required placeholder={t.name} className={inputClass} />

        <PhoneField t={t} locale={locale} idPrefix={uid} />

        <label className="sr-only" htmlFor={`${uid}-mail`}>{t.email}</label>
        <input id={`${uid}-mail`} name="mail" type="email" required placeholder={t.email} className={inputClass} />

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
