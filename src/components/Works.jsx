export default function Works({ works }) {
  return (
    <section className="flex flex-col items-center gap-6 pt-8">
      <h2 className="self-start font-semibold text-stone-400 text-7xl font-heading">
        {works.heading}
      </h2>
      <div className="grid grid-cols-2 gap-2">
        {works.items.map((item, index) => (
          <div
            key={item.id}
            className={`overflow-hidden ${index === 1 ? "translate-y-7" : ""}`}
          >
            <img src={item.image} className="object-cover" alt={item.alt} />
          </div>
        ))}
      </div>
      <button className="px-15 py-3 text-white bg-stone-400">
        {works.buttonText}
      </button>
    </section>
  );
}
