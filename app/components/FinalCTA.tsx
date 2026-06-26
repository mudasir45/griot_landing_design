"use client";

import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Sparkles } from "lucide-react";
import SectionImage from "./ui/SectionImage";

export default function FinalCTA() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-primary-50 animate-blob" />
        <div
          className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-yellow/20 animate-blob"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile persona strip — above CTA */}
        <div className="grid grid-cols-2 gap-3 mb-8 lg:hidden max-w-sm mx-auto">
          <div className="relative card overflow-hidden aspect-square border-sky-200">
            <SectionImage
              src="/images/The_Coder.4da186f687ce6f7459ecfac9704755dc.webp"
              alt="Young coder ready to start"
              fill
              sizes="45vw"
            />
          </div>
          <div className="relative card overflow-hidden aspect-square border-green-200">
            <SectionImage
              src="/images/The_Scholar.d92aa1ba7abc5bbd377244bd1ee7151c.webp"
              alt="Engaged student learning"
              fill
              sizes="45vw"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden lg:block"
          >
            <div className="relative card overflow-hidden aspect-[3/4] border-sky-200 animate-float-gentle">
              <SectionImage
                src="/images/The_Coder.4da186f687ce6f7459ecfac9704755dc.webp"
                alt="Young coder ready to start their learning journey"
                fill
                sizes="300px"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-5 sm:gap-6 text-center"
          >
            <div className="card-sm w-14 h-14 sm:w-16 sm:h-16 bg-primary border-primary-dark flex items-center justify-center">
              <GraduationCap className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 pill px-4 py-2 bg-yellow/20 border-yellow/50 text-yellow-dark mb-4 sm:mb-5">
                <Sparkles className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Find the right starting point.
                </span>
              </div>
              <h2 className="font-display font-extrabold section-heading text-navy leading-tight">
                Find the right starting point{" "}
                <span className="text-primary">for your child.</span>
              </h2>
            </div>

            <p className="text-body text-base sm:text-lg lg:text-xl max-w-xl leading-relaxed px-1">
              Whether your child is ready for chess strategy, coding projects,
              robotics challenges, math reasoning, AI literacy, or general STEM
              enrichment, Griot Academy can help your family choose a practical
              next step.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto max-w-md sm:max-w-none">
              <button className="btn inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-4 sm:py-5 text-sm sm:text-base font-bold bg-primary text-white border-primary-dark w-full sm:w-auto">
                Book a Trial Class
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="btn inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 sm:py-5 text-sm sm:text-base font-bold bg-yellow text-navy border-yellow-dark w-full sm:w-auto">
                Join Founding Families
              </button>
            </div>

            <p className="text-xs sm:text-sm text-subtle">
              Try a class, join an early cohort, or compare programs first.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hidden lg:block"
          >
            <div className="relative card overflow-hidden aspect-[3/4] border-green-200 animate-float" style={{ animationDelay: "1.5s" }}>
              <SectionImage
                src="/images/The_Scholar.d92aa1ba7abc5bbd377244bd1ee7151c.webp"
                alt="Engaged student learning with Griot Academy"
                fill
                sizes="300px"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
