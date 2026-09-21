import { useTranslation } from "react-i18next";

export default function About({ about }) {
  const { t } = useTranslation();
  const items = t("about.items", { returnObjects: true });
  return (
    <section id="about" className="flex flex-col gap-6">
      <div className="flex flex-row-reverse items-center justify-between gap-4 pb-4 md:flex-col">
        <h2 className="font-heading self-end pr-6 text-7xl font-bold text-stone-400 lg:pr-12 lg:text-8xl">
          {t("about.heading")}
        </h2>
        <div className="h-0.5 w-[8%] bg-stone-400 md:w-60 md:self-end"></div>
      </div>

      <div className="flex flex-col px-6 md:flex-row-reverse md:items-start md:gap-10 lg:px-12">
        <img
          src={about.photo}
          className="w-60 self-start sm:w-70 md:w-60"
          alt=""
        />
        <div className="flex flex-col justify-center gap-4 md:gap-12">
          <p className="self-start pt-8 pr-8 md:p-0">{t("about.text")}</p>

          <ul className="flex w-fit flex-col justify-between gap-3 sm:w-full sm:flex-row lg:max-w-4xl">
            {items.map((item) => (
              <li key={item.id} className="border-l border-stone-400 px-2 pb-1">
                <p className="font-heading text-3xl font-bold text-stone-400">
                  {item.title}
                </p>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
