import Sparkles from "./Sparkles";

export default function Hero({ hero }) {
  // {navigation, image, subtitle, description, buttonText}
  return (
    <section className="px-6 pb-8 flex flex-col gap-0 items-center ">
      <nav>
        <ul className="flex justify-center gap-4">
          {hero.navigation.map((item) => (
            <li key={item}>
              <a href={`#${item.link}`}>{item.text}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="relative pt-15 max-w-lg w-[70%]">
        <img src={hero.image} alt="" />
        <div className="absolute top-2 -right-10">
          <Sparkles />
        </div>
      </div>
      <h1 className="text-7xl relative self-start pl-2 -top-11 max-w-[90%] font-semibold font-heading">
        {hero.subtitle}
      </h1>
      <p className="border-l pl-2">{hero.description}</p>
      <button className="px-15 mt-6 py-3 bg-stone-600">
        {hero.buttonText}
      </button>
    </section>
  );
}
