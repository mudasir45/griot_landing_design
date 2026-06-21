"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Browse Classes", href: "#courses" },
  { label: "What We Offer", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Plans", href: "#pricing" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-white border-border shadow-sm"
          : "bg-white/95 backdrop-blur-sm border-border/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group" aria-label="Griot Academy home">
            <div className="w-9 h-9 bg-primary rounded-2xl flex items-center justify-center group-hover:opacity-90 transition-opacity duration-200">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-lg sm:text-xl text-navy">
              Griot Academy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-semibold text-body hover:text-primary hover:bg-primary-50 rounded-xl transition-all duration-200 cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Auth */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="px-5 py-2.5 text-sm font-bold text-navy border-2 border-primary-200 rounded-2xl hover:bg-primary-50 hover:border-primary transition-all duration-200 cursor-pointer">
              Log In
            </button>
            <button className="btn px-5 py-2.5 text-sm font-bold bg-primary text-white border-primary-dark">
              Get Started Free
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2.5 rounded-xl hover:bg-primary-50 transition-colors cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? (
              <X className="w-5 h-5 text-navy" />
            ) : (
              <Menu className="w-5 h-5 text-navy" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="lg:hidden bg-white border-t border-primary-100 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 text-base font-semibold text-foreground hover:text-primary hover:bg-primary-50 rounded-2xl transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
                <button className="w-full py-3 text-sm font-bold text-navy border-2 border-primary-200 rounded-2xl hover:bg-primary-50 transition-colors cursor-pointer">
                  Log In
                </button>
                <button className="w-full py-3 text-sm font-bold bg-primary text-white rounded-xl cursor-pointer">
                  Get Started Free
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
