import { hero, about, works, price, contacts } from "../data.json";
import About from "./About";
import Contacts from "./Contacts";
import Hero from "./Hero";
import Price from "./Price";
import Works from "./Works";
//unused: hero: name, title;;

export default function Main() {
  return (
    <main className="h-full py-4 text-white font-text font-light">
      <Hero hero={hero} />
      <div className="px-6 py-8 bg-white text-stone-600">
        <About about={about} />
        <Works works={works} />
      </div>
      <Price price={price} />
      <Contacts contacts={contacts} />
    </main>
  );
}
