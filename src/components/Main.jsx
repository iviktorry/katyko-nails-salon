import { hero, about, works, price, contacts } from "../data.json";

export default function Main() {
  return (
    <main className="h-full flex flex-col text-white bg-[#c5a58e]">
      <section>
        <nav>
          <ul>
            {hero.navigation.map((item) => (
              <span>{item}</span>
            ))}
          </ul>
        </nav>
        <h2>{hero.name}</h2>
        <h1>{hero.title}</h1>
        <p>{hero.subtitle}</p>
        <p>{hero.description}</p>
        <button>{hero.buttonText}</button>
      </section>
      <section>{about.heading}</section>
      <section>{works.heading}</section>
      <section>{price.heading}</section>
      <section>{contacts.heading}</section>
    </main>
  );
}
