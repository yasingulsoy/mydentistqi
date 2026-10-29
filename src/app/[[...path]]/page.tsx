import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Landing } from "@/components/Landing";
import { DetailPage } from "@/components/DetailPage";
import { LegalPage } from "@/components/LegalPage";
import { BlogIndex } from "@/components/BlogIndex";
import { ArticlePage } from "@/components/ArticlePage";
import { content } from "@/data/content";
import { legal } from "@/data/legal";
import { brand } from "@/data/site";
import { LOCALES, defaultLocale, localeMeta } from "@/data/locales";
import {
  allRoutes,
  resolveRoute,
  routeAlternates,
  routeHreflangs,
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
  // Dil değiştirici karşılığı olmayan dilde ana sayfaya düşer; hreflang'de
  // bunu yapamayız (sayfanın İspanyolcası ana sayfa değildir), o yüzden
  // burada yalnızca gerçekten var olan diller listeleniyor.
  const languages = routeHreflangs(route);
  return {
    canonical: routeHref(route),
    languages: {
      ...languages,
      ...(languages[defaultLocale]
        ? { "x-default": languages[defaultLocale] }
        : {}),
    },
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

  let title: string;
  let description: string;
  let ogType: "article" | "website" = "article";

  if (route.kind === "detail") {
    title = route.page.content[route.locale].title;
    description = route.page.content[route.locale].metaDescription;
  } else if (route.kind === "legal") {
    title = legal[route.locale][route.doc].title;
    description = legal[route.locale][route.doc].description;
  } else if (route.kind === "article") {
    const c = route.article.content[route.locale]!;
    // Belgedeki SEO Title zaten "... | MyDentist" ile bitiyor; marka adını
    // ikinci kez eklemiyoruz.
    return {
      title: c.seoTitle,
      description: c.metaDescription,
      keywords: [c.keyword],
      alternates: alternates(route),
      openGraph: {
        type: "article",
        title: c.title,
        description: c.metaDescription,
        ...shared(route),
      },
      twitter: {
        card: "summary_large_image",
        title: c.title,
        description: c.metaDescription,
        images: [`/og/${route.locale}`],
      },
    };
  } else {
    title = dict.blog.title;
    description = dict.blog.description;
    ogType = "website";
  }

  return {
    title: `${title} | ${brand.name}`,
    description,
    alternates: alternates(route),
    openGraph: {
      type: ogType,
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
  // Dil değiştiricinin aynı sayfanın çevirisine gidebilmesi için.
  const langs = routeAlternates(route);

  switch (route.kind) {
    case "home":
      return <Landing dict={dict} alternates={langs} />;
    case "detail":
      return (
        <DetailPage
          dict={dict}
          alternates={langs}
          kind={route.detailKind}
          page={route.page}
        />
      );
    case "legal":
      return (
        <LegalPage
          dict={dict}
          alternates={langs}
          doc={legal[route.locale][route.doc]}
          path={routeHref(route)}
        />
      );
    case "blog":
      return <BlogIndex dict={dict} alternates={langs} />;
    case "article":
      return (
        <ArticlePage dict={dict} alternates={langs} article={route.article} />
      );
  }
}
