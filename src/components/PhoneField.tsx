"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { CountryFlag } from "./CountryFlag";
import { ChevronDownIcon } from "./icons";
import {
  countries,
  countryName,
  defaultCountry,
  isValidNumber,
  toE164,
  toNationalDigits,
  type Country,
} from "@/data/countries";
import type { Dict, Locale } from "@/data/content";

/**
 * Ülke kodlu telefon alanı.
 *
 * Görünen alanda kullanıcı yalnızca ulusal numarayı yazar; forma gönderilen
 * gizli alan her zaman E.164 biçimindedir (+905321234567). Baştaki 0
 * otomatik atılır, rakam dışı karakterler temizlenir.
 *
 * Doğrulama `setCustomValidity` ile tarayıcının kendi form doğrulamasına
 * bağlanıyor; böylece geçersiz numarayla gönderim engelleniyor.
 */
export function PhoneField({
  t,
  locale,
}: {
  t: Dict["hero"]["form"];
  locale: Locale;
}) {
  const [country, setCountry] = useState<Country>(defaultCountry);
  const [national, setNational] = useState("");
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const wrapRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const numberRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    const q = query.trim().toLocaleLowerCase(locale === "tr" ? "tr" : "en");
    if (!q) return countries;
    return countries.filter((c) => {
      const name = countryName(c, locale).toLocaleLowerCase(locale === "tr" ? "tr" : "en");
      return (
        name.includes(q) ||
        c.dial.includes(q) ||
        c.iso2.toLowerCase().includes(q.replace("+", ""))
      );
    });
  }, [query, locale]);

  // Dışarı tıklayınca kapat
  useEffect(() => {
    if (!open) return;
    function onPointerDown(event: PointerEvent) {
      if (!wrapRef.current?.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  // Açılınca arama alanına odaklan
  useEffect(() => {
    if (open) searchRef.current?.focus();
  }, [open]);

  function syncValidity(nextCountry: Country, digits: string) {
    const el = numberRef.current;
    if (!el) return;
    el.setCustomValidity(
      digits.length === 0 || isValidNumber(nextCountry, digits) ? "" : t.invalidPhone,
    );
  }

  function handleNumber(value: string) {
    const digits = toNationalDigits(value).slice(0, 15);
    setNational(digits);
    syncValidity(country, digits);
  }

  function choose(next: Country) {
    setCountry(next);
    setOpen(false);
    setQuery("");
    syncValidity(next, national);
    numberRef.current?.focus();
  }

  function onListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (event.key === "Enter") {
      event.preventDefault();
      const picked = results[activeIndex];
      if (picked) choose(picked);
    } else if (event.key === "Escape") {
      event.preventDefault();
      setOpen(false);
    }
  }

  const invalid = national.length > 0 && !isValidNumber(country, national);

  return (
    <div ref={wrapRef} className="relative">
      <label className="sr-only" htmlFor="telefon">
        {t.phone}
      </label>

      <div
        className={`flex h-[58px] w-full items-stretch overflow-hidden rounded-[10px] border bg-surface transition-colors focus-within:border-brand-500 ${
          invalid ? "border-brand-700" : "border-line"
        }`}
      >
        <button
          type="button"
          onClick={() => {
            setOpen((v) => !v);
            setActiveIndex(0);
          }}
          aria-expanded={open}
          aria-haspopup="listbox"
          aria-label={`${t.countryLabel}: ${countryName(country, locale)} ${country.dial}`}
          className="flex shrink-0 items-center gap-2 border-r border-line pl-3.5 pr-3 text-[16px] text-ink transition-colors hover:bg-cream"
        >
          <CountryFlag iso2={country.iso2} title={countryName(country, locale)} />
          <span className="tabular-nums">{country.dial}</span>
          <ChevronDownIcon
            className={`h-4 w-4 text-muted transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        <input
          ref={numberRef}
          id="telefon"
          type="tel"
          inputMode="numeric"
          autoComplete="tel-national"
          required
          value={national}
          onChange={(e) => handleNumber(e.target.value)}
          placeholder={t.phone}
          aria-invalid={invalid}
          aria-describedby={invalid ? "telefon-hata" : undefined}
          className="h-full w-full min-w-0 bg-transparent px-3.5 text-[16px] text-ink outline-none placeholder:text-placeholder"
        />
      </div>

      {/* Forma giden gerçek değer */}
      <input type="hidden" name="telefon" value={toE164(country, national)} />

      {invalid && (
        <p id="telefon-hata" className="mt-1.5 px-1 text-[13px] text-brand-700">
          {t.invalidPhone}
        </p>
      )}

      {open && (
        <div
          onKeyDown={onListKeyDown}
          className="absolute left-0 top-[calc(100%+6px)] z-40 w-full min-w-[280px] overflow-hidden rounded-[12px] border border-line bg-surface shadow-[0_18px_44px_-16px_rgba(10,25,40,0.35)]"
        >
          <div className="border-b border-line p-2">
            <input
              ref={searchRef}
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setActiveIndex(0);
              }}
              placeholder={t.searchCountry}
              aria-label={t.searchCountry}
              className="h-10 w-full rounded-lg bg-cream px-3 text-[14px] text-ink outline-none placeholder:text-placeholder"
            />
          </div>

          <ul role="listbox" aria-label={t.countryLabel} className="max-h-[260px] overflow-y-auto py-1">
            {results.map((c, i) => (
              <li key={`${c.iso2}-${c.dial}`}>
                <button
                  type="button"
                  role="option"
                  aria-selected={c.iso2 === country.iso2}
                  onMouseEnter={() => setActiveIndex(i)}
                  onClick={() => choose(c)}
                  className={`flex w-full items-center gap-2.5 px-3 py-2 text-left text-[14px] transition-colors ${
                    i === activeIndex ? "bg-cream" : ""
                  } ${c.iso2 === country.iso2 ? "font-semibold text-ink" : "text-body"}`}
                >
                  <CountryFlag iso2={c.iso2} />
                  <span className="min-w-0 flex-1 truncate">{countryName(c, locale)}</span>
                  <span className="shrink-0 tabular-nums text-muted">{c.dial}</span>
                </button>
              </li>
            ))}

            {results.length === 0 && (
              <li className="px-3 py-4 text-center text-[14px] text-muted">{t.noResults}</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
