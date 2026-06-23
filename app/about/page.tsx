import type { Metadata } from "next";
import AnnouncementBar from "../components/AnnouncementBar";
import AboutPageContent from "../components/about/AboutPageContent";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "About Us | Griot Academy",
  description:
    "Learn about Griot Academy's mission to deliver joyful, safe, and expert-led online learning for kids ages 4–18.",
};

export default function AboutPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <AboutPageContent />
      </main>
      <Footer />
    </>
  );
}
