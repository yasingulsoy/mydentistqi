import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { Treatments } from "./Treatments";
import { Partners } from "./Partners";
import { HowItWorks } from "./HowItWorks";
import { Destinations } from "./Destinations";
import { Stats } from "./Stats";
import { TestimonialsFaq } from "./TestimonialsFaq";
import { ServiceOrbit } from "./ServiceOrbit";
import { Footer } from "./Footer";
import { JsonLd } from "./JsonLd";
import type { Dict } from "@/data/content";

/** Tek sayfa; Türkçe (/) ve İngilizce (/en) sürümleri bunu paylaşır. */
export function Landing({ dict }: { dict: Dict }) {
  return (
    <>
      <JsonLd dict={dict} />

      <a
        href="#icerik"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-[15px] focus:font-medium focus:text-ink"
      >
        {dict.skipToContent}
      </a>

      <Navbar dict={dict} />
      <main id="icerik">
        <Hero dict={dict} />
        <Treatments dict={dict} />
        <Partners dict={dict} />
        <HowItWorks dict={dict} />
        <Destinations dict={dict} />
        <Stats dict={dict} />
        <TestimonialsFaq dict={dict} />
        <ServiceOrbit dict={dict} />
      </main>
      <Footer dict={dict} />
    </>
  );
}
