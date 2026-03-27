import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Folder,
  Scan,
  Calendar,
  Bell,
  Settings,
  LifeBuoy,
} from "lucide-react";

export default function Sidebar() {
  const location = useLocation();

  const nav = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Projects", icon: Folder },
    { name: "Scans", icon: Scan },
    { name: "Schedule", icon: Calendar },
    { name: "Notifications", icon: Bell },
    { name: "Settings", icon: Settings },
    { name: "Support", icon: LifeBuoy },
  ];

  return (
    <aside
      className="
        hidden md:flex flex-col w-64 min-h-screen
        bg-white dark:bg-[#0D1117]
        border-r border-gray-200 dark:border-white/5
        transition-colors duration-300
      "
    >
      {/* HEADER */}
      <div className="px-6 py-4.5 border-b border-gray-200 dark:border-white/5">
        <h1 className="text-sm font-semibold tracking-wide text-gray-900 dark:text-white">
          VRB
        </h1>
      </div>

      {/* NAV */}
      <nav className="flex-1 px-3 py-6 space-y-2">
        {nav.map((item) => {
          const isActive = location.pathname === "/dashboard";
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              to="/dashboard"
              className={`
                group flex items-center gap-3 px-3 py-2.5 rounded-md text-sm
                transition-all duration-150

                ${
                  isActive
                    ? `
                      bg-gray-100 dark:bg-white/5
                      text-gray-900 dark:text-white
                      font-medium
                    `
                    : `
                      text-gray-600 dark:text-gray-400
                      hover:bg-gray-100 dark:hover:bg-white/5
                      hover:text-gray-900 dark:hover:text-white
                    `
                }
              `}
            >
              {/* ICON */}
              <Icon
                size={16}
                className="
                  shrink-0
                  opacity-80 group-hover:opacity-100
                "
              />

              {/* LABEL */}
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* FOOTER */}
      <div className="px-6 py-5 border-t border-gray-200 dark:border-white/5">
        <p className="text-xs text-gray-500">
          Vishal.com
        </p>
      </div>
    </aside>
  );
}