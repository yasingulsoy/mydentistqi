"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";
import { ChevronDownIcon } from "./icons";
import { ThemeToggle } from "./ThemeToggle";
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
        className="flex items-center gap-1 text-[15px] font-medium text-nav-fg"
      >
        {LOCALE_LABELS[locale]}
        <ChevronDownIcon
          className={`h-4 w-4 text-nav-muted transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <ul className="absolute right-0 top-full z-50 mt-2 min-w-[130px] overflow-hidden rounded-lg border border-nav-border bg-surface py-1 shadow-[0_12px_30px_-10px_rgba(10,25,40,0.35)]">
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
    <header className="sticky top-0 z-50 border-b border-nav-border bg-nav/95 backdrop-blur-md">
      <nav className="section-x flex h-[72px] items-center gap-8 lg:h-[85px]">
        <Link href={localePath[dict.locale]} className="shrink-0">
          <Logo tone="auto" priority />
        </Link>

        {/* sm-lg arası: Figma'nın 709px mobil düzeni — linkler satır içi, CTA yok */}
        <ul className="no-scrollbar hidden min-w-0 flex-1 items-center gap-4 overflow-x-auto text-[14px] text-nav-muted sm:flex lg:gap-8 lg:overflow-visible lg:text-[15px]">
          {dict.nav.links.map((link) => (
            <li key={link.href} className={link.wideOnly ? "hidden lg:block" : ""}>
              <a
                href={sectionHref(dict.locale, link.href)}
                className="relative whitespace-nowrap py-1 transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-brand-500 after:transition-transform after:duration-300 hover:text-nav-fg hover:after:scale-x-100"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-3 sm:ml-0 lg:gap-5">
          <ThemeToggle label={dict.nav.themeToggle} />

          <div className="hidden sm:block">
            <LanguageSwitcher locale={dict.locale} />
          </div>

          <a
            href={sectionHref(dict.locale, "#iletisim")}
            className="hidden rounded-full bg-brand-500 px-7 py-3 text-[15px] font-medium text-white transition-all duration-200 hover:bg-brand-600 hover:shadow-[0_10px_24px_-10px_rgba(217,124,82,0.9)] lg:inline-block"
          >
            {dict.nav.cta}
          </a>

          {/* Gerçek telefonlarda hamburger menü */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={dict.nav.menuLabel}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-nav-fg sm:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 block h-0.5 w-5 bg-current transition-all duration-300 ${
                  open ? "top-[7px] rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] block h-0.5 w-5 bg-current transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-5 bg-current transition-all duration-300 ${
                  open ? "top-[7px] -rotate-45" : "top-[14px]"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-nav-border sm:hidden">
          <ul className="section-x flex flex-col py-2">
            {dict.nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={sectionHref(dict.locale, link.href)}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-[15px] text-nav-fg"
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
                    className="text-[15px] text-nav-muted underline underline-offset-4"
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
