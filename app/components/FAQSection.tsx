"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";
import SectionImage from "./ui/SectionImage";

const faqs = [
  {
    q: "Is Griot Academy safe for younger children?",
    a: "Absolutely. All sessions are moderated by trained staff, and our platform is fully COPPA compliant. We never display ads, sell data, or allow unmoderated peer communication. Every instructor undergoes background checks before joining our team.",
  },
  {
    q: "How do school districts integrate the curriculum?",
    a: "Our dedicated district success team handles onboarding end-to-end — from LMS integration to faculty training. Most schools are fully live within 2–3 weeks. We align all content with state standards and provide an admin dashboard for tracking outcomes.",
  },
  {
    q: "What hardware is required for online sessions?",
    a: "Just a device with a camera, microphone, and a modern browser (Chrome, Safari, or Edge). No downloads or plugins needed. For Robotics Makers Lab, we provide optional hardware kits for in-person camps.",
  },
  {
    q: "How much does Griot Academy cost?",
    a: "We offer flexible plans — individual courses starting at $25/session, monthly memberships for families, and institutional pricing for schools and districts. First-time families get a free trial session for any course.",
  },
  {
    q: "Can parents monitor their child's progress?",
    a: "Yes! The parent dashboard provides real-time visibility into attendance, lesson completion, quiz scores, and instructor feedback. You'll also receive automated email summaries after each session.",
  },
  {
    q: "What age range does Griot Academy serve?",
    a: "We serve learners from Pre-K through Grade 8 (ages 4–14) for standard programs. Our advanced STEM and coding tracks extend to Grade 12 for high-achieving students.",
  },
];

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
    <motion.div
      className={`card bg-white overflow-hidden cursor-pointer transition-colors duration-200 ${
        isOpen ? "border-primary-300" : "border-border hover:border-primary-200"
      }`}
    >
      <button
        className="w-full flex items-start justify-between gap-3 sm:gap-4 p-4 sm:p-5 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span
          className={`font-bold text-sm sm:text-base leading-snug transition-colors ${
            isOpen ? "text-primary" : "text-navy"
          }`}
        >
          {q}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="flex-shrink-0 mt-0.5"
        >
          <ChevronDown
            className={`w-5 h-5 transition-colors ${
              isOpen ? "text-primary" : "text-subtle"
            }`}
          />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0 border-t border-gray-100">
              <p className="text-sm text-body leading-relaxed pt-3">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Full-width header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 pill px-4 py-2 bg-primary-50 border-primary-200 text-primary mb-4">
            <HelpCircle className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">
              Frequently Asked
            </span>
          </div>
          <h2 className="font-display font-extrabold section-heading text-navy mb-3 sm:mb-4">
            Got{" "}
            <span className="text-primary">Questions?</span>
          </h2>
          <p className="text-body text-base sm:text-lg leading-relaxed px-1">
            Everything parents and schools need to know before getting started.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-10 lg:gap-12 items-start">
          {/* Visual column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="relative card overflow-hidden aspect-[16/10] sm:aspect-[4/5] lg:aspect-[4/5] border-primary-200 mb-4">
              <SectionImage
                src="/images/The_Friend.85cbfd7e36821d7569bc2fbfb9894a2c.webp"
                alt="Students connecting in a safe, moderated online classroom"
                fill
                sizes="(max-width: 1024px) 100vw, 35vw"
              />
            </div>
            <div className="card bg-primary border-primary-dark p-4 sm:p-5">
              <p className="font-display font-bold text-base sm:text-lg text-white mb-1">
                Still have questions?
              </p>
              <p className="text-on-dark-muted text-sm mb-4">
                Our support team is here to help parents and schools get started.
              </p>
              <button className="btn w-full py-3 font-bold bg-white text-primary border-primary-light">
                <HelpCircle className="w-4 h-4 inline mr-2" />
                Contact Support
              </button>
            </div>
          </motion.div>

          {/* FAQ accordion */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-3"
            >
              {faqs.map((faq, i) => (
                <FAQItem
                  key={faq.q}
                  q={faq.q}
                  a={faq.a}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
