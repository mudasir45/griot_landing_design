"use client";

import { motion } from "framer-motion";
import { Brain, ChevronRight } from "lucide-react";
import Link from "next/link";
import type { Course } from "../data/courses";
import CourseCard from "./CourseCard";

interface CoursesSectionProps {
  courses: Course[];
}

export default function CoursesSection({ courses }: CoursesSectionProps) {
  const featuredCourses = courses.slice(0, 6);

  return (
    <section id="courses" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 pill px-4 py-2 bg-primary-50 border-primary-200 text-accent mb-4">
            <Brain className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">
              Program Areas
            </span>
          </div>
          <h2 className="font-display font-extrabold section-heading text-navy mb-3 sm:mb-4">
            Programs that build{" "}
            <span className="heading-accent">focus, problem-solving, and confidence.</span>
          </h2>
          <p className="text-body text-center text-base sm:text-lg max-w-xl leading-relaxed w-full mx-auto px-1">
            Start with one program, then add another as your child grows.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {featuredCourses.map((course, index) => (
            <CourseCard key={course.slug} course={course} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <Link
            href="/courses"
            className="btn inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 font-bold text-navy bg-white border-gray-200 w-full sm:w-auto"
          >
            View All Programs
            <ChevronRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
