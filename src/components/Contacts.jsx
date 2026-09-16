export default function Contacts({ contacts }) {
  return (
    <section
      id="contacts"
      className="px-8 py-8 text-stone-400 bg-white flex flex-col gap-8"
    >
      <h2 className="self-start font-semibold text-stone-400 text-7xl font-heading">
        {contacts.heading}
      </h2>
      <ul className="flex flex-col gap-6">
        {contacts.items.map((item) => (
          <li key={item.id} className="w-full ring-2 py-3 text-left px-3">
            <a href={item.link} className="w-full h-full">
              {item.source}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
