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
    title: "Structured Learning",
    desc: "Programs are organized around clear skills, guided practice, and a path parents can follow.",
    color: "text-pink",
    bg: "bg-pink-50",
    border: "border-pink-200",
  },
  {
    icon: ShieldCheck,
    title: "Built for K-8 Families",
    desc: "Classes, dashboards, and communication are designed for younger learners and the families supporting them.",
    color: "text-green",
    bg: "bg-green-50",
    border: "border-green-200",
  },
  {
    icon: Lightbulb,
    title: "Skill-Based Progress",
    desc: "Students practice focus, problem-solving, creativity, and technology skills they can use beyond class.",
    color: "text-yellow-dark",
    bg: "bg-amber-50",
    border: "border-amber-200",
  },
  {
    icon: Users,
    title: "Parent Visibility",
    desc: "Families can see enrolled programs, upcoming classes, lesson activity, and progress in one place.",
    color: "text-primary",
    bg: "bg-primary-50",
    border: "border-primary-200",
  },
  {
    icon: BookOpen,
    title: "Guided Practice",
    desc: "Live classes and guided activities help students think, build, explain, and keep improving between sessions.",
    color: "text-sky",
    bg: "bg-sky-50",
    border: "border-sky-200",
  },
  {
    icon: Sparkles,
    title: "Trial-First Access",
    desc: "Families can start with a trial class, join an early cohort, or compare programs before committing.",
    color: "text-orange",
    bg: "bg-orange-50",
    border: "border-orange-200",
  },
];

export const milestones: Milestone[] = [
  {
    year: "2019",
    title: "Griot Academy Founded",
    desc: "Started with a belief that K-8 enrichment should be organized, parent-visible, and built around real skills.",
  },
  {
    year: "2022",
    title: "Core Programs Defined",
    desc: "Structured program areas in chess, coding, robotics, math, and AI literacy took shape for K-8 families.",
  },
  {
    year: "2024",
    title: "Parent Dashboard Launched",
    desc: "Families gained a clearer view of enrolled programs, classes, assignments, and progress updates.",
  },
  {
    year: "2026",
    title: "Early Cohorts Open",
    desc: "Founding Families can join early cohorts and help shape the parent and student experience.",
  },
];

export const impactStats = [
  { value: "5", label: "Program Areas" },
  { value: "K–8", label: "Grade Bands" },
  { value: "Live", label: "Guided Classes" },
  { value: "Trial", label: "First Enrollment" },
];

export const approachPillars = [
  {
    title: "Live Guided Classes",
    desc: "Students learn with real-time instruction, discussion, and a weekly rhythm that builds habits.",
  },
  {
    title: "Parent Dashboard",
    desc: "Families can follow enrolled programs, upcoming sessions, lesson activity, and next steps in one place.",
  },
  {
    title: "Clear Program Paths",
    desc: "From chess to AI literacy, each program helps students practice a specific kind of thinking.",
  },
];
