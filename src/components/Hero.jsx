import Button from "./Button";
import LanguageSwitcher from "./LanguageSwitcher";
import Sparkles from "./Sparkles";
import { useTranslation } from "react-i18next";

export default function Hero({ hero }) {
  const { t } = useTranslation();
  const items = t("hero.navigation", { returnObjects: true });
  return (
    <section className="flex flex-col items-center gap-0 pb-8">
      <div className="flex w-full justify-between gap-2">
        <nav className="md:self-end">
          <ul className="flex gap-4">
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
        <div className="flex w-[70%] max-w-lg flex-col items-center pt-15 md:w-auto">
          <div className="relative aspect-66/100 max-w-79.5 md:w-58 lg:w-65">
            <img src={hero.image} className="size-full" alt="" />
            <div className="absolute -top-10 -right-9 md:-left-9 lg:-top-12 lg:-left-12">
              <Sparkles />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h1 className="font-heading relative -top-11 max-w-[90%] self-start text-7xl font-bold md:top-0 md:pb-4 lg:text-8xl">
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
