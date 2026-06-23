"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Calendar, Clock, Star, Users } from "lucide-react";
import type { Course } from "../../data/courses";
import { courseIcons } from "../../data/courses";
import SectionImage from "../ui/SectionImage";
import CourseCard from "../CourseCard";
import { getRelatedCourses } from "../../data/courses";

interface CourseDetailContentProps {
  course: Course;
}

export default function CourseDetailContent({ course }: CourseDetailContentProps) {
  const Icon = courseIcons[course.icon];
  const relatedCourses = getRelatedCourses(course);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-10 sm:pb-14 bg-gradient-to-br from-primary-50 via-white to-surface-2 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-primary-100/40 blur-3xl animate-blob" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-sm font-semibold text-body hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Course Catalog
          </Link>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-start gap-2 flex-wrap mb-4">
                <span className={`pill text-xs font-bold px-3 py-1 ${course.tagColor}`}>
                  {course.tag}
                </span>
                {course.popular && (
                  <span className="pill text-xs font-bold px-3 py-1 bg-yellow border-yellow-dark text-yellow-900">
                    Most Popular
                  </span>
                )}
                <span className="text-xs font-semibold text-body bg-white px-3 py-1 rounded-full border border-border">
                  {course.grades}
                </span>
              </div>

              <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy leading-tight mb-4">
                {course.title}
              </h1>
              <p className="text-body text-base sm:text-lg leading-relaxed mb-6">
                {course.longDesc}
              </p>

              <div className="flex flex-wrap gap-4 text-sm font-semibold text-body">
                <span className="inline-flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  {course.sessionLength}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  {course.schedule}
                </span>
                <span className="inline-flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-primary" />
                  {course.duration}
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative"
            >
              <div className={`card ${course.border} overflow-hidden aspect-[16/10]`}>
                <SectionImage
                  src={course.image}
                  alt={course.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="rounded-[20px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                <div
                  className={`absolute bottom-4 left-4 w-12 h-12 rounded-xl ${course.iconBg} flex items-center justify-center`}
                >
                  <Icon className="w-6 h-6 text-white" />
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

            {/* Sidebar CTA */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 card bg-white border-primary-200 p-5 sm:p-6 space-y-5">
                <div>
                  <p className="text-sm font-semibold text-body mb-1">Starting at</p>
                  <p className="font-display font-extrabold text-3xl text-navy">
                    {course.price}
                  </p>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between py-2 border-b border-border">
                    <span className="text-body font-medium">Duration</span>
                    <span className="font-bold text-navy">{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-border">
                    <span className="text-body font-medium">Sessions</span>
                    <span className="font-bold text-navy">{course.sessionLength}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-border">
                    <span className="text-body font-medium">Schedule</span>
                    <span className="font-bold text-navy text-right text-xs sm:text-sm">
                      {course.schedule}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-body font-medium">Age Group</span>
                    <span className="font-bold text-navy">{course.grades}</span>
                  </div>
                </div>

                <button className="btn w-full py-3.5 text-sm font-bold bg-primary text-white border-primary-dark">
                  Enroll Now — Free Trial
                </button>
                <p className="text-xs text-subtle text-center leading-relaxed">
                  First session free. No credit card required. Cancel anytime.
                </p>
              </div>
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
