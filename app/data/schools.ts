import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  BookOpen,
  Building2,
  GraduationCap,
  LayoutDashboard,
  School,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";

export interface PartnershipOffering {
  icon: LucideIcon;
  title: string;
  desc: string;
  highlights: string[];
  color: string;
  iconBg: string;
  image: string;
  imageAlt: string;
}

export interface ImplementationStep {
  icon: LucideIcon;
  label: string;
  desc: string;
}

export interface InstitutionBenefit {
  icon: LucideIcon;
  title: string;
  desc: string;
  color: string;
  bg: string;
}

export interface SchoolTestimonial {
  quote: string;
  name: string;
  role: string;
  location: string;
  initials: string;
  bg: string;
  tag: string;
}

export const partnershipOfferings: PartnershipOffering[] = [
  {
    icon: School,
    title: "After-School Programs",
    desc: "Schools can explore chess, coding, robotics, math, AI literacy, and STEM programming for after-school clubs and enrichment blocks.",
    highlights: [
      "Chess clubs and strategy labs",
      "Coding and robotics groups",
      "Progress visibility for organizers",
    ],
    color: "text-sky",
    iconBg: "bg-sky-100",
    image: "/images/banner01.png",
    imageAlt: "Children learning collaboratively in a classroom setting",
  },
  {
    icon: Building2,
    title: "Group & Community Programs",
    desc: "Homeschool groups and community organizers can discuss grade bands, scheduling, live instruction, and program fit for student groups.",
    highlights: [
      "Group scheduling support",
      "Program pilots and cohorts",
      "Clear communication with families",
    ],
    color: "text-green",
    iconBg: "bg-green-light",
    image: "/images/The_Scholar.d92aa1ba7abc5bbd377244bd1ee7151c.webp",
    imageAlt: "Student engaged in structured online learning",
  },
];

export const implementationSteps: ImplementationStep[] = [
  {
    icon: Building2,
    label: "Request a Demo",
    desc: "Tell us about your school, group size, grade bands, and program interests.",
  },
  {
    icon: BookOpen,
    label: "Discuss Program Fit",
    desc: "Griot can help match chess, coding, robotics, math, or AI literacy to your schedule and students.",
  },
  {
    icon: Users,
    label: "Launch a Pilot",
    desc: "Start with a focused pilot cohort and clear communication for families and organizers.",
  },
  {
    icon: BarChart3,
    label: "Track Progress",
    desc: "Organizers can follow class activity, enrollment, and student progress visibility.",
  },
];

export const institutionBenefits: InstitutionBenefit[] = [
  {
    icon: LayoutDashboard,
    title: "Progress Visibility",
    desc: "Organizers can follow enrolled programs, upcoming sessions, and student activity in one place.",
    color: "text-primary",
    bg: "bg-primary-50",
  },
  {
    icon: ShieldCheck,
    title: "Age-Appropriate Design",
    desc: "Programs are built for K-8 learners with guided classes and structured activities.",
    color: "text-green",
    bg: "bg-green-50",
  },
  {
    icon: GraduationCap,
    title: "Guided Instruction",
    desc: "Live classes give students real-time guidance, discussion, and a clear weekly rhythm.",
    color: "text-orange",
    bg: "bg-orange-50",
  },
  {
    icon: TrendingUp,
    title: "Program Support",
    desc: "Griot can discuss scheduling, cohort options, and next steps for school and group programs.",
    color: "text-sky",
    bg: "bg-sky-50",
  },
];

export const institutionFeatures = [
  "Chess, coding, robotics, math, and AI literacy",
  "After-school and enrichment block options",
  "Live instruction for student groups",
  "Progress visibility for organizers",
  "Pilot and cohort scheduling support",
  "Dedicated school inquiry path",
];

export const schoolStats = [
  { value: "5", label: "Program Areas" },
  { value: "K–8", label: "Grade Bands" },
  { value: "Live", label: "Instruction" },
  { value: "Pilot", label: "Program Options" },
];

export const schoolTestimonials: SchoolTestimonial[] = [
  {
    quote:
      "Griot made it straightforward to bring structured chess and coding enrichment into our after-school program. Families appreciated the clear communication and progress visibility.",
    name: "Dr. James Sterling",
    role: "Principal",
    location: "Heights Academy",
    initials: "JS",
    bg: "bg-sky-500",
    tag: "School Partner",
  },
  {
    quote:
      "We piloted Griot programs for a small group of students. The format, scheduling support, and parent-facing updates made the partnership easy to explain.",
    name: "Superintendent Kim",
    role: "District Superintendent",
    location: "Oakland Unified",
    initials: "DK",
    bg: "bg-green",
    tag: "District Partner",
  },
];

export const schoolFaqs = [
  {
    q: "What programs can schools explore?",
    a: "Schools and groups can explore chess, coding, robotics, math, AI literacy, and STEM programming for groups of students. Griot can discuss grade bands, scheduling, and program fit.",
  },
  {
    q: "How does a school partnership start?",
    a: "Start with a school demo or contact request. Griot can discuss your goals, student group, schedule needs, and a practical pilot or cohort option.",
  },
  {
    q: "Can Griot support after-school clubs?",
    a: "Yes. Griot can support after-school programs, enrichment blocks, homeschool groups, and community learning settings.",
  },
  {
    q: "Will organizers be able to see student progress?",
    a: "Griot is designed to give organizers visibility into enrolled programs, upcoming sessions, lesson activity, and progress updates.",
  },
];
