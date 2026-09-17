import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enData from "./locales/en.json";
import ruData from "./locales/ru.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enData },
    ru: { translation: ruData },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
