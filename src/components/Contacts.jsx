import { useTranslation } from "react-i18next";
import Button from "./Button";
import { useState } from "react";

export default function Contacts() {
  const { t } = useTranslation();
  const items = t("contacts.items", { returnObjects: true });
  const style =
    "ring hover:ring-2 ring-stone-400 text-stone-600 pl-2 transition-all duration-300 ease-in-out";

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "437bb0b4-d002-44cf-99e5-a8a148df99a7");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setResult(data.success ? "Success" : "Error");

      if (data.success) {
        setResult("Success");
        event.target.reset();
      } else {
        setResult("Error");
      }
    } catch (error) {
      setResult("Error");
      console.error(error);
    }
  };
  return (
    <section
      id="contacts"
      className="flex flex-col gap-8 lg:flex-row text-stone-400"
    >
      <div className="flex-1">
        <div className="flex flex-col w-full md:text-left">
          <h2 className="px-6 xl:pr-0 lg:pl-12 self-start font-bold text-stone-400 text-7xl lg:text-8xl font-heading">
            {t("contacts.heading")}
          </h2>
          <div className="h-0.5 mt-3 mb-5 w-40 bg-stone-400 self-end md:self-start md:w-50"></div>
        </div>

        <div className="flex flex-col px-6 lg:pr-0 xl:pl-12 w-full">
          <p>{t("contacts.city")}</p>
          <p>{t("contacts.text")}</p>
          <ul className="pt-1 w-full flex flex-col gap-4">
            {items.map((item) => (
              <li
                key={item.id}
                className={`w-full py-3 text-left px-3 ${style}`}
              >
                <a href={item.link} className="min-size-full">
                  {item.source}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <form
        onSubmit={onSubmit}
        className="flex-1 min-w-1 w-full px-6 lg:pl-0 xl:pr-12 self-end"
      >
        <p>{t("contacts.form.heading")}</p>
        <div className="flex flex-col md:flex-row md:gap-4">
          <label className="flex flex-col flex-1 pb-2 min-w-1 text-sm ">
            {t("contacts.form.nameLabel")}
            <input
              type="text"
              name="name"
              className={`placeholder:text-sm h-7 mt-1 focus:outline-0 focus:ring-stone-600 ${style}`}
              placeholder={t("contacts.form.namePlaceholder")}
            />
          </label>
          <label className="flex flex-col flex-1 pb-2 min-w-1 text-sm ">
            {t("contacts.form.emailLabel")}
            <input
              type="email"
              name="email"
              className={`placeholder:text-sm h-7 mt-1 focus:outline-0 focus:ring-stone-600 ${style}`}
              placeholder={t("contacts.form.emailPlaceholder")}
            />
          </label>
        </div>
        <div className="lg:mt-2 flex gap-4 flex-col sm:flex-row sm:items-end">
          <label className="flex-1 flex flex-col text-sm">
            {t("contacts.form.messageLabel")}
            <textarea
              name="message"
              className={`resize-none mt-1 h-13 pt-1 focus:outline-0 focus:ring-stone-600 ${style}`}
            />
          </label>
          <Button
            text={t("contacts.form.buttonText")}
            style="bg-stone-400 ring ring-stone-400 hover:bg-stone-300 h-13 text-base lg:text-lg"
          />
          <p className="sr-only" aria-live="polite">
            {result === "Success"
              ? t("contacts.form.successMessage")
              : t("contacts.form.errorMessage")}
          </p>
        </div>
      </form>
    </section>
  );
}
