import { hero, about, works, price, contacts } from "../data.json";
import About from "./About";
import Hero from "./Hero";
//unused: hero: name, title;;

export default function Main() {
  return (
    <main className="h-full flex flex-col gap-10 text-white font-text">
      <Hero hero={hero} />
      <About about={about} />
      <section>{works.heading}</section>
      <section>{price.heading}</section>
      <section>{contacts.heading}</section>
    </main>
  );
}
