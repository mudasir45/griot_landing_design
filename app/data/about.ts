import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Heart,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

export interface CoreValue {
  icon: LucideIcon;
  title: string;
  desc: string;
  color: string;
  bg: string;
  border: string;
}

export interface Milestone {
  year: string;
  title: string;
  desc: string;
}

export const coreValues: CoreValue[] = [
  {
    icon: Heart,
    title: "Joy in Learning",
    desc: "Education should spark curiosity and delight — not feel like a chore. Every course is designed to make kids want to come back.",
    color: "text-pink",
    bg: "bg-pink-50",
    border: "border-pink-200",
  },
  {
    icon: ShieldCheck,
    title: "Safety First",
    desc: "COPPA compliance, verified instructors, and monitored classrooms aren't features — they're non-negotiable foundations.",
    color: "text-green",
    bg: "bg-green-50",
    border: "border-green-200",
  },
  {
    icon: Lightbulb,
    title: "Real Outcomes",
    desc: "We measure success by what students can do — not just what they watch. Projects, portfolios, and tangible skills matter.",
    color: "text-yellow-dark",
    bg: "bg-amber-50",
    border: "border-amber-200",
  },
  {
    icon: Users,
    title: "Community & Belonging",
    desc: "Small class sizes, peer collaboration, and inclusive environments where every learner feels seen and supported.",
    color: "text-primary",
    bg: "bg-primary-50",
    border: "border-primary-200",
  },
  {
    icon: BookOpen,
    title: "Expert Instruction",
    desc: "World-class educators who combine deep subject expertise with the patience and warmth kids need to thrive.",
    color: "text-sky",
    bg: "bg-sky-50",
    border: "border-sky-200",
  },
  {
    icon: Sparkles,
    title: "Accessible Excellence",
    desc: "Premium learning experiences that reach families everywhere — online, in-person, and through school partnerships.",
    color: "text-orange",
    bg: "bg-orange-50",
    border: "border-orange-200",
  },
];

export const milestones: Milestone[] = [
  {
    year: "2019",
    title: "Griot Academy Founded",
    desc: "Started with a single live coding class and a belief that online learning could be joyful, safe, and rigorous.",
  },
  {
    year: "2021",
    title: "200+ Courses Launched",
    desc: "Expanded into chess, robotics, arts, science, and more — serving families across 30 states.",
  },
  {
    year: "2023",
    title: "School & District Partnerships",
    desc: "Partnered with 50+ schools and districts to bring unified learning infrastructure to classrooms nationwide.",
  },
  {
    year: "2025",
    title: "10,000+ Active Students",
    desc: "Reached a milestone of 10,000 enrolled learners with a 4.9/5 parent satisfaction rating.",
  },
];

export const impactStats = [
  { value: "10K+", label: "Students Enrolled" },
  { value: "200+", label: "Live Courses" },
  { value: "50+", label: "School Partners" },
  { value: "4.9/5", label: "Parent Rating" },
];

export const approachPillars = [
  {
    title: "Live & Interactive",
    desc: "Real-time instruction with expert educators — not pre-recorded videos. Students ask questions, collaborate, and build together.",
  },
  {
    title: "Built for Families",
    desc: "A parent dashboard that puts you in control — schedules, progress, payments, and notifications in one place.",
  },
  {
    title: "Designed to Scale",
    desc: "From a single child at home to entire districts — the same quality experience adapts to every context.",
  },
];
