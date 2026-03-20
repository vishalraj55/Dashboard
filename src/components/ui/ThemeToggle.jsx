export default function ThemeToggle({ theme, setTheme }) {
  const isDark = theme === "dark";

  return (
    <button
      onClick={() =>
        setTheme(isDark ? "light" : "dark")
      }
      className={`
        relative flex items-center
        w-12 h-6 rounded-full p-1

        transition-colors duration-300
        ${isDark ? "bg-gray-700" : "bg-gray-300"}
      `}
    >
      {/* knob */}
      <div
        className={`
          w-5 h-5 rounded-full bg-white shadow-md
          transform transition-transform duration-300
          flex items-center justify-center text-[10px]

          ${isDark ? "translate-x-6" : "translate-x-0"}
        `}
      >
        {isDark ? "🌙" : "☀️"}
      </div>
    </button>
  );
}