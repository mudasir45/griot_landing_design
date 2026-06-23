"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  GraduationCap,
  Heart,
  Quote,
  Target,
} from "lucide-react";
import {
  approachPillars,
  coreValues,
  impactStats,
  milestones,
} from "../../data/about";
import SectionImage from "../ui/SectionImage";

export default function AboutPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-10 sm:pb-14 bg-gradient-to-br from-primary-50 via-white to-surface-2 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-primary-100/40 blur-3xl animate-blob" />
          <div
            className="absolute top-1/2 -right-40 w-[400px] h-[400px] rounded-full bg-pink-100/40 blur-3xl animate-blob"
            style={{ animationDelay: "3s" }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 pill px-4 py-2 bg-primary-50 border-primary-200 text-primary mb-4">
                <Heart className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  About Our Ethos
                </span>
              </div>
              <h1 className="font-display font-extrabold section-heading text-navy mb-3 sm:mb-4">
                Where Curiosity Meets{" "}
                <span className="text-primary">Purpose</span>
              </h1>
              <p className="text-body text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                Griot Academy is a premium digital learning environment built
                for kids ages 4–18 — where expert instruction, child safety,
                and genuine joy come together in every session.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative"
            >
              <div className="relative card overflow-hidden aspect-[4/3] border-primary-200">
                <SectionImage
                  src="/images/banner01.png"
                  alt="Children collaborating and learning together at Griot Academy"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-6 card bg-white border-green-200 px-4 py-3 flex items-center gap-3 animate-float-gentle">
                <div className="w-10 h-10 rounded-2xl bg-green-light flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-green" />
                </div>
                <div>
                  <p className="font-bold text-sm text-navy leading-none">Since 2019</p>
                  <p className="text-xs text-body mt-0.5">Empowering young minds</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
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
                  alt="Instructor reading with a young learner"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative card overflow-hidden aspect-[4/3] border-sky-200">
                  <SectionImage
                    src="/images/The_Coder.4da186f687ce6f7459ecfac9704755dc.webp"
                    alt="Young coder learning online"
                    fill
                    sizes="(max-width: 1024px) 45vw, 22vw"
                  />
                </div>
                <div className="relative card overflow-hidden aspect-[4/3] border-pink-200">
                  <SectionImage
                    src="/images/The_Artist.1085a10836fc3a9c2389328070563306.webp"
                    alt="Young artist expressing creativity"
                    fill
                    sizes="(max-width: 1024px) 45vw, 22vw"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-5"
            >
              <div className="inline-flex items-center gap-2 pill px-4 py-2 bg-orange-50 border-orange-200 text-orange self-start">
                <Target className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Our Story
                </span>
              </div>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-navy">
                Born from a Simple{" "}
                <span className="text-primary">Belief</span>
              </h2>
              <p className="text-body leading-relaxed">
                Griot Academy started when a group of educators and parents asked
                a question: why does online learning for kids so often feel
                impersonal, unsafe, or boring? We believed it could be different
                — live, interactive, and designed with the same care you&apos;d
                expect from the best in-person classroom.
              </p>
              <p className="text-body leading-relaxed">
                Named after the West African tradition of the griot — a storyteller
                who preserves knowledge and passes wisdom to the next generation
                — we set out to create a platform where every child&apos;s
                curiosity is honored, every session is safe, and every instructor
                is someone you&apos;d trust with your own kid.
              </p>
              <p className="text-body leading-relaxed">
                Today, we serve over 10,000 students through live online classes,
                in-person enrichment hubs, school programs, and district
                partnerships — but our mission hasn&apos;t changed: joyful
                learning, made safe.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 sm:py-16 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            {impactStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-sm font-semibold text-on-dark-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-10 sm:mb-14"
          >
            <div className="inline-flex items-center gap-2 pill px-4 py-2 bg-primary-100 border-primary-200 text-primary mb-4">
              <Heart className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">
                What We Stand For
              </span>
            </div>
            <h2 className="font-display font-extrabold section-heading text-navy mb-3 sm:mb-4">
              Our Core{" "}
              <span className="text-primary">Values</span>
            </h2>
            <p className="text-body text-base sm:text-lg leading-relaxed">
              These principles guide every course we design, every instructor we
              hire, and every decision we make.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {coreValues.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className={`card ${value.bg} ${value.border} p-5 sm:p-6 flex flex-col gap-4`}
                >
                  <div
                    className={`w-11 h-11 rounded-2xl bg-white flex items-center justify-center`}
                  >
                    <Icon className={`w-5 h-5 ${value.color}`} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-navy mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-body leading-relaxed">{value.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-5"
            >
              <div className="inline-flex items-center gap-2 pill px-4 py-2 bg-green-light border-green/50 text-green-dark self-start">
                <Target className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Our Approach
                </span>
              </div>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-navy">
                How We{" "}
                <span className="text-primary">Deliver</span>
              </h2>
              <p className="text-body leading-relaxed">
                Griot Academy isn&apos;t a content library — it&apos;s a living
                learning ecosystem. Every format we offer shares the same
                commitment to live instruction, child safety, and measurable
                outcomes.
              </p>

              <div className="space-y-4">
                {approachPillars.map((pillar, i) => (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="card-sm bg-surface border-border p-4 sm:p-5"
                  >
                    <h3 className="font-display font-bold text-base text-navy mb-1.5">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-body leading-relaxed">{pillar.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="relative rounded-2xl sm:rounded-[28px] overflow-hidden aspect-[4/3] sm:aspect-[3/4]">
                <SectionImage
                  src="/images/facility-bg.jpg"
                  alt="Certified instructor guiding children in a safe learning environment"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="rounded-2xl sm:rounded-[28px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/20 to-transparent" />
              </div>

              <div className="card bg-white border-primary-200 p-5 sm:p-6 relative -mt-10 sm:-mt-16 mx-2 sm:mx-8">
                <Quote className="w-8 h-8 text-primary/30 mb-3" />
                <p className="text-sm sm:text-base text-body leading-relaxed italic mb-4">
                  &ldquo;We didn&apos;t set out to build another ed-tech platform.
                  We set out to build the learning environment we wished existed
                  for our own children.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center">
                    <span className="font-display font-bold text-sm text-white">GA</span>
                  </div>
                  <div>
                    <p className="font-bold text-sm text-navy">Griot Academy Founders</p>
                    <p className="text-xs text-subtle">Est. 2019</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-gradient-to-b from-surface to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-10 sm:mb-14"
          >
            <div className="inline-flex items-center gap-2 pill px-4 py-2 bg-amber-50 border-amber-200 text-amber-700 mb-4">
              <GraduationCap className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">
                Our Journey
              </span>
            </div>
            <h2 className="font-display font-extrabold section-heading text-navy mb-3 sm:mb-4">
              Milestones Along{" "}
              <span className="text-primary">the Way</span>
            </h2>
            <p className="text-body text-base sm:text-lg leading-relaxed">
              From a single coding class to a platform trusted by thousands of
              families and dozens of schools.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {milestones.map((milestone, i) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-4 sm:gap-6 items-start"
              >
                <div className="flex-shrink-0 w-16 sm:w-20 text-right">
                  <span className="font-display font-extrabold text-lg sm:text-xl text-primary">
                    {milestone.year}
                  </span>
                </div>
                <div className="relative flex-shrink-0 flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-primary border-2 border-primary-200" />
                  {i < milestones.length - 1 && (
                    <div className="w-0.5 flex-1 bg-primary-200 min-h-[40px] mt-1" />
                  )}
                </div>
                <div className="card-sm bg-white border-border p-4 sm:p-5 flex-1 pb-5 sm:pb-6">
                  <h3 className="font-display font-bold text-base sm:text-lg text-navy mb-1.5">
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-body leading-relaxed">{milestone.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-primary-50 animate-blob" />
          <div
            className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-yellow/20 animate-blob"
            style={{ animationDelay: "3s" }}
          />
        </div>

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-5 sm:gap-6"
          >
            <div className="card-sm w-14 h-14 sm:w-16 sm:h-16 bg-primary border-primary-dark flex items-center justify-center">
              <GraduationCap className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
            </div>
            <h2 className="font-display font-extrabold section-heading text-navy">
              Ready to Join the{" "}
              <span className="text-primary">Griot Family?</span>
            </h2>
            <p className="text-body text-base sm:text-lg leading-relaxed max-w-xl">
              Explore our course catalog or start a free trial — your
              child&apos;s learning journey begins with a single click.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Link
                href="/courses"
                className="btn inline-flex items-center justify-center gap-2 px-8 py-4 font-bold bg-primary text-white border-primary-dark w-full sm:w-auto"
              >
                Browse Courses
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button className="btn inline-flex items-center justify-center gap-2 px-8 py-4 font-bold bg-white text-navy border-border-strong w-full sm:w-auto">
                Get Started Free
              </button>
            </div>
            <p className="text-xs sm:text-sm text-subtle">
              Free trial · No credit card required · Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
