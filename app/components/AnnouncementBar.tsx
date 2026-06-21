"use client";

import { useState } from "react";
import { X, Sparkles } from "lucide-react";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative bg-primary text-white text-center px-4 sm:px-6 py-2.5 flex items-center justify-center gap-2 pr-10 sm:pr-12">
      <Sparkles className="w-3.5 h-3.5 flex-shrink-0 hidden sm:block" aria-hidden="true" />
      <p className="text-[11px] sm:text-xs md:text-sm font-semibold leading-snug">
        Summer STEM Camps now enrolling — spots filling fast!{" "}
        <a
          href="#courses"
          className="underline underline-offset-2 hover:text-yellow transition-colors font-bold whitespace-nowrap"
        >
          Explore classes →
        </a>
      </p>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-white/20 rounded-lg transition-colors cursor-pointer"
        aria-label="Close announcement"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
