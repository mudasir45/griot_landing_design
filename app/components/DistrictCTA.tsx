"use client";

import { motion } from "framer-motion";
import { Building2, TrendingUp, Users, BarChart3, ArrowRight } from "lucide-react";

const districtSteps = [
  { icon: Building2, label: "Submit Inquiry", desc: "Tell us your district's unique goals" },
  { icon: TrendingUp, label: "Customize", desc: "Tailor programs to your local curriculum" },
  { icon: Users, label: "Launch", desc: "Onboard students and faculty instantly" },
  { icon: BarChart3, label: "Track Outcomes", desc: "Measure impact with granular analytics" },
];

export default function DistrictCTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-navy via-primary-dark to-primary relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-white/5 -translate-x-32 -translate-y-32 animate-blob" />
        <div
          className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-yellow/10 translate-x-20 translate-y-20 animate-blob"
          style={{ animationDelay: "4s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary-light/5" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 pill px-4 py-2 bg-white/10 border-white/20 text-white self-start">
              <Building2 className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">
                For Schools & Districts
              </span>
            </div>

            <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white leading-tight">
              Bring Griot to{" "}
              <span className="text-yellow">Your District</span>
            </h2>
            <p className="text-on-dark-muted text-lg leading-relaxed">
              Scale high-quality enrichment across all your campuses with our
              plug-and-play institutional framework. Serving thousands of
              students has never been simpler.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button className="btn inline-flex items-center justify-center gap-2 px-8 py-4 font-bold bg-yellow text-navy border-yellow-dark">
                Inquire About Licensing
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="btn inline-flex items-center justify-center gap-2 px-6 py-4 font-bold bg-white/15 text-on-dark border-white/30 hover:bg-white/25">
                Download Info Pack
              </button>
            </div>
          </motion.div>

          {/* Right: Steps */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {districtSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                  className="card bg-white/10 border-white/20 p-5 flex flex-col gap-3"
                >
                  <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-white text-sm">{step.label}</p>
                    <p className="text-on-dark-muted text-xs mt-0.5 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
