import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Gallery } from "@/components/site/Gallery";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { MobileCallBar } from "@/components/site/MobileCallBar";
import { Services } from "@/components/site/Services";
import { WhyDerek } from "@/components/site/WhyDerek";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <WhyDerek />
        <Contact />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
