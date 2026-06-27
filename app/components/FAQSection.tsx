"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import SectionImage from "./ui/SectionImage";

const faqs = [
  {
    q: "Which program should my child start with?",
    a: "Start with the skill your child needs to practice most: focus, technology creation, hands-on building, math confidence, or responsible AI use. If you are not sure, book a trial class and share your child's grade and interests.",
  },
  {
    q: "Are all programs open for every grade band?",
    a: "Availability may vary by grade band, cohort schedule, and program status. Use the public status labels on each program card for the next action.",
  },
  {
    q: "Can my child take more than one program?",
    a: "Yes. Students can begin with one program and add another as their interests and schedule allow.",
  },
  {
    q: "Will parents be able to see progress?",
    a: "Griot is designed to give parents visibility into enrolled programs, lessons, assignments, quizzes, certificates, and messages.",
  },
  {
    q: "How do I book a trial class?",
    a: "Choose an interest area and tell us your child's grade. Griot can recommend a trial option and share what to expect before the session.",
  },
  {
    q: "What age range does Griot Academy serve?",
    a: "Griot Academy serves K-8 students with structured enrichment in chess, coding, robotics, math, and AI literacy.",
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
      className={`card bg-white overflow-hidden cursor-pointer transition-colors duration-200 ${isOpen ? "border-primary-300" : "border-border hover:border-primary-200"
        }`}
    >
      <button
        className="w-full flex items-start justify-between gap-3 sm:gap-4 p-4 sm:p-5 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span
          className={`font-bold text-sm sm:text-base leading-snug transition-colors ${isOpen ? "text-primary" : "text-navy"
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
            className={`w-5 h-5 transition-colors ${isOpen ? "text-primary" : "text-subtle"
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
            Questions parents ask{" "}
            <span className="text-primary">before getting started.</span>
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
                src="/images/faqs/01.png"
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
              <Link
                href="/contact"
                className="btn w-full py-3 font-bold bg-white text-primary border-primary-light inline-flex items-center justify-center"
              >
                <HelpCircle className="w-4 h-4 mr-2" />
                Contact Us
              </Link>
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
