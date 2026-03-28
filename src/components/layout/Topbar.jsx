import ThemeToggle from "../ui/ThemeToggle";
import { Menu } from "lucide-react";

export default function Topbar({ theme, setTheme, onMenuClick }) {
  return (
    <div
      className="
        sticky top-0 z-40
        flex items-center justify-between
        px-4 sm:px-6 py-3

        bg-white/80 dark:bg-[#0D1117]/80
        backdrop-blur-md

        border-b border-gray-200/70 dark:border-white/10

        transition-all duration-300
      "
    >
      {/* LEFT */}
      <div className="flex items-center gap-3">

        {/* ✅ WORKING MENU BUTTON */}
        <button
          onClick={onMenuClick}
          className="
            md:hidden p-2 rounded-lg
            text-gray-600 dark:text-gray-400

            hover:bg-gray-100 dark:hover:bg-white/5
            hover:text-gray-900 dark:hover:text-white

            transition-all duration-200
          "
        >
          <Menu size={18} />
        </button>

        {/* TITLE */}
        <h2 className="text-sm sm:text-base font-semibold tracking-tight text-gray-900 dark:text-white">
          Dashboard
        </h2>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3 sm:gap-4">

        <ThemeToggle theme={theme} setTheme={setTheme} />

        {/* AVATAR */}
        <div
          className="
            w-8 h-8 rounded-full
            bg-linear-to-br from-gray-200 to-gray-300
            dark:from-white/10 dark:to-white/5

            flex items-center justify-center
            text-xs font-semibold

            text-gray-700 dark:text-gray-300
          "
        >
          V
        </div>

      </div>
    </div>
  );
}