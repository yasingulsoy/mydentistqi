import type { Metadata } from "next";
import { fontClass } from "../../fonts";
import "../../globals.css";
import { content } from "@/data/content";

export const metadata: Metadata = {
  title: content.en.meta.title,
  description: content.en.meta.description,
  alternates: {
    canonical: "/en",
    languages: { tr: "/", en: "/en", "x-default": "/" },
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fontClass} h-full antialiased`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
