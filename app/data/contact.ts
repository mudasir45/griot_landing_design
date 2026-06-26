import type { LucideIcon } from "lucide-react";
import {
  Building2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  School,
  Users
} from "lucide-react";

export type InquiryType =
  | "parent"
  | "school"
  | "partnership"
  | "support";

export interface InquiryOption {
  id: InquiryType;
  label: string;
  desc: string;
  icon: LucideIcon;
  color: string;
  bg: string;
  border: string;
}

export interface ContactMethod {
  icon: LucideIcon;
  title: string;
  value: string;
  href: string;
  desc: string;
  color: string;
  bg: string;
}

export const inquiryOptions: InquiryOption[] = [
  {
    id: "parent",
    label: "Parent & Family",
    desc: "Trial classes, program fit, and enrollment questions",
    icon: Users,
    color: "text-primary",
    bg: "bg-primary-50",
    border: "border-primary-200",
  },
  {
    id: "school",
    label: "Schools & Groups",
    desc: "School demos, after-school programs, and group pilots",
    icon: School,
    color: "text-sky",
    bg: "bg-sky-50",
    border: "border-sky-200",
  },
  {
    id: "partnership",
    label: "Founding Families",
    desc: "Early cohort access and class update requests",
    icon: Building2,
    color: "text-orange",
    bg: "bg-orange-50",
    border: "border-orange-200",
  },
  {
    id: "support",
    label: "General Questions",
    desc: "Program questions, scheduling, and account help",
    icon: MessageCircle,
    color: "text-green",
    bg: "bg-green-50",
    border: "border-green-200",
  },
];

export const contactMethods: ContactMethod[] = [
  {
    icon: Mail,
    title: "Email Us",
    value: "hello@griotacademy.com",
    href: "mailto:hello@griotacademy.com",
    desc: "We reply within 24 hours on business days.",
    color: "text-primary",
    bg: "bg-primary-100",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "1-800-GRIOT-01",
    href: "tel:+18004746801",
    desc: "Mon–Fri, 9 AM – 6 PM ET.",
    color: "text-green",
    bg: "bg-green-light",
  },
  {
    icon: MapPin,
    title: "Headquarters",
    value: "Washington, DC Metro",
    href: "#",
    desc: "Remote-first team serving families nationwide.",
    color: "text-orange",
    bg: "bg-orange-100",
  },
];

export const officeHours = [
  { day: "Monday – Friday", hours: "9:00 AM – 6:00 PM ET" },
  { day: "Saturday", hours: "10:00 AM – 2:00 PM ET" },
  { day: "Sunday", hours: "Closed" },
];

export const responseHighlights = [
  "Help with trial class and program questions",
  "School demo and group program inquiries",
  "Clear next steps for parents and organizers",
];
