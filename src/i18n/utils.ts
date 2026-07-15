// ! IMPORTANT
// This module is also loaded client side, do not load anything that depends
// on node variables or globals

import { ui, defaultLang, type Languages } from "./ui";
import { format, formatRelative, type Locale } from "date-fns";
import { enUS } from "date-fns/locale";
import template from "lodash/template";

const locales: Record<Languages, Locale> = {
  en: enUS,
};

const dateTimeFormat = "y-MM-dd HH:mm:ss";
const dateFormat = "y-MM-dd";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as Languages;
  return defaultLang;
}

export function useTranslations(lang: Languages) {
  return function t(key: keyof (typeof ui)[typeof defaultLang], data?: object) {
    const compiled = template(
      ui[lang][key] || ui[defaultLang][key] || `{ ${key} }`,
    );
    return compiled(data);
  };
}

export function formatDateTime(date: Date, lang: Languages) {
  return format(date, dateTimeFormat, { locale: locales[lang] });
}

export function formatDate(date: Date, lang: Languages) {
  return format(date, dateFormat, { locale: locales[lang] });
}

export function formatRelativeTime(
  from: Date,
  to: string | number | Date,
  lang: Languages,
) {
  return formatRelative(from, to, { locale: locales[lang] });
}

export function formatNumber(value: number, lang: Languages) {
  return new Intl.NumberFormat(lang).format(value);
}
