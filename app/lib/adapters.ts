import type { Cohort, CohortStatus } from "../data/cohorts";
import type {
  Course,
  CourseCategory,
  CourseIconName,
  CourseModule,
} from "../data/courses";
import type {
  CourseOutput,
  PublicCohortOutput,
  PublicCohortStatus,
} from "./api";

interface CategoryStyle {
  category: CourseCategory;
  icon: CourseIconName;
  bg: string;
  border: string;
  iconBg: string;
  tagColor: string;
}

const CATEGORY_STYLES: Record<string, CategoryStyle> = {
  coding: {
    category: "Coding",
    icon: "Code2",
    bg: "bg-primary-50",
    border: "border-primary-200",
    iconBg: "bg-primary",
    tagColor: "bg-primary-100 text-primary-dark border-primary-200",
  },
  stem: {
    category: "STEM",
    icon: "FlaskConical",
    bg: "bg-green-50",
    border: "border-green-200",
    iconBg: "bg-green",
    tagColor: "bg-green-100 text-green-700 border-green-200",
  },
  robotics: {
    category: "STEM",
    icon: "Cpu",
    bg: "bg-sky-50",
    border: "border-sky-200",
    iconBg: "bg-sky-500",
    tagColor: "bg-sky-100 text-sky-700 border-sky-200",
  },
  arts: {
    category: "Arts",
    icon: "Palette",
    bg: "bg-pink-50",
    border: "border-pink-200",
    iconBg: "bg-pink-500",
    tagColor: "bg-pink-100 text-pink-700 border-pink-200",
  },
  chess: {
    category: "Chess",
    icon: "Brain",
    bg: "bg-amber-50",
    border: "border-amber-200",
    iconBg: "bg-amber-400",
    tagColor: "bg-amber-100 text-amber-700 border-amber-200",
  },
  music: {
    category: "Music",
    icon: "Music4",
    bg: "bg-violet-50",
    border: "border-violet-200",
    iconBg: "bg-primary-light",
    tagColor: "bg-primary-100 text-primary-dark border-primary-200",
  },
  math: {
    category: "Math",
    icon: "Calculator",
    bg: "bg-indigo-50",
    border: "border-indigo-200",
    iconBg: "bg-indigo-500",
    tagColor: "bg-indigo-100 text-indigo-700 border-indigo-200",
  },
  fitness: {
    category: "Fitness",
    icon: "Dumbbell",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    iconBg: "bg-green",
    tagColor: "bg-green-100 text-green-700 border-green-200",
  },
  writing: {
    category: "Writing",
    icon: "PenLine",
    bg: "bg-orange-50",
    border: "border-orange-200",
    iconBg: "bg-orange",
    tagColor: "bg-orange-100 text-orange-700 border-orange-200",
  },
};

const DEFAULT_STYLE: CategoryStyle = {
  category: "STEM",
  icon: "FlaskConical",
  bg: "bg-primary-50",
  border: "border-primary-200",
  iconBg: "bg-primary",
  tagColor: "bg-primary-100 text-primary-dark border-primary-200",
};

function resolveCategoryStyle(categoryName: string): CategoryStyle {
  const normalized = categoryName.trim().toLowerCase();

  if (CATEGORY_STYLES[normalized]) {
    return CATEGORY_STYLES[normalized];
  }

  for (const [key, style] of Object.entries(CATEGORY_STYLES)) {
    if (normalized.includes(key) || key.includes(normalized)) {
      return style;
    }
  }

  return DEFAULT_STYLE;
}

