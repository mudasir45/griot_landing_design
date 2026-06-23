"use client";

import { motion } from "framer-motion";
import { Brain, ChevronRight, Plus } from "lucide-react";
import Link from "next/link";
import { courses } from "../data/courses";
import SectionImage from "./ui/SectionImage";

const overlapCourses = courses.slice(0, 4);

const seatsBySlug: Record<string, number> = {
  "chess-fundamentals": 18,
  "python-explorers": 12,
  "robotics-makers-lab": 10,
  "art-digital-design": 20,
};

interface OverlapCourseCardProps {
  slug: string;
  title: string;
  grades: string;
  image: string;
  imageAlt: string;
  border: string;
  highlighted?: boolean;
  index: number;
}

function OverlapCourseCard({
  slug,
  title,
  grades,
  image,
  imageAlt,
  border,
  highlighted = false,
  index,
}: OverlapCourseCardProps) {
  const seats = seatsBySlug[slug] ?? 15;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group"
    >
      {/* Desktop / tablet: horizontal overlap */}
      <div className="hidden sm:block relative h-[230px] md:h-[250px] lg:h-[270px]">
        <div className="absolute left-0 top-0 h-full w-[58%] md:w-[60%] rounded-[28px] overflow-hidden">
          <SectionImage
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 1024px) 34vw, 320px"
            className="rounded-[28px] transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 flex h-[70%] w-[58%] md:w-[56%] flex-col justify-between rounded-[28px] bg-white px-6 py-5 lg:px-7 lg:py-6 shadow-[0_8px_28px_rgba(30,27,75,0.08)] transition-shadow duration-300 group-hover:shadow-[0_12px_36px_rgba(109,40,217,0.1)] ${highlighted
            ? "border-2 border-primary ring-4 ring-primary/10"
            : `border ${border}`
            }`}
        >
          <div>
            <h3 className="font-display font-bold text-xl lg:text-2xl text-navy mb-3 group-hover:text-primary transition-colors leading-snug">
              {title}
            </h3>
            <p className="text-sm lg:text-base font-semibold text-primary mb-1">
              Available: {seats} Seats
            </p>
            <p className="text-sm lg:text-base font-semibold text-primary">
              Required: {grades}
            </p>
          </div>

          <div className="flex justify-end">
            <Link
              href={`/courses/${slug}`}
              aria-label={`View ${title}`}
              className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 ${highlighted
                ? "bg-primary text-white hover:bg-primary-dark"
                : "bg-white border-2 border-border text-body hover:border-primary hover:text-primary"
                }`}
            >
              <Plus className="w-5 h-5" strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile: image + overlapping card */}
      <div className="sm:hidden relative">
        <div className="relative h-[180px] rounded-[24px] overflow-hidden">
          <SectionImage
            src={image}
            alt={imageAlt}
            fill
            sizes="100vw"
            className="rounded-[24px]"
          />
        </div>
        <div
          className={`relative z-10 -mt-10 mx-3 rounded-[24px] bg-white px-5 py-5 shadow-[0_8px_28px_rgba(30,27,75,0.1)] ${highlighted ? "border-2 border-primary" : `border ${border}`
            }`}
        >
          <h3 className="font-display font-bold text-lg text-navy mb-2 leading-snug">
            {title}
          </h3>
          <p className="text-sm font-semibold text-primary">Available: {seats} Seats</p>
          <p className="text-sm font-semibold text-primary mb-3">Required: {grades}</p>
          <div className="flex justify-end">
            <Link
              href={`/courses/${slug}`}
              aria-label={`View ${title}`}
              className={`w-9 h-9 rounded-full flex items-center justify-center ${highlighted
                ? "bg-primary text-white"
                : "border-2 border-border text-body"
                }`}
            >
              <Plus className="w-4 h-4" strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function CoursesSectionOverlap() {
  return (
    <section id="courses-overlap" className="section-padding bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 pill px-4 py-2 bg-white border-primary-200 text-primary mb-4">
            <Brain className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">
              Alternative Layout
            </span>
          </div>
          <h2 className="font-display font-extrabold section-heading text-navy mb-3 sm:mb-4">
            Featured{" "}
            <span className="text-primary">Classes</span>
          </h2>
          <p className="text-body text-base sm:text-lg max-w-xl leading-relaxed mx-auto">
            Our program offers dedicated live courses — pick a class, check
            availability, and enroll in minutes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-x-14 lg:gap-y-14">
          {overlapCourses.map((course, index) => (
            <OverlapCourseCard
              key={course.slug}
              slug={course.slug}
              title={course.title}
              grades={course.grades}
              image={course.image}
              imageAlt={course.imageAlt}
              border={course.border}
              highlighted={index === 0}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12 sm:mt-16"
        >
          <Link
            href="/courses"
            className="btn inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 font-bold text-navy bg-white border-border w-full sm:w-auto"
          >
            View All 200+ Courses
            <ChevronRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
