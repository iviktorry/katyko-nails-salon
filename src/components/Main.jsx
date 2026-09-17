import { hero, about, works, price, contacts } from "../locales/en.json";
import About from "./About";
import Contacts from "./Contacts";
import Hero from "./Hero";
import Price from "./Price";
import Works from "./Works";

export default function Main() {
  return (
    <main className="h-full px-4 md:px-14 py-4 text-white font-text font-light lg:text-lg">
      <Hero hero={hero} />
      <div className="py-8 bg-white text-stone-600">
        <About about={about} />
        <Works works={works} />
      </div>
      <Price price={price} />
      <div className="py-4 bg-white">
        <Contacts contacts={contacts} />
      </div>
    </main>
  );
}
