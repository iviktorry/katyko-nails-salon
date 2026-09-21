import { hero, about, works, price, contacts } from "../locales/en.json";
import About from "./About";
import Contacts from "./Contacts";
import Hero from "./Hero";
import Price from "./Price";
import Works from "./Works";

export default function Main() {
  return (
    <main className="font-text h-full px-4 py-4 font-light text-white md:px-14 lg:text-lg">
      <Hero hero={hero} />
      <div className="bg-white py-8 text-stone-600">
        <About about={about} />
        <Works works={works} />
      </div>
      <Price price={price} />
      <div className="bg-white py-8">
        <Contacts contacts={contacts} />
      </div>
    </main>
  );
}
