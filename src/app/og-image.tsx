import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { content, type Locale } from "@/data/content";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

/** Gerçek marka logosu (beyaz, 486x153) build sırasında gömülüyor. */
const logo = `data:image/png;base64,${readFileSync(
  join(process.cwd(), "public/logo/mydentist-logo-white@300.png"),
).toString("base64")}`;

/** Her iki dil için paylaşılan Open Graph görseli. */
export function renderOgImage(locale: Locale) {
  const dict = content[locale];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "68px 80px",
          background: "linear-gradient(150deg, #253346 0%, #354356 55%, #3c536c 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo} width={248} height={78} alt="" />

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 60, lineHeight: 1.15, fontWeight: 600, maxWidth: 900 }}>
            {dict.services.title}
          </div>
          <div
            style={{
              fontSize: 27,
              lineHeight: 1.4,
              color: "rgba(255,255,255,0.72)",
              maxWidth: 880,
            }}
          >
            {dict.meta.description}
          </div>
        </div>

        <div style={{ display: "flex", gap: 40, fontSize: 24, color: "rgba(255,255,255,0.6)" }}>
          {dict.stats.slice(0, 3).map((s) => (
            <div key={s.label} style={{ display: "flex", gap: 10 }}>
              <span style={{ color: "#e79b74", fontWeight: 700 }}>{s.value}</span>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    ogSize,
  );
}
