"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Clock,
  Mail,
  MessageSquare,
  Send,
} from "lucide-react";
import {
  contactMethods,
  inquiryOptions,
  officeHours,
  responseHighlights,
  type InquiryType,
} from "../../data/contact";
import SectionImage from "../ui/SectionImage";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const initialForm: FormData = {
  name: "",
  email: "",
  message: "",
};

export default function ContactPageContent() {
  const [inquiryType, setInquiryType] = useState<InquiryType>("parent");
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const updateField = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-10 sm:pb-14 bg-gradient-to-br from-primary-50 via-white to-surface-2 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-primary-100/40 blur-3xl animate-blob" />
          <div
            className="absolute top-1/2 -right-40 w-[400px] h-[400px] rounded-full bg-sky-100/40 blur-3xl animate-blob"
            style={{ animationDelay: "3s" }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 pill px-4 py-2 bg-primary-50 border-primary-200 text-primary mb-4">
                <MessageSquare className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Get in Touch
                </span>
              </div>
              <h1 className="font-display font-extrabold section-heading text-navy mb-3 sm:mb-4">
                We&apos;re Here to{" "}
                <span className="text-primary">Help</span>
              </h1>
              <p className="text-body text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                Whether you&apos;re a parent exploring courses, a school
                evaluating programs, or a partner with a big idea — our team
                is ready to connect.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative hidden sm:block"
            >
              <div className="relative card overflow-hidden aspect-[4/3] border-primary-200">
                <SectionImage
                  src="/images/The_Friend.85cbfd7e36821d7569bc2fbfb9894a2c.webp"
                  alt="Friendly Griot Academy support team ready to help"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-6 card bg-white border-green-200 px-4 py-3 flex items-center gap-3 animate-float-gentle">
                <div className="w-10 h-10 rounded-2xl bg-green-light flex items-center justify-center">
                  <Clock className="w-5 h-5 text-green" />
                </div>
                <div>
                  <p className="font-bold text-sm text-navy leading-none">&lt; 4 hr response</p>
                  <p className="text-xs text-body mt-0.5">On business days</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-10 sm:py-12 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {contactMethods.map((method, i) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={method.title}
                  href={method.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="card bg-surface border-border p-5 flex items-start gap-4 hover:border-primary-200 transition-colors group"
                >
                  <div
                    className={`w-11 h-11 rounded-2xl ${method.bg} flex items-center justify-center flex-shrink-0`}
                  >
                    <Icon className={`w-5 h-5 ${method.color}`} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-subtle mb-1">
                      {method.title}
                    </p>
                    <p className="font-display font-bold text-base text-navy group-hover:text-primary transition-colors">
                      {method.value}
                    </p>
                    <p className="text-xs text-body mt-1">{method.desc}</p>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="card bg-white border-border p-5 sm:p-8">
                <h2 className="font-display font-extrabold text-2xl text-navy mb-2">
                  Send Us a Message
                </h2>
                <p className="text-sm text-body mb-6">
                  Choose your inquiry type and fill out the form below.
                </p>

                {/* Inquiry Type Selector */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {inquiryOptions.map((option) => {
                    const Icon = option.icon;
                    const isActive = inquiryType === option.id;

                    return (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => setInquiryType(option.id)}
                        className={`card-sm p-4 text-left transition-all duration-200 cursor-pointer ${
                          isActive
                            ? `${option.bg} ${option.border} ring-2 ring-primary/20`
                            : "bg-white border-border hover:border-primary-200"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={`w-9 h-9 rounded-xl ${isActive ? "bg-white" : option.bg} flex items-center justify-center flex-shrink-0`}
                          >
                            <Icon className={`w-4 h-4 ${option.color}`} />
                          </div>
                          <div>
                            <p className="font-bold text-sm text-navy">{option.label}</p>
                            <p className="text-xs text-body mt-0.5">{option.desc}</p>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10 px-4"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-green-light flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-navy mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-sm text-body max-w-sm mx-auto">
                      Thanks for reaching out. Our team will get back to you
                      within one business day.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setForm(initialForm);
                      }}
                      className="btn mt-6 px-6 py-3 text-sm font-bold bg-primary text-white border-primary-dark"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-bold text-navy mb-1.5"
                        >
                          Full Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => updateField("name", e.target.value)}
                          placeholder="Jane Smith"
                          className="w-full px-4 py-3 text-sm font-medium text-foreground bg-white border border-border rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-bold text-navy mb-1.5"
                        >
                          Email Address
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => updateField("email", e.target.value)}
                          placeholder="jane@example.com"
                          className="w-full px-4 py-3 text-sm font-medium text-foreground bg-white border border-border rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-bold text-navy mb-1.5"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => updateField("message", e.target.value)}
                        placeholder="Tell us how we can help..."
                        className="w-full px-4 py-3 text-sm font-medium text-foreground bg-white border border-border rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-y min-h-[120px]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 font-bold bg-primary text-white border-primary-dark"
                    >
                      Send Message
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2 space-y-5"
            >
              <div className="card bg-white border-border p-5 sm:p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-primary" />
                  <h3 className="font-display font-bold text-lg text-navy">
                    Office Hours
                  </h3>
                </div>
                <ul className="space-y-3">
                  {officeHours.map((slot) => (
                    <li
                      key={slot.day}
                      className="flex items-center justify-between text-sm py-2 border-b border-border last:border-0"
                    >
                      <span className="font-semibold text-body">{slot.day}</span>
                      <span className="font-bold text-navy">{slot.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card bg-primary border-primary-dark p-5 sm:p-6 relative overflow-hidden">
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/10 -translate-y-12 translate-x-12"
                  aria-hidden="true"
                />
                <Mail className="w-6 h-6 text-white mb-3" />
                <h3 className="font-display font-bold text-lg text-white mb-2">
                  Prefer Email?
                </h3>
                <p className="text-on-dark-muted text-sm leading-relaxed mb-4">
                  Reach us directly at{" "}
                  <a
                    href="mailto:hello@griotacademy.com"
                    className="text-white font-bold underline underline-offset-2 hover:text-yellow transition-colors"
                  >
                    hello@griotacademy.com
                  </a>
                </p>
                <ul className="space-y-2">
                  {responseHighlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-xs text-on-dark-muted"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-light flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative card overflow-hidden aspect-[16/10] border-primary-200 sm:hidden">
                <SectionImage
                  src="/images/The_Friend.85cbfd7e36821d7569bc2fbfb9894a2c.webp"
                  alt="Griot Academy support team"
                  fill
                  sizes="100vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
