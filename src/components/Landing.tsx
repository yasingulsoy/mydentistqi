import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { About } from "./About";
import { Treatments } from "./Treatments";
import { Partners } from "./Partners";
import { HowItWorks } from "./HowItWorks";
import { Destinations } from "./Destinations";
import { Stats } from "./Stats";
import { TestimonialsFaq } from "./TestimonialsFaq";
import { ServiceOrbit } from "./ServiceOrbit";
import { Footer } from "./Footer";
import { JsonLd } from "./JsonLd";
import { RevealObserver } from "./RevealObserver";
import { ContactSection } from "./ContactSection";
import type { Dict, Locale } from "@/data/content";

/** Tek sayfa; 7 dilin tamamı bu bileşeni paylaşır. */
export function Landing({
  dict,
  alternates,
}: {
  dict: Dict;
  alternates: Record<Locale, string>;
}) {
  return (
    <>
      <JsonLd dict={dict} />
      <RevealObserver />

      <a
        href="#icerik"
        className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-surface focus:px-4 focus:py-2 focus:text-[15px] focus:font-medium focus:text-ink"
      >
        {dict.skipToContent}
      </a>

      <Navbar dict={dict} alternates={alternates} />
      <main id="icerik">
        <Hero dict={dict} />
        <About dict={dict} />
        <Treatments dict={dict} />
        <Partners dict={dict} />
        <HowItWorks dict={dict} />
        <Destinations dict={dict} />
        <Stats dict={dict} />
        <TestimonialsFaq dict={dict} />
        <ServiceOrbit dict={dict} />
        <ContactSection dict={dict} />
      </main>
      <Footer dict={dict} />
    </>
  );
}
