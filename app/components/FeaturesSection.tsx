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
import SectionImage from "./ui/SectionImage";

const features = [
  {
    icon: Monitor,
    title: "Live Online Classes",
    desc: "Interactive virtual classrooms with expert-led instruction — accessible from anywhere in the world.",
    color: "text-primary",
    iconBg: "bg-primary-100",
    image: "/images/The_Friend.85cbfd7e36821d7569bc2fbfb9894a2c.webp",
    imageAlt: "Students connecting in a live online video classroom",
    highlights: [
      "Small class sizes (max 12 students)",
      "Real-time Q&A and collaboration",
      "Session recordings available",
    ],
    featured: true,
  },
  {
    icon: MapPin,
    title: "In-Person Enrichment",
    desc: "Hands-on collaborative projects at local community hubs, turning digital skills into tangible creations.",
    color: "text-orange",
    iconBg: "bg-orange-100",
    image: "/images/facility-bg.jpg",
    imageAlt: "Instructor guiding children in a hands-on learning session",
    highlights: [
      "Locally hosted learning hubs",
      "Project-based curriculum",
      "Peer collaboration focus",
    ],
    featured: true,
  },
  {
    icon: School,
    title: "School Programs",
    desc: "Seamlessly integrated curriculum for private and public schools — no extra setup required.",
    color: "text-sky",
    iconBg: "bg-sky-100",
    image: "/images/banner01.png",
    imageAlt: "Children learning collaboratively in a classroom setting",
    highlights: [
      "Plugs into existing schedules",
      "Aligned with Common Core",
      "Teacher training & support",
    ],
    featured: false,
  },
  {
    icon: Building2,
    title: "District Partnerships",
    desc: "Scalable educational infrastructure designed to support thousands of students across multiple campuses.",
    color: "text-green",
    iconBg: "bg-green-light",
    image: "/images/The_Scholar.d92aa1ba7abc5bbd377244bd1ee7151c.webp",
    imageAlt: "Student engaged in structured online learning",
    highlights: [
      "Centralized admin dashboard",
      "District-wide data analytics",
      "Custom program branding",
    ],
    featured: false,
  },
  {
    icon: Tent,
    title: "Summer Camps",
    desc: "Immersive seasonal programs focusing on high-impact STEM, arts, and enrichment skills.",
    color: "text-pink",
    iconBg: "bg-pink-100",
    image: "/images/The_Explorer.659eb58be482e98a1c1bf3bf26cd24ef.webp",
    imageAlt: "Young explorer on an adventurous summer learning journey",
    highlights: [
      "Full-day and half-day options",
      "Ages 6–16",
      "Certificate of completion",
    ],
    featured: false,
  },
];

export default function FeaturesSection() {
  const featured = features.filter((f) => f.featured);
  const rest = features.filter((f) => !f.featured);

  return (
    <section
      id="features"
      className="section-padding bg-gradient-to-b from-surface to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 pill px-4 py-2 bg-orange-50 border-orange-200 text-orange mb-4">
            <Monitor className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">
              What We Offer
            </span>
          </div>
          <h2 className="font-display font-extrabold section-heading text-navy mb-3 sm:mb-4">
            One Platform,{" "}
            <span className="text-primary">Every Format</span>
          </h2>
          <p className="text-body text-base sm:text-lg leading-relaxed px-1">
            Whether online, in-person, or through your school — Griot Academy
            delivers unified learning solutions tailored for every student and
            institution.
          </p>
        </motion.div>

        {/* Featured split layouts with large imagery */}
        <div className="space-y-6 sm:space-y-8 mb-6 sm:mb-8">
          {featured.map((feature, i) => {
            const Icon = feature.icon;
            const imageFirst = i % 2 === 0;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-5 sm:gap-8 items-center`}
              >
                <div
                  className={`relative ${imageFirst ? "order-1" : "order-1 lg:order-2"}`}
                >
                  <div className="relative card overflow-hidden aspect-[16/10] lg:aspect-[4/3]">
                    <SectionImage
                      src={feature.image}
                      alt={feature.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>

                <div className={`flex flex-col gap-3 sm:gap-4 ${imageFirst ? "order-2" : "order-2 lg:order-1"}`}>
                  <div
                    className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl ${feature.iconBg} flex items-center justify-center`}
                  >
                    <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${feature.color}`} />
                  </div>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-navy">
                    {feature.title}
                  </h3>
                  <p className="text-body leading-relaxed">{feature.desc}</p>
                  <ul className="space-y-2">
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
        </div>

        {/* Remaining features — image cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {rest.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ scale: 1 }}
                className="card bg-white border-gray-200 overflow-hidden flex flex-col cursor-pointer group"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <SectionImage
                    src={feature.image}
                    alt={feature.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="rounded-none transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div
                    className={`absolute bottom-3 left-3 w-10 h-10 rounded-xl ${feature.iconBg} flex items-center justify-center`}
                  >
                    <Icon className={`w-5 h-5 ${feature.color}`} />
                  </div>
                </div>

                <div className="p-5 flex flex-col gap-2 flex-1">
                  <h3 className="font-display font-bold text-lg text-navy group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-body leading-relaxed">{feature.desc}</p>
                  <ul className="space-y-1 mt-1">
                    {feature.highlights.slice(0, 2).map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-xs text-body"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-green flex-shrink-0" />
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
