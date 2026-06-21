"use client";

import { motion } from "framer-motion";
import {
  UserPlus,
  Users,
  BookOpen,
  CreditCard,
  Video,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Create Your Account",
    desc: "Sign up in under 2 minutes. Fast, secure setup for your whole family.",
    color: "bg-primary",
    lightBg: "bg-primary-50",
    border: "border-primary-200",
  },
  {
    number: "02",
    icon: Users,
    title: "Add Your Children",
    desc: "Create personalized learner profiles for each child with interests and skill level.",
    color: "bg-orange",
    lightBg: "bg-orange-50",
    border: "border-orange-200",
  },
  {
    number: "03",
    icon: BookOpen,
    title: "Browse Programs",
    desc: "Discover curated educational paths matched to your child's age and goals.",
    color: "bg-sky-500",
    lightBg: "bg-sky-50",
    border: "border-sky-200",
  },
  {
    number: "04",
    icon: CreditCard,
    title: "Enroll in Minutes",
    desc: "Simple one-click registration. Secure payments via Stripe — no surprises.",
    color: "bg-pink",
    lightBg: "bg-pink-50",
    border: "border-pink-200",
  },
  {
    number: "05",
    icon: Video,
    title: "Start Learning!",
    desc: "Join live sessions, track progress, and watch your child's curiosity soar.",
    color: "bg-green",
    lightBg: "bg-green-50",
    border: "border-green-200",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 pill px-4 py-2 bg-green-light border-green/50 text-green-dark mb-4">
            <UserPlus className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">
              Your Journey Starts Here
            </span>
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-navy mb-4">
            Up and Running in{" "}
            <span className="text-primary">5 Easy Steps</span>
          </h2>
          <p className="text-body text-lg leading-relaxed">
            From sign-up to your child's first live class — it's simpler than
            you think.
          </p>
        </motion.div>

        {/* Steps — horizontal scroll on mobile, grid on desktop */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div
            className="absolute top-14 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-pink to-green hidden lg:block"
            aria-hidden="true"
            style={{ marginInline: "calc(10% + 28px)" }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col items-center text-center gap-3"
                >
                  {/* Icon Circle */}
                  <div className="relative">
                    <div
                      className={`w-14 h-14 rounded-3xl ${step.color} flex items-center justify-center relative z-10 card-sm border-transparent`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center z-20">
                      <span className="text-[10px] font-bold text-navy">{step.number}</span>
                    </div>
                  </div>

                  {/* Text */}
                  <div className={`card-sm ${step.lightBg} ${step.border} p-4 w-full`}>
                    <h3 className="font-display font-bold text-base text-navy mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-xs text-body leading-relaxed">{step.desc}</p>
                  </div>

                  {/* Arrow (mobile only) */}
                  {i < steps.length - 1 && (
                    <ArrowRight
                      className="w-5 h-5 text-gray-300 rotate-90 sm:hidden"
                      aria-hidden="true"
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <button className="btn inline-flex items-center gap-2 px-8 py-4 font-bold bg-primary text-white border-primary-dark">
            Start Your Learning Journey
            <ArrowRight className="w-4 h-4" />
          </button>
          <p className="text-sm text-subtle mt-3">
            No credit card required · Free trial available
          </p>
        </motion.div>
      </div>
    </section>
  );
}
