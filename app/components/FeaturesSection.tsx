"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  MapPin,
  School,
  Building2,
  Tent,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: Monitor,
    title: "Live Online Classes",
    desc: "Interactive virtual classrooms with expert-led instruction — accessible from anywhere in the world.",
    color: "text-primary",
    iconBg: "bg-primary-100",
    highlights: [
      "Small class sizes (max 12 students)",
      "Real-time Q&A and collaboration",
      "Session recordings available",
    ],
  },
  {
    icon: MapPin,
    title: "In-Person Enrichment",
    desc: "Hands-on collaborative projects at local community hubs, turning digital skills into tangible creations.",
    color: "text-orange",
    iconBg: "bg-orange-100",
    highlights: [
      "Locally hosted learning hubs",
      "Project-based curriculum",
      "Peer collaboration focus",
    ],
  },
  {
    icon: School,
    title: "School Programs",
    desc: "Seamlessly integrated curriculum for private and public schools — no extra setup required.",
    color: "text-sky",
    iconBg: "bg-sky-100",
    highlights: [
      "Plugs into existing schedules",
      "Aligned with Common Core",
      "Teacher training & support",
    ],
  },
  {
    icon: Building2,
    title: "District Partnerships",
    desc: "Scalable educational infrastructure designed to support thousands of students across multiple campuses.",
    color: "text-green",
    iconBg: "bg-green-light",
    highlights: [
      "Centralized admin dashboard",
      "District-wide data analytics",
      "Custom program branding",
    ],
  },
  {
    icon: Tent,
    title: "Summer Camps",
    desc: "Immersive seasonal programs focusing on high-impact STEM, arts, and enrichment skills.",
    color: "text-pink",
    iconBg: "bg-pink-100",
    highlights: [
      "Full-day and half-day options",
      "Ages 6–16",
      "Certificate of completion",
    ],
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="section-padding bg-gradient-to-b from-surface to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 pill px-4 py-2 bg-orange-50 border-orange-200 text-orange mb-4">
            <Monitor className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">
              What We Offer
            </span>
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-navy mb-4">
            One Platform,{" "}
            <span className="text-primary">Every Format</span>
          </h2>
          <p className="text-body text-lg leading-relaxed">
            Whether online, in-person, or through your school — Griot Academy
            delivers unified learning solutions tailored for every student and
            institution.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ scale: 1, rotate: 0 }}
                className={`card bg-white border-gray-200 p-6 flex flex-col gap-4 cursor-pointer group ${
                  i === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl ${feature.iconBg} flex items-center justify-center`}
                >
                  <Icon className={`w-6 h-6 ${feature.color}`} />
                </div>

                <div>
                  <h3 className="font-display font-bold text-xl text-navy mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-body leading-relaxed mb-4">
                    {feature.desc}
                  </p>
                  <ul className="space-y-1.5">
                    {feature.highlights.map((item) => (
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

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="card bg-primary border-primary-dark p-6 flex flex-col justify-between gap-6 relative overflow-hidden"
          >
            <div
              className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/10 -translate-y-16 translate-x-16"
              aria-hidden="true"
            />
            <div>
              <h3 className="font-display font-bold text-2xl text-white mb-2">
                Need something custom?
              </h3>
              <p className="text-on-dark-muted text-sm leading-relaxed">
                We work with districts and institutions to build tailored
                learning frameworks that fit your goals.
              </p>
            </div>
            <button className="btn w-full py-3 font-bold bg-white text-primary border-primary-light">
              Talk to Our Team
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
