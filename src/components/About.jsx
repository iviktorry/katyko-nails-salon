export default function About({ about }) {
  return (
    <section id="about" className="flex flex-col gap-6 ">
      <div className="flex justify-between items-center pr-6 lg:pr-12">
        <div className="h-0.5 w-[10%] md:w-50 bg-stone-400"></div>
        <h2 className="self-end font-bold text-stone-400 text-7xl lg:text-8xl font-heading">
          {about.heading}
        </h2>
      </div>

      <div className="px-6 lg:px-12 flex flex-col md:flex-row-reverse md:gap-10">
        <img src={about.photo} className="w-65 sm:w-75 md:w-60 lg:w-75 self-start" alt="" />
        <p className="pt-8 self-start pr-8 md:p-0">{about.text}</p>
      </div>
    </section>
  );
}
