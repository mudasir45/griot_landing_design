"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  CalendarRange,
  Check,
  Clock,
  MapPin,
  User,
  Users,
} from "lucide-react";
import type { Cohort } from "../../data/cohorts";
import {
  cohortStatusLabels,
  cohortStatusStyles,
} from "../../data/cohorts";

interface CourseCohortsSectionProps {
  cohorts: Cohort[];
  selectedId: string | null;
  onSelect: (cohort: Cohort) => void;
}

export default function CourseCohortsSection({
  cohorts,
  selectedId,
  onSelect,
}: CourseCohortsSectionProps) {
  if (cohorts.length === 0) return null;

  return (
    <div>
      <div className="mb-5">
        <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-navy mb-2">
          Available <span className="text-primary">Cohorts</span>
        </h2>
        <p className="text-sm text-body leading-relaxed">
          Choose a cohort that fits your family&apos;s schedule. Each cohort is a
          fixed group of students learning together with the same instructor.
        </p>
      </div>

      <div className="space-y-3">
        {cohorts.map((cohort, index) => {
          const isSelected = selectedId === cohort.id;
          const isFull = cohort.status === "full";
          const statusStyle = cohortStatusStyles[cohort.status];
          const seatsPercent =
            ((cohort.seatsTotal - cohort.seatsAvailable) / cohort.seatsTotal) * 100;

          return (
            <motion.button
              key={cohort.id}
              type="button"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              onClick={() => !isFull && onSelect(cohort)}
              disabled={isFull}
              className={`w-full text-left card p-4 sm:p-5 transition-all duration-200 cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 ${
                isSelected
                  ? "border-2 border-primary ring-4 ring-primary/10 bg-primary-50/30"
                  : "border-border bg-white hover:border-primary-200"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                <div className="flex items-start gap-3">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      isSelected
                        ? "border-primary bg-primary"
                        : "border-border bg-white"
                    }`}
                  >
                    {isSelected && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base sm:text-lg text-navy">
                      {cohort.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-body mt-0.5">
                      {cohort.startDate} – {cohort.endDate}
                    </p>
                  </div>
                </div>

                <span
                  className={`pill text-[11px] font-bold px-2.5 py-1 self-start sm:self-auto inline-flex items-center gap-1.5 ${statusStyle.badge}`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${statusStyle.dot}`} />
                  {cohortStatusLabels[cohort.status]}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 pl-8 sm:pl-8">
                <span className="inline-flex items-center gap-2 text-sm text-body">
                  <Calendar className="w-4 h-4 text-primary flex-shrink-0" />
                  {cohort.schedule} {cohort.timezone}
                </span>
                <span className="inline-flex items-center gap-2 text-sm text-body">
                  <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                  {cohort.sessionLength} · {cohort.sessionsTotal} sessions
                </span>
                <span className="inline-flex items-center gap-2 text-sm text-body">
                  <User className="w-4 h-4 text-primary flex-shrink-0" />
                  {cohort.instructorName}
                </span>
                <span className="inline-flex items-center gap-2 text-sm text-body">
                  <Users className="w-4 h-4 text-primary flex-shrink-0" />
                  {cohort.seatsAvailable} of {cohort.seatsTotal} seats left
                </span>
              </div>

              <div className="mt-4 pl-8">
                <div className="h-1.5 bg-surface rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${
                      seatsPercent >= 80
                        ? "bg-orange"
                        : seatsPercent >= 50
                          ? "bg-yellow"
                          : "bg-green"
                    }`}
                    style={{ width: `${seatsPercent}%` }}
                  />
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

interface CohortEnrollmentSidebarProps {
  cohort: Cohort | null;
}

export function CohortEnrollmentSidebar({
  cohort,
}: CohortEnrollmentSidebarProps) {
  if (!cohort) {
    return (
      <div className="sticky top-24 card bg-white border-border p-5 sm:p-6 text-center">
        <CalendarRange className="w-8 h-8 text-subtle mx-auto mb-3" />
        <p className="text-sm text-body">Select a cohort to see enrollment details.</p>
      </div>
    );
  }

  const isWaitlist = cohort.status === "waitlist";
  const isFull = cohort.status === "full";

  return (
    <div className="sticky top-24 card bg-white border-primary-200 p-5 sm:p-6 space-y-5">
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-primary mb-1">
          Selected Cohort
        </p>
        <p className="font-display font-bold text-lg text-navy leading-snug">
          {cohort.name}
        </p>
      </div>

      <div className="space-y-3 text-sm">
        <div className="flex items-start justify-between gap-3 py-2 border-b border-border">
          <span className="text-body font-medium inline-flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-primary" />
            Dates
          </span>
          <span className="font-bold text-navy text-right text-xs sm:text-sm">
            {cohort.startDate} – {cohort.endDate}
          </span>
        </div>
        <div className="flex items-center justify-between py-2 border-b border-border">
          <span className="text-body font-medium">Schedule</span>
          <span className="font-bold text-navy text-right text-xs sm:text-sm">
            {cohort.schedule}
          </span>
        </div>
        <div className="flex items-center justify-between py-2 border-b border-border">
          <span className="text-body font-medium">Sessions</span>
          <span className="font-bold text-navy">
            {cohort.sessionsTotal} × {cohort.sessionLength}
          </span>
        </div>
        <div className="flex items-center justify-between py-2 border-b border-border">
          <span className="text-body font-medium">Instructor</span>
          <span className="font-bold text-navy">{cohort.instructorName}</span>
        </div>
        <div className="flex items-center justify-between py-2 border-b border-border">
          <span className="text-body font-medium">Seats</span>
          <span className="font-bold text-navy">
            {cohort.seatsAvailable} remaining
          </span>
        </div>
        <div className="flex items-center justify-between py-2">
          <span className="text-body font-medium">Price</span>
          <span className="font-display font-extrabold text-xl text-navy">
            {cohort.price}
          </span>
        </div>
      </div>

      <button
        className={`btn w-full py-3.5 text-sm font-bold ${
          isFull
            ? "bg-surface text-subtle border-border cursor-not-allowed"
            : isWaitlist
              ? "bg-orange text-white border-orange"
              : "bg-primary text-white border-primary-dark"
        }`}
        disabled={isFull}
      >
        {isFull
          ? "Cohort Full"
          : isWaitlist
            ? "Join Waitlist"
            : "Enroll in This Cohort"}
      </button>

      <p className="text-xs text-subtle text-center leading-relaxed">
        {isWaitlist
          ? "We'll notify you if a seat opens up."
          : "First session free. No credit card required."}
      </p>

      <p className="text-[11px] text-subtle text-center flex items-center justify-center gap-1">
        <MapPin className="w-3 h-3" />
        All times in {cohort.timezone}
      </p>
    </div>
  );
}
