/**
 * Boyama öncesi çalışan senkron script: kaydedilmiş tercihi (yoksa işletim
 * sistemi ayarını) okuyup <html> üzerine `dark` sınıfını koyar.
 * Böylece koyu modda açık tema yanıp sönmesi (FOUC) yaşanmıyor.
 */
const THEME_SCRIPT = `document.documentElement.classList.add("js");try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark")}catch(e){}`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />;
}
