export default function Hero({ hero }) {
  // {navigation, image, subtitle, description, buttonText}
  return (
    <section className="pt-2 px-4 flex flex-col gap-0 items-center font-extralight">
      <nav>
        <ul className="flex justify-center gap-4">
          {hero.navigation.map((item) => (
            <span>{item}</span>
          ))}
        </ul>
      </nav>
      <img src={hero.image} className="pt-15 max-w-lg w-[70%]" alt="" />
      <h1 className="text-7xl relative pl-3 -top-11 max-w-[90%] font-semibold font-heading">
        {hero.subtitle}
      </h1>
      <p className="border-l pl-3">{hero.description}</p>
      <button className="px-12 mt-6 py-2 rounded-md bg-stone-600">
        {hero.buttonText}
      </button>
    </section>
  );
}