function truncateDescription(text: string, maxLength = 120): string {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trimEnd()}…`;
}

function formatGrades(minGrade: number | null, maxGrade: number | null): string {
  if (minGrade !== null && maxGrade !== null) {
    return `Grades ${minGrade}–${maxGrade}`;
  }
  if (minGrade !== null) return `Grade ${minGrade}+`;
  if (maxGrade !== null) return `Up to Grade ${maxGrade}`;
  return "All grades";
}

function formatPrice(price: string): string {
  const numeric = Number.parseFloat(price);
  if (Number.isNaN(numeric)) return price;
  return `From $${numeric % 1 === 0 ? numeric.toFixed(0) : numeric.toFixed(2)}/session`;
}

function formatSessionLength(minutes: number): string {
  return `${minutes} min sessions`;
}

function formatDate(dateString: string | null): string {
  if (!dateString) return "TBD";
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

function computeDurationFromCohorts(cohorts: PublicCohortOutput[]): string {
  const cohort = cohorts.find((c) => c.starts_at && c.ends_at);
  if (!cohort?.starts_at || !cohort.ends_at) return "N/A";

  const start = new Date(cohort.starts_at);
  const end = new Date(cohort.ends_at);
  const weeks = Math.max(
    1,
    Math.round((end.getTime() - start.getTime()) / (7 * 24 * 60 * 60 * 1000))
  );

  return `${weeks}-week program`;
}

function mapCohortStatus(status: PublicCohortStatus): CohortStatus {
  switch (status) {
    case "open":
    case "ongoing":
      return "open";
    case "paused":
      return "waitlist";
    case "completed":
    case "cancelled":
      return "full";
    case "draft":
    default:
      return "open";
  }
}

// [MOCK] API has no schedule string — derive from first session start time
function deriveSchedule(cohort: PublicCohortOutput): string {
  const firstSession = cohort.sessions.find((s) => s.starts_at);
  if (!firstSession?.starts_at) return "Schedule TBD";

  const date = new Date(firstSession.starts_at);
  const day = date.toLocaleDateString("en-US", { weekday: "short" });
  const time = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return `${day} · ${time}`;
}

// [MOCK] API has no enrollment count — estimate seats as half of capacity
function deriveMockSeatsAvailable(capacity: number): number {
  return Math.max(1, Math.floor(capacity / 2));
}

// [MOCK] API has no fill-ratio — infer "filling-fast" from mock seat availability
function deriveMockFillingFastStatus(
  baseStatus: CohortStatus,
  capacity: number,
  seatsAvailable: number
): CohortStatus {
  if (baseStatus !== "open") return baseStatus;
  const fillRatio = (capacity - seatsAvailable) / capacity;
  return fillRatio >= 0.6 ? "filling-fast" : baseStatus;
}

export function adaptCourse(
  apiCourse: CourseOutput,
  cohorts: PublicCohortOutput[] = []
): Course {
  const style = resolveCategoryStyle(apiCourse.category_name);
  const description = apiCourse.description ?? "";
  const teacherName = apiCourse.default_teacher_name ?? "Griot Academy Instructor";

  return {
    slug: apiCourse.slug,
    title: apiCourse.title,
    desc: description
      ? truncateDescription(description)
      : `Explore ${apiCourse.title} with expert instructors.`,
    longDesc:
      description ||
      `Join ${apiCourse.title} and build skills through live, interactive sessions.`,
    grades: formatGrades(apiCourse.min_grade, apiCourse.max_grade),
    tag: apiCourse.category_name || style.category,
    category: style.category,
    icon: style.icon, // [MOCK] derived from category
    image:
      apiCourse.thumbnail ||
      apiCourse.banner ||
      "/images/courses/default-course.png",
    banner:
      apiCourse.banner ||
      apiCourse.thumbnail ||
      "/images/courses/default-course.png",
    imageAlt: `${apiCourse.title} course image`, // [MOCK] generated alt text
    bg: style.bg, // [MOCK] derived from category
    border: style.border, // [MOCK] derived from category
    iconBg: style.iconBg, // [MOCK] derived from category
    tagColor: style.tagColor, // [MOCK] derived from category
    duration:
      cohorts.length > 0
        ? computeDurationFromCohorts(cohorts)
        : "N/A",
    sessionLength: formatSessionLength(apiCourse.session_time_minutes),
    schedule: cohorts[0] ? deriveSchedule(cohorts[0]) : "Multiple start dates",
    price: formatPrice(apiCourse.default_price),
    popular: false, // [MOCK] API has no popularity flag
    outcomes:
      apiCourse.learning_objectives.length > 0
        ? apiCourse.learning_objectives
        : [
            `Build confidence in ${apiCourse.category_name || "this subject"}`,
            "Learn through live, interactive sessions",
            "Apply skills in guided projects",
          ],
    modules: cohorts[0] ? courseToModules(cohorts[0]) : [],
    instructor: {
      name: teacherName,
      title: `${apiCourse.category_name || "Course"} Instructor`, // [MOCK]
      initials: getInitials(teacherName), // [MOCK]
      bg: style.iconBg, // [MOCK]
      rating: 4.9, // [MOCK]
      students: 500, // [MOCK]
      bio: `${teacherName} brings engaging, student-centered instruction to every session.`, // [MOCK]
    },
  };
}

export function adaptCohort(
  apiCohort: PublicCohortOutput,
  courseSlug: string,
  sessionLengthMinutes?: number
): Cohort {
  const capacity = apiCohort.capacity ?? 12;
  const seatsAvailable = deriveMockSeatsAvailable(capacity);
  const baseStatus = mapCohortStatus(apiCohort.status);
  const status = deriveMockFillingFastStatus(
    baseStatus,
    capacity,
    seatsAvailable
  );
  const sessionsTotal = apiCohort.sessions.length;
  const sessionLength = sessionLengthMinutes
    ? `${sessionLengthMinutes} min`
    : "45 min";

  return {
    id: apiCohort.id,
    courseSlug,
    name: apiCohort.name,
    startDate: formatDate(apiCohort.starts_at),
    endDate: formatDate(apiCohort.ends_at),
    schedule: deriveSchedule(apiCohort),
    sessionLength,
    sessionsTotal,
    seatsTotal: capacity,
    seatsAvailable,
    status,
    instructorName: apiCohort.teacher_name ?? "Griot Academy Instructor",
    price: apiCohort.price ? formatPrice(apiCohort.price) : "Contact for pricing",
    timezone: "ET", // [MOCK] API has no timezone field
  };
}

export function courseToModules(cohort: PublicCohortOutput): CourseModule[] {
  if (cohort.sessions.length === 0) return [];

  return cohort.sessions.map((session) => ({
    title: session.title,
    lessons: session.lesson_count || session.lessons.length,
    topics:
      session.lessons.length > 0
        ? session.lessons.map((lesson) => lesson.title)
        : session.description
          ? [session.description]
          : ["Session content coming soon"],
  }));
}

export function adaptCourses(
  apiCourses: CourseOutput[],
  cohortsByCourseId: Record<string, PublicCohortOutput[]> = {}
): Course[] {
  return apiCourses.map((course) =>
    adaptCourse(course, cohortsByCourseId[course.id] ?? [])
  );
}

export function getRelatedCoursesFromList(
  course: Course,
  allCourses: Course[],
  limit = 3
): Course[] {
  return allCourses
    .filter((c) => c.slug !== course.slug && c.category === course.category)
    .slice(0, limit);
}

export function getDefaultCohortFromList(
  cohorts: Cohort[]
): Cohort | undefined {
  return (
    cohorts.find((c) => c.status === "open" || c.status === "filling-fast") ??
    cohorts[0]
  );
}
