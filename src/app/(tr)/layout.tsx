import type { Metadata } from "next";
import { fontClass } from "../fonts";
import "../globals.css";
import { content } from "@/data/content";

export const metadata: Metadata = {
  title: content.tr.meta.title,
  description: content.tr.meta.description,
  alternates: {
    canonical: "/",
    languages: { tr: "/", en: "/en", "x-default": "/" },
  },
};

export default function TrLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${fontClass} h-full antialiased`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
