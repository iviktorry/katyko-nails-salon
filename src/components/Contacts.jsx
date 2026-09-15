export default function Contacts({ contacts }) {
  return (
    <section>
      <h2>{contacts.heading}</h2>
      <div className="flex flex-col gap-4">
        {contacts.items.map((item) => (
          <button key={item.id}>
            {item.source}
            <link rel="stylesheet" href={item.link} />
          </button>
        ))}
      </div>
    </section>
  );
}
