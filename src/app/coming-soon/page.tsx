"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import PageShell from "@/components/PageShell";
import { t, type Locale } from "@/lib/i18n";

function ComingSoonContent({ locale }: { locale: Locale }) {
  const searchParams = useSearchParams();
  const isIOS = searchParams.get("platform") === "ios";

  const subtitle = isIOS
    ? t("coming.page.subtitle.ios", locale)
    : t("coming.page.subtitle.android", locale);
  const body = isIOS
    ? t("coming.page.body.ios", locale)
    : t("coming.page.body.android", locale);

  return (
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
        <p className="text-xl text-gray-600 mb-6">{subtitle}</p>
        <p className="text-gray-500 leading-relaxed mb-10">{body}</p>

        <Link href="/" className="btn-primary px-8 py-4 text-base">
          {t("coming.page.cta", locale)}
        </Link>
      </div>
    </div>
  );
}

export default function ComingSoonPage() {
  return (
    <PageShell>
      {(locale) => (
        <Suspense fallback={null}>
          <ComingSoonContent locale={locale} />
        </Suspense>
      )}
    </PageShell>
  );
}
