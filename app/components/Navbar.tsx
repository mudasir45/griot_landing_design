"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  {
    label: "Programs",
    href: "/courses",
    color: "text-orange",
    hoverColor: "hover:text-orange",
    activeBg: "bg-orange-50",
  },
  {
    label: "About",
    href: "/about",
    color: "text-pink",
    hoverColor: "hover:text-pink",
    activeBg: "bg-pink-50",
  },
  {
    label: "Contact",
    href: "/contact",
    color: "text-sky",
    hoverColor: "hover:text-sky",
    activeBg: "bg-sky-50",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/98 border-b border-border shadow-sm" : "bg-white border-b border-transparent"
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <Link
            href="/"
            className="flex items-center gap-2 group flex-shrink-0"
            aria-label="Griot Academy home"
          >
            <Image
              src="/logo.png"
              alt=""
              width={36}
              height={36}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl object-contain group-hover:opacity-90 transition-opacity"
              unoptimized
            />
            <span className="font-display font-bold text-lg sm:text-2xl text-navy">
              Griot Academy
            </span>
          </Link>

          <nav
            className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-extrabold transition-colors duration-200 ${isActive(link.href)
                  ? `${link.color}`
                  : `${link.color} ${link.hoverColor}`
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-5 flex-shrink-0">
            <button className="text-sm font-semibold text-body hover:text-primary transition-colors cursor-pointer">
              Log In
            </button>
            <button className="btn px-5 py-2.5 text-sm font-bold bg-primary text-white border-primary-dark">
              Book a Trial Class
            </button>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-primary-50 transition-colors cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-5 h-5 text-navy" />
            ) : (
              <Menu className="w-5 h-5 text-navy" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden bg-white border-t border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1 max-w-6xl mx-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-3 py-3 text-base font-extrabold rounded-xl transition-colors ${isActive(link.href)
                    ? `${link.color} ${link.activeBg}`
                    : `${link.color} hover:bg-surface`
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 mt-2 border-t border-border space-y-2">
                <button className="w-full py-3 text-sm font-semibold text-body hover:text-primary transition-colors cursor-pointer">
                  Log In
                </button>
                <button className="btn w-full py-3 text-sm font-bold bg-primary text-white border-primary-dark">
                  Book a Trial Class
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
