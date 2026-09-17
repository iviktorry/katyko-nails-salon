import { useTranslation } from "react-i18next";

export default function About({ about }) {
  const { t } = useTranslation();
  const items = t("about.items", { returnObjects: true });
  return (
    <section id="about" className="flex flex-col gap-6">
      <div className="flex flex-row-reverse md:flex-col pb-4 justify-between gap-4 items-center ">
        <h2 className="self-end font-bold text-stone-400 text-7xl lg:text-8xl pr-6 lg:pr-12 font-heading">
          {t("about.heading")}
        </h2>
        <div className="w-[8%] md:self-end h-0.5 md:w-60 bg-stone-400"></div>
      </div>

      <div className="px-6 lg:px-12 flex flex-col md:items-start md:flex-row-reverse md:gap-10">
        <img
          src={about.photo}
          className="w-60 sm:w-70 md:w-60 self-start"
          alt=""
        />
        <div className="flex flex-col justify-center gap-4 md:gap-12">
          <p className="pt-8 self-start pr-8 md:p-0">{t("about.text")}</p>

          <ul className="w-fit flex flex-col sm:flex-row gap-3 sm:w-full lg:max-w-4xl justify-between ">
            {items.map((item) => (
              <li key={item.id} className="border-l pb-1 px-2 border-stone-400">
                <p className="text-3xl font-heading font-bold text-stone-400">
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
