import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const nav = [
    "Dashboard",
    "Projects",
    "Scans",
    "Schedule",
    "Notifications",
    "Settings",
    "Support",
  ];

  return (
    <aside className="
      hidden md:flex flex-col w-64 min-h-screen
      px-5 py-6
      bg-white/80 dark:bg-white/3
      backdrop-blur-xl
      border-r border-gray-200/60 dark:border-white/10
    ">
      <h1 className="text-xl font-semibold text-teal-500 mb-8">
        aps
      </h1>

      <ul className="space-y-1 flex-1">
        {nav.map((item) => {
          const isActive = location.pathname === "/dashboard";

          return (
            <li key={item}>
              <Link
                to="/dashboard"
                className={`
                  flex items-center gap-3 px-3 py-2 rounded-lg text-sm
                  transition
                  ${
                    isActive
                      ? "bg-teal-500/10 text-teal-500"
                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10"
                  }
                `}
              >
                <span className="w-2 h-2 rounded-full bg-current opacity-60" />
                {item}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="mt-6 text-sm text-gray-500">
        admin@edu.com
      </div>
    </aside>
  );
}