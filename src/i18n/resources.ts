import type { Resource } from "i18next";

import { mergeLocaleJson } from "@/lib/merge-locale-json";

import enCommon from "@/i18n/locales/en/common.json";
import frCommon from "@/i18n/locales/fr/common.json";
import deCommon from "@/i18n/locales/de/common.json";
import esCommon from "@/i18n/locales/es/common.json";
import itCommon from "@/i18n/locales/it/common.json";
import nlCommon from "@/i18n/locales/nl/common.json";

import enHome from "@/i18n/locales/en/home.json";
import frHome from "@/i18n/locales/fr/home.json";
import deHome from "@/i18n/locales/de/home.json";
import esHome from "@/i18n/locales/es/home.json";
import itHome from "@/i18n/locales/it/home.json";
import nlHome from "@/i18n/locales/nl/home.json";

import enPagesCore from "@/i18n/locales/en/pages.json";
import enPagesContent from "@/i18n/locales/en/pages-content.json";
import enPagesPricingExtra from "@/i18n/locales/en/pages-pricing-extra.json";
import frPages from "@/i18n/locales/fr/pages.json";
import dePages from "@/i18n/locales/de/pages.json";
import esPages from "@/i18n/locales/es/pages.json";
import itPages from "@/i18n/locales/it/pages.json";
import nlPages from "@/i18n/locales/nl/pages.json";

/** English pages = scaffold + route copy + pricing blocks (`pages-pricing-extra.json`). */
const enPages = mergeLocaleJson(mergeLocaleJson(enPagesCore, enPagesContent), enPagesPricingExtra);

export const resources = {
  en: { common: enCommon, home: enHome, pages: enPages },
  fr: {
    common: mergeLocaleJson(enCommon, frCommon),
    home: mergeLocaleJson(enHome, frHome),
    pages: mergeLocaleJson(enPages, frPages),
  },
  de: {
    common: mergeLocaleJson(enCommon, deCommon),
    home: mergeLocaleJson(enHome, deHome),
    pages: mergeLocaleJson(enPages, dePages),
  },
  es: {
    common: mergeLocaleJson(enCommon, esCommon),
    home: mergeLocaleJson(enHome, esHome),
    pages: mergeLocaleJson(enPages, esPages),
  },
  it: {
    common: mergeLocaleJson(enCommon, itCommon),
    home: mergeLocaleJson(enHome, itHome),
    pages: mergeLocaleJson(enPages, itPages),
  },
  nl: {
    common: mergeLocaleJson(enCommon, nlCommon),
    home: mergeLocaleJson(enHome, nlHome),
    pages: mergeLocaleJson(enPages, nlPages),
  },
} satisfies Resource;
