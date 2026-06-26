import type { Metadata } from "next";
import AnnouncementBar from "../components/AnnouncementBar";
import ContactPageContent from "../components/contact/ContactPageContent";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Contact Us | Griot Academy",
  description:
    "Contact Griot Academy to book a trial class, join an early cohort, request a school demo, or ask about programs for K-8 students.",
};

export default function ContactPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <ContactPageContent />
      </main>
      <Footer />
    </>
  );
}
