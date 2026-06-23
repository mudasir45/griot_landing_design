"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronDown,
  Download,
  Quote,
  Star,
} from "lucide-react";
import {
  implementationSteps,
  institutionBenefits,
  institutionFeatures,
  partnershipOfferings,
  schoolFaqs,
  schoolStats,
  schoolTestimonials,
} from "../../data/schools";
import SectionImage from "../ui/SectionImage";

function FAQItem({
  q,
  a,
  isOpen,
  onToggle,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="card-sm bg-white border-border overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="font-display font-bold text-sm sm:text-base text-navy">
          {q}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="px-4 sm:px-5 pb-4 sm:pb-5 text-sm text-body leading-relaxed">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function SchoolsPageContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-10 sm:pb-14 overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <SectionImage
            src="/images/banner01.png"
            alt=""
            fill
            sizes="100vw"
            className="rounded-none"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy/92 via-primary-dark/88 to-primary/85" />
        </div>

        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-white/5 -translate-x-32 -translate-y-32 animate-blob" />
          <div
            className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-yellow/10 translate-x-20 translate-y-20 animate-blob"
            style={{ animationDelay: "4s" }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-5 sm:gap-6 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 pill px-4 py-2 bg-white/10 border-white/20 text-white self-center lg:self-start">
                <Building2 className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  For Schools & Districts
                </span>
              </div>

              <h1 className="font-display font-extrabold section-heading text-white leading-tight">
                Bring Griot to{" "}
                <span className="text-yellow">Your District</span>
              </h1>
              <p className="text-on-dark-muted text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                Scale high-quality enrichment across all your campuses with our
                plug-and-play institutional framework. Serving thousands of
                students has never been simpler.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="btn inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 font-bold bg-yellow text-navy border-yellow-dark w-full sm:w-auto"
                >
                  Inquire About Licensing
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button className="btn inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 font-bold bg-white/15 text-on-dark border-white/30 hover:bg-white/25 w-full sm:w-auto">
                  <Download className="w-4 h-4" />
                  Download Info Pack
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative card overflow-hidden aspect-[16/10] border-white/20 hidden sm:block"
            >
              <SectionImage
                src="/images/facility-bg.jpg"
                alt="Students and educators collaborating in a district learning program"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="rounded-[20px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 sm:py-16 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {schoolStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-sm font-semibold text-on-dark-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Offerings */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-10 sm:mb-14"
          >
            <h2 className="font-display font-extrabold section-heading text-navy mb-3 sm:mb-4">
              Built for{" "}
              <span className="text-primary">Institutions</span>
            </h2>
            <p className="text-body text-base sm:text-lg leading-relaxed">
              Whether you&apos;re a single school or an entire district, Griot
              Academy adapts to your scale, standards, and schedule.
            </p>
          </motion.div>

          <div className="space-y-10 sm:space-y-14">
            {partnershipOfferings.map((offering, i) => {
              const Icon = offering.icon;
              const imageFirst = i % 2 === 0;

              return (
                <motion.div
                  key={offering.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6 }}
                  className="grid lg:grid-cols-2 gap-6 sm:gap-10 items-center"
                >
                  <div className={imageFirst ? "order-1" : "order-1 lg:order-2"}>
                    <div className="relative card overflow-hidden aspect-[16/10] lg:aspect-[4/3]">
                      <SectionImage
                        src={offering.image}
                        alt={offering.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>

                  <div className={`flex flex-col gap-4 ${imageFirst ? "order-2" : "order-2 lg:order-1"}`}>
                    <div
                      className={`w-12 h-12 rounded-2xl ${offering.iconBg} flex items-center justify-center`}
                    >
                      <Icon className={`w-6 h-6 ${offering.color}`} />
                    </div>
                    <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-navy">
                      {offering.title}
                    </h3>
                    <p className="text-body leading-relaxed">{offering.desc}</p>
                    <ul className="space-y-2">
                      {offering.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-sm text-body"
                        >
                          <CheckCircle2 className="w-4 h-4 text-green flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Implementation Steps */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-10 sm:mb-14"
          >
            <div className="inline-flex items-center gap-2 pill px-4 py-2 bg-primary-50 border-primary-200 text-primary mb-4">
              <Building2 className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">
                How It Works
              </span>
            </div>
            <h2 className="font-display font-extrabold section-heading text-navy mb-3 sm:mb-4">
              From Inquiry to{" "}
              <span className="text-primary">Impact</span>
            </h2>
            <p className="text-body text-base sm:text-lg leading-relaxed">
              Our partnerships team guides you through every step — most schools
              are fully live within 2–3 weeks.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {implementationSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="card bg-white border-border p-5 flex flex-col gap-3 relative"
                >
                  <span className="absolute top-4 right-4 font-display font-extrabold text-2xl text-primary-100">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="w-11 h-11 rounded-2xl bg-primary-100 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-base text-navy mb-1">
                      {step.label}
                    </p>
                    <p className="text-sm text-body leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits + Institution Plan */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-navy mb-5">
                Why Institutions{" "}
                <span className="text-primary">Choose Griot</span>
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {institutionBenefits.map((benefit, i) => {
                  const Icon = benefit.icon;
                  return (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.07 }}
                      className={`card-sm ${benefit.bg} border-border p-4`}
                    >
                      <Icon className={`w-5 h-5 ${benefit.color} mb-2`} />
                      <h3 className="font-display font-bold text-sm text-navy mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-xs text-body leading-relaxed">
                        {benefit.desc}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card bg-primary-50 border-primary p-6 sm:p-8 sticky top-24"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
                Institution Plan
              </p>
              <p className="font-display font-extrabold text-4xl text-navy mb-1">
                Custom
              </p>
              <p className="text-sm font-semibold text-body mb-5">
                District & school pricing
              </p>
              <p className="text-sm text-body leading-relaxed mb-6">
                Scalable licensing for schools, districts, and after-school
                programs — tailored to your student volume and program scope.
              </p>
              <ul className="space-y-2.5 mb-6">
                {institutionFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-body"
                  >
                    <CheckCircle2 className="w-4 h-4 text-green flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="btn w-full py-3.5 font-bold bg-primary text-white border-primary-dark inline-flex items-center justify-center gap-2"
              >
                Contact Sales
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-10 sm:mb-12"
          >
            <h2 className="font-display font-extrabold section-heading text-navy mb-3 sm:mb-4">
              Trusted by{" "}
              <span className="text-primary">Educators</span>
            </h2>
            <p className="text-body text-base sm:text-lg leading-relaxed">
              Hear from school leaders and district administrators who partner
              with Griot Academy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {schoolTestimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card bg-white border-border p-5 sm:p-6 flex flex-col gap-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        className="w-4 h-4 fill-yellow text-yellow-dark"
                      />
                    ))}
                  </div>
                  <span className="pill text-[11px] font-bold px-2.5 py-0.5 bg-green-light text-green-700 border-green/40">
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
                <div className="flex items-center gap-3 pt-3 border-t border-border">
                  <div
                    className={`w-10 h-10 rounded-2xl ${t.bg} flex items-center justify-center flex-shrink-0`}
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
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-10"
          >
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-navy mb-3">
              Common Questions from{" "}
              <span className="text-primary">School Leaders</span>
            </h2>
          </motion.div>

          <div className="space-y-3">
            {schoolFaqs.map((faq, i) => (
              <FAQItem
                key={faq.q}
                q={faq.q}
                a={faq.a}
                isOpen={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-navy via-primary-dark to-primary relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 translate-x-32 -translate-y-32 animate-blob" />
        </div>

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-5 sm:gap-6"
          >
            <h2 className="font-display font-extrabold section-heading text-white">
              Ready to Bring Griot to{" "}
              <span className="text-yellow">Your Campus?</span>
            </h2>
            <p className="text-on-dark-muted text-base sm:text-lg leading-relaxed max-w-xl">
              Schedule a demo with our partnerships team and see how Griot
              Academy can transform enrichment at your school or district.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Link
                href="/contact"
                className="btn inline-flex items-center justify-center gap-2 px-8 py-4 font-bold bg-yellow text-navy border-yellow-dark w-full sm:w-auto"
              >
                Schedule a Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button className="btn inline-flex items-center justify-center gap-2 px-8 py-4 font-bold bg-white/15 text-on-dark border-white/30 w-full sm:w-auto">
                <Download className="w-4 h-4" />
                Download Info Pack
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
