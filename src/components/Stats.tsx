"use client";

import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/i18n";
import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";

interface StatsProps {
  locale?: Locale;
}

function StatItem({ value, suffix, label, delay, started }: {
  value: number;
  suffix: string;
  label: string;
  delay: number;
  started: boolean;
}) {
  const count = useCountUp(value, 2000, started);

  return (
    <div
      className={`text-center ${started ? "animate-fade-in-up" : "scroll-hidden"}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-2 tabular-nums">
        {count.toLocaleString()}{suffix}
      </p>
      <p className="text-sm text-white/70 font-medium">
        {label}
      </p>
    </div>
  );
}

const stats = [
  { value: 50, suffix: "+", labelKey: "stats.doctors" as const },
  { value: 2000, suffix: "+", labelKey: "stats.consultations" as const },
  { value: 5000, suffix: "+", labelKey: "stats.patients" as const },
  { value: 4.8, suffix: "", labelKey: "stats.rating" as const },
];

export default function Stats({ locale = "en" }: StatsProps) {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <section ref={ref} className="bg-brand-navy py-14 sm:py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-teal/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-teal/30 to-transparent" />
      <div className="absolute -top-20 -right-20 w-60 h-60 bg-brand-teal/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-brand-teal/5 rounded-full blur-3xl" />

      <div className="section-container relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <StatItem
              key={stat.labelKey}
              value={stat.value}
              suffix={stat.suffix}
              label={t(stat.labelKey, locale)}
              delay={i * 150}
              started={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
