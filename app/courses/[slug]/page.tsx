import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AnnouncementBar from "../../components/AnnouncementBar";
import CourseDetailContent from "../../components/courses/CourseDetailContent";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { getCourseBySlug, getCourseSlugs } from "../../data/courses";

interface CourseDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getCourseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CourseDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return { title: "Course Not Found | Griot Academy" };
  }

  return {
    title: `${course.title} | Griot Academy`,
    description: course.desc,
  };
}

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <CourseDetailContent course={course} />
      </main>
      <Footer />
    </>
  );
}
