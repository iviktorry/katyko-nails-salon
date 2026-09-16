import Sparkles from "./Sparkles";

export default function Price({ price }) {
  return (
    <section id="price" className="flex flex-col items-center pt-4 pb-8">
      <div className="flex w-full justify-between pl-4">
        <Sparkles />
        <h2 className="font-bold text-white text-7xl lg:text-8xl font-heading">
          {price.heading}
        </h2>
      </div>
      <ul className="grid gap-3 lg:grid-cols-2 lg:justify-between lg:gap-x-10 lg:max-w-5xl w-full px-6 lg:px-0 py-10 text-stone-600">
        {price.items.map((item) => (
          <li key={item.id} className="flex justify-between items-center gap-4">
            <span>{item.service}</span>
            <div className="h-px bg-stone-600 w-full flex-1"></div>
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
