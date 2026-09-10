"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";
import { ChevronDownIcon } from "./icons";
import { localePath, sectionHref, type Dict, type Locale } from "@/data/content";

const LOCALE_LABELS: Record<Locale, string> = { tr: "TR", en: "EN" };
const LOCALE_NAMES: Record<Locale, string> = { tr: "Türkçe", en: "English" };

function LanguageSwitcher({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const locales: Locale[] = ["tr", "en"];

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="true"
        className="flex items-center gap-1 text-[15px] font-medium text-white"
      >
        {LOCALE_LABELS[locale]}
        <ChevronDownIcon
          className={`h-4 w-4 text-white/70 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <ul className="absolute right-0 top-full z-50 mt-2 min-w-[130px] overflow-hidden rounded-lg bg-white py-1 shadow-[0_12px_30px_-10px_rgba(10,25,40,0.45)]">
          {locales.map((l) => (
            <li key={l}>
              <Link
                href={localePath[l]}
                onClick={() => setOpen(false)}
                hrefLang={l}
                className={`block px-4 py-2 text-[14px] transition-colors hover:bg-cream ${
                  l === locale ? "font-semibold text-ink" : "text-body"
                }`}
              >
                {LOCALE_NAMES[l]}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function Navbar({ dict }: { dict: Dict }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-navy-800">
      <nav className="section-x flex h-[72px] items-center gap-8 lg:h-[85px]">
        <Link href={localePath[dict.locale]} className="shrink-0">
          <Logo />
        </Link>

        {/* sm-lg arası: Figma'nın 709px mobil düzeni — linkler satır içi, CTA yok */}
        <ul className="no-scrollbar hidden min-w-0 flex-1 items-center gap-4 overflow-x-auto text-[14px] text-white/85 sm:flex lg:gap-8 lg:overflow-visible lg:text-[15px]">
          {dict.nav.links.map((link) => (
            <li key={link.href} className={link.wideOnly ? "hidden lg:block" : ""}>
              <a
                href={sectionHref(dict.locale, link.href)}
                className="whitespace-nowrap transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-4 sm:ml-0 lg:gap-6">
          <div className="hidden sm:block">
            <LanguageSwitcher locale={dict.locale} />
          </div>

          <a
            href={sectionHref(dict.locale, "#iletisim")}
            className="hidden rounded-full bg-brand-500 px-7 py-3 text-[15px] font-medium text-white transition-colors hover:bg-brand-600 lg:inline-block"
          >
            {dict.nav.cta}
          </a>

          {/* Gerçek telefonlarda hamburger menü */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={dict.nav.menuLabel}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-white sm:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 block h-0.5 w-5 bg-current transition-all ${
                  open ? "top-[7px] rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] block h-0.5 w-5 bg-current transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-5 bg-current transition-all ${
                  open ? "top-[7px] -rotate-45" : "top-[14px]"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 sm:hidden">
          <ul className="section-x flex flex-col py-2">
            {dict.nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={sectionHref(dict.locale, link.href)}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-[15px] text-white/85"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-4 py-3">
              <a
                href={sectionHref(dict.locale, "#iletisim")}
                onClick={() => setOpen(false)}
                className="inline-block rounded-full bg-brand-500 px-7 py-3 text-[15px] font-medium text-white"
              >
                {dict.nav.cta}
              </a>
              {(["tr", "en"] as Locale[])
                .filter((l) => l !== dict.locale)
                .map((l) => (
                  <Link
                    key={l}
                    href={localePath[l]}
                    hrefLang={l}
                    className="text-[15px] text-white/85 underline underline-offset-4"
                  >
                    {LOCALE_NAMES[l]}
                  </Link>
                ))}
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
