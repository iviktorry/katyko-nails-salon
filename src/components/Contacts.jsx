import { useTranslation } from "react-i18next";

export default function Contacts() {
  const { t } = useTranslation();
  const items = t("contacts.items", { returnObjects: true });
  return (
    <section
      id="contacts"
      className="flex flex-col items-center md:flex-row text-stone-400"
    >
      <div className="flex flex-col w-full text-center md:text-left">
        <h2 className="pl-8 md:pl-6 lg:pl-12 self-start font-bold text-stone-400 text-7xl lg:text-8xl font-heading">
          {t("contacts.heading")}
        </h2>
        <div className="h-0.5 mt-3 mb-5 w-40 bg-stone-400 self-end md:self-start md:w-50"></div>

        <p className="pl-6 lg:pl-12">{t("contacts.city")}</p>
        <p className="pl-6 lg:pl-12 pb-4">{t("contacts.text")}</p>
      </div>
      <ul className="px-8 lg:px-12 flex flex-col h-full justify-between w-full gap-6">
        {items.map((item) => (
          <li
            key={item.id}
            className="w-full ring-2 py-3 text-left px-3 hover:scale-101 ease-in-out transition-all duration-300"
          >
            <a href={item.link} className="w-full h-full">
              {item.source}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
