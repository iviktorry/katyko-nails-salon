import { useState } from "react";
import Button from "./Button";
import { useTranslation } from "react-i18next";
import LightBox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Works({ works }) {
  const [showAll, setShowAll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = works.items.map((item) => ({
    src: item.image,
    alt: item.alt,
  }));

  const { t } = useTranslation();

  return (
    <section id="works" className="flex flex-col items-center gap-6 px-6 pt-8">
      <h2 className="font-heading self-start text-7xl font-bold text-stone-400 lg:text-8xl">
        {t("works.heading")}
      </h2>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-4">
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
              onClick={() => {
                setIndex(index);
                setIsOpen(true);
              }}
              className={`${getColumnsNumber} aspect-3/4 self-center overflow-hidden object-cover`}
              // max-w-45 md:max-h-60 lg:max-w-60 lg:max-h-80
            >
              <img
                src={item.image}
                alt={item.alt}
                className="h-full w-full object-cover transition-all duration-300 hover:scale-105"
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

      <LightBox
        open={isOpen}
        close={() => setIsOpen(false)}
        index={index}
        slides={slides}
      />
    </section>
  );
}
