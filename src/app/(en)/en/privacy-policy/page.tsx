import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { content } from "@/data/content";
import { legal, legalPath } from "@/data/legal";

const dict = content.en;
const doc = legal.en.privacy;
const path = legalPath("en", "privacy");

export const metadata: Metadata = {
  title: doc.title,
  description: doc.description,
  alternates: {
    canonical: path,
    languages: {
      tr: legalPath("tr", "privacy"),
      en: legalPath("en", "privacy"),
      "x-default": legalPath("tr", "privacy"),
    },
  },
  openGraph: {
    type: "article",
    title: doc.title,
    description: doc.description,
    url: path,
  },
};

export default function Page() {
  return <LegalPage dict={dict} doc={doc} path={path} />;
}
