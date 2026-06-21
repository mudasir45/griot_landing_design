"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import SectionImage from "./ui/SectionImage";

const plans = [
  {
    name: "Explorer",
    price: "$25",
    period: "per session",
    desc: "Try any single live class — perfect for discovering new interests.",
    features: [
      "One live class session",
      "Session recording included",
      "Parent progress summary",
      "No commitment required",
    ],
    cta: "Book a Class",
    popular: false,
    bg: "bg-white",
    border: "border-gray-200",
  },
  {
    name: "Family",
    price: "$79",
    period: "per month",
    desc: "Unlimited access for one child across all subject categories.",
    features: [
      "Unlimited live classes",
      "Up to 3 courses at once",
      "Full parent dashboard",
      "Certificate tracking",
      "Priority instructor support",
    ],
    cta: "Start Free Trial",
    popular: true,
    bg: "bg-primary-50",
    border: "border-primary",
  },
  {
    name: "Institution",
    price: "Custom",
    period: "district pricing",
    desc: "Scalable licensing for schools, districts, and after-school programs.",
    features: [
      "Unlimited student seats",
      "Admin analytics dashboard",
      "Custom curriculum alignment",
      "Dedicated success manager",
      "On-site training included",
    ],
    cta: "Contact Sales",
    popular: false,
    bg: "bg-white",
    border: "border-gray-200",
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Visual header with image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-10 items-center mb-12"
        >
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 pill px-4 py-2 bg-yellow/20 border-yellow/50 text-yellow-dark mb-4">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">
                Plans & Pricing
              </span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-navy mb-4">
              Simple Plans for{" "}
              <span className="text-primary">Every Family</span>
            </h2>
            <p className="text-body text-lg leading-relaxed">
              Start with a free trial. No hidden fees, no ads, cancel anytime.
            </p>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative card overflow-hidden aspect-[16/10] border-primary-200">
              <SectionImage
                src="/images/about01.jpg"
                alt="Parent and child enjoying a personalized learning experience"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1 }}
              className={`card ${plan.bg} ${plan.border} p-6 flex flex-col gap-5 relative ${
                plan.popular ? "md:-mt-2 md:mb-2" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 pill px-4 py-1 bg-primary text-white border-primary-dark text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="font-display font-bold text-xl text-navy">
                  {plan.name}
                </h3>
                <p className="text-sm text-body mt-1 leading-relaxed">
                  {plan.desc}
                </p>
              </div>

              <div>
                <span className="font-display font-extrabold text-4xl text-navy">
                  {plan.price}
                </span>
                <span className="text-sm text-subtle ml-2">{plan.period}</span>
              </div>

              <ul className="space-y-2.5 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-body">
                    <Check className="w-4 h-4 text-green flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`btn w-full py-3.5 font-bold cursor-pointer ${
                  plan.popular
                    ? "bg-primary text-white border-primary-dark"
                    : "bg-white text-navy border-gray-200"
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
