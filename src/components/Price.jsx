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
        <h2 className="font-bold text-white text-7xl lg:text-8xl font-heading">
          {t("price.heading")}
        </h2>
      </div> 
      <ul className="grid gap-3 lg:max-w-5xl w-full px-2 lg:px-0 py-10 text-stone-600">
        {items.map((item) => (
          <li key={item.id} className="border-b border-stone-600 md:border-none flex justify-between items-center gap-2">
            <span>{item.service}</span>
            <div className="h-px bg-stone-600 invisible md:visible w-full flex-1"></div>
            <span className="whitespace-nowrap">{item.price}</span>
          </li>
        ))}
      </ul>
      <p>{t("price.note")}</p>
      <Button
        style="mt-6 bg-stone-600 hover:bg-stone-500"
        text={t("price.buttonText")}
      />
    </section>
  );
}
