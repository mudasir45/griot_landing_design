"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Star,
  Play,
} from "lucide-react";
import SectionImage from "./ui/SectionImage";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-surface-2 pt-16">
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-primary-100/40 blur-3xl animate-blob" />
        <div
          className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full bg-amber-100/45 blur-3xl animate-blob"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 items-center">
          {/* Left: Text Content */}
          <div className="flex flex-col gap-6 lg:gap-7 text-center lg:text-left order-2 lg:order-1">
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

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-body max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              200+ live online courses for curious kids ages 4–18 — led by
              expert instructors in a safe, structured environment.
            </motion.p>

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

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex items-center justify-center lg:justify-start gap-6 pt-2"
            >
              {[
                { value: "10K+", label: "Students" },
                { value: "200+", label: "Courses" },
                { value: "50+", label: "Partner Schools" },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-6">
                  {i > 0 && <div className="w-px h-10 bg-border hidden sm:block" aria-hidden="true" />}
                  <div className="text-center lg:text-left">
                    <p className="font-display font-extrabold text-2xl text-navy">{stat.value}</p>
                    <p className="text-xs text-body font-semibold">{stat.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Hero Image Collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Main hero photo */}
              <div className="relative card border-primary-200 overflow-hidden aspect-[4/3] sm:aspect-[5/4]">
                <SectionImage
                  src="/images/banner01.png"
                  alt="Two children collaborating and reading together in a bright classroom"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 50vw"
                  className="rounded-[20px]"
                />
              </div>

              {/* Floating persona: Coder */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -bottom-4 -right-2 sm:-right-6 w-[38%] max-w-[160px] sm:max-w-[180px] card border-sky-200 overflow-hidden aspect-square animate-float-gentle"
              >
                <SectionImage
                  src="/images/The_Coder.4da186f687ce6f7459ecfac9704755dc.webp"
                  alt="Young coder learning Python and game development"
                  fill
                  sizes="180px"
                  className="rounded-[20px]"
                />
              </motion.div>

              {/* Floating persona: Artist */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute -top-3 -left-2 sm:-left-6 w-[34%] max-w-[140px] sm:max-w-[160px] card border-pink-200 overflow-hidden aspect-square animate-float"
                style={{ animationDelay: "1s" }}
              >
                <SectionImage
                  src="/images/The_Artist.1085a10836fc3a9c2389328070563306.webp"
                  alt="Young artist painting a colorful landscape"
                  fill
                  sizes="160px"
                  className="rounded-[20px]"
                />
              </motion.div>

              {/* Safety badge */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.85 }}
                className="absolute bottom-8 -left-2 sm:-left-8 card bg-white border-primary-200 px-4 py-3 flex items-center gap-3 shadow-sm"
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
          </motion.div>
        </div>
      </div>

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
