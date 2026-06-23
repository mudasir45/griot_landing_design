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
    title: "School Programs",
    desc: "Seamlessly integrated curriculum for private and public schools — no extra setup required. Plug Griot into your existing schedules with full teacher training and support.",
    highlights: [
      "Plugs into existing schedules",
      "Aligned with Common Core",
      "Teacher training & support",
    ],
    color: "text-sky",
    iconBg: "bg-sky-100",
    image: "/images/banner01.png",
    imageAlt: "Children learning collaboratively in a classroom setting",
  },
  {
    icon: Building2,
    title: "District Partnerships",
    desc: "Scalable educational infrastructure designed to support thousands of students across multiple campuses with centralized administration and district-wide analytics.",
    highlights: [
      "Centralized admin dashboard",
      "District-wide data analytics",
      "Custom program branding",
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
    label: "Submit Inquiry",
    desc: "Tell us your district's unique goals, student population, and program priorities.",
  },
  {
    icon: BookOpen,
    label: "Customize",
    desc: "Tailor programs to your local curriculum, standards alignment, and scheduling needs.",
  },
  {
    icon: Users,
    label: "Launch",
    desc: "Onboard students and faculty with dedicated training — most schools go live in 2–3 weeks.",
  },
  {
    icon: BarChart3,
    label: "Track Outcomes",
    desc: "Measure impact with granular analytics, progress reports, and board-ready data.",
  },
];

export const institutionBenefits: InstitutionBenefit[] = [
  {
    icon: LayoutDashboard,
    title: "Admin Dashboard",
    desc: "Centralized control for enrollment, scheduling, attendance, and progress across all campuses.",
    color: "text-primary",
    bg: "bg-primary-50",
  },
  {
    icon: ShieldCheck,
    title: "COPPA & FERPA Safe",
    desc: "Enterprise-grade security with full compliance for student data privacy at every level.",
    color: "text-green",
    bg: "bg-green-50",
  },
  {
    icon: GraduationCap,
    title: "Credentialed Instructors",
    desc: "Background-checked educators who integrate seamlessly with your faculty and standards.",
    color: "text-orange",
    bg: "bg-orange-50",
  },
  {
    icon: TrendingUp,
    title: "Outcome Analytics",
    desc: "Track engagement, completion rates, and skill growth with reports built for administrators.",
    color: "text-sky",
    bg: "bg-sky-50",
  },
];

export const institutionFeatures = [
  "Unlimited student seats",
  "Admin analytics dashboard",
  "Custom curriculum alignment",
  "Dedicated success manager",
  "On-site training included",
  "LMS integration support",
];

export const schoolStats = [
  { value: "50+", label: "Partner Schools" },
  { value: "10K+", label: "Students Served" },
  { value: "2–3 wks", label: "Avg. Onboarding" },
  { value: "200+", label: "Course Options" },
];

export const schoolTestimonials: SchoolTestimonial[] = [
  {
    quote:
      "Integrating Griot into our after-school program was effortless. The data tracking helps us justify the investment to our board every single semester.",
    name: "Dr. James Sterling",
    role: "Principal",
    location: "Heights Academy",
    initials: "JS",
    bg: "bg-sky-500",
    tag: "School Partner",
  },
  {
    quote:
      "Our district adopted Griot Academy for five schools in one semester. The onboarding was smooth and student engagement scores have been outstanding.",
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
    q: "How do school districts integrate the curriculum?",
    a: "Our dedicated district success team handles onboarding end-to-end — from LMS integration to faculty training. Most schools are fully live within 2–3 weeks. We align all content with state standards and provide an admin dashboard for tracking outcomes.",
  },
  {
    q: "What does institutional pricing look like?",
    a: "We offer flexible district pricing based on student volume, program scope, and integration needs. Contact our partnerships team for a custom quote — most districts start with a pilot program before scaling district-wide.",
  },
  {
    q: "Can Griot align with our existing curriculum standards?",
    a: "Yes. All programs are aligned with Common Core and can be customized to match state-specific standards. Our team works with your curriculum directors during the customization phase.",
  },
  {
    q: "What support do teachers receive?",
    a: "Every school partnership includes faculty onboarding, live training sessions, and ongoing support from a dedicated success manager. Teachers get access to lesson plans, progress tools, and direct instructor support channels.",
  },
];
