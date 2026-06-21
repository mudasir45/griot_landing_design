import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CoursesSection from "./components/CoursesSection";
import FeaturesSection from "./components/FeaturesSection";
import HowItWorks from "./components/HowItWorks";
import SafetySection from "./components/SafetySection";
import InstructorsSection from "./components/InstructorsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import DistrictCTA from "./components/DistrictCTA";
import FAQSection from "./components/FAQSection";
import PricingSection from "./components/PricingSection";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <CoursesSection />
        <FeaturesSection />
        <HowItWorks />
        <SafetySection />
        <InstructorsSection />
        <TestimonialsSection />
        <DistrictCTA />
        <FAQSection />
        <PricingSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
