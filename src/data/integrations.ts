import type { Locale } from "./locales";

/**
 * Dile göre üçüncü taraf entegrasyonları — HERKESE AÇIK kimlikler.
 *
 * Her dilin kendi JivoChat widget'ı var; sohbet dili ve karşılayan
 * temsilci ekibi widget tarafında ayarlanıyor. Kimliği tanımlı olmayan
 * dilde sohbet balonu hiç yüklenmez (yanlış dilde balon göstermektense).
 *
 * Yeni dil eklemek: Jivo'nun verdiği kodda `widget/` sonrasındaki kısmı
 * buraya yaz. Örn. `//code.jivosite.com/widget/53rGAlSqVV` -> "53rGAlSqVV".
 *
 * Lead otomasyonu (ulakbel) uçları BURADA DEĞİL: adreslerinde erişim
 * anahtarı var, istemci paketine sızmaması için yalnızca
 * `app/api/lead/route.ts` içinde tutuluyor.
 */
export const jivoWidgetIds: Partial<Record<Locale, string>> = {
  tr: "53rGAlSqVV",
};

export function jivoScriptSrc(locale: Locale) {
  const id = jivoWidgetIds[locale];
  return id ? `https://code.jivosite.com/widget/${id}` : null;
}
