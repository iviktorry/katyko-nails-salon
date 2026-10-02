import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  function changeLanguage(lng) {
    i18n.changeLanguage(lng);
  }
  return (
    <div className="flex flex-col sm:flex-row sm:gap-4">
      <button
        onClick={() => changeLanguage("en")}
        className={`${i18n.language === "en" ? "font-bold underline" : ""}`}
      >
        En
      </button>
      <button
        onClick={() => changeLanguage("ru")}
        className={`${i18n.language === "ru" ? "font-bold underline" : ""}`}
      >
        Ru
      </button>
    </div>
  );
}
