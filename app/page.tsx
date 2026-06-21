import AnnouncementBar from "./components/AnnouncementBar";
import CoursesSection from "./components/CoursesSection";
import DistrictCTA from "./components/DistrictCTA";
import FAQSection from "./components/FAQSection";
import FeaturesSection from "./components/FeaturesSection";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import InstructorsSection from "./components/InstructorsSection";
import Navbar from "./components/Navbar";
import SafetySection from "./components/SafetySection";
import TestimonialsSection from "./components/TestimonialsSection";

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
        {/* <PricingSection /> */}
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
