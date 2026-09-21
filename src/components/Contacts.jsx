import { useTranslation } from "react-i18next";
import Button from "./Button";
import { useEffect, useState } from "react";
import { CircleCheck } from "lucide-react";

export default function Contacts() {
  const [result, setResult] = useState("");

  useEffect(() => {
    if (result === "Success") {
      const timer = setTimeout(() => {
        setResult("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [result]);

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

  const { t } = useTranslation();
  const items = t("contacts.items", { returnObjects: true });
  const style =
    "ring hover:ring-2 ring-stone-400 pl-2 outline-0 focus:ring-[#996c4b] focus:ring-2 transition-all duration-300 ease-in-out";

  return (
    <section
      id="contacts"
      className="flex flex-col gap-8 text-stone-400 lg:flex-row"
    >
      <div className="flex-1">
        <div className="flex w-full flex-col md:text-left">
          <h2 className="font-heading self-start px-6 text-7xl font-bold text-stone-400 lg:pl-12 lg:text-8xl xl:pr-0">
            {t("contacts.heading")}
          </h2>
          <div className="mt-3 mb-5 h-0.5 w-40 self-end bg-stone-400 md:w-50 md:self-start"></div>
        </div>

        <div className="flex w-full flex-col px-6 lg:pr-0 xl:pl-12">
          <p>{t("contacts.city")}</p>
          <p>{t("contacts.text")}</p>
          <ul className="flex w-full flex-col gap-4 pt-1">
            {items.map((item) => (
              <li
                key={item.id}
                className={`w-full px-3 py-3 text-left ${style}`}
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
        className="w-full min-w-1 flex-1 self-end px-6 lg:pl-0 xl:pr-12"
      >
        <p>{t("contacts.form.heading")}</p>
        <div className="flex flex-col md:flex-row md:gap-4">
          <label className="flex min-w-1 flex-1 flex-col pb-2 text-sm">
            {t("contacts.form.nameLabel")}
            <input
              type="text"
              name="name"
              className={`mt-1 h-7 text-stone-600 placeholder:text-sm ${style}`}
              placeholder={t("contacts.form.namePlaceholder")}
              required
            />
          </label>
          <label className="flex min-w-1 flex-1 flex-col pb-2 text-sm">
            {t("contacts.form.emailLabel")}
            <input
              type="email"
              name="email"
              className={`mt-1 h-7 text-stone-600 placeholder:text-sm ${style}`}
              placeholder={t("contacts.form.emailPlaceholder")}
              required
            />
          </label>
        </div>
        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-end lg:mt-2">
          <label className="flex flex-1 flex-col text-sm">
            {t("contacts.form.messageLabel")}
            <textarea
              name="message"
              className={`mt-1 h-13 resize-none border-0 pt-1 text-stone-600 ${style}`}
              required
            />
          </label>
          <div className="relative w-fit">
            <Button
              text={t("contacts.form.buttonText")}
              style="bg-stone-400 ring ring-stone-400 hover:bg-stone-300 h-13 text-base lg:text-lg"
            />
            <div
              role="status"
              aria-live="polite"
              className={`absolute left-1/2 flex -translate-x-1/2 items-center gap-2 bg-stone-100 px-2 py-1 text-sm font-semibold whitespace-nowrap text-stone-400 shadow-md shadow-stone-600/30 transition-all duration-300 ease-out lg:text-base ${
                result === "Success"
                  ? "-top-12 translate-y-0 opacity-100"
                  : "pointer-events-none top-1 translate-y-2 opacity-0"
              }`}
            >
              <CircleCheck />
              <span>{t("contacts.form.messageSent")}</span>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
