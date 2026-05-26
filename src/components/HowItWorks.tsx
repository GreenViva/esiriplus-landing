"use client";

import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/i18n";
import { useInView } from "@/hooks/useInView";

interface HowItWorksProps {
  locale?: Locale;
}

const steps = [
  {
    titleKey: "howitworks.step1.title" as const,
    textKey: "howitworks.step1.text" as const,
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
    ),
  },
  {
    titleKey: "howitworks.step2.title" as const,
    textKey: "howitworks.step2.text" as const,
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33" />
      </svg>
    ),
  },
  {
    titleKey: "howitworks.step3.title" as const,
    textKey: "howitworks.step3.text" as const,
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
      </svg>
    ),
  },
  {
    titleKey: "howitworks.step4.title" as const,
    textKey: "howitworks.step4.text" as const,
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z" />
      </svg>
    ),
  },
];

export default function HowItWorks({ locale = "en" }: HowItWorksProps) {
  const { ref: headerRef, isInView: headerVisible } = useInView();
  const { ref: gridRef, isInView: gridVisible } = useInView({ threshold: 0.05 });

  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="section-container">
        <div
          ref={headerRef}
          className={`max-w-3xl mx-auto text-center mb-16 ${headerVisible ? "" : "scroll-hidden"}`}
        >
          <span className={`section-tag ${headerVisible ? "animate-fade-in-up" : ""}`}>
            {t("howitworks.tag", locale)}
          </span>
          <h2 className={`section-title mt-4 mb-5 ${headerVisible ? "animate-fade-in-up delay-1" : ""}`}>
            {t("howitworks.title", locale)}
          </h2>
          <p className={`section-subtitle mx-auto ${headerVisible ? "animate-fade-in-up delay-2" : ""}`}>
            {t("howitworks.subtitle", locale)}
          </p>
        </div>

        <div ref={gridRef} className="relative">
          {/* Connecting line — desktop (spans between the step circle centers) */}
          <div
            className="hidden lg:block absolute top-9 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-brand-teal/20 via-brand-teal/40 to-brand-teal/20"
            aria-hidden="true"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {steps.map((step, i) => (
              <div
                key={step.titleKey}
                className={`relative flex flex-col items-center text-center group ${
                  gridVisible ? "animate-fade-in-up" : "scroll-hidden"
                }`}
                style={{ animationDelay: `${i * 120}ms` }}
              >
                {/* Number + icon circle */}
                <div className="relative mb-6">
                  <div className="w-[72px] h-[72px] rounded-2xl bg-gradient-to-br from-brand-teal to-brand-navy text-white flex items-center justify-center shadow-lg shadow-brand-teal/25 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
                    {step.icon}
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-brand-coral text-white text-sm font-bold flex items-center justify-center shadow-md ring-4 ring-white">
                    {i + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-brand-navy mb-2 group-hover:text-brand-teal transition-colors duration-300">
                  {t(step.titleKey, locale)}
                </h3>
                <p className="text-gray-600 leading-relaxed max-w-xs">
                  {t(step.textKey, locale)}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className={`mt-14 text-center ${gridVisible ? "animate-fade-in-up delay-5" : "scroll-hidden"}`}>
          <Link href="/#download" className="btn-primary">
            {t("howitworks.cta", locale)}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
