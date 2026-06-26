"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  ShieldCheck,
  Star,
} from "lucide-react";
import SectionImage from "./ui/SectionImage";

export default function Hero() {
  return (
    <section className="relative min-h-0 lg:min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-surface-2 pt-16">
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-primary-100/40 blur-3xl animate-blob" />
        <div
          className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full bg-amber-100/45 blur-3xl animate-blob"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-0 w-full">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-10 items-center">
          {/* Text Content */}
          <div className="flex flex-col gap-5 sm:gap-6 lg:gap-7 text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-2"
            >
              <div className="pill inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-green-light border-green/50 text-green-dark max-w-full">
                <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wide">
                  K-8 Enrichment · Structured Programs
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] text-navy">
                K-8{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-primary">enrichment</span>
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-2 sm:h-3 bg-yellow/60 rounded-full -z-0"
                    aria-hidden="true"
                  />
                </span>
                <br />
                in chess, coding, robotics, math, and{" "}
                <span className="text-orange">AI literacy.</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-body max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              Live classes and guided practice that help students build focus,
              problem-solving, confidence, and technology skills.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 sm:gap-3"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow text-yellow-dark"
                  />
                ))}
              </div>
              <span className="text-xs sm:text-sm font-semibold text-body text-center lg:text-left">
                <strong className="text-navy">4.9/5</strong> from 2,400+ parent reviews
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start w-full sm:w-auto"
            >
              <button className="btn inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold bg-primary text-white border-primary-dark w-full sm:w-auto">
                Book a Trial Class
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="/courses"
                className="btn inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold bg-white text-navy border-border-strong w-full sm:w-auto"
              >
                <Play className="w-4 h-4 fill-primary text-primary" />
                Join Founding Families
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="grid grid-cols-3 gap-2 sm:flex sm:items-center sm:justify-center lg:justify-start sm:gap-6 pt-2"
            >
              {[
                { value: "5", label: "Programs" },
                { value: "K–8", label: "Grades" },
                { value: "Trial", label: "First Enrollment" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <p className="font-display font-extrabold text-xl sm:text-2xl text-navy">{stat.value}</p>
                  <p className="text-[10px] sm:text-xs text-body font-semibold">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Hero Image Collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative order-1 lg:order-2 w-full"
          >
            <div className="relative mx-auto max-w-md sm:max-w-lg lg:max-w-none">
              <div className="relative card border-primary-200 overflow-hidden aspect-[4/3]">
                <SectionImage
                  src="/images/banner01.png"
                  alt="Two children collaborating and reading together in a bright classroom"
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 50vw"
                  className="rounded-[20px]"
                />
              </div>

              {/* Floating personas — tablet+ only */}
              {/* <motion.div
                initial={{ opacity: 0, x: 20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -bottom-3 -right-1 sm:-bottom-4 sm:-right-6 hidden sm:block w-[32%] max-w-[140px] sm:max-w-[180px] card border-sky-200 overflow-hidden aspect-square animate-float-gentle"
              >
                <SectionImage
                  src="/images/The_Coder.4da186f687ce6f7459ecfac9704755dc.webp"
                  alt="Young coder learning Python and game development"
                  fill
                  sizes="180px"
                  className="rounded-[20px]"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute -top-2 -left-1 sm:-top-3 sm:-left-6 hidden sm:block w-[30%] max-w-[120px] sm:max-w-[160px] card border-pink-200 overflow-hidden aspect-square animate-float"
                style={{ animationDelay: "1s" }}
              >
                <SectionImage
                  src="/images/The_Artist.1085a10836fc3a9c2389328070563306.webp"
                  alt="Young artist painting a colorful landscape"
                  fill
                  sizes="160px"
                  className="rounded-[20px]"
                />
              </motion.div> */}

              {/* Safety badge — desktop overlay */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.85 }}
                className="absolute bottom-6 -left-1 sm:bottom-8 sm:-left-8 hidden sm:flex card bg-white border-primary-200 px-3 sm:px-4 py-2.5 sm:py-3 items-center gap-3"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-green-light flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-green" />
                </div>
                <div>
                  <p className="font-bold text-xs sm:text-sm text-navy leading-none">
                    Structured Programs
                  </p>
                  <p className="text-[10px] sm:text-xs text-body font-medium mt-0.5">
                    Grades K–8
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Mobile: persona strip + safety badge below image */}
            <div className="sm:hidden mt-3 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div className="relative card overflow-hidden aspect-[4/3] border-sky-200">
                  <SectionImage
                    src="/images/Gemini_Generated_Image_18pfk18pfk18pfk1 (1).png"
                    alt="Young coder learning Python"
                    fill
                    sizes="45vw"
                  />
                </div>
                <div className="relative card overflow-hidden aspect-[4/3] border-pink-200">
                  <SectionImage
                    src="/images/The_Artist.1085a10836fc3a9c2389328070563306.webp"
                    alt="Young artist painting"
                    fill
                    sizes="45vw"
                  />
                </div>
              </div>
              <div className="card bg-white border-primary-200 px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-green-light flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-5 h-5 text-green" />
                </div>
                <div>
                  <p className="font-bold text-sm text-navy leading-none">Structured Programs</p>
                  <p className="text-xs text-body font-medium mt-0.5">Grades K–8</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2"
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
