import Button from "./Button";
import Sparkles from "./Sparkles";
import { useTranslation } from "react-i18next";

export default function Price() {
  const { t } = useTranslation();
  const items = t("price.items", { returnObjects: true });
  return (
    <section id="price" className="flex flex-col items-center pt-4 pb-8">
      <div className="flex w-full justify-between pl-4">
        <Sparkles />
        <h2 className="font-heading text-6xl font-bold text-white sm:text-7xl lg:text-8xl">
          {t("price.heading")}
        </h2>
      </div>
      <ul className="grid w-full gap-3 py-10 lg:max-w-5xl lg:px-0">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between gap-2 border-b border-white md:border-none"
          >
            <span>{item.service}</span>
            <div className="invisible h-px w-full flex-1 bg-white md:visible"></div>
            <span className="whitespace-nowrap">{item.price}</span>
          </li>
        ))}
      </ul>
      <p>{t("price.note")}</p>
      <Button
        text={t("price.buttonText")}
        link="#contacts"
        style="mt-6 bg-stone-600 hover:bg-stone-500"
      />
    </section>
  );
}
