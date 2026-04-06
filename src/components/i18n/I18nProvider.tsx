"use client";

import { useEffect } from "react";
import i18n from "i18next";
import { I18nextProvider, initReactI18next } from "react-i18next";
import type { Locale } from "@/lib/i18n-config";
import { defaultLocale } from "@/lib/i18n-config";
import { resources } from "@/i18n/resources";

let initialized = false;

/** First paint must use the URL locale, not English, or most `t()` calls match `en` until useEffect runs. */
function ensureI18n(initialLocale: Locale) {
  if (initialized) return;
  initialized = true;
  void i18n.use(initReactI18next).init({
    resources,
    lng: initialLocale,
    fallbackLng: defaultLocale,
    interpolation: { escapeValue: false },
    defaultNS: "common",
    ns: ["common", "home", "pages"],
  });
}

export function I18nProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  ensureI18n(locale);
  useEffect(() => {
    void i18n.changeLanguage(locale);
  }, [locale]);
  return (
    <I18nextProvider i18n={i18n} defaultNS="common">
      {children}
    </I18nextProvider>
  );
}
