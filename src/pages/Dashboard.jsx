import Sidebar from "../components/layout/Sidebar";
import StatusChip from "../components/ui/StatusChip";
import Toast from "../components/ui/Toast";
import Topbar from "../components/layout/Topbar";
import { scans } from "../data/mockData";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Dashboard({ theme, setTheme }) {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [toast, setToast] = useState(null);

  const filteredScans = scans.filter((scan) =>
    scan.name.toLowerCase().includes(search.toLowerCase())
  );

  const stats = [
    { label: "Critical", value: 86, color: "text-red-500" },
    { label: "High", value: 16, color: "text-orange-500" },
    { label: "Medium", value: 26, color: "text-yellow-500" },
    { label: "Low", value: 16, color: "text-green-500" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100 transition-colors duration-300">

      <Sidebar />

      <div className="flex flex-col flex-1">

        <Topbar theme={theme} setTheme={setTheme} />

        <div className="px-3 sm:px-6 md:px-10 py-4 sm:py-6 md:py-8">

          {/* Stats */}
          <div className="grid grid-cols-2 gap-2 sm:gap-5 mb-5 md:mb-10">
            {stats.map((item) => (
              <div
                key={item.label}
                className="bg-white/80 dark:bg-white/3 border border-gray-200/60 dark:border-white/10 rounded-xl p-3 sm:p-5 shadow-sm"
              >
                <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">
                  {item.label}
                </p>
                <p className={`text-base sm:text-2xl md:text-3xl font-semibold mt-1 ${item.color}`}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          {/* Search */}
          <input
            placeholder="Search scans..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300/70 dark:border-gray-700 bg-white/80 dark:bg-white/3 mb-3"
          />

          {/* Buttons */}
          <div className="flex gap-2 overflow-x-auto mb-4">
            {["Filter", "Column", "+ Scan"].map((btn) => (
              <button
                key={btn}
                onClick={() => setToast(btn)}
                className="px-3 py-2 text-xs rounded-lg border border-gray-300/70 dark:border-gray-700 whitespace-nowrap"
              >
                {btn}
              </button>
            ))}
          </div>

          {/* ✅ MOBILE VIEW (Cards) */}
          <div className="block sm:hidden space-y-3">
            {filteredScans.map((scan) => (
              <div
                key={scan.id}
                onClick={() => navigate(`/scan/${scan.id}`)}
                className="p-3 rounded-xl border border-gray-200/60 dark:border-white/10 bg-white/80 dark:bg-white/3 cursor-pointer"
              >
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm font-medium">{scan.name}</p>
                  <StatusChip status={scan.status} />
                </div>

                <p className="text-xs text-gray-500">{scan.type}</p>

                <div className="flex justify-between text-xs mt-2">
                  <span className="text-teal-500 font-medium">
                    {scan.progress}%
                  </span>
                  <span className="text-gray-500">{scan.lastScan}</span>
                </div>
              </div>
            ))}
          </div>

          {/* DESKTOP TABLE */}
          <div className="hidden sm:block bg-white/80 dark:bg-white/3 border border-gray-200/60 dark:border-white/10 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b border-gray-200/70 dark:border-white/10 text-gray-500">
                  <tr>
                    <th className="px-6 py-3 text-left">Scan Name</th>
                    <th>Type</th>
                    <th>Status</th>
                    <th>Progress</th>
                    <th>Last Scan</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredScans.map((scan) => (
                    <tr
                      key={scan.id}
                      onClick={() => navigate(`/scan/${scan.id}`)}
                      className="border-b border-gray-100 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-white/5 cursor-pointer"
                    >
                      <td className="px-6 py-3 font-medium">{scan.name}</td>
                      <td>{scan.type}</td>
                      <td><StatusChip status={scan.status} /></td>
                      <td className="text-teal-500">{scan.progress}%</td>
                      <td>{scan.lastScan}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>

      {toast && <Toast message={toast} onClose={() => setToast(null)} />}
    </div>
  );
}