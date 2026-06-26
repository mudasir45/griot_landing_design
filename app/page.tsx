import AnnouncementBar from "./components/AnnouncementBar";
import CoursesSection from "./components/CoursesSection";
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
import { getPublicCourses } from "./lib/courses-data";

export default async function Home() {
  const courses = await getPublicCourses();

  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <CoursesSection courses={courses} />
        {/* <CoursesSectionOverlap /> */}
        <FeaturesSection />
        <HowItWorks />
        <SafetySection />
        <InstructorsSection />
        <TestimonialsSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
