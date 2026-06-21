import Link from "next/link";
import { GraduationCap, Globe, MessageCircle, Mail } from "lucide-react";

const footerLinks = {
  "Learning Path": [
    { label: "Pricing & Plans", href: "#" },
    { label: "Course Catalog", href: "#courses" },
    { label: "Certification Tracking", href: "#" },
    { label: "Scholar Database", href: "#" },
    { label: "Library Access", href: "#" },
  ],
  "The Academy": [
    { label: "About Our Ethos", href: "#" },
    { label: "Partner Program", href: "#" },
    { label: "Research Journal", href: "#" },
    { label: "Careers", href: "#" },
  ],
  "Legal & Access": [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Accessibility Statement", href: "#" },
    { label: "Security Audit", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-10 sm:py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 border-b border-white/10">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2.5 group" aria-label="Griot Academy">
              <div className="w-9 h-9 bg-primary rounded-2xl flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-lg text-white">
                Griot Academy
              </span>
            </Link>
            <p className="text-sm text-on-dark-muted leading-relaxed max-w-xs">
              A premium digital learning environment where curiosity meets
              security. For kids ages 4–18.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 mt-1">
              {[
                { icon: Globe, href: "#", label: "Website" },
                { icon: MessageCircle, href: "#", label: "Community" },
                { icon: Mail, href: "#", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-primary/60 flex items-center justify-center transition-colors duration-200 cursor-pointer"
                >
                  <Icon className="w-4 h-4 text-on-dark" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section} className="flex flex-col gap-4">
              <h3 className="font-display font-bold text-sm text-on-dark uppercase tracking-wider">
                {section}
              </h3>
              <ul className="space-y-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-on-dark-muted hover:text-white transition-colors duration-200"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-on-dark-muted">
            © {new Date().getFullYear()} Griot Academy. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green animate-pulse" />
            <span className="text-xs text-on-dark-muted font-medium">
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
