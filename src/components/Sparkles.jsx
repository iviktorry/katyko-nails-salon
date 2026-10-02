export default function Sparkles() {
  return (
    <div className="relative size-18 lg:size-23">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="size-18 text-white lg:size-23"
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
        className="absolute -right-4 -bottom-3 size-8 text-stone-600 lg:-right-2 lg:-bottom-5 lg:size-10"
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
