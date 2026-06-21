"use client";

import { motion } from "framer-motion";
import { Users, Star, BookOpen } from "lucide-react";
import SectionImage from "./ui/SectionImage";

const instructors = [
  {
    name: "Dr. Sarah Chen",
    title: "Biochemistry & STEM",
    initials: "SC",
    bg: "bg-primary",
    courses: 12,
    rating: 4.9,
    students: 1240,
    tags: ["Science", "Biology", "Chemistry"],
  },
  {
    name: "Marcus Thorne",
    title: "Strategic Logic & Chess",
    initials: "MT",
    bg: "bg-amber-400",
    courses: 8,
    rating: 5.0,
    students: 980,
    tags: ["Chess", "Critical Thinking", "Math"],
  },
  {
    name: "Elena Vance",
    title: "Digital Media & Arts",
    initials: "EV",
    bg: "bg-pink-500",
    courses: 15,
    rating: 4.8,
    students: 1560,
    tags: ["Art", "Design", "Animation"],
  },
  {
    name: "David Ray",
    title: "Applied Robotics",
    initials: "DR",
    bg: "bg-sky-500",
    courses: 6,
    rating: 4.9,
    students: 720,
    tags: ["Robotics", "Engineering", "Coding"],
  },
];

export default function InstructorsSection() {
  return (
    <section className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Full-width header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 pill px-4 py-2 bg-primary-100 border-primary-200 text-primary mb-4">
            <Users className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">
              The Human Core
            </span>
          </div>
          <h2 className="font-display font-extrabold section-heading text-navy mb-3 sm:mb-4">
            World-Class{" "}
            <span className="text-primary">Educators</span>
          </h2>
          <p className="text-body text-base sm:text-lg leading-relaxed px-1">
            Industry leaders and credentialed educators who make learning feel
            like an adventure — not a chore.
          </p>
        </motion.div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mb-8 sm:mb-14"
        >
          <div className="relative card overflow-hidden aspect-[16/10] sm:aspect-[21/9]">
            <SectionImage
              src="/images/facility-bg.jpg"
              alt="World-class educators guiding small groups of engaged students"
              fill
              sizes="(max-width: 1024px) 100vw, 80vw"
            />
          </div>
          <div className="absolute -bottom-3 right-2 sm:-bottom-4 sm:right-4 hidden sm:block card overflow-hidden w-24 sm:w-36 aspect-square border-primary-200 animate-float-gentle">
            <SectionImage
              src="/images/about01.jpg"
              alt="One-on-one mentorship between instructor and student"
              fill
              sizes="144px"
            />
          </div>
        </motion.div>

        {/* Instructors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {instructors.map((instructor, i) => (
            <motion.div
              key={instructor.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1 }}
              className="card bg-white border-gray-200 p-5 sm:p-6 flex flex-col items-center text-center gap-3 cursor-pointer group"
            >
              <div
                className={`w-14 h-14 sm:w-16 sm:h-16 rounded-3xl ${instructor.bg} flex items-center justify-center`}
              >
                <span className="font-display font-extrabold text-lg sm:text-xl text-white">
                  {instructor.initials}
                </span>
              </div>

              <div>
                <h3 className="font-display font-bold text-sm sm:text-base text-navy group-hover:text-primary transition-colors">
                  {instructor.name}
                </h3>
                <p className="text-xs text-subtle mt-0.5">{instructor.title}</p>
              </div>

              <div className="w-full grid grid-cols-3 gap-1 py-3 border-y border-gray-100">
                <div className="text-center">
                  <p className="font-display font-bold text-xs sm:text-sm text-navy">{instructor.rating}</p>
                  <p className="text-[10px] text-subtle">Rating</p>
                </div>
                <div className="text-center border-x border-gray-100">
                  <p className="font-display font-bold text-xs sm:text-sm text-navy">{instructor.courses}</p>
                  <p className="text-[10px] text-subtle">Courses</p>
                </div>
                <div className="text-center">
                  <p className="font-display font-bold text-xs sm:text-sm text-navy">{instructor.students.toLocaleString()}</p>
                  <p className="text-[10px] text-subtle">Students</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1 justify-center">
                {instructor.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-semibold text-body bg-surface px-2 py-0.5 rounded-full border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-3 h-3 fill-yellow text-yellow-dark"
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-8 sm:mt-12"
        >
          {[
            { value: "10,000+", label: "Students Served", icon: Users, color: "text-primary", bg: "bg-primary-100" },
            { value: "50+", label: "Partner Schools", icon: BookOpen, color: "text-orange", bg: "bg-orange-100" },
            { value: "98%", label: "Satisfaction Rate", icon: Star, color: "text-yellow-dark", bg: "bg-amber-100" },
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="card bg-white border-gray-200 p-4 sm:p-5 flex flex-row sm:flex-col items-center gap-3 sm:gap-2 text-left sm:text-center"
              >
                <div className={`w-10 h-10 rounded-xl ${stat.bg} flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <div className="sm:text-center">
                  <p className="font-display font-extrabold text-xl sm:text-2xl text-navy">{stat.value}</p>
                  <p className="text-xs font-semibold text-subtle">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
