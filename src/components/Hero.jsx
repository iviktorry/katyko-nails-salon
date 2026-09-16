import Sparkles from "./Sparkles";

export default function Hero({ hero }) {
  return (
    <section className=" pb-8 flex flex-col gap-0 items-center ">
      <nav className="md:self-end">
        <ul className="flex justify-center gap-4">
          {hero.navigation.map((item) => (
            <li key={item.link}>
              <a href={`#${item.link}`}>{item.text}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex flex-col items-center md:flex-row-reverse md:gap-6 md:justify-between md:w-full">
        <div className="relative pt-15 max-w-lg w-[70%] md:w-auto">
          <img src={hero.image} className="md:max-h-100 md:w-full" alt="" />
          <div className="absolute top-2 -right-10 md:-right-4">
            <Sparkles />
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-7xl lg:text-8xl relative self-start pl-2 -top-11 max-w-[90%] md:p-0 md:top-0 md:pb-4 font-bold font-heading">
            {hero.subtitle}
          </h1>
          <p className="border-l pl-2">{hero.description}</p>
          <button className="px-15 mt-6 py-3 bg-stone-600">
            {hero.buttonText}
          </button>
        </div>
      </div>
    </section>
  );
}
