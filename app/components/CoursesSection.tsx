"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Code2,
  Cpu,
  Palette,
  FlaskConical,
  Music4,
  PenLine,
  Calculator,
  Globe,
  Dumbbell,
  ChevronRight,
} from "lucide-react";

const courses = [
  {
    title: "Chess Fundamentals",
    desc: "Strategy, critical thinking, and patience — through the timeless game.",
    grades: "Grades 1–5",
    tag: "Chess",
    icon: Brain,
    bg: "bg-amber-50",
    border: "border-amber-200",
    iconBg: "bg-amber-400",
    tagColor: "bg-amber-100 text-amber-700 border-amber-200",
    accent: "#F59E0B",
    duration: "45 min sessions",
    popular: false,
  },
  {
    title: "Python Explorers",
    desc: "Build real apps and games with Python — from Hello World to full interactive projects.",
    grades: "Ages 8–14",
    tag: "Coding",
    icon: Code2,
    bg: "bg-primary-50",
    border: "border-primary-200",
    iconBg: "bg-primary",
    tagColor: "bg-primary-100 text-primary-dark border-primary-200",
    accent: "#7C3AED",
    duration: "60 min sessions",
    popular: true,
  },
  {
    title: "Robotics Makers Lab",
    desc: "Hands-on engineering challenges that solve real-world problems.",
    grades: "Ages 10–15",
    tag: "Robotics",
    icon: Cpu,
    bg: "bg-sky-50",
    border: "border-sky-200",
    iconBg: "bg-sky-500",
    tagColor: "bg-sky-100 text-sky-700 border-sky-200",
    accent: "#0EA5E9",
    duration: "90 min sessions",
    popular: false,
  },
  {
    title: "Art & Digital Design",
    desc: "Express creativity through drawing, illustration and digital media.",
    grades: "Ages 6–12",
    tag: "Arts",
    icon: Palette,
    bg: "bg-pink-50",
    border: "border-pink-200",
    iconBg: "bg-pink-500",
    tagColor: "bg-pink-100 text-pink-700 border-pink-200",
    accent: "#EC4899",
    duration: "45 min sessions",
    popular: false,
  },
  {
    title: "Science Lab",
    desc: "Explosive experiments and fascinating discoveries in biology, chemistry, and physics.",
    grades: "Ages 7–13",
    tag: "Science",
    icon: FlaskConical,
    bg: "bg-green-50",
    border: "border-green-200",
    iconBg: "bg-green",
    tagColor: "bg-green-100 text-green-700 border-green-200",
    accent: "#10B981",
    duration: "60 min sessions",
    popular: false,
  },
  {
    title: "Creative Writing",
    desc: "Storytelling, world-building, and finding your unique voice on the page.",
    grades: "Ages 7–14",
    tag: "Writing",
    icon: PenLine,
    bg: "bg-orange-50",
    border: "border-orange-200",
    iconBg: "bg-orange",
    tagColor: "bg-orange-100 text-orange-700 border-orange-200",
    accent: "#F97316",
    duration: "45 min sessions",
    popular: false,
  },
];

const categoryPills = [
  { label: "All", icon: Globe, active: true },
  { label: "Coding", icon: Code2, active: false },
  { label: "STEM", icon: FlaskConical, active: false },
  { label: "Arts", icon: Palette, active: false },
  { label: "Chess", icon: Brain, active: false },
  { label: "Music", icon: Music4, active: false },
  { label: "Math", icon: Calculator, active: false },
  { label: "Fitness", icon: Dumbbell, active: false },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function CoursesSection() {
  return (
    <section id="courses" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 pill px-4 py-2 bg-primary-50 border-primary-200 text-primary mb-4">
            <Brain className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">
              Course Catalog
            </span>
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-navy mb-4">
            Explore What{" "}
            <span className="text-primary">You Love</span>
          </h2>
          <p className="text-body text-lg leading-relaxed">
            200+ expert-led courses across subjects your child is passionate
            about. Live, interactive, and outcome-focused.
          </p>
        </motion.div>

        {/* Category Filter Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-2 justify-center mb-10"
        >
          {categoryPills.map((pill) => {
            const Icon = pill.icon;
            return (
              <button
                key={pill.label}
                className={`pill inline-flex items-center gap-1.5 px-4 py-2 text-sm font-bold transition-all duration-200 cursor-pointer ${
                  pill.active
                    ? "bg-primary text-white border-primary-dark"
                    : "bg-white text-body border-border hover:bg-primary-50 hover:text-primary hover:border-primary-200"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {pill.label}
              </button>
            );
          })}
        </motion.div>

        {/* Course Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {courses.map((course) => {
            const Icon = course.icon;
            return (
              <motion.div
                key={course.title}
                variants={cardVariants}
                whileHover={{ scale: 1 }}
                className={`card ${course.bg} ${course.border} p-6 flex flex-col gap-4 cursor-pointer group relative overflow-hidden`}
              >
                {/* Popular Badge */}
                {course.popular && (
                  <div className="absolute top-4 right-4 pill px-2.5 py-1 bg-yellow border-yellow-dark text-yellow-900 text-[10px] font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-2xl ${course.iconBg} flex items-center justify-center flex-shrink-0`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start gap-2 flex-wrap mb-2">
                    <span
                      className={`pill text-[11px] font-bold px-2.5 py-0.5 ${course.tagColor}`}
                    >
                      {course.tag}
                    </span>
                    <span className="text-[11px] font-semibold text-body bg-white px-2.5 py-0.5 rounded-full border border-border">
                      {course.grades}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-navy mb-2 group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-sm text-body leading-relaxed">{course.desc}</p>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-black/5">
                  <span className="text-xs font-semibold text-subtle">
                    {course.duration}
                  </span>
                  <button className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:gap-2 transition-all duration-200 cursor-pointer">
                    View Details
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <button className="btn inline-flex items-center gap-2 px-8 py-4 font-bold text-navy bg-white border-gray-200">
            View All 200+ Courses
            <ChevronRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
