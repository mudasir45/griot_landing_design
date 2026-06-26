import { Globe, Mail, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  Programs: [
    { label: "View Programs", href: "/courses" },
    { label: "Chess Strategy Lab", href: "/courses" },
    { label: "Coding Foundations", href: "/courses" },
    { label: "Robotics Lab", href: "/courses" },
    { label: "Book a Trial Class", href: "/courses" },
  ],
  Academy: [
    { label: "About Griot Academy", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "School Programs", href: "/schools" },
    { label: "Join Founding Families", href: "/courses" },
    { label: "Get Class Updates", href: "/contact" },
  ],
  "Legal & Support": [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Accessibility Statement", href: "#" },
    { label: "Request School Demo", href: "/schools" },
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
              <Image
                src="/logo.png"
                alt=""
                width={36}
                height={36}
                className="w-9 h-9 rounded-2xl object-contain"
                unoptimized
              />
              <span className="font-display font-bold text-lg text-white">
                Griot Academy
              </span>
            </Link>
            <p className="text-sm text-on-dark-muted leading-relaxed max-w-xs">
              Structured K-8 enrichment in chess, coding, robotics, math, and AI
              literacy. Trial-first enrollment for families.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 mt-1">
              {[
                { icon: Globe, href: "#", label: "Website" },
                { icon: MessageCircle, href: "#", label: "Community" },
                { icon: Mail, href: "/contact", label: "Email" },
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
