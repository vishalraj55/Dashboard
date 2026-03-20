import ThemeToggle from "../ui/ThemeToggle";
import { useState } from "react";

export default function Topbar({ theme, setTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Topbar */}
      <div className="
        sticky top-0 z-40
        flex items-center justify-between
        px-4 py-3

        bg-white/80 dark:bg-white/3
        backdrop-blur-xl

        border-b border-gray-200/60 dark:border-white/10
      ">
        {/* LEFT */}
        <div className="flex items-center gap-3">

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-lg p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10"
          >
            ☰
          </button>

          <h2 className="text-sm sm:text-base font-medium">
            Dashboard
          </h2>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} setTheme={setTheme} />

          <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center text-xs font-semibold text-teal-500">
            A
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {open && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setOpen(false)}
          />

          <div className="
            fixed top-0 left-0 h-full w-64 z-50
            bg-white dark:bg-[#121212]
            border-r border-gray-200 dark:border-gray-800
            p-6
          ">
            <button onClick={() => setOpen(false)} className="mb-6">
              ✕
            </button>

            <p className="text-lg font-semibold mb-4 text-teal-500">
              aps
            </p>

            <ul className="space-y-3">
              {["Dashboard","Projects","Scans","Schedule","Notifications","Settings","Support"].map(item => (
                <li key={item}>
                  <a href="/dashboard" className="block text-sm text-gray-600 dark:text-gray-400">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
}