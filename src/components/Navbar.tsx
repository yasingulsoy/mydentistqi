"use client";

import { useState } from "react";
import { Logo } from "./Logo";
import { ChevronDownIcon } from "./icons";
import { navLinks } from "@/data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-navy-800">
      <nav className="section-x flex h-[72px] items-center gap-8 lg:h-[85px]">
        <a href="#ana-sayfa" className="shrink-0">
          <Logo />
        </a>

        {/* sm-lg arası: Figma'nın 709px mobil düzeni — linkler satır içi, CTA yok */}
        <ul className="no-scrollbar hidden min-w-0 flex-1 items-center gap-4 overflow-x-auto text-[14px] text-white/85 sm:flex lg:gap-8 lg:overflow-visible lg:text-[15px]">
          {navLinks.map((link) => (
            <li key={link.href} className={link.wideOnly ? "hidden lg:block" : ""}>
              <a
                href={link.href}
                className="whitespace-nowrap transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-4 sm:ml-0 lg:gap-6">
          <button
            type="button"
            className="hidden items-center gap-1 text-[15px] font-medium text-white sm:flex"
          >
            TR
            <ChevronDownIcon className="h-4 w-4 text-white/70" />
          </button>

          <a
            href="#iletisim"
            className="hidden rounded-full bg-brand-500 px-7 py-3 text-[15px] font-medium text-white transition-colors hover:bg-brand-600 lg:inline-block"
          >
            Ücretsiz Danışma
          </a>

          {/* Gerçek telefonlarda hamburger menü */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Menüyü aç/kapat"
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
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-[15px] text-white/85"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="py-3">
              <a
                href="#iletisim"
                onClick={() => setOpen(false)}
                className="inline-block rounded-full bg-brand-500 px-7 py-3 text-[15px] font-medium text-white"
              >
                Ücretsiz Danışma
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
