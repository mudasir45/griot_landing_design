"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, GraduationCap } from "lucide-react";
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
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Left persona */}
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

          {/* Center CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-6 text-center"
          >
            <div className="card-sm w-16 h-16 bg-primary border-primary-dark flex items-center justify-center">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 pill px-4 py-2 bg-yellow/20 border-yellow/50 text-yellow-dark mb-5">
                <Sparkles className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Ready to Step into the Future?
                </span>
              </div>
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-navy leading-tight">
                Start Your{" "}
                <span className="text-primary">Learning Journey</span>
                <br />
                Today — It&apos;s Free
              </h2>
            </div>

            <p className="text-body text-lg sm:text-xl max-w-xl leading-relaxed">
              Join 10,000+ families who&apos;ve already discovered the joy of
              learning with Griot Academy. No credit card needed to try your
              first class.
            </p>

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

          {/* Right persona */}
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

        {/* Mobile persona strip */}
        <div className="grid grid-cols-2 gap-4 mt-10 lg:hidden max-w-sm mx-auto">
          <div className="relative card overflow-hidden aspect-square border-sky-200">
            <SectionImage
              src="/images/The_Coder.4da186f687ce6f7459ecfac9704755dc.webp"
              alt="Young coder ready to start"
              fill
              sizes="180px"
            />
          </div>
          <div className="relative card overflow-hidden aspect-square border-green-200">
            <SectionImage
              src="/images/The_Scholar.d92aa1ba7abc5bbd377244bd1ee7151c.webp"
              alt="Engaged student learning"
              fill
              sizes="180px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
