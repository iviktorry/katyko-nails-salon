import Sparkles from "./Sparkles";

export default function Price({ price }) {
  return (
    <section id="price" className="flex flex-col items-center pt-4 pb-8">
      <div className="flex w-full justify-between pl-4">
        <Sparkles />
        <h2 className="font-semibold text-white text-7xl font-heading">
          {price.heading}
        </h2>
      </div>
      <ul className="flex flex-col gap-3 w-full px-6 py-10 text-stone-600">
        {price.items.map((item) => (
          <li key={item.id} className="flex justify-between">
            <span>{item.service}</span>
            <span>{item.price}</span>
          </li>
        ))}
      </ul>
      <p>{price.note}</p>
      <button className="px-15 mt-6 py-3 bg-stone-600">
        {price.buttonText}
      </button>
    </section>
  );
}
