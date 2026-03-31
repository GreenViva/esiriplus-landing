"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/i18n";

interface HeaderProps {
  locale?: Locale;
  onLocaleChange?: (locale: Locale) => void;
}

export default function Header({ locale = "en", onLocaleChange }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/", label: t("nav.home", locale) },
    { href: "/about/", label: t("nav.about", locale) },
    { href: "/#features", label: t("nav.features", locale) },
    { href: "/support/", label: t("nav.support", locale) },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "header-scrolled border-b border-gray-100/50"
          : "bg-white/80 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-brand-teal rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
              </svg>
            </div>
            <span className="text-xl font-bold text-brand-navy">
              e<span className="text-brand-teal">SIRI</span>Plus
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-3 py-2 text-sm font-medium text-gray-600 hover:text-brand-teal transition-colors rounded-lg group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-teal rounded-full transition-all duration-300 group-hover:w-4/5" />
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => onLocaleChange?.(locale === "en" ? "sw" : "en")}
              className="px-3 py-1.5 text-xs font-semibold text-gray-500 hover:text-brand-teal border border-gray-200 hover:border-brand-teal/30 rounded-lg transition-all duration-300"
              aria-label="Switch language"
            >
              {locale === "en" ? "SW" : "EN"}
            </button>
            <Link href="/#download" className="btn-primary !py-2 !px-4 !text-sm">
              {t("nav.download", locale)}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-brand-teal transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 relative">
              <span
                className={`absolute left-0 block w-6 h-0.5 bg-current transition-all duration-300 ${
                  mobileOpen ? "top-[11px] rotate-45" : "top-1"
                }`}
              />
              <span
                className={`absolute left-0 top-[11px] block w-6 h-0.5 bg-current transition-all duration-300 ${
                  mobileOpen ? "opacity-0 scale-x-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block w-6 h-0.5 bg-current transition-all duration-300 ${
                  mobileOpen ? "top-[11px] -rotate-45" : "top-[19px]"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 space-y-1 animate-slide-down">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 text-sm font-medium text-gray-600 hover:text-brand-teal hover:bg-brand-teal-light rounded-lg transition-colors animate-fade-in-up"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 pt-3 px-3 animate-fade-in-up" style={{ animationDelay: '240ms' }}>
              <button
                onClick={() => onLocaleChange?.(locale === "en" ? "sw" : "en")}
                className="px-3 py-1.5 text-xs font-semibold text-gray-500 border border-gray-200 rounded-lg"
              >
                {locale === "en" ? "Swahili" : "English"}
              </button>
              <Link
                href="/#download"
                onClick={() => setMobileOpen(false)}
                className="btn-primary !py-2 !px-4 !text-sm"
              >
                {t("nav.download", locale)}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
