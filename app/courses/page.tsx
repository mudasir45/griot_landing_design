import type { Metadata } from "next";
import AnnouncementBar from "../components/AnnouncementBar";
import CourseCatalog from "../components/courses/CourseCatalog";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { getCourseCategories, getPublicCourses } from "../lib/courses-data";
import { BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Programs | Griot Academy",
  description:
    "Compare Griot Academy programs in chess, coding, robotics, math, and AI literacy for K-8 students. Book a trial class or join an early cohort.",
};

export default async function CoursesPage() {
  const [courses, categories] = await Promise.all([
    getPublicCourses(),
    getCourseCategories(),
  ]);

  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <section className="relative pt-24 pb-10 sm:pb-14 bg-gradient-to-br from-primary-50 via-white to-surface-2 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-primary-100/40 blur-3xl animate-blob" />
            <div
              className="absolute top-1/2 -right-40 w-[400px] h-[400px] rounded-full bg-amber-100/45 blur-3xl animate-blob"
              style={{ animationDelay: "3s" }}
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 pill px-4 py-2 bg-primary-50 border-primary-200 text-primary mb-4">
              <BookOpen className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">
                Program Areas
              </span>
            </div>
            <h1 className="font-display font-extrabold section-heading text-navy mb-3 sm:mb-4">
              Compare Griot Academy{" "}
              <span className="text-primary">programs.</span>
            </h1>
            <p className="text-body text-base sm:text-lg max-w-xl leading-relaxed mx-auto">
              Chess, coding, robotics, math, and AI literacy programs for K-8
              students. Start with one program, then add another as your child grows.
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CourseCatalog courses={courses} categories={categories} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
