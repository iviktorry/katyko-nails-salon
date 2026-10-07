import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  function changeLanguage(lng) {
    i18n.changeLanguage(lng);
  }
  return (
    <div className="flex gap-2">
      <button
        onClick={() => changeLanguage("en")}
        className={`px-2.5 py-1 transition-all duration-200 ease-in-out hover:scale-110 ${i18n.language === "en" ? "underline" : ""}`}
      >
        En
      </button>
      <button
        onClick={() => changeLanguage("ru")}
        className={`px-2.5 py-1 transition-all duration-200 ease-in-out hover:scale-110 ${i18n.language === "ru" ? "underline" : ""}`}
      >
        Ru
      </button>
    </div>
  );
}
