"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import type { Course } from "../data/courses";
import { courseIcons } from "../data/courses";
import SectionImage from "./ui/SectionImage";

interface CourseCardProps {
  course: Course;
  index?: number;
}

export default function CourseCard({ course, index = 0 }: CourseCardProps) {
  const Icon = courseIcons[course.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
    >
      <Link
        href={`/courses/${course.slug}`}
        className={`card ${course.bg} ${course.border} overflow-hidden flex flex-col group relative block h-full`}
      >
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

        <div className="p-4 sm:p-5 flex flex-col gap-3 flex-1">
          <div className="flex items-start gap-2 flex-wrap">
            <span className={`pill text-[11px] font-bold px-2.5 py-0.5 ${course.tagColor}`}>
              {course.tag}
            </span>
            <span className="text-[11px] font-semibold text-body bg-white px-2.5 py-0.5 rounded-full border border-border">
              {course.grades}
            </span>
          </div>
          <h3 className="font-display font-bold text-lg sm:text-xl text-navy group-hover:text-accent transition-colors">
            {course.title}
          </h3>
          {/* <p className="text-sm text-body leading-relaxed flex-1">{course.desc}</p> */}

          <div className="flex items-center justify-between pt-3 border-t border-black/5">
            <span className="text-xs font-semibold text-subtle">{course.sessionLength}</span>
            <span className="inline-flex items-center gap-1 text-xs font-bold text-accent group-hover:gap-2 transition-all duration-200">
              View Details
              <ChevronRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
