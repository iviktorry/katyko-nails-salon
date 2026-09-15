import { hero, about, works, price, contacts } from "../data.json";
import About from "./About";
import Hero from "./Hero";
import Works from "./Works";
//unused: hero: name, title;;

export default function Main() {
  return (
    <main className="h-full flex flex-col gap-10 text-white font-text">
      <Hero hero={hero} />
      <div className="px-6 py-8 flex flex-col gap-7 bg-white text-stone-600">
        <About about={about} />
        <Works works={works} />
      </div>
      <section>{price.heading}</section>
      <section>{contacts.heading}</section>
    </main>
  );
}
