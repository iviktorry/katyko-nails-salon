export default function Button({ onClick, text, style, link }) {
  const commonStyles =
    "w-48 md:w-55 py-3 font-semibold text-center transition-all duration-300 ease-in-out cursor-pointer text-white";
  if (link) {
    return (
      <a href={link} className={`${style} ${commonStyles}`}>
        {text}
      </a>
    );
  } else {
    return (
      <button onClick={onClick} className={`${style} ${commonStyles}`}>
        {text}
      </button>
    );
  }
}
