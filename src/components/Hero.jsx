export default function Hero({ hero }) {
  // {navigation, image, subtitle, description, buttonText}
  return (
    <section className="pt-2 px-6 flex flex-col gap-0 items-center font-extralight">
      <nav>
        <ul className="flex justify-center gap-4">
          {hero.navigation.map((item) => (
            <span>{item}</span>
          ))}
        </ul>
      </nav>
      <img src={hero.image} className="pt-15 max-w-lg w-[70%]" alt="" />
      <h1 className="text-7xl relative self-start pl-2 -top-11 max-w-[90%] font-semibold font-heading">
        {hero.subtitle}
      </h1>
      <p className="border-l pl-2">{hero.description}</p>
      <button className="px-15 mt-6 py-3 rounded-sm bg-stone-600">
        {hero.buttonText}
      </button>
    </section>
  );
}
