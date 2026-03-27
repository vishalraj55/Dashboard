import ThemeToggle from "../ui/ThemeToggle";
import { Menu } from "lucide-react";

export default function Topbar({ theme, setTheme }) {
  return (
    <div
      className="
        sticky top-0 z-40
        flex items-center justify-between
        px-5 py-3

        bg-white dark:bg-[#0D1117]
        border-b border-gray-200 dark:border-white/5

        transition-colors duration-300
      "
    >
      {/* LEFT */}
      <div className="flex items-center gap-3">

        {/* MENU BUTTON (future sidebar toggle) */}
        <button
          className="
            md:hidden p-2 rounded-md
            text-gray-600 dark:text-gray-400
            hover:bg-gray-100 dark:hover:bg-white/5
            hover:text-gray-900 dark:hover:text-white
            transition
          "
        >
          <Menu size={18} />
        </button>

        <h2 className="text-sm font-medium text-gray-900 dark:text-white">
          Dashboard
        </h2>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">

        <ThemeToggle theme={theme} setTheme={setTheme} />

        {/* AVATAR */}
        <div
          className="
            w-8 h-8 rounded-full
            bg-gray-200 dark:bg-white/10
            flex items-center justify-center
            text-xs font-medium
            text-gray-700 dark:text-gray-300
          "
        >
          A
        </div>

      </div>
    </div>
  );
}