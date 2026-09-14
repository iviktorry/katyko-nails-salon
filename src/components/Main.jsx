import { hero, about, works, price, contacts } from "../data.json";
//unused: hero: name, title;;

export default function Main() {
  return (
    <main className="h-full flex flex-col gap-10 text-white">
      <section className="pt-2 px-4 flex flex-col gap-3 items-center">
        <nav>
          <ul className="flex justify-center gap-4">
            {hero.navigation.map((item) => (
              <span>{item}</span>
            ))}
          </ul>
        </nav>
        <img src={hero.image} className="pt-15 max-w-lg w-[70%]" alt="" />
        <h1 className="text-6xl relative pl-3 -top-10">{hero.subtitle}</h1>
        <p className="border-l pl-3">{hero.description}</p>
        <button className="px-12 mt-2 py-2 rounded-md bg-stone-600">
          {hero.buttonText}
        </button>
      </section>
      <section className="bg-white text-stone-600">{about.heading}</section>
      <section>{works.heading}</section>
      <section>{price.heading}</section>
      <section>{contacts.heading}</section>
    </main>
  );
}
