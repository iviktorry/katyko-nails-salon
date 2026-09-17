export default function Contacts({ contacts }) {
  return (
    <section
      id="contacts"
      className="flex flex-col items-center md:flex-row text-stone-400"
    >
      <div className="flex flex-col w-full text-center md:text-left">
        <h2 className="pl-8 md:pl-6 lg:pl-12 self-start font-bold text-stone-400 text-7xl lg:text-8xl font-heading">
          {contacts.heading}
        </h2>
        <div className="h-0.5 mt-4 mb-8 w-40 bg-stone-400 self-end md:self-start md:w-50"></div>

        <p className="pl-6 lg:pl-12">{contacts.city}</p>
        <p className="pl-6 lg:pl-12 pb-4">{contacts.text}</p>
      </div>
      <ul className="px-8 flex flex-col w-full gap-6">
        {contacts.items.map((item) => (
          <li key={item.id} className="w-full ring-2 py-3 text-left px-3 hover:scale-101 ease-in-out transition-all duration-300">
            <a href={item.link} className="w-full h-full">
              {item.source}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
