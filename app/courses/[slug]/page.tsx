import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AnnouncementBar from "../../components/AnnouncementBar";
import CourseDetailContent from "../../components/courses/CourseDetailContent";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { getCourseDetail, getCourseSlugs } from "../../lib/courses-data";
import { fetchPublicCourseBySlug } from "../../lib/api";

interface CourseDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getCourseSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CourseDetailPageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const apiCourse = await fetchPublicCourseBySlug(slug);
    return {
      title: `${apiCourse.title} | Griot Academy`,
      description: apiCourse.description ?? apiCourse.title,
    };
  } catch {
    const detail = await getCourseDetail(slug);
    if (!detail) {
      return { title: "Course Not Found | Griot Academy" };
    }

    return {
      title: `${detail.course.title} | Griot Academy`,
      description: detail.course.desc,
    };
  }
}

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const { slug } = await params;
  const detail = await getCourseDetail(slug);

  if (!detail) {
    notFound();
  }

  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <CourseDetailContent
          course={detail.course}
          cohorts={detail.cohorts}
          relatedCourses={detail.relatedCourses}
          defaultCohort={detail.defaultCohort}
        />
      </main>
      <Footer />
    </>
  );
}
