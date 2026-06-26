"use client";

import { motion } from "framer-motion";
import {
  Award,
  Bell,
  Eye,
  LayoutDashboard,
  Lock,
  ShieldCheck,
  TrendingUp,
  UserCheck,
} from "lucide-react";
import SectionImage from "./ui/SectionImage";

const safetyFeatures = [
  {
    icon: ShieldCheck,
    title: "Parent-Visible Progress",
    desc: "Parents can follow enrolled programs, lessons, and progress updates in one place.",
    color: "text-green",
    bg: "bg-green-light",
  },
  {
    icon: Lock,
    title: "Age-Appropriate Paths",
    desc: "Programs are designed for younger learners with guidance matched to each grade band.",
    color: "text-primary",
    bg: "bg-primary-100",
  },
  {
    icon: Eye,
    title: "Guided Classes",
    desc: "Live sessions are structured with adult guidance and activities built for K-8 students.",
    color: "text-sky",
    bg: "bg-sky-100",
  },
  {
    icon: UserCheck,
    title: "Clear Communication",
    desc: "Families receive class updates, messages, and a clear view of what comes next.",
    color: "text-orange",
    bg: "bg-orange-100",
  },
  {
    icon: Bell,
    title: "Organized Enrollment",
    desc: "Parents can manage children, program enrollment, and upcoming sessions from one dashboard.",
    color: "text-pink",
    bg: "bg-pink-100",
  },
  {
    icon: Award,
    title: "Structured Activities",
    desc: "Classes, practice, and progress tools are designed to make the experience easier to follow.",
    color: "text-yellow-dark",
    bg: "bg-amber-50",
  },
];

const dashboardFeatures = [
  "View enrolled classes and upcoming sessions",
  "Track lessons, quizzes, assignments, and certificates",
  "Manage children and program enrollment",
  "Receive class updates and messages",
  "See progress across multiple programs",
];

export default function SafetySection() {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Full-width visual banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl sm:rounded-[28px] overflow-hidden mb-10 sm:mb-14 aspect-[4/3] sm:aspect-[21/9] min-h-[220px] sm:min-h-[200px]"
        >
          <SectionImage
            src="/images/facility-bg.jpg"
            alt="Certified instructor guiding children in a safe, supervised learning environment"
            fill
            sizes="100vw"
            className="rounded-2xl sm:rounded-[28px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/60 to-navy/30" />
          <div className="absolute inset-0 flex flex-col justify-end sm:justify-center px-4 py-5 sm:px-10 lg:px-14 max-w-2xl">
            <div className="inline-flex items-center gap-2 pill px-3 sm:px-4 py-1.5 sm:py-2 bg-white/15 border-white/25 text-white mb-3 sm:mb-4 self-start">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">
                Built for K-8 Families
              </span>
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl lg:text-5xl text-white mb-2 sm:mb-3">
              Built for{" "}
              <span className="text-green-light">K-8 families.</span>
            </h2>
            <p className="text-on-dark-muted text-sm sm:text-lg leading-relaxed">
              Parents need enrichment that is organized, age-appropriate, and
              carefully managed.
            </p>
          </div>
        </motion.div>

        {/* Safety Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-10 sm:mb-16">
          {safetyFeatures.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="card-sm bg-white border-gray-200 p-5 flex items-start gap-4"
              >
                <div
                  className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0`}
                >
                  <Icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-navy mb-1">{item.title}</h3>
                  <p className="text-xs text-body leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Parent Dashboard Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5"
          >
            <div className="inline-flex items-center gap-2 pill px-4 py-2 bg-primary-50 border-primary-200 text-primary self-start">
              <LayoutDashboard className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">
                Parent Dashboard
              </span>
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-navy">
              See what your child is{" "}
              <span className="text-primary">working on.</span>
            </h2>
            <p className="text-body leading-relaxed">
              The parent dashboard helps families stay organized. Parents can view
              enrolled programs, upcoming classes, assignments, quiz activity,
              progress updates, certificates, and messages in one place.
            </p>
            <ul className="space-y-3">
              {dashboardFeatures.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-sm text-body font-medium leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <button className="btn self-stretch sm:self-start inline-flex items-center justify-center gap-2 px-6 py-3 font-bold bg-primary text-white border-primary-dark w-full sm:w-auto">
              <TrendingUp className="w-4 h-4" />
              Book a Trial Class
            </button>
          </motion.div>

          {/* Visual: student photo + dashboard overlay */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="relative card overflow-hidden aspect-[4/3] border-primary-200 mb-4">
              <SectionImage
                src="/images/The_Scholar.d92aa1ba7abc5bbd377244bd1ee7151c.webp"
                alt="Student engaged in a safe, supervised online learning session"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>

            <div className="card bg-white border-primary-200 p-4 sm:p-5 relative -mt-10 sm:-mt-16 mx-2 sm:mx-8">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green" />
                </div>
                <span className="text-xs font-bold text-navy ml-2">Parent Dashboard</span>
              </div>

              <div className="space-y-2.5">
                {["Alex — Chess Strategy Lab", "Maya — Coding Foundations"].map((child, i) => (
                  <div key={child} className="card-sm bg-surface border-primary-100 p-3">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-xs font-bold text-navy">{child}</span>
                      <span className="text-[10px] font-semibold text-green bg-green-light px-2 py-0.5 rounded-full">
                        {["78%", "65%"][i]} complete
                      </span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-primary-light"
                        style={{ width: ["78%", "65%"][i] }}
                      />
                    </div>
                  </div>
                ))}

                <div className="card-sm bg-yellow/10 border-yellow/40 p-3 flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-yellow flex items-center justify-center flex-shrink-0">
                    <Bell className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-navy">Next Class: Today 4:00 PM</p>
                    <p className="text-[10px] text-subtle">Chess Strategy Lab — Alex</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
