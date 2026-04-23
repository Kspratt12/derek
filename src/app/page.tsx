import { BeforeAfter } from "@/components/site/BeforeAfter";
import { Contact } from "@/components/site/Contact";
import { FAQ } from "@/components/site/FAQ";
import { Footer } from "@/components/site/Footer";
import { Gallery } from "@/components/site/Gallery";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Marquee } from "@/components/site/Marquee";
import { MeetDerek } from "@/components/site/MeetDerek";
import { MobileCallBar } from "@/components/site/MobileCallBar";
import { Services } from "@/components/site/Services";
import { SignatureBand } from "@/components/site/SignatureBand";
import { Stats } from "@/components/site/Stats";
import { Testimonials } from "@/components/site/Testimonials";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <MeetDerek />
        <Services />
        <SignatureBand />
        <HowItWorks />
        <Gallery />
        <BeforeAfter />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
