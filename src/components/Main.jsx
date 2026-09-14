import { hero, about, works, price, contacts } from "../data.json";

export default function Main() {
  return (
    <main className="h-full flex flex-col text-white bg-[#c5a58e]">
      <section>{hero.title}</section>
      <section>{about.heading}</section>
      <section>{works.heading}</section>
      <section>{price.heading}</section>
      <section>{contacts.heading}</section>
    </main>
  );
}
