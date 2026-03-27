import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ theme, setTheme }) {
  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="
        relative flex items-center
        w-12 h-6 px-1 rounded-full

        bg-gray-200 dark:bg-white/10
        border border-gray-300 dark:border-white/10

        transition-colors duration-300
      "
    >
      {/* LEFT ICON */}
      <Sun
        size={12}
        className="absolute left-1 text-gray-500 dark:text-gray-400"
      />

      {/* RIGHT ICON */}
      <Moon
        size={12}
        className="absolute right-1 text-gray-500 dark:text-gray-400"
      />

      {/* THUMB */}
      <div
        className={`
          flex items-center justify-center
          w-4 h-4 rounded-full

          bg-white dark:bg-gray-300
          shadow-sm

          transform transition-transform duration-300
          ${isDark ? "translate-x-6" : "translate-x-0"}
        `}
      >
        {isDark ? (
          <Moon size={10} className="text-gray-700" />
        ) : (
          <Sun size={10} className="text-gray-700" />
        )}
      </div>
    </button>
  );
}