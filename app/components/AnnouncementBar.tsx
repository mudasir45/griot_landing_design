"use client";

import { useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative bg-primary-50 border-b border-primary-100 text-center px-4 sm:px-6 py-2 flex items-center justify-center pr-10">
      <p className="text-xs sm:text-sm font-medium text-body leading-snug">
        Early cohort enrollment is open —{" "}
        <Link
          href="/courses"
          className="font-bold text-accent hover:text-accent-strong transition-colors"
        >
          Book a Trial Class
        </Link>
      </p>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-md hover:bg-primary-100 transition-colors cursor-pointer"
        aria-label="Dismiss"
      >
        <X className="w-3.5 h-3.5 text-subtle" />
      </button>
    </div>
  );
}
