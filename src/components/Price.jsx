export default function Price({ price }) {
  return (
    <section className="flex flex-col items-center ">
      <h2 className="self-end font-semibold text-white text-7xl font-heading">{price.heading}</h2>
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
