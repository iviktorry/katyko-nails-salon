export default function Button({ onClick, text, style }) {
  return (
    <button
      onClick={onClick}
      className={`${style} w-48 md:w-55 py-3 transition-all duration-300 ease-in-out cursor-pointer text-white`}
    >
      {text}
    </button>
  );
}
