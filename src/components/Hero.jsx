import Button from "./Button";
import LanguageSwitcher from "./LanguageSwitcher";
import Sparkles from "./Sparkles";
import { useTranslation } from "react-i18next";

export default function Hero({ hero }) {
  const { t } = useTranslation();
  const items = t("hero.navigation", { returnObjects: true });
  return (
    <section className="flex flex-col items-center gap-0 pb-8">
      <div className="flex w-full justify-between">
        <nav className="md:self-end">
          <ul className="flex justify-center gap-4">
            {items.map((item) => (
              <li
                key={item.link}
                className="deration-300 transition-all hover:scale-107"
              >
                <a href={`#${item.link}`}>{item.text}</a>
              </li>
            ))}
          </ul>
        </nav>
        <LanguageSwitcher />
      </div>
      <div className="flex flex-col items-center md:w-full md:flex-row-reverse md:justify-between md:gap-6">
        <div className="relative w-[70%] max-w-lg pt-15 md:w-auto">
          <img
            src={hero.image}
            className="aspect-auto md:max-h-100 md:w-full"
            alt=""
          />
          <div className="absolute top-2 -right-10 md:-left-11">
            <Sparkles />
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h1 className="font-heading relative -top-11 max-w-[90%] self-start pl-2 text-7xl font-bold md:top-0 md:p-0 md:pb-4 lg:text-8xl">
            {t("hero.subtitle")}
          </h1>
          <p className="border-l pl-2">{t("hero.description")}</p>
          <Button
            text={t("hero.buttonText")}
            link="#contacts"
            style="bg-stone-600 hover:bg-stone-500 mt-6"
          />
        </div>
      </div>
    </section>
  );
}
