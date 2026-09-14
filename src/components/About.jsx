export default function About({ about }) {
  return (
    <section className="bg-white text-stone-600">
      <h2>{about.heading}</h2>
      <p>{about.text}</p>
      <img src={about.photo} alt="" />
    </section>
  );
}
