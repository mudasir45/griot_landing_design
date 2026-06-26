"use client";

import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Calendar, Clock, Star, Users } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import type { Cohort } from "../../data/cohorts";
import type { Course } from "../../data/courses";
import { courseIcons } from "../../data/courses";
import CourseCard from "../CourseCard";
import SectionImage from "../ui/SectionImage";
import CourseCohortsSection, {
  CohortEnrollmentSidebar,
} from "./CourseCohortsSection";

interface CourseDetailContentProps {
  course: Course;
  cohorts: Cohort[];
  relatedCourses: Course[];
  defaultCohort: Cohort | null;
}

export default function CourseDetailContent({
  course,
  cohorts,
  relatedCourses,
  defaultCohort,
}: CourseDetailContentProps) {
  const Icon = courseIcons[course.icon];

  const [selectedCohort, setSelectedCohort] = useState<Cohort | null>(
    defaultCohort
  );

  const bannerSrc = course.banner ?? course.image;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-12 sm:pb-16 overflow-hidden min-h-[420px] sm:min-h-[480px] lg:min-h-[520px] flex items-end">
        <div className="absolute inset-0" aria-hidden="true">
          <SectionImage
            src={bannerSrc}
            alt=""
            fill
            priority
            sizes="100vw"
            className="rounded-none object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/35 sm:to-navy/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/15 to-navy/40" />
        </div>

        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 translate-x-32 -translate-y-32 animate-blob" />
          <div
            className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-yellow/10 -translate-x-20 translate-y-20 animate-blob"
            style={{ animationDelay: "4s" }}
          />
        </div>

        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-2 sm:pb-4">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/75 hover:text-white transition-colors mb-6 sm:mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Course Catalog
          </Link>

          <div className="grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-start gap-2 flex-wrap mb-4 sm:mb-5">
                <span className="pill text-xs font-bold px-3 py-1 bg-white/10 border-white/20 text-white">
                  {course.tag}
                </span>
                {course.popular && (
                  <span className="pill text-xs font-bold px-3 py-1 bg-yellow/90 border-yellow text-yellow-900">
                    Most Popular
                  </span>
                )}
                <span className="pill text-xs font-semibold px-3 py-1 bg-white/10 border-white/20 text-white/90">
                  {course.grades}
                </span>
                {cohorts.length > 0 && (
                  <span className="pill text-xs font-bold px-3 py-1 bg-primary/30 border-primary-light/40 text-white">
                    {cohorts.length} cohort{cohorts.length !== 1 ? "s" : ""} available
                  </span>
                )}
              </div>

              <div className="flex items-start gap-4 mb-4">
                <div
                  className={`hidden sm:flex w-14 h-14 rounded-2xl ${course.iconBg} items-center justify-center flex-shrink-0 shadow-lg ring-2 ring-white/20`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] text-white leading-[1.1]">
                  {course.title}
                </h1>
              </div>

              <p className="text-on-dark-muted text-base sm:text-lg leading-relaxed mb-6 max-w-2xl">
                {course.longDesc}
              </p>

              <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold text-white/90">
                <span className="inline-flex items-center gap-2">
                  <Clock className="w-4 h-4 text-yellow" />
                  {course.sessionLength}
                </span>
                <span className="inline-flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-yellow" />
                  {course.duration}
                </span>
                {cohorts.length > 0 && (
                  <span className="inline-flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-yellow" />
                    Multiple start dates
                  </span>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="hidden lg:block flex-shrink-0"
            >
              <div className="relative w-72 xl:w-80 aspect-[4/3] rounded-2xl overflow-hidden border-2 border-white/25 shadow-2xl ring-1 ring-black/10">
                <SectionImage
                  src={course.image}
                  alt={course.imageAlt}
                  fill
                  sizes="320px"
                  className="rounded-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-white drop-shadow-sm">
                    {course.price}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-xl ${course.iconBg} flex items-center justify-center shadow-md`}
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2 space-y-10">
              {/* Cohorts */}
              {cohorts.length > 0 && (
                <CourseCohortsSection
                  cohorts={cohorts}
                  selectedId={selectedCohort?.id ?? null}
                  onSelect={setSelectedCohort}
                />
              )}

              {/* Outcomes */}
              <div>
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-navy mb-5">
                  What You&apos;ll <span className="text-primary">Learn</span>
                </h2>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {course.outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="flex items-start gap-3 card-sm bg-surface p-4 border-border"
                    >
                      <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-sm text-body leading-relaxed">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Curriculum */}
              <div>
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-navy mb-5">
                  Course <span className="text-primary">Curriculum</span>
                </h2>
                <div className="space-y-4">
                  {course.modules.map((module, index) => (
                    <div
                      key={module.title}
                      className="card bg-white border-border overflow-hidden"
                    >
                      <div className="p-4 sm:p-5 border-b border-border bg-surface">
                        <div className="flex items-center justify-between gap-3">
                          <h3 className="font-display font-bold text-lg text-navy">
                            Module {index + 1}: {module.title}
                          </h3>
                          <span className="text-xs font-bold text-subtle whitespace-nowrap">
                            {module.lessons} lessons
                          </span>
                        </div>
                      </div>
                      <ul className="p-4 sm:p-5 grid sm:grid-cols-2 gap-2">
                        {module.topics.map((topic) => (
                          <li
                            key={topic}
                            className="text-sm text-body flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Instructor */}
              <div>
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-navy mb-5">
                  Meet Your <span className="text-primary">Instructor</span>
                </h2>
                <div className="card bg-surface border-border p-5 sm:p-6">
                  <div className="flex flex-col sm:flex-row gap-5 items-start">
                    <div
                      className={`w-16 h-16 rounded-2xl ${course.instructor.bg} flex items-center justify-center flex-shrink-0`}
                    >
                      <span className="font-display font-bold text-xl text-white">
                        {course.instructor.initials}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-bold text-xl text-navy">
                        {course.instructor.name}
                      </h3>
                      <p className="text-sm font-semibold text-primary mb-3">
                        {course.instructor.title}
                      </p>
                      <p className="text-sm text-body leading-relaxed mb-4">
                        {course.instructor.bio}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm font-semibold text-body">
                        <span className="inline-flex items-center gap-1.5">
                          <Star className="w-4 h-4 fill-yellow text-yellow-dark" />
                          {course.instructor.rating} rating
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Users className="w-4 h-4 text-primary" />
                          {course.instructor.students.toLocaleString()} students
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar — cohort enrollment */}
            <div className="lg:col-span-1">
              <CohortEnrollmentSidebar cohort={selectedCohort} />
            </div>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      {relatedCourses.length > 0 && (
        <section className="section-padding bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-extrabold section-heading text-navy mb-8 sm:mb-10 text-center">
              Related <span className="text-primary">Courses</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {relatedCourses.map((related, index) => (
                <CourseCard key={related.slug} course={related} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
