export const languages = {
  en: "English",
};

import en from "./translations/en.json" with { type: "json" };

export const defaultLang = "en";

export const ui = {
  en: en,
} as const;

export type Languages = keyof typeof ui;
