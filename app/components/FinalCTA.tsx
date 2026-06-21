"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, GraduationCap } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-primary-50 animate-blob" />
        <div
          className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-yellow/20 animate-blob"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6"
        >
          {/* Icon */}
          <div className="card-sm w-16 h-16 bg-primary border-primary-dark flex items-center justify-center">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>

          {/* Headline */}
          <div>
            <div className="inline-flex items-center gap-2 pill px-4 py-2 bg-yellow/20 border-yellow/50 text-yellow-dark mb-5">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">
                Ready to Step into the Future?
              </span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-navy leading-tight">
              Start Your{" "}
              <span className="text-primary">Learning Journey</span>
              <br />
              Today — It's Free
            </h2>
          </div>

          <p className="text-body text-lg sm:text-xl max-w-2xl leading-relaxed">
            Join 10,000+ families who've already discovered the joy of
            learning with Griot Academy. No credit card needed to try your
            first class.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="btn inline-flex items-center justify-center gap-2 px-10 py-5 text-base font-bold bg-primary text-white border-primary-dark">
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="btn inline-flex items-center justify-center gap-2 px-8 py-5 text-base font-bold bg-yellow text-navy border-yellow-dark">
              Browse All Courses
            </button>
          </div>

          <p className="text-sm text-subtle">
            Free trial · No credit card required · Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}
