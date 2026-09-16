export default function Sparkles() {
  return (
    <div className="relative">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-23 w-23 text-white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z"
          fill="currentColor"
        />
      </svg>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-10 w-10 text-stone-600 absolute -bottom-5 -right-2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
