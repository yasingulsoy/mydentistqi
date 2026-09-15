import { renderOgImage } from "../../og-image";
import { LOCALES, isLocale } from "@/data/locales";

/**
 * Dile göre Open Graph görseli: /og/tr, /og/en, ...
 *
 * Neden metadata dosyası (`opengraph-image.tsx`) değil: tüm sayfalar tek bir
 * opsiyonel catch-all rotasından geçiyor, Next ise OG metadata dosyasının
 * altına `[__metadata_id__]` segmenti ekliyor — catch-all'dan sonra segment
 * gelemediği için derleme kırılıyor. Route handler bu kısıtı taşımıyor ve
 * görseli 7 kez (dil başına bir) üretmek 70 kez üretmekten ucuz.
 */

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ locale: string }> },
) {
  const { locale } = await params;
  if (!isLocale(locale)) return new Response("Not found", { status: 404 });
  return renderOgImage(locale);
}
