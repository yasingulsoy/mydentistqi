import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailPage } from "@/components/DetailPage";
import { content, type Locale } from "@/data/content";
import {
  detailPath,
  findBySlug,
  pagesOf,
  type DetailKind,
} from "@/data/detail-pages";

const LOCALE: Locale = "tr";
const KIND: DetailKind = "destination";

/** Listede olmayan slug'lar 404 döner, çalışma anında üretilmez. */
export const dynamicParams = false;

export function generateStaticParams() {
  return pagesOf(KIND).map((page) => ({ slug: page.slug[LOCALE] }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = findBySlug(KIND, LOCALE, slug);
  if (!page) return {};

  const c = page.content[LOCALE];
  const path = detailPath(KIND, LOCALE, page);

  return {
    title: c.title,
    description: c.metaDescription,
    alternates: {
      canonical: path,
      languages: {
        tr: detailPath(KIND, "tr", page),
        en: detailPath(KIND, "en", page),
        "x-default": detailPath(KIND, "tr", page),
      },
    },
    openGraph: {
      type: "article",
      title: c.title,
      description: c.metaDescription,
      url: path,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = findBySlug(KIND, LOCALE, slug);
  if (!page) notFound();

  return <DetailPage dict={content[LOCALE]} kind={KIND} page={page} />;
}
