"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  Eye,
  UserCheck,
  Bell,
  Award,
  LayoutDashboard,
  TrendingUp,
} from "lucide-react";

const safetyFeatures = [
  {
    icon: ShieldCheck,
    title: "COPPA Compliant",
    desc: "Fully compliant with federal child online privacy protection laws.",
    color: "text-green",
    bg: "bg-green-light",
  },
  {
    icon: Lock,
    title: "End-to-End Encrypted",
    desc: "All sessions and data are secured with bank-grade encryption.",
    color: "text-primary",
    bg: "bg-primary-100",
  },
  {
    icon: Eye,
    title: "Monitored Classrooms",
    desc: "Every live session is actively moderated by trained staff.",
    color: "text-sky",
    bg: "bg-sky-100",
  },
  {
    icon: UserCheck,
    title: "Verified Instructors",
    desc: "All educators are background-checked and credentialed.",
    color: "text-orange",
    bg: "bg-orange-100",
  },
  {
    icon: Bell,
    title: "Parent Notifications",
    desc: "Real-time alerts for session attendance, progress milestones and activity.",
    color: "text-pink",
    bg: "bg-pink-100",
  },
  {
    icon: Award,
    title: "No Ads. Ever.",
    desc: "Zero advertising or data monetization. Your children's data stays private.",
    color: "text-yellow-dark",
    bg: "bg-amber-50",
  },
];

const dashboardFeatures = [
  "Live class schedule tracking across all children",
  "Progress reports and certificate archive",
  "Secure one-click payments via Stripe",
  "Attendance history and session recordings",
  "Personalized learning insights per child",
];

export default function SafetySection() {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Safety Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 pill px-4 py-2 bg-green-light border-green/40 text-green-700 mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">
              Designed for Joy. Built for Safety.
            </span>
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-navy mb-4">
            Safety Is Not{" "}
            <span className="text-green">Optional</span>
          </h2>
          <p className="text-body text-lg leading-relaxed">
            Every feature is built with your child's privacy, security, and
            wellbeing at the center. Parents deserve peace of mind.
          </p>
        </motion.div>

        {/* Safety Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
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
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Text */}
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
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-navy">
              Everything in{" "}
              <span className="text-primary">One Dashboard</span>
            </h2>
            <p className="text-body leading-relaxed">
              Monitor progress, manage schedules, and handle tuition for all
              your children with our intuitive parent interface — built for busy
              families.
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
            <button className="btn self-start inline-flex items-center gap-2 px-6 py-3 font-bold bg-primary text-white border-primary-dark">
              <TrendingUp className="w-4 h-4" />
              See the Dashboard
            </button>
          </motion.div>

          {/* Dashboard Preview Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card bg-white border-primary-200 p-6 relative overflow-hidden"
          >
            {/* Decorative top bar */}
            <div className="flex items-center gap-2 mb-5 pb-4 border-b border-gray-100">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow" />
                <div className="w-3 h-3 rounded-full bg-green" />
              </div>
              <div className="flex-1 h-5 bg-gray-100 rounded-full mx-4" />
            </div>

            {/* Dashboard widgets mockup */}
            <div className="space-y-3">
              {/* Child Progress bars */}
              {["Emma — Python Explorers", "Liam — Chess Level 2", "Zoe — Science Lab"].map((child, i) => (
                <div key={child} className="card-sm bg-surface border-primary-100 p-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-navy">{child}</span>
                    <span className="text-[10px] font-semibold text-green bg-green-light px-2 py-0.5 rounded-full">
                      {["78%", "65%", "91%"][i]} complete
                    </span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-primary-light"
                      style={{ width: ["78%", "65%", "91%"][i] }}
                    />
                  </div>
                </div>
              ))}

              {/* Upcoming class */}
              <div className="card-sm bg-yellow/10 border-yellow/40 p-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-yellow flex items-center justify-center flex-shrink-0">
                  <Bell className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-navy">Next Class: Today 4:00 PM</p>
                  <p className="text-[11px] text-subtle">Python Explorers — Emma</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
