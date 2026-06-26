"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import SectionImage from "./ui/SectionImage";

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] lg:min-h-screen flex items-center overflow-hidden bg-surface-2 pt-16">
      {/* Background image — kids sit on the right, content fills the empty space on the left */}
      <div className="absolute inset-0" aria-hidden="true">
        <SectionImage
          src="/images/banner01.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="rounded-none! object-cover object-[78%_center] sm:object-[85%_center] lg:object-right"
        />
        {/* Legibility overlay over the empty space */}
        {/* <div className="absolute inset-0 bg-linear-to-r from-white via-white/90 to-white/10 sm:via-white/75 sm:to-transparent lg:from-white/95 lg:via-white/65" /> */}
        <div className="absolute inset-0 bg-linear-to-t from-white/70 via-transparent to-transparent sm:from-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-0 w-full">
        <div className="max-w-xl lg:max-w-2xl">
          {/* Text Content */}
          <div className="flex flex-col gap-5 sm:gap-6 lg:gap-7 text-center lg:text-left">
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

            {/* <motion.div
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
            </motion.div> */}

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
              {/* <a
                href="/courses"
                className="btn inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold bg-white text-navy border-border-strong w-full sm:w-auto"
              >
                <Play className="w-4 h-4 fill-primary text-primary" />
                Join Founding Families
              </a> */}
            </motion.div>

            {/* <motion.div
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
            </motion.div> */}
          </div>
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
