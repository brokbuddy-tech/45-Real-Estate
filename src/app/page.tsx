import Hero from "@/components/Hero";
import AboutBentoSection from "@/components/AboutBentoSection";
import ScrollTextReveal from "@/components/ScrollTextReveal";
import HowItWorks from "@/components/HowItWorks";
import PropertyGrid from "@/components/PropertyGrid";
import FAQAccordion from "@/components/FAQAccordion";
import BottomSections from "@/components/BottomSections";

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-[#FFDF00] selection:text-black">
      <Hero />
      <AboutBentoSection />
      <ScrollTextReveal />
      <HowItWorks />
      <PropertyGrid />
      <FAQAccordion />
      <BottomSections />
    </main>
  );
}
