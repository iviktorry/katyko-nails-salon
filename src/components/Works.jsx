import { useState } from "react";
import Button from "./Button";
import { useTranslation } from "react-i18next";

export default function Works({ works }) {
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="works" className="px-6 pt-8 flex flex-col items-center gap-6">
      <h2 className="self-start font-bold text-stone-400 text-7xl font-heading lg:text-8xl">
        {t("works.heading")}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-4">
        {works.items.map((item, index) => {
          const getColumnsNumber = showAll
            ? "block"
            : index < 2
              ? "block"
              : index === 2
                ? "hidden md:block"
                : index < 5
                  ? "hidden lg:block"
                  : "hidden";
          return (
            <div
              key={item.id}
              className={`${getColumnsNumber} self-center aspect-3/4  object-cover overflow-hidden`}
              // max-w-45 md:max-h-60 lg:max-w-60 lg:max-h-80
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
              />
            </div>
          );
        })}
      </div>
      <Button
        onClick={() => setShowAll((prev) => !prev)}
        text={
          showAll ? t("works.buttonTextOpened") : t("works.buttonTextClosed")
        }
        style="text-white bg-stone-400 hover:bg-stone-300"
      />
    </section>
  );
}
