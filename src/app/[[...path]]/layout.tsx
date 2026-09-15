import type { Metadata } from "next";
import { fontClass } from "../fonts";
import "../globals.css";
import { ThemeScript } from "../theme-script";
import { brand, siteUrl } from "@/data/site";
import { defaultLocale, localeMeta } from "@/data/locales";
import { resolveRoute } from "@/data/routes";

/**
 * Tek root layout — 7 dilin tamamı buradan geçiyor.
 *
 * `<html lang>` ve `<html dir>` URL'den çözülen dile göre yazılıyor;
 * Arapça'da dir="rtl" olduğu için CSS'te mantıksal özellikler
 * (padding-inline, text-start) kullanılmalı, sol/sağ sabitleri değil.
 */

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: brand.name,
  authors: [{ name: brand.name }],
  creator: brand.name,
  publisher: brand.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: { telephone: false, address: false, email: false },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ path?: string[] }>;
}) {
  const { path } = await params;
  const locale = resolveRoute(path)?.locale ?? defaultLocale;
  const { htmlLang, dir } = localeMeta[locale];

  return (
    <html
      suppressHydrationWarning
      lang={htmlLang}
      dir={dir}
      className={`${fontClass} h-full antialiased`}
    >
      <head>
        <ThemeScript />
      </head>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
