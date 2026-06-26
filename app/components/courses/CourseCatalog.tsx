"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Calculator,
  Code2,
  Dumbbell,
  FlaskConical,
  Globe,
  Music4,
  Palette,
  PenLine,
  Search,
  type LucideIcon,
} from "lucide-react";
import type { Course } from "../../data/courses";
import type { CourseCategoryOutput } from "../../lib/api";
import CourseCard from "../CourseCard";

const categoryIcons: Record<string, LucideIcon> = {
  All: Globe,
  Coding: Code2,
  STEM: FlaskConical,
  Arts: Palette,
  Chess: Brain,
  Music: Music4,
  Math: Calculator,
  Fitness: Dumbbell,
  Writing: PenLine,
};

function getCategoryIcon(name: string): LucideIcon {
  return categoryIcons[name] ?? Globe;
}

interface CourseCatalogProps {
  courses: Course[];
  categories: CourseCategoryOutput[];
}

export default function CourseCatalog({ courses, categories }: CourseCatalogProps) {
  const categoryFilters = useMemo(
    () => ["All", ...categories.map((category) => category.name)],
    [categories]
  );

  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return courses.filter((course) => {
      const matchesCategory =
        activeCategory === "All" ||
        course.category === activeCategory ||
        course.tag === activeCategory;
      const matchesSearch =
        !query ||
        course.title.toLowerCase().includes(query) ||
        course.desc.toLowerCase().includes(query) ||
        course.tag.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, courses, searchQuery]);

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 mb-8 sm:mb-10">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-subtle pointer-events-none" />
          <input
            type="search"
            placeholder="Search courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 text-sm font-medium text-foreground bg-white border border-border rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            aria-label="Search courses"
          />
        </div>
        <p className="text-sm font-semibold text-body self-center">
          {filteredCourses.length} course{filteredCourses.length !== 1 ? "s" : ""} found
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex gap-2 mb-8 sm:mb-10 overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center scrollbar-hide"
      >
        {categoryFilters.map((category) => {
          const Icon = getCategoryIcon(category);
          const isActive = activeCategory === category;

          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`pill inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer flex-shrink-0 ${
                isActive
                  ? "bg-primary text-white border-primary-dark"
                  : "bg-white text-body border-border hover:bg-primary-50 hover:text-primary hover:border-primary-200"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              {category}
            </button>
          );
        })}
      </motion.div>

      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredCourses.map((course, index) => (
            <CourseCard key={course.slug} course={course} index={index} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 card bg-surface border-border">
          <p className="font-display font-bold text-xl text-navy mb-2">No courses found</p>
          <p className="text-body text-sm">
            Try adjusting your search or selecting a different category.
          </p>
        </div>
      )}
    </>
  );
}
