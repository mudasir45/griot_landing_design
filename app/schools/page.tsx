import type { Metadata } from "next";
import AnnouncementBar from "../components/AnnouncementBar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SchoolsPageContent from "../components/schools/SchoolsPageContent";

export const metadata: Metadata = {
  title: "Schools & Districts | Griot Academy",
  description:
    "Bring Griot Academy to your school or district. Scalable enrichment programs, admin dashboards, curriculum alignment, and dedicated partnership support.",
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
