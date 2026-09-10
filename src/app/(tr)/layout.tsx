import type { Metadata } from "next";
import { fontClass } from "../fonts";
import "../globals.css";
import { brand, content, siteUrl } from "@/data/content";

const dict = content.tr;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: dict.meta.title, template: `%s | ${brand.name}` },
  description: dict.meta.description,
  keywords: dict.meta.keywords,
  applicationName: brand.name,
  authors: [{ name: brand.name }],
  creator: brand.name,
  publisher: brand.name,
  alternates: {
    canonical: "/",
    languages: { tr: "/", en: "/en", "x-default": "/" },
  },
  openGraph: {
    type: "website",
    siteName: brand.name,
    title: dict.meta.title,
    description: dict.meta.description,
    url: "/",
    locale: "tr_TR",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: dict.meta.title,
    description: dict.meta.description,
  },
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

export default function TrLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${fontClass} h-full antialiased`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
