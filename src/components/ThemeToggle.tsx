"use client";

import { useSyncExternalStore } from "react";
import { MoonIcon, SunIcon } from "./icons";

/**
 * Tema anahtarı.
 *
 * Kaynak doğruluk <html> üzerindeki `dark` sınıfı; bu sınıfı layout'taki
 * satır içi script boyama öncesi koyuyor (FOUC yok). Burada o sınıfı
 * useSyncExternalStore ile dinliyoruz — böylece effect içinde setState
 * çağırmadan DOM ile senkron kalıyoruz.
 */
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

const isDark = () => document.documentElement.classList.contains("dark");
/** Sunucuda sınıf yok; istemci ilk boyamada gerçek değere geçiyor. */
const isDarkOnServer = () => false;

export function ThemeToggle({ label }: { label: string }) {
  const dark = useSyncExternalStore(subscribe, isDark, isDarkOnServer);

  function toggle() {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* özel sekmede localStorage kapalı olabilir - sorun değil */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      aria-pressed={dark}
      title={label}
      className="flex h-11 w-11 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-nav-border text-nav-fg transition-colors hover:bg-nav-fg/10"
    >
      {dark ? (
        <SunIcon className="h-[18px] w-[18px]" />
      ) : (
        <MoonIcon className="h-[18px] w-[18px]" />
      )}
    </button>
  );
}
