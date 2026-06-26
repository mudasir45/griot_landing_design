import {
  getCourseBySlug as getStaticCourseBySlug,
  getCourseSlugs as getStaticCourseSlugs,
  getRelatedCourses as getStaticRelatedCourses,
  courses as staticCourses,
  categoryFilters,
} from "../data/courses";
import {
  getCohortsByCourseSlug as getStaticCohortsByCourseSlug,
  getDefaultCohort as getStaticDefaultCohort,
} from "../data/cohorts";
import type { Cohort } from "../data/cohorts";
import type { Course } from "../data/courses";
import {
  adaptCourse,
  adaptCohort,
  adaptCourses,
  getDefaultCohortFromList,
  getRelatedCoursesFromList,
} from "./adapters";
import type { CourseCategoryOutput } from "./api";
import {
  fetchCourseCategories,
  fetchCourseCohorts,
  fetchPublicCourseBySlug,
  fetchPublicCourses,
} from "./api";

function staticCategories(): CourseCategoryOutput[] {
  return categoryFilters
    .filter((name) => name !== "All")
    .map((name) => ({
      id: name.toLowerCase(),
      name,
      slug: name.toLowerCase(),
      description: null,
    }));
}

export async function getPublicCourses(): Promise<Course[]> {
  try {
    const apiCourses = await fetchPublicCourses();
    return adaptCourses(apiCourses);
  } catch {
    return staticCourses;
  }
}

export async function getCourseCategories(): Promise<CourseCategoryOutput[]> {
  try {
    return await fetchCourseCategories();
  } catch {
    return staticCategories();
  }
}

export async function getCourseSlugs(): Promise<string[]> {
  try {
    const apiCourses = await fetchPublicCourses();
    return apiCourses.map((course) => course.slug);
  } catch {
    return getStaticCourseSlugs();
  }
}

export interface CourseDetailData {
  course: Course;
  cohorts: Cohort[];
  relatedCourses: Course[];
  defaultCohort: Cohort | null;
}

export async function getCourseDetail(slug: string): Promise<CourseDetailData | null> {
  try {
    const apiCourse = await fetchPublicCourseBySlug(slug);
    const [apiCohorts, allApiCourses] = await Promise.all([
      fetchCourseCohorts(apiCourse.id),
      fetchPublicCourses(),
    ]);

    const cohorts = apiCohorts.map((cohort) =>
      adaptCohort(cohort, apiCourse.slug, apiCourse.session_time_minutes)
    );
    const course = adaptCourse(apiCourse, apiCohorts);
    const allCourses = adaptCourses(allApiCourses);
    const relatedCourses = getRelatedCoursesFromList(course, allCourses);
    const defaultCohort = getDefaultCohortFromList(cohorts);

    return {
      course,
      cohorts,
      relatedCourses,
      defaultCohort: defaultCohort ?? null,
    };
  } catch {
    const staticCourse = getStaticCourseBySlug(slug);
    if (!staticCourse) return null;

    const cohorts = getStaticCohortsByCourseSlug(slug);
    const defaultCohort = getStaticDefaultCohort(slug) ?? null;

    return {
      course: staticCourse,
      cohorts,
      relatedCourses: getStaticRelatedCourses(staticCourse),
      defaultCohort,
    };
  }
}
