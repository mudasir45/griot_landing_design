"use client";

import { motion } from "framer-motion";
import {
  Building2,
  CheckCircle2,
  MapPin,
  Monitor,
  School,
  Tent,
} from "lucide-react";
import Link from "next/link";
import SectionImage from "./ui/SectionImage";

const features = [
  {
    icon: Monitor,
    title: "Live Guided Classes",
    desc: "Students get real-time instruction, room to ask questions, and a weekly rhythm that builds habits.",
    color: "text-primary",
    iconBg: "bg-primary-100",
    image: "/images/features/live-class.png",
    imageAlt: "Students connecting in a live online video classroom",
    highlights: [
      "Small-group instruction",
      "Real-time discussion and guidance",
      "Structured weekly class rhythm",
    ],
    featured: true,
  },
  {
    icon: MapPin,
    title: "Hands-On Practice",
    desc: "Guided practice helps students review skills, complete activities, and keep learning between live sessions.",
    color: "text-orange",
    iconBg: "bg-orange-100",
    image: "/images/features/hands-on.png",
    imageAlt: "Instructor guiding children in a hands-on learning session",
    highlights: [
      "Practice between live classes",
      "Assignments and guided activities",
      "Skills reinforced step by step",
    ],
    featured: true,
  },
  {
    icon: School,
    title: "School Programs",
    desc: "Griot can support after-school programs, enrichment blocks, and school partnership pilots for groups of students.",
    color: "text-sky",
    iconBg: "bg-sky-100",
    image: "/images/features/programs.png",
    imageAlt: "Children learning collaboratively in a classroom setting",
    highlights: [
      "After-school and enrichment blocks",
      "Live instruction for groups",
      "Progress visibility for organizers",
    ],
    featured: false,
  },
  {
    icon: Building2,
    title: "Group & Community Programs",
    desc: "Homeschool groups and community organizers can explore chess, coding, robotics, math, and AI literacy programming.",
    color: "text-green",
    iconBg: "bg-green-light",
    image: "/images/features/community-programs.png",
    imageAlt: "Student engaged in structured online learning",
    highlights: [
      "Group scheduling support",
      "Program fit by grade band",
      "Cohort and pilot options",
    ],
    featured: false,
  },
  {
    icon: Tent,
    title: "Cohort Programs",
    desc: "Families can join early cohorts in chess, coding, robotics, math, AI literacy, and STEM with a clear enrollment path.",
    color: "text-pink",
    iconBg: "bg-pink-100",
    image: "/images/features/cohort-programs.png",
    imageAlt: "Young explorer on an adventurous summer learning journey",
    highlights: [
      "Early cohort enrollment",
      "Small-group learning format",
      "Clear next steps for families",
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
              How Students Learn
            </span>
          </div>
          <h2 className="font-display font-extrabold section-heading text-navy mb-3 sm:mb-4">
            Students learn by{" "}
            <span className="heading-accent">thinking, building, and explaining.</span>
          </h2>
          <p className="text-body text-base sm:text-lg leading-relaxed px-1">
            In Griot Academy programs, students solve problems, test ideas, ask
            questions, and share what they are learning. The experience is
            structured enough for progress and flexible enough for questions.
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
                  <div className="relative card overflow-hidden aspect-[11/6]">
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
                  <h3 className="font-display font-bold text-lg text-navy group-hover:text-accent transition-colors">
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
              <h3 className="font-display font-bold text-2xl text-navy mb-2">
                Bring Griot to your school.
              </h3>
              <p className="text-navy/75 text-sm leading-relaxed">
                Schools and groups can explore chess, coding, robotics, math, AI
                literacy, and STEM programming for students.
              </p>
            </div>
            <Link
              href="/schools"
              className="btn w-full py-3 font-bold bg-white text-navy border-white inline-flex items-center justify-center"
            >
              Request School Demo
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
