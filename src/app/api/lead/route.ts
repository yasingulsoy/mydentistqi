import { NextResponse } from "next/server";
import { LOCALES, type Locale } from "@/data/locales";

/**
 * Form gönderimlerini Hospitadent lead otomasyonuna ileten uç.
 *
 * Neden tarayıcıdan DOĞRUDAN webhook'a gönderilmiyor:
 *  1. Webhook adresindeki uzun dizgi bir erişim anahtarı — istemci
 *     paketine girerse sayfanın kaynağını açan herkes görür ve otomasyona
 *     istediği kadar sahte kayıt basabilir.
 *  2. Tarayıcıdan çapraz kaynak POST, karşı tarafın CORS başlıklarına
 *     bağlı kalır; sunucudan giden istek bu kısıttan etkilenmez.
 *
 * Adres `LEAD_WEBHOOK_URL` ortam değişkeniyle ezilebilir (önerilen: Dokploy
 * panelinde tanımla, böylece anahtar git geçmişine hiç girmez).
 */
const WEBHOOK_URL =
  process.env.LEAD_WEBHOOK_URL ??
  "https://hospitadent.ulakbel.com/client_lead_automation/webhook/fu0q5UkN5nFaEktUiBMiD7YnM8c8aBweIkbJ";

/** Statik sayfaların aksine bu uç her istekte çalışmalı. */
export const dynamic = "force-dynamic";

type Payload = {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  locale?: unknown;
  page?: unknown;
  /** Bal küpü — gerçek kullanıcı bunu göremez, botlar doldurur. */
  website?: unknown;
};

const isText = (v: unknown, max: number): v is string =>
  typeof v === "string" && v.trim().length > 0 && v.trim().length <= max;

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  // Bal küpü doluysa bot: başarılı gibi dön ama hiçbir yere iletme.
  if (typeof body.website === "string" && body.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = isText(body.name, 120) ? body.name.trim() : null;
  const email = isText(body.email, 160) ? body.email.trim() : null;
  const phone = isText(body.phone, 24) ? body.phone.trim() : null;

  if (!name || !email || !phone) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }
  // Telefon istemcide E.164'e çevriliyor; sunucuda da doğrula.
  if (!/^\+[1-9]\d{6,17}$/.test(phone)) {
    return NextResponse.json({ ok: false, error: "invalid_phone" }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  const locale: Locale = LOCALES.includes(body.locale as Locale)
    ? (body.locale as Locale)
    : "tr";

  /**
   * Otomasyona giden gövde.
   *
   * Alan adları webhook'a sorularak bulundu: boş gövde gönderildiğinde
   * "phone_number alani gereklidir." yanıtı dönüyor. `phone_number` TEK
   * zorunlu alan — diğerleri eksik olsa da kayıt açılıyor.
   *
   * `name` ve `email` anahtarlarının otomasyonda gerçekten karşılığı olup
   * olmadığı panelden doğrulanmalı; reddedilmiyorlar ama sessizce
   * yok sayılıyor olabilirler.
   */
  const payload = {
    phone_number: phone,
    name,
    email,
    locale,
    source: "mydentist-website",
    page: isText(body.page, 300) ? body.page.trim() : null,
    submitted_at: new Date().toISOString(),
  };

  try {
    // Otomasyon yanıt vermezse kullanıcıyı süresiz bekletme.
    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(10_000),
      cache: "no-store",
    });

    if (!response.ok) {
      // Gövdeyi loglama — kişisel veri içerebilir.
      console.error(`[lead] webhook ${response.status} ${response.statusText}`);
      return NextResponse.json({ ok: false, error: "webhook_failed" }, { status: 502 });
    }
  } catch (error) {
    console.error("[lead] webhook erişilemedi:", (error as Error).name);
    return NextResponse.json({ ok: false, error: "webhook_unreachable" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
