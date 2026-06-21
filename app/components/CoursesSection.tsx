"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Calculator,
  ChevronRight,
  Code2,
  Cpu,
  Dumbbell,
  FlaskConical,
  Globe,
  Music4,
  Palette,
  PenLine,
} from "lucide-react";
import SectionImage from "./ui/SectionImage";

const courses = [
  {
    title: "Chess Fundamentals",
    desc: "Strategy, critical thinking, and patience — through the timeless game.",
    grades: "Grades 1–5",
    tag: "Chess",
    icon: Brain,
    image: "/images/The_Scholar.d92aa1ba7abc5bbd377244bd1ee7151c.webp",
    imageAlt: "Focused student mastering chess strategy",
    bg: "bg-amber-50",
    border: "border-amber-200",
    iconBg: "bg-amber-400",
    tagColor: "bg-amber-100 text-amber-700 border-amber-200",
    duration: "45 min sessions",
    popular: false,
  },
  {
    title: "Python Explorers",
    desc: "Build real apps and games with Python — from Hello World to full interactive projects.",
    grades: "Ages 8–14",
    tag: "Coding",
    icon: Code2,
    image: "/images/The_Coder.4da186f687ce6f7459ecfac9704755dc.webp",
    imageAlt: "Young coder building Python projects on a laptop",
    bg: "bg-primary-50",
    border: "border-primary-200",
    iconBg: "bg-primary",
    tagColor: "bg-primary-100 text-primary-dark border-primary-200",
    duration: "60 min sessions",
    popular: true,
  },
  {
    title: "Robotics Makers Lab",
    desc: "Hands-on engineering challenges that solve real-world problems.",
    grades: "Ages 10–15",
    tag: "Robotics",
    icon: Cpu,
    image: "/images/The_Explorer.659eb58be482e98a1c1bf3bf26cd24ef.webp",
    imageAlt: "Curious explorer discovering robotics and engineering",
    bg: "bg-sky-50",
    border: "border-sky-200",
    iconBg: "bg-sky-500",
    tagColor: "bg-sky-100 text-sky-700 border-sky-200",
    duration: "90 min sessions",
    popular: false,
  },
  {
    title: "Art & Digital Design",
    desc: "Express creativity through drawing, illustration and digital media.",
    grades: "Ages 6–12",
    tag: "Arts",
    icon: Palette,
    image: "/images/The_Artist.1085a10836fc3a9c2389328070563306.webp",
    imageAlt: "Young artist painting a vibrant landscape",
    bg: "bg-pink-50",
    border: "border-pink-200",
    iconBg: "bg-pink-500",
    tagColor: "bg-pink-100 text-pink-700 border-pink-200",
    duration: "45 min sessions",
    popular: false,
  },
  {
    title: "Science Lab",
    desc: "Explosive experiments and fascinating discoveries in biology, chemistry, and physics.",
    grades: "Ages 7–13",
    tag: "Science",
    icon: FlaskConical,
    image: "/images/facility-bg.jpg",
    imageAlt: "Students conducting hands-on science experiments with an instructor",
    bg: "bg-green-50",
    border: "border-green-200",
    iconBg: "bg-green",
    tagColor: "bg-green-100 text-green-700 border-green-200",
    duration: "60 min sessions",
    popular: false,
  },
  {
    title: "Creative Writing",
    desc: "Storytelling, world-building, and finding your unique voice on the page.",
    grades: "Ages 7–14",
    tag: "Writing",
    icon: PenLine,
    image: "/images/about01.jpg",
    imageAlt: "Instructor reading a story with an engaged young learner",
    bg: "bg-orange-50",
    border: "border-orange-200",
    iconBg: "bg-orange",
    tagColor: "bg-orange-100 text-orange-700 border-orange-200",
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
  visible: { transition: { staggerChildren: 0.08 } },
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
        {/* Visual intro strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className=" text-center mb-10 sm:mb-14"
        >
          <div className="text-center">
            <div className="inline-flex items-center gap-2 pill px-4 py-2 bg-primary-50 border-primary-200 text-primary mb-4">
              <Brain className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">
                Course Catalog
              </span>
            </div>
            <h2 className="font-display font-extrabold section-heading text-navy mb-3 sm:mb-4">
              Explore What{" "}
              <span className="text-primary">You Love</span>
            </h2>
            <p className="text-body text-center text-base sm:text-lg max-w-xl leading-relaxed w-full mx-auto px-1">
              200+ expert-led courses across subjects your child is passionate
              about. Live, interactive, and outcome-focused.
            </p>
          </div>

          {/* <div className="relative hidden sm:block">
            <div className="grid grid-cols-3 gap-3">
              {[
                { src: "/images/The_Coder.4da186f687ce6f7459ecfac9704755dc.webp", alt: "Coding" },
                { src: "/images/The_Artist.1085a10836fc3a9c2389328070563306.webp", alt: "Art" },
                { src: "/images/The_Explorer.659eb58be482e98a1c1bf3bf26cd24ef.webp", alt: "Exploration" },
              ].map((img, i) => (
                <motion.div
                  key={img.alt}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative card overflow-hidden aspect-square ${i === 1 ? "-mt-4" : i === 2 ? "mt-2" : ""}`}
                >
                  <SectionImage
                    src={img.src}
                    alt={`${img.alt} learning path`}
                    fill
                    sizes="(max-width: 1024px) 30vw, 200px"
                  />
                </motion.div>
              ))}
            </div>
          </div> */}
        </motion.div>

        {/* Category Filter Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-2 mb-8 sm:mb-10 overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center scrollbar-hide"
        >
          {categoryPills.map((pill) => {
            const Icon = pill.icon;
            return (
              <button
                key={pill.label}
                className={`pill inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer flex-shrink-0 ${pill.active
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

        {/* Course Cards Grid — image-first */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          {courses.map((course) => {
            const Icon = course.icon;
            return (
              <motion.div
                key={course.title}
                variants={cardVariants}
                whileHover={{ scale: 1 }}
                className={`card ${course.bg} ${course.border} overflow-hidden flex flex-col cursor-pointer group relative`}
              >
                {/* Course Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <SectionImage
                    src={course.image}
                    alt={course.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="rounded-none transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                  {course.popular && (
                    <div className="absolute top-3 right-3 pill px-2.5 py-1 bg-yellow border-yellow-dark text-yellow-900 text-[10px] font-bold uppercase tracking-wider">
                      Most Popular
                    </div>
                  )}

                  <div
                    className={`absolute bottom-3 left-3 w-10 h-10 rounded-xl ${course.iconBg} flex items-center justify-center`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 flex flex-col gap-3 flex-1">
                  <div className="flex items-start gap-2 flex-wrap">
                    <span
                      className={`pill text-[11px] font-bold px-2.5 py-0.5 ${course.tagColor}`}
                    >
                      {course.tag}
                    </span>
                    <span className="text-[11px] font-semibold text-body bg-white px-2.5 py-0.5 rounded-full border border-border">
                      {course.grades}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-navy group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-sm text-body leading-relaxed flex-1">{course.desc}</p>

                  <div className="flex items-center justify-between pt-3 border-t border-black/5">
                    <span className="text-xs font-semibold text-subtle">
                      {course.duration}
                    </span>
                    <button className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:gap-2 transition-all duration-200 cursor-pointer">
                      View Details
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <button className="btn inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 font-bold text-navy bg-white border-gray-200 w-full sm:w-auto">
            View All 200+ Courses
            <ChevronRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
