import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/**
 * Marka ikonu lacivert zemin üzerine beyaz olarak basılıyor: siyah sürüm
 * koyu temalı sekme çubuklarında görünmez olurdu.
 */
const mark = `data:image/png;base64,${readFileSync(
  join(process.cwd(), "public/logo/mydentist-icon-white@300.png"),
).toString("base64")}`;

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#354356",
          borderRadius: 7,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={mark} width={24} height={24} alt="" />
      </div>
    ),
    size,
  );
}
