"use client";

import { useId, useState } from "react";
import { PhoneField } from "./PhoneField";
import type { Dict, Locale } from "@/data/content";

const inputClass =
  "h-[58px] w-full rounded-[10px] border border-line bg-surface px-4 text-[16px] text-ink outline-none transition-colors placeholder:text-placeholder focus:border-brand-500";

type Status = "idle" | "sending" | "sent" | "error";

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
  const [status, setStatus] = useState<Status>("idle");
  // form.reset() yerel alanları temizler ama PhoneField'in numarası React
  // state'inde; sayaç değişince bileşen yeniden bağlanıp sıfırlanıyor.
  const [resetKey, setResetKey] = useState(0);
  // Form sayfada iki kez var (hero + sayfa altı); sabit id'ler çakışır ve
  // etiket-alan eşleşmesini bozar.
  const uid = useId();

  /**
   * Gönderim `/api/lead` üzerinden gidiyor, webhook'a doğrudan DEĞİL:
   * webhook adresindeki anahtar istemci paketine girmemeli.
   */
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("adSoyad"),
          phone: data.get("telefon"), // PhoneField'in gizli E.164 alanı
          email: data.get("mail"),
          website: data.get("website"), // bal küpü
          locale,
          page: window.location.pathname,
        }),
      });

      if (!response.ok) throw new Error(String(response.status));
      setStatus("sent");
      form.reset();
      setResetKey((n) => n + 1);
    } catch {
      setStatus("error");
    }
  }

  const sending = status === "sending";

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

        <PhoneField key={resetKey} t={t} locale={locale} idPrefix={uid} />

        <label className="sr-only" htmlFor={`${uid}-mail`}>{t.email}</label>
        <input id={`${uid}-mail`} name="mail" type="email" dir="ltr" required placeholder={t.email} className={inputClass} />

        {/* Bal küpü: ekran okuyuculardan ve gözden gizli, botlar doldurur.
            `hidden` yerine konumlandırma — bazı botlar display:none alanları
            atlıyor. */}
        <div aria-hidden="true" className="pointer-events-none absolute h-0 w-0 overflow-hidden">
          <label htmlFor={`${uid}-website`}>Website</label>
          <input id={`${uid}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <button
          type="submit"
          disabled={sending}
          className="mt-1.5 h-[52px] w-full rounded-full bg-brand-500 text-[16px] font-medium text-white shadow-[0_10px_24px_-10px_rgba(217,124,82,0.9)] transition-colors hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {sending ? t.sending : t.submit}
        </button>

        {/* Tek canlı bölge: ayrı bir sr-only kopya olsaydı ekran okuyucu
            aynı metni iki kez okurdu. */}
        <p
          role="status"
          aria-live="polite"
          className="text-center text-[14px] text-brand-700 empty:hidden"
        >
          {status === "sent" ? t.sent : status === "error" ? t.error : ""}
        </p>
      </div>
    </form>
  );
}
