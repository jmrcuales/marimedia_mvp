import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import OurApproach from "@/components/sections/OurApproach";
import WhyMariMedia from "@/components/sections/WhyMariMedia";
import WhoWeWorkWith from "@/components/sections/WhoWeWorkWith";
import OurCommitment from "@/components/sections/OurCommitment";
import FutureVision from "@/components/sections/FutureVision";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content" className="overflow-x-hidden">
        <Hero />
        <About />
        <Services />
        <OurApproach />
        <WhyMariMedia />
        <WhoWeWorkWith />
        <OurCommitment />
        <FutureVision />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
