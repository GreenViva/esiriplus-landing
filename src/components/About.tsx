import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/i18n";

interface AboutProps {
  locale?: Locale;
}

const cards = [
  {
    titleKey: "about.card1.title" as const,
    textKey: "about.card1.text" as const,
    icon: (
      // Eye-off icon — Zero Identity Required
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
      </svg>
    ),
  },
  {
    titleKey: "about.card2.title" as const,
    textKey: "about.card2.text" as const,
    icon: (
      // Heart icon — Stigma-Free Care
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
  },
  {
    titleKey: "about.card3.title" as const,
    textKey: "about.card3.text" as const,
    icon: (
      // Shield-check icon — Verified Doctors, Anonymous Patients
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
];

export default function About({ locale = "en" }: AboutProps) {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="section-tag">{t("about.tag", locale)}</span>
          <h2 className="section-title mt-4 mb-5">
            {t("about.title", locale)}
          </h2>
          <p className="section-subtitle mx-auto">
            {t("about.description", locale)}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card) => (
            <div key={card.titleKey} className="card group text-center">
              <div className="w-14 h-14 bg-brand-teal-light text-brand-teal rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-brand-teal group-hover:text-white transition-colors duration-200">
                {card.icon}
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-3">
                {t(card.titleKey, locale)}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t(card.textKey, locale)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
