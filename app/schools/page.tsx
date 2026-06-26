import type { Metadata } from "next";
import AnnouncementBar from "../components/AnnouncementBar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SchoolsPageContent from "../components/schools/SchoolsPageContent";

export const metadata: Metadata = {
  title: "Schools & Groups | Griot Academy",
  description:
    "Bring Griot Academy to your school or group. Explore chess, coding, robotics, math, AI literacy, and STEM programming for K-8 students.",
};

export default function SchoolsPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <SchoolsPageContent />
      </main>
      <Footer />
    </>
  );
}
