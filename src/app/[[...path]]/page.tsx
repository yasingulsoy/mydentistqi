import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Landing } from "@/components/Landing";
import { DetailPage } from "@/components/DetailPage";
import { LegalPage } from "@/components/LegalPage";
import { content } from "@/data/content";
import { legal } from "@/data/legal";
import { brand } from "@/data/site";
import { LOCALES, defaultLocale, localeMeta } from "@/data/locales";
import {
  allRoutes,
  resolveRoute,
  routeAlternates,
  routeHref,
  routeSegments,
  type Route,
} from "@/data/routes";

/** Listede olmayan URL'ler 404 döner, çalışma anında üretilmez. */
export const dynamicParams = false;

export function generateStaticParams() {
  return allRoutes().map((route) => ({ path: routeSegments(route) }));
}

/* ------------------------------------------------------------------ */
/*  Metadata                                                           */
/* ------------------------------------------------------------------ */

/** hreflang kümesi — her dil + arama motorlarına varsayılan olarak Türkçe. */
function alternates(route: Route) {
  const languages = routeAlternates(route);
  return {
    canonical: routeHref(route),
    languages: { ...languages, "x-default": languages[defaultLocale] },
  };
}

function shared(route: Route) {
  const meta = localeMeta[route.locale];
  return {
    siteName: brand.name,
    locale: meta.ogLocale,
    alternateLocale: LOCALES.filter((l) => l !== route.locale).map(
      (l) => localeMeta[l].ogLocale,
    ),
    url: routeHref(route),
    images: [
      {
        url: `/og/${route.locale}`,
        width: 1200,
        height: 630,
        alt: content[route.locale].meta.ogAlt,
      },
    ],
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ path?: string[] }>;
}): Promise<Metadata> {
  const { path } = await params;
  const route = resolveRoute(path);
  if (!route) return {};

  const dict = content[route.locale];

  if (route.kind === "home") {
    return {
      title: dict.meta.title,
      description: dict.meta.description,
      keywords: dict.meta.keywords,
      alternates: alternates(route),
      openGraph: {
        type: "website",
        title: dict.meta.title,
        description: dict.meta.description,
        ...shared(route),
      },
      twitter: {
        card: "summary_large_image",
        title: dict.meta.title,
        description: dict.meta.description,
        images: [`/og/${route.locale}`],
      },
    };
  }

  const { title, description } =
    route.kind === "detail"
      ? {
          title: route.page.content[route.locale].title,
          description: route.page.content[route.locale].metaDescription,
        }
      : {
          title: legal[route.locale][route.doc].title,
          description: legal[route.locale][route.doc].description,
        };

  return {
    title: `${title} | ${brand.name}`,
    description,
    alternates: alternates(route),
    openGraph: {
      type: "article",
      title,
      description,
      ...shared(route),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`/og/${route.locale}`],
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Sayfa                                                              */
/* ------------------------------------------------------------------ */

export default async function Page({
  params,
}: {
  params: Promise<{ path?: string[] }>;
}) {
  const { path } = await params;
  const route = resolveRoute(path);
  if (!route) notFound();

  const dict = content[route.locale];

  switch (route.kind) {
    case "home":
      return <Landing dict={dict} />;
    case "detail":
      return (
        <DetailPage dict={dict} kind={route.detailKind} page={route.page} />
      );
    case "legal":
      return (
        <LegalPage
          dict={dict}
          doc={legal[route.locale][route.doc]}
          path={routeHref(route)}
        />
      );
  }
}
