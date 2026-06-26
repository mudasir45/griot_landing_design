const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "https://api.griotacademy.com";

const REVALIDATE_SECONDS = 3600;

export interface CourseOutput {
  id: string;
  name: string;
  title: string;
  slug: string;
  course_type: string | null;
  description: string | null;
  learning_objectives: string[];
  thumbnail: string | null;
  banner: string;
  category_name: string;
  tags: string;
  default_teacher_id: string | null;
  default_teacher_name: string | null;
  min_grade: number | null;
  max_grade: number | null;
  default_capacity: number;
  default_price: string;
  session_time_minutes: number;
  default_stripe_price_id: string;
  default_weekly_stripe_price_id: string | null;
  refund_window_ms: number | null;
  default_lesson_set_id: string | null;
  default_session_set_id: string | null;
}

export interface CourseCategoryOutput {
  id: string;
  name: string;
  slug: string | null;
  description: string | null;
}

export interface PublicLessonSummary {
  id: string;
  title: string;
  slug: string;
  position: number | null;
}

export interface PublicSessionSummary {
  id: string;
  title: string;
  session_number: number | null;
  description: string | null;
  starts_at: string | null;
  ends_at: string | null;
  status: string | null;
  lesson_count: number;
  lessons: PublicLessonSummary[];
}

export type PublicCohortStatus =
  | "draft"
  | "open"
  | "paused"
  | "ongoing"
  | "completed"
  | "cancelled";

export interface PublicCohortOutput {
  id: string;
  course_id: string;
  course_name: string;
  teacher_id: string | null;
  teacher_name: string | null;
  name: string;
  delivery_mode: string | null;
  price: string | null;
  stripe_price_id: string | null;
  weekly_stripe_price_id: string | null;
  starts_at: string | null;
  ends_at: string | null;
  registration_starts_at: string | null;
  registration_ends_at: string | null;
  capacity: number | null;
  status: PublicCohortStatus;
  sessions: PublicSessionSummary[];
}

export interface CertificateOutput {
  id: string;
  certificate_number: string;
  student_name: string;
  title: string;
  verification_code: string;
  issued_at: string;
  course: string;
}

export interface FetchCoursesParams {
  category?: string;
  min_grade?: number;
  max_grade?: number;
}

async function apiFetch<T>(path: string): Promise<T> {
  const url = `${API_BASE_URL}${path}`;
  const response = await fetch(url, {
    next: { revalidate: REVALIDATE_SECONDS },
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status} ${response.statusText} (${url})`);
  }

  return response.json() as Promise<T>;
}

function buildQueryString(params?: FetchCoursesParams): string {
  if (!params) return "";

  const searchParams = new URLSearchParams();
  if (params.category) searchParams.set("category", params.category);
  if (params.min_grade !== undefined) {
    searchParams.set("min_grade", String(params.min_grade));
  }
  if (params.max_grade !== undefined) {
    searchParams.set("max_grade", String(params.max_grade));
  }

  const query = searchParams.toString();
  return query ? `?${query}` : "";
}

export async function fetchPublicCourses(
  params?: FetchCoursesParams
): Promise<CourseOutput[]> {
  return apiFetch<CourseOutput[]>(
    `/api/v1/public/courses/${buildQueryString(params)}`
  );
}

export async function fetchPublicCourseBySlug(
  slug: string
): Promise<CourseOutput> {
  return apiFetch<CourseOutput>(`/api/v1/public/courses/${slug}/`);
}

export async function fetchCourseCategories(): Promise<CourseCategoryOutput[]> {
  return apiFetch<CourseCategoryOutput[]>(
    "/api/v1/public/courses/categories/"
  );
}

export async function fetchCourseCohorts(
  courseId: string
): Promise<PublicCohortOutput[]> {
  return apiFetch<PublicCohortOutput[]>(
    `/api/v1/public/courses/${courseId}/cohorts/`
  );
}

export async function verifyCertificate(
  code: string
): Promise<CertificateOutput> {
  return apiFetch<CertificateOutput>(
    `/api/v1/public/courses/certificates/verify/${code}/`
  );
}
