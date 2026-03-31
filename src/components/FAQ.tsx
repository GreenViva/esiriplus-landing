"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/i18n";
import { useInView } from "@/hooks/useInView";

interface FAQProps {
  locale?: Locale;
}

const faqKeys = [
  { q: "faq.q1" as const, a: "faq.a1" as const },
  { q: "faq.q2" as const, a: "faq.a2" as const },
  { q: "faq.q3" as const, a: "faq.a3" as const },
  { q: "faq.q4" as const, a: "faq.a4" as const },
  { q: "faq.q5" as const, a: "faq.a5" as const },
  { q: "faq.q6" as const, a: "faq.a6" as const },
];

export default function FAQ({ locale = "en" }: FAQProps) {
  const [open, setOpen] = useState<number | null>(null);
  const { ref: headerRef, isInView: headerVisible } = useInView();
  const { ref: listRef, isInView: listVisible } = useInView({ threshold: 0.05 });

  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="section-container">
        <div ref={headerRef} className={`max-w-3xl mx-auto ${headerVisible ? "" : "scroll-hidden"}`}>
          <h2 className={`section-title text-center mb-12 ${headerVisible ? "animate-fade-in-up" : ""}`}>
            {t("faq.title", locale)}
          </h2>

          <div ref={listRef} className="space-y-3">
            {faqKeys.map((item, idx) => (
              <div
                key={item.q}
                className={`bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md ${
                  open === idx ? "shadow-md border-brand-teal/20" : ""
                } ${listVisible ? "animate-fade-in-up" : "scroll-hidden"}`}
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <button
                  onClick={() => setOpen(open === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-gray-50/50 transition-colors"
                  aria-expanded={open === idx}
                >
                  <span className={`font-semibold pr-4 transition-colors duration-300 ${
                    open === idx ? "text-brand-teal" : "text-brand-navy"
                  }`}>
                    {t(item.q, locale)}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    open === idx ? "bg-brand-teal text-white rotate-180" : "bg-gray-100 text-gray-400"
                  }`}>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                </button>
                {open === idx && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 animate-expand-down">
                    <div className="w-12 h-0.5 bg-brand-teal/20 rounded-full mb-3" />
                    <p className="text-gray-600 leading-relaxed">
                      {t(item.a, locale)}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
