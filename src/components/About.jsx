export default function About({ about }) {
  return (
    <section id="about" className="flex flex-col gap-6">
      <h2 className="self-end font-semibold text-stone-400 text-7xl font-heading">
        {about.heading}
      </h2>
      <img src={about.photo} className="max-w-[65%] self-start" alt="" />
      <p className="pt-8 self-start pr-8">{about.text}</p>
    </section>
  );
}
