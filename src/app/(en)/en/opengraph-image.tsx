import { renderOgImage, ogSize, ogContentType } from "../../og-image";
import { content } from "@/data/content";

export const alt = content.en.meta.ogAlt;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage("en");
}
