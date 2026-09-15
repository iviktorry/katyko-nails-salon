export default function Price({ price }) {
  return (
    <section>
      <h1>{price.heading}</h1>
      <ul className="flex flex-col gap-2">
        {price.items.map((item) => (
          <li key={item.id} className="flex justify-between">
            <span>{item.service}</span>
            <span>{item.price}</span>
          </li>
        ))}
      </ul>
      <p>note</p>
      <button className="px-15 mt-6 py-3 bg-stone-600">
        {price.buttonText}
      </button>
    </section>
  );
}
