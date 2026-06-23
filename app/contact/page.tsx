import type { Metadata } from "next";
import AnnouncementBar from "../components/AnnouncementBar";
import ContactPageContent from "../components/contact/ContactPageContent";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Contact Us | Griot Academy",
  description:
    "Get in touch with Griot Academy for enrollment help, school partnerships, district licensing, or technical support.",
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
