"use client";

import { useEffect } from "react";

/**
 * Sayfadaki tüm [data-reveal] ögelerini tek bir IntersectionObserver ile izler
 * ve göründüklerinde data-revealed="true" yapar; animasyonu CSS yürütür.
 *
 * Öge başına client bileşeni sarmak yerine tek gözlemci kullanılıyor —
 * bölümler sunucu bileşeni olarak kalıyor ve React state'i hiç devreye girmiyor.
 */
export function RevealObserver() {
  useEffect(() => {
    const items = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-revealed])"),
    );
    if (items.length === 0) return;

    // Hareket azaltma tercihinde animasyon yok, içerik anında görünür.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      items.forEach((el) => (el.dataset.revealed = "true"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.revealed = "true";
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.1 },
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
