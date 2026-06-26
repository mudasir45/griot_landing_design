import type { Metadata } from "next";
import AboutPageContent from "../components/about/AboutPageContent";
import AnnouncementBar from "../components/AnnouncementBar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "About Us | Griot Academy",
  description:
    "Learn how Griot Academy offers structured K-8 enrichment in chess, coding, robotics, math, and AI literacy with live classes and parent-visible progress.",
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
