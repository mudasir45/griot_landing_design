export type CohortStatus = "open" | "filling-fast" | "waitlist" | "full";

export interface Cohort {
  id: string;
  courseSlug: string;
  name: string;
  startDate: string;
  endDate: string;
  schedule: string;
  sessionLength: string;
  sessionsTotal: number;
  seatsTotal: number;
  seatsAvailable: number;
  status: CohortStatus;
  instructorName: string;
  price: string;
  timezone: string;
}

export const cohortStatusLabels: Record<CohortStatus, string> = {
  open: "Open",
  "filling-fast": "Filling Fast",
  waitlist: "Waitlist",
  full: "Full",
};

export const cohortStatusStyles: Record<
  CohortStatus,
  { badge: string; dot: string }
> = {
  open: {
    badge: "bg-green-light text-green-dark border-green/40",
    dot: "bg-green",
  },
  "filling-fast": {
    badge: "bg-amber-50 text-amber-700 border-amber-200",
    dot: "bg-yellow",
  },
  waitlist: {
    badge: "bg-orange-50 text-orange border-orange-200",
    dot: "bg-orange",
  },
  full: {
    badge: "bg-surface text-subtle border-border",
    dot: "bg-subtle",
  },
};

export const cohorts: Cohort[] = [
  // Chess Fundamentals
  {
    id: "chess-spring-am",
    courseSlug: "chess-fundamentals",
    name: "Spring 2026 — Morning",
    startDate: "Apr 7, 2026",
    endDate: "May 28, 2026",
    schedule: "Tue & Thu · 10:00 AM",
    sessionLength: "45 min",
    sessionsTotal: 16,
    seatsTotal: 12,
    seatsAvailable: 5,
    status: "filling-fast",
    instructorName: "Marcus Thorne",
    price: "$29/session",
    timezone: "ET",
  },
  {
    id: "chess-spring-pm",
    courseSlug: "chess-fundamentals",
    name: "Spring 2026 — Afternoon",
    startDate: "Apr 8, 2026",
    endDate: "May 29, 2026",
    schedule: "Wed & Fri · 4:00 PM",
    sessionLength: "45 min",
    sessionsTotal: 16,
    seatsTotal: 12,
    seatsAvailable: 8,
    status: "open",
    instructorName: "Marcus Thorne",
    price: "$29/session",
    timezone: "ET",
  },
  {
    id: "chess-summer",
    courseSlug: "chess-fundamentals",
    name: "Summer 2026 — Beginners",
    startDate: "Jun 16, 2026",
    endDate: "Aug 6, 2026",
    schedule: "Mon & Wed · 11:00 AM",
    sessionLength: "45 min",
    sessionsTotal: 16,
    seatsTotal: 12,
    seatsAvailable: 12,
    status: "open",
    instructorName: "Marcus Thorne",
    price: "$29/session",
    timezone: "ET",
  },

  // Python Explorers
  {
    id: "python-spring",
    courseSlug: "python-explorers",
    name: "Spring 2026 Cohort",
    startDate: "Apr 6, 2026",
    endDate: "Jun 12, 2026",
    schedule: "Mon & Wed · 5:30 PM",
    sessionLength: "60 min",
    sessionsTotal: 20,
    seatsTotal: 12,
    seatsAvailable: 3,
    status: "filling-fast",
    instructorName: "David Ray",
    price: "$35/session",
    timezone: "ET",
  },
  {
    id: "python-summer",
    courseSlug: "python-explorers",
    name: "Summer 2026 Cohort",
    startDate: "Jun 15, 2026",
    endDate: "Aug 21, 2026",
    schedule: "Tue & Thu · 3:00 PM",
    sessionLength: "60 min",
    sessionsTotal: 20,
    seatsTotal: 12,
    seatsAvailable: 10,
    status: "open",
    instructorName: "David Ray",
    price: "$35/session",
    timezone: "ET",
  },

  // Robotics Makers Lab
  {
    id: "robotics-spring",
    courseSlug: "robotics-makers-lab",
    name: "Spring 2026 — Lab A",
    startDate: "Apr 11, 2026",
    endDate: "Jul 4, 2026",
    schedule: "Sat · 10:00 AM",
    sessionLength: "90 min",
    sessionsTotal: 12,
    seatsTotal: 10,
    seatsAvailable: 2,
    status: "filling-fast",
    instructorName: "David Ray",
    price: "$45/session",
    timezone: "ET",
  },
  {
    id: "robotics-fall",
    courseSlug: "robotics-makers-lab",
    name: "Fall 2026 — Lab B",
    startDate: "Sep 12, 2026",
    endDate: "Dec 5, 2026",
    schedule: "Sat · 1:00 PM",
    sessionLength: "90 min",
    sessionsTotal: 12,
    seatsTotal: 10,
    seatsAvailable: 10,
    status: "open",
    instructorName: "David Ray",
    price: "$45/session",
    timezone: "ET",
  },

  // Art & Digital Design
  {
    id: "art-spring",
    courseSlug: "art-digital-design",
    name: "Spring 2026 — Creators",
    startDate: "Apr 9, 2026",
    endDate: "May 29, 2026",
    schedule: "Wed & Fri · 4:30 PM",
    sessionLength: "45 min",
    sessionsTotal: 16,
    seatsTotal: 12,
    seatsAvailable: 7,
    status: "open",
    instructorName: "Elena Vance",
    price: "$29/session",
    timezone: "ET",
  },
  {
    id: "art-summer",
    courseSlug: "art-digital-design",
    name: "Summer 2026 — Studio",
    startDate: "Jun 17, 2026",
    endDate: "Aug 7, 2026",
    schedule: "Tue & Thu · 2:00 PM",
    sessionLength: "45 min",
    sessionsTotal: 16,
    seatsTotal: 12,
    seatsAvailable: 12,
    status: "open",
    instructorName: "Elena Vance",
    price: "$29/session",
    timezone: "ET",
  },

  // Science Lab
  {
    id: "science-spring",
    courseSlug: "science-lab",
    name: "Spring 2026 — Explorers",
    startDate: "Apr 7, 2026",
    endDate: "Jun 16, 2026",
    schedule: "Tue · 5:00 PM",
    sessionLength: "60 min",
    sessionsTotal: 10,
    seatsTotal: 14,
    seatsAvailable: 6,
    status: "open",
    instructorName: "Dr. Sarah Chen",
    price: "$32/session",
    timezone: "ET",
  },
  {
    id: "science-summer",
    courseSlug: "science-lab",
    name: "Summer 2026 — Investigators",
    startDate: "Jun 18, 2026",
    endDate: "Aug 27, 2026",
    schedule: "Thu · 4:00 PM",
    sessionLength: "60 min",
    sessionsTotal: 10,
    seatsTotal: 14,
    seatsAvailable: 14,
    status: "open",
    instructorName: "Dr. Sarah Chen",
    price: "$32/session",
    timezone: "ET",
  },

  // Creative Writing
  {
    id: "writing-spring",
    courseSlug: "creative-writing",
    name: "Spring 2026 — Storytellers",
    startDate: "Apr 10, 2026",
    endDate: "May 29, 2026",
    schedule: "Thu · 4:00 PM",
    sessionLength: "45 min",
    sessionsTotal: 16,
    seatsTotal: 12,
    seatsAvailable: 9,
    status: "open",
    instructorName: "Elena Vance",
    price: "$29/session",
    timezone: "ET",
  },
  {
    id: "writing-summer",
    courseSlug: "creative-writing",
    name: "Summer 2026 — Young Authors",
    startDate: "Jun 19, 2026",
    endDate: "Aug 7, 2026",
    schedule: "Mon · 3:30 PM",
    sessionLength: "45 min",
    sessionsTotal: 16,
    seatsTotal: 12,
    seatsAvailable: 0,
    status: "waitlist",
    instructorName: "Elena Vance",
    price: "$29/session",
    timezone: "ET",
  },

  // Music Theory Basics
  {
    id: "music-spring",
    courseSlug: "music-theory-basics",
    name: "Spring 2026 — Rhythm & Melody",
    startDate: "Apr 6, 2026",
    endDate: "May 25, 2026",
    schedule: "Mon · 4:00 PM",
    sessionLength: "45 min",
    sessionsTotal: 16,
    seatsTotal: 12,
    seatsAvailable: 8,
    status: "open",
    instructorName: "Marcus Thorne",
    price: "$29/session",
    timezone: "ET",
  },

  // Math Masters
  {
    id: "math-spring",
    courseSlug: "math-masters",
    name: "Spring 2026 — Problem Solvers",
    startDate: "Apr 8, 2026",
    endDate: "Jun 17, 2026",
    schedule: "Wed · 5:00 PM",
    sessionLength: "60 min",
    sessionsTotal: 20,
    seatsTotal: 12,
    seatsAvailable: 4,
    status: "filling-fast",
    instructorName: "Dr. Sarah Chen",
    price: "$32/session",
    timezone: "ET",
  },
  {
    id: "math-summer",
    courseSlug: "math-masters",
    name: "Summer 2026 — Mathletes",
    startDate: "Jun 16, 2026",
    endDate: "Aug 25, 2026",
    schedule: "Wed · 10:00 AM",
    sessionLength: "60 min",
    sessionsTotal: 20,
    seatsTotal: 12,
    seatsAvailable: 11,
    status: "open",
    instructorName: "Dr. Sarah Chen",
    price: "$32/session",
    timezone: "ET",
  },

  // Active Kids Fitness
  {
    id: "fitness-spring",
    courseSlug: "active-kids-fitness",
    name: "Spring 2026 — Active Mornings",
    startDate: "Apr 7, 2026",
    endDate: "May 16, 2026",
    schedule: "Mon–Fri · 3:30 PM",
    sessionLength: "30 min",
    sessionsTotal: 30,
    seatsTotal: 20,
    seatsAvailable: 12,
    status: "open",
    instructorName: "Marcus Thorne",
    price: "$19/session",
    timezone: "ET",
  },
  {
    id: "fitness-summer",
    courseSlug: "active-kids-fitness",
    name: "Summer 2026 — Move & Play",
    startDate: "Jun 15, 2026",
    endDate: "Jul 24, 2026",
    schedule: "Mon–Fri · 9:00 AM",
    sessionLength: "30 min",
    sessionsTotal: 30,
    seatsTotal: 20,
    seatsAvailable: 20,
    status: "open",
    instructorName: "Marcus Thorne",
    price: "$19/session",
    timezone: "ET",
  },
];

export function getCohortsByCourseSlug(courseSlug: string): Cohort[] {
  return cohorts.filter((cohort) => cohort.courseSlug === courseSlug);
}

export function getDefaultCohort(courseSlug: string): Cohort | undefined {
  const courseCohorts = getCohortsByCourseSlug(courseSlug);
  return (
    courseCohorts.find((c) => c.status === "open" || c.status === "filling-fast") ??
    courseCohorts[0]
  );
}
