import { hero, about, works, price, contacts } from "../data.json";
import Hero from "./Hero";
//unused: hero: name, title;;

export default function Main() {
  return (
    <main className="h-full flex flex-col gap-10 text-white font-text">
      <Hero hero={hero} />
      <section className="bg-white text-stone-600">{about.heading}</section>
      <section>{works.heading}</section>
      <section>{price.heading}</section>
      <section>{contacts.heading}</section>
    </main>
  );
}
