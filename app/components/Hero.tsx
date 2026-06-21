"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Code2,
  Cpu,
  Palette,
  FlaskConical,
  Music4,
  ShieldCheck,
  Star,
  Play,
} from "lucide-react";

const courseCards = [
  {
    label: "Chess",
    sub: "Grades 1–5",
    icon: Brain,
    bg: "bg-amber-100",
    border: "border-amber-300",
    iconBg: "bg-amber-400",
    delay: 0,
    rotate: "-rotate-2",
  },
  {
    label: "Coding",
    sub: "Ages 8+",
    icon: Code2,
    bg: "bg-purple-100",
    border: "border-purple-300",
    iconBg: "bg-primary",
    delay: 0.1,
    rotate: "rotate-1",
  },
  {
    label: "Robotics",
    sub: "Ages 10+",
    icon: Cpu,
    bg: "bg-sky-100",
    border: "border-sky-300",
    iconBg: "bg-sky-500",
    delay: 0.2,
    rotate: "-rotate-1",
  },
  {
    label: "Art & Design",
    sub: "Ages 6+",
    icon: Palette,
    bg: "bg-pink-100",
    border: "border-pink-300",
    iconBg: "bg-pink-500",
    delay: 0.05,
    rotate: "rotate-2",
  },
  {
    label: "Science Lab",
    sub: "Ages 7+",
    icon: FlaskConical,
    bg: "bg-green-100",
    border: "border-green-300",
    iconBg: "bg-green-500",
    delay: 0.15,
    rotate: "-rotate-1",
  },
  {
    label: "Music",
    sub: "Ages 5+",
    icon: Music4,
    bg: "bg-orange-100",
    border: "border-orange-300",
    iconBg: "bg-orange-400",
    delay: 0.25,
    rotate: "rotate-1",
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-surface-2 pt-16">
      {/* Background Blobs — kept subtle so text stays readable */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-primary-100/40 blur-3xl animate-blob" />
        <div
          className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full bg-amber-100/45 blur-3xl animate-blob"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-sky-100/35 blur-3xl animate-blob"
          style={{ animationDelay: "5s" }}
        />

        {/* Decorative shapes */}
        <div className="absolute top-20 right-1/4 w-8 h-8 rounded-full bg-yellow border-2 border-yellow-dark opacity-70 animate-float" />
        <div
          className="absolute bottom-1/3 left-1/4 w-6 h-6 rounded-full bg-pink border-2 border-pink/60 opacity-60 animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/3 left-1/6 w-5 h-5 rotate-45 bg-green border-2 border-green opacity-50 animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          {/* Left: Text Content */}
          <div className="flex flex-col gap-6 lg:gap-8 text-center lg:text-left">
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-2"
            >
              <div className="pill inline-flex items-center gap-2 px-4 py-2 bg-green-light border-green/50 text-green-dark">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wide">
                  Parent-Approved · COPPA Safe
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight text-navy">
                Joyful{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-primary">Learning</span>
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-3 bg-yellow/60 rounded-full -z-0"
                    aria-hidden="true"
                  />
                </span>
                <br />
                Made{" "}
                <span className="text-orange">Safe.</span>
              </h1>
            </motion.div>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-body max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              200+ live online courses for curious kids ages 4–18. From
              chess to robotics, coding to creative arts — led by expert
              instructors in a safe, structured environment.
            </motion.p>

            {/* Star Rating */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center justify-center lg:justify-start gap-3"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow text-yellow-dark"
                  />
                ))}
              </div>
              <span className="text-sm font-semibold text-body">
                <strong className="text-navy">4.9/5</strong> from 2,400+ parent
                reviews
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <button className="btn inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold bg-primary text-white border-primary-dark">
                Get Started Free
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#courses"
                className="btn inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold bg-white text-navy border-border-strong"
              >
                <Play className="w-4 h-4 fill-primary text-primary" />
                Browse Classes
              </a>
            </motion.div>

            {/* Social Proof Numbers */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex items-center justify-center lg:justify-start gap-6 pt-2"
            >
              <div className="text-center lg:text-left">
                <p className="font-display font-extrabold text-2xl text-navy">10K+</p>
                <p className="text-xs text-body font-semibold">Students</p>
              </div>
              <div className="w-px h-10 bg-border" aria-hidden="true" />
              <div className="text-center lg:text-left">
                <p className="font-display font-extrabold text-2xl text-navy">200+</p>
                <p className="text-xs text-body font-semibold">Courses</p>
              </div>
              <div className="w-px h-10 bg-border" aria-hidden="true" />
              <div className="text-center lg:text-left">
                <p className="font-display font-extrabold text-2xl text-navy">50+</p>
                <p className="text-xs text-body font-semibold">Partner Schools</p>
              </div>
            </motion.div>
          </div>

          {/* Right: Course Cards Collage */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-xs sm:max-w-sm lg:max-w-[420px]">
              {courseCards.map((card) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.label}
                    initial={{ opacity: 0, scale: 0.8, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.4 + card.delay,
                      type: "spring",
                      stiffness: 200,
                      damping: 18,
                    }}
                    whileHover={{ scale: 1, rotate: 0 }}
                    className={`card ${card.rotate} ${card.bg} ${card.border} p-4 sm:p-5 flex flex-col items-center gap-2 text-center cursor-pointer`}
                  >
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl ${card.iconBg} flex items-center justify-center`}
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-display font-bold text-xs sm:text-sm text-navy leading-tight">
                        {card.label}
                      </p>
                      <p className="text-[10px] sm:text-xs text-body font-medium mt-0.5">
                        {card.sub}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -bottom-6 -left-4 sm:left-0 card bg-white border-primary-200 px-4 py-3 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-2xl bg-green-light flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-green" />
              </div>
              <div>
                <p className="font-bold text-sm text-navy leading-none">
                  Safe Environment
                </p>
                <p className="text-xs text-body font-medium mt-0.5">
                  Pre-K to Grade 8
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-xs font-semibold text-subtle">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 border-2 border-primary/30 rounded-full flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
