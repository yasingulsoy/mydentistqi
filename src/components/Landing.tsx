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
import type { Dict } from "@/data/content";

/** Tek sayfa; Türkçe (/) ve İngilizce (/en) sürümleri bunu paylaşır. */
export function Landing({ dict }: { dict: Dict }) {
  return (
    <>
      <Navbar dict={dict} />
      <main>
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
