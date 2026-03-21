export default function ThemeToggle({ theme, setTheme }) {
  const isDark = theme === "dark";

  return (
    <button
      onClick={() =>
        setTheme(isDark ? "light" : "dark")
      }
      className={`
        relative flex items-center
        w-14 h-7 p-1 rounded-full

        backdrop-blur-xl
        border border-white/20 dark:border-white/10

        transition-all duration-300
        ${isDark ? "bg-white/10" : "bg-gray-200/70"}
      `}
    >
      {/* Track glow */}
      <div
        className={`
          absolute inset-0 rounded-full
          transition-opacity duration-300
          ${isDark ? "opacity-100 bg-teal-500/10" : "opacity-0"}
        `}
      />

      {/* button */}
      <div
        className={`
          w-5 h-5 rounded-full
          bg-white dark:bg-gray-200
          shadow-md

          flex items-center justify-center text-[10px]

          transform transition-transform duration-300
          ${isDark ? "translate-x-7" : "translate-x-0"}
        `}
      >
        {isDark ? "☀️" : "🌑"}
      </div>
    </button>
  );
}