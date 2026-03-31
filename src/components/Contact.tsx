"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/i18n";
import { useInView } from "@/hooks/useInView";

interface ContactProps {
  locale?: Locale;
}

export default function Contact({ locale = "en" }: ContactProps) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const { ref: headerRef, isInView: headerVisible } = useInView();
  const { ref: cardsRef, isInView: cardsVisible } = useInView({ threshold: 0.1 });
  const { ref: formRef, isInView: formVisible } = useInView({ threshold: 0.1 });

  function update(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      const res = await fetch("https://formsubmit.co/ajax/support@esiri.africa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `New Contact from ${form.name} — eSIRIPlus`,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        setError("Failed to send. Please try again or email us directly.");
      }
    } catch {
      setError("Network error. Please try again or email us directly.");
    } finally {
      setSending(false);
    }
  }

  const contactCards = [
    {
      labelKey: "contact.email" as const,
      value: t("contact.email.address", locale),
      href: "mailto:support@esiri.africa",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
      ),
    },
    {
      labelKey: "contact.phone" as const,
      value: t("contact.phone.number", locale),
      href: "tel:+255663582995",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
        </svg>
      ),
    },
    {
      labelKey: "contact.hours" as const,
      value: t("contact.hours.text", locale),
      href: null,
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="section-container">
        <div
          ref={headerRef}
          className={`max-w-3xl mx-auto text-center mb-14 ${headerVisible ? "" : "scroll-hidden"}`}
        >
          <span className={`section-tag ${headerVisible ? "animate-fade-in-up" : ""}`}>
            {t("contact.tag", locale)}
          </span>
          <h2 className={`section-title mt-4 mb-5 ${headerVisible ? "animate-fade-in-up delay-1" : ""}`}>
            {t("contact.title", locale)}
          </h2>
          <p className={`section-subtitle mx-auto ${headerVisible ? "animate-fade-in-up delay-2" : ""}`}>
            {t("contact.subtitle", locale)}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 max-w-5xl mx-auto">
          {/* Contact info */}
          <div ref={cardsRef} className="lg:col-span-2 space-y-5">
            {contactCards.map((card, i) => {
              const content = (
                <div className={`flex gap-4 p-5 rounded-2xl border border-gray-100 hover:border-brand-teal/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 group ${
                  cardsVisible ? "animate-fade-in-left" : "scroll-hidden"
                }`}
                style={{ animationDelay: `${i * 150}ms` }}
                >
                  <div className="w-12 h-12 bg-brand-teal-light text-brand-teal rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-brand-teal group-hover:text-white group-hover:scale-110">
                    {card.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brand-navy mb-1">
                      {t(card.labelKey, locale)}
                    </p>
                    <p className="text-sm text-gray-600">{card.value}</p>
                  </div>
                </div>
              );

              return card.href ? (
                <a key={card.labelKey} href={card.href} className="block">
                  {content}
                </a>
              ) : (
                <div key={card.labelKey}>{content}</div>
              );
            })}
          </div>

          {/* Contact form */}
          <div
            ref={formRef}
            className={`lg:col-span-3 ${formVisible ? "animate-fade-in-right" : "scroll-hidden"}`}
          >
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-6 sm:p-8 space-y-5 border border-gray-100 hover:shadow-lg transition-shadow duration-500">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1.5">
                  {t("contact.form.name", locale)}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal transition-all duration-300 hover:border-gray-300"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1.5">
                  {t("contact.form.email", locale)}
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal transition-all duration-300 hover:border-gray-300"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-1.5">
                  {t("contact.form.message", locale)}
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal transition-all duration-300 resize-none hover:border-gray-300"
                />
              </div>

              {submitted && (
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-green-50 border border-green-100 animate-fade-in-up">
                  <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <p className="text-sm text-green-700">{t("contact.form.success", locale)}</p>
                </div>
              )}

              {error && (
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-50 border border-red-100 animate-fade-in-up">
                  <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                  </svg>
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={sending}
                className="btn-primary w-full disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-none"
              >
                {sending ? (
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                ) : null}
                {t("contact.form.submit", locale)}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
