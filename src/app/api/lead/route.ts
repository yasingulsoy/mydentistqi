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
 * HER DİLİN KENDİ UCU VAR (ayrı otomasyon/ekip). Uç seçimi, öncelik sırasıyla:
 *   1. `LEAD_WEBHOOK_URL_<DİL>` ortam değişkeni (örn. LEAD_WEBHOOK_URL_FR)
 *   2. Aşağıdaki WEBHOOKS tablosu
 *   3. `LEAD_WEBHOOK_URL` ortam değişkeni
 *   4. Türkçe için TR ucu, diğer tüm diller için YURTDIŞI ucu
 *
 * Ucu henüz verilmemiş yabancı diller yurtdışı ucuna düşüyor (Türkçe uca
 * değil): lead kaybolmasın ama Türkçe ekibin kuyruğuna da düşmesin diye.
 * Gövdedeki `locale` alanı hangi dilden geldiğini gösterdiği için
 * otomasyonda ayırt edilebiliyor.
 *
 * Adresleri Dokploy panelinde ortam değişkeni olarak tanımlamak daha
 * doğru — o zaman anahtarlar git geçmişine hiç girmez.
 */
const TR_WEBHOOK =
  "https://hospitadent.ulakbel.com/client_lead_automation/webhook/fu0q5UkN5nFaEktUiBMiD7YnM8c8aBweIkbJ";

const EN_WEBHOOK =
  "https://hospitadent.ulakbel.com/client_lead_automation/webhook/rCGhqZq98m7QSlYRklvrFHRiuLU6XCBNMipU";

/** "Yurtdışı" ucu. Almanca için verildi; ucu belirlenmemiş diğer yabancı
 *  dillerin yedeği de bu. */
const INTL_WEBHOOK =
  "https://hospitadent.ulakbel.com/client_lead_automation/webhook/7FrmZXAfzLQnkWOCfbZbaFZ9aCjV7vyZsZO2";

const WEBHOOKS: Partial<Record<Locale, string>> = {
  tr: TR_WEBHOOK,
  en: EN_WEBHOOK,
  de: INTL_WEBHOOK,
  ar: "https://hospitadent.ulakbel.com/client_lead_automation/webhook/aTUORyC8F9IZPYLVgYhVMdbUT0XrHTusHYYW",
  fr: "https://hospitadent.ulakbel.com/client_lead_automation/webhook/WYUxDCWSYJ90wcfLMaXEwha9Q6kljANutZDT",
  // bg, es — kendi uçları gelince buraya; o zamana kadar aşağıdaki
  // yedek onları yurtdışı ucuna gönderiyor.
};

function webhookFor(locale: Locale): string {
  return (
    process.env[`LEAD_WEBHOOK_URL_${locale.toUpperCase()}`] ??
    WEBHOOKS[locale] ??
    process.env.LEAD_WEBHOOK_URL ??
    (locale === "tr" ? TR_WEBHOOK : INTL_WEBHOOK)
  );
}

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
    const response = await fetch(webhookFor(locale), {
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
