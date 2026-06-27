"use client";

import { motion } from "framer-motion";
import { MessageSquare, Quote, Star } from "lucide-react";
import SectionImage from "./ui/SectionImage";

const testimonials = [
  {
    quote:
      "Chess Strategy Lab gave my son a clear way to slow down and explain his thinking. The class format felt organized, and I could see what he was working on.",
    name: "Linda Wu",
    role: "Parent",
    location: "New York, NY",
    initials: "LW",
    bg: "bg-primary",
    tagColor: "bg-primary-100 text-accent border-primary-200",
    tag: "Chess Parent",
    stars: 5,
  },
  {
    quote:
      "Griot made it easy to bring structured coding enrichment into our after-school program. The parent visibility helped us explain the value to families.",
    name: "Dr. James Sterling",
    role: "Principal",
    location: "Heights Academy",
    initials: "JS",
    bg: "bg-sky-500",
    tagColor: "bg-sky-100 text-sky-700 border-sky-200",
    tag: "School Partner",
    stars: 5,
  },
  {
    quote:
      "My daughter started in Coding Foundations and actually enjoyed explaining how her project worked. The guided format made the first step feel manageable.",
    name: "Maria Santos",
    role: "Parent",
    location: "Austin, TX",
    initials: "MS",
    bg: "bg-pink-500",
    tagColor: "bg-pink-100 text-pink-700 border-pink-200",
    tag: "Coding Parent",
    stars: 5,
  },
  {
    quote:
      "We piloted Griot robotics and math programs for a small group. The structure, communication, and progress visibility made the partnership straightforward.",
    name: "Superintendent Kim",
    role: "District Superintendent",
    location: "Oakland Unified",
    initials: "DK",
    bg: "bg-green",
    tagColor: "bg-green-light text-green-700 border-green/40",
    tag: "District Partner",
    stars: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Full-width header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 pill px-4 py-2 bg-yellow/20 border-yellow/50 text-yellow-dark mb-4">
            <MessageSquare className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">
              What Families Are Saying
            </span>
          </div>
          <h2 className="font-display font-extrabold section-heading text-navy mb-3 sm:mb-4">
            Trusted by{" "}
            <span className="heading-accent">K-8 families.</span>
          </h2>
          <p className="text-body text-base sm:text-lg leading-relaxed px-1">
            Families and school partners share how structured enrichment in
            chess, coding, robotics, math, and AI literacy fits their goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 lg:items-center">
          {/* Visual column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-3"
          >
            <div className="relative card overflow-hidden aspect-[4/3]">
              <SectionImage
                src="/images/testimonials/01.png"
                alt="Happy children learning together in a supportive classroom"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-top"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="relative card overflow-hidden aspect-[4/3] border-sky-200">
                <SectionImage
                  src="/images/testimonials/02.png"
                  alt="Parent-approved coding program"
                  fill
                  sizes="(max-width: 1024px) 45vw, 22vw"
                />
              </div>
              <div className="relative card overflow-hidden aspect-[4/3] border-pink-200">
                <SectionImage
                  src="/images/testimonials/03.png"
                  alt="Creative arts program loved by families"
                  fill
                  sizes="(max-width: 1024px) 45vw, 22vw"
                />
              </div>
            </div>
          </motion.div>

          {/* Testimonials grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1 }}
                className="card bg-white border-gray-200 p-5 flex flex-col gap-3 cursor-pointer h-full"
              >
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex gap-0.5">
                    {[...Array(t.stars)].map((_, j) => (
                      <Star
                        key={j}
                        className="w-4 h-4 fill-yellow text-yellow-dark"
                      />
                    ))}
                  </div>
                  <span
                    className={`pill text-[11px] font-bold px-2.5 py-0.5 ${t.tagColor}`}
                  >
                    {t.tag}
                  </span>
                </div>

                <div className="relative flex-1">
                  <Quote
                    className="absolute -top-1 -left-1 w-7 h-7 text-primary/10"
                    aria-hidden="true"
                  />
                  <p className="text-body leading-relaxed pl-4 text-sm">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-gray-100 mt-auto">
                  <div
                    className={`w-9 h-9 rounded-2xl ${t.bg} flex items-center justify-center flex-shrink-0`}
                  >
                    <span className="font-display font-bold text-xs text-white">
                      {t.initials}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-sm text-navy">{t.name}</p>
                    <p className="text-xs text-subtle">
                      {t.role} · {t.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
