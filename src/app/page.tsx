import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Treatments } from "@/components/Treatments";
import { Partners } from "@/components/Partners";
import { HowItWorks } from "@/components/HowItWorks";
import { Destinations } from "@/components/Destinations";
import { Stats } from "@/components/Stats";
import { TestimonialsFaq } from "@/components/TestimonialsFaq";
import { ServiceOrbit } from "@/components/ServiceOrbit";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Treatments />
        <Partners />
        <HowItWorks />
        <Destinations />
        <Stats />
        <TestimonialsFaq />
        <ServiceOrbit />
      </main>
      <Footer />
    </>
  );
}
