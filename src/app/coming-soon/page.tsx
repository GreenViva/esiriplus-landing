"use client";

import Link from "next/link";
import PageShell from "@/components/PageShell";
import { t } from "@/lib/i18n";

export default function ComingSoonPage() {
  return (
    <PageShell>
      {(locale) => (
        <div className="section-container section-padding">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-teal/10 mb-8">
              <svg
                className="w-10 h-10 text-brand-teal"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>

            <h1 className="section-title mb-4">{t("coming.page.title", locale)}</h1>
            <p className="text-xl text-gray-600 mb-6">
              {t("coming.page.subtitle", locale)}
            </p>
            <p className="text-gray-500 leading-relaxed mb-10">
              {t("coming.page.body", locale)}
            </p>

            <Link href="/" className="btn-primary px-8 py-4 text-base">
              {t("coming.page.cta", locale)}
            </Link>
          </div>
        </div>
      )}
    </PageShell>
  );
}
