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
    { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    { name: "Projects", icon: Folder, path: "/projects" },
    { name: "Scans", icon: Scan, path: "/scans" },
    { name: "Schedule", icon: Calendar, path: "/schedule" },
    { name: "Notifications", icon: Bell, path: "/notifications" },
    { name: "Settings", icon: Settings, path: "/settings" },
    { name: "Support", icon: LifeBuoy, path: "/support" },
  ];

  const handleClick = (e, item) => {
    if (item.name !== "Dashboard") {
      e.preventDefault();
      alert("⚠️ This is just a UI-based project. This section is not clickable.");
    }
  };

  return (
    <aside
      className="
        flex flex-col w-64 min-h-screen
        bg-white dark:bg-[#0D1117]
        border-r border-gray-200 dark:border-white/5
        transition-colors duration-300
      "
    >
      {/* HEADER */}
      <div className="px-6 py-4.5 border-b border-gray-200 dark:border-white/5">
        <h1 className="text-sm font-semibold tracking-wide text-gray-900 dark:text-white">
          VR
        </h1>
      </div>

      {/* NAV */}
      <nav className="flex-1 px-3 py-6 space-y-2">
        {nav.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname.startsWith(item.path);

          return (
            <Link
              key={item.name}
              to={item.path}
              onClick={(e) => handleClick(e, item)}
              className={`
                group flex items-center gap-3 px-3 py-2.5 rounded-md text-sm
                transition-all duration-150

                ${
                  isActive && item.name === "Dashboard"
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
              <Icon
                size={16}
                className="shrink-0 opacity-80 group-hover:opacity-100"
              />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* FOOTER */}
      <div
        className="
          px-4 sm:px-6 py-4
          border-t border-gray-200/70 dark:border-white/10
          bg-white/60 dark:bg-white/3
          backdrop-blur-sm
        "
      >
        <p
          className="
            text-xs text-gray-500 dark:text-gray-400
            text-center sm:text-left
          "
        >
          <a
            href="https://vishal--rajbhar.web.app"
            target="_blank"
            rel="noopener noreferrer"
            className="
              hover:text transition-colors duration-200
              font-medium
            "
          >
            © {new Date().getFullYear()} Vishal Rajbhar
          </a>
        </p>
      </div>
    </aside>
  );
}