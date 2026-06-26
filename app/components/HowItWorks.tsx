"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  CreditCard,
  UserPlus,
  Users,
  Video,
} from "lucide-react";
import SectionImage from "./ui/SectionImage";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Tell us about your child",
    desc: "Share your child's grade, interests, and preferred schedule.",
    color: "bg-primary",
    lightBg: "bg-primary-50",
    border: "border-primary-200",
  },
  {
    number: "02",
    icon: Users,
    title: "Choose a program or trial",
    desc: "Start with chess, coding, robotics, math, AI literacy, or a general STEM trial.",
    color: "bg-orange",
    lightBg: "bg-orange-50",
    border: "border-orange-200",
  },
  {
    number: "03",
    icon: BookOpen,
    title: "Join a guided class",
    desc: "Students learn with structure, adult guidance, and room to ask questions.",
    color: "bg-sky-500",
    lightBg: "bg-sky-50",
    border: "border-sky-200",
  },
  {
    number: "04",
    icon: CreditCard,
    title: "Track progress",
    desc: "Parents can see what their child is learning, what is coming next, and where support may help.",
    color: "bg-pink",
    lightBg: "bg-pink-50",
    border: "border-pink-200",
  },
  {
    number: "05",
    icon: Video,
    title: "Continue with the right path",
    desc: "Families can enroll in a cohort, add another program, or use guided practice between sessions.",
    color: "bg-green",
    lightBg: "bg-green-50",
    border: "border-green-200",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Full-width header — keeps both columns aligned below */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 pill px-4 py-2 bg-green-light border-green/50 text-green-dark mb-4">
            <UserPlus className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">
              From Interest to Class
            </span>
          </div>
          <h2 className="font-display font-extrabold section-heading text-navy mb-3 sm:mb-4">
            A simple path from{" "}
            <span className="text-primary">interest to class.</span>
          </h2>
          <p className="text-body text-base sm:text-lg leading-relaxed px-1">
            Parents should know what happens before they click.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 lg:items-center">
          {/* Left: Visual column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-3"
          >
            <div className="relative card overflow-hidden aspect-[4/3]">
              <SectionImage
                src="/images/about01.jpg"
                alt="Instructor reading with a young learner — the start of a learning journey"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="relative card overflow-hidden aspect-[4/3] border-primary-200">
                <SectionImage
                  src="/images/The_Scholar.d92aa1ba7abc5bbd377244bd1ee7151c.webp"
                  alt="Student learning online with laptop and earbuds"
                  fill
                  sizes="(max-width: 1024px) 45vw, 22vw"
                />
              </div>
              <div className="relative card overflow-hidden aspect-[4/3] border-sky-200">
                <SectionImage
                  src="/images/The_Traveler.883c94f365d9a10a4f93c224c51ef0a7.webp"
                  alt="Student exploring languages and global cultures"
                  fill
                  sizes="(max-width: 1024px) 45vw, 22vw"
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Steps timeline */}
          <div className="flex flex-col gap-3">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex gap-4 items-start my-1"
                >
                  <div className="relative flex-shrink-0">
                    <div
                      className={`w-11 h-11 rounded-2xl ${step.color} flex items-center justify-center`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center">
                      <span className="text-[9px] font-bold text-navy">{step.number}</span>
                    </div>
                  </div>

                  <div className={`card-sm ${step.lightBg} ${step.border} p-3.5 flex-1`}>
                    <h3 className="font-display font-bold text-sm sm:text-base text-navy mb-0.5">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-body leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="pt-2"
            >
              <button className="btn inline-flex items-center gap-2 px-8 py-4 font-bold bg-primary text-white border-primary-dark w-full sm:w-auto justify-center">
                Book a Trial Class
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-sm text-subtle mt-3 text-center sm:text-left">
                Tell us your child&apos;s grade and interests to get started
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
