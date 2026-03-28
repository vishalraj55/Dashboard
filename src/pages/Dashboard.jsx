import Sidebar from "../components/layout/Sidebar";
import StatusChip from "../components/ui/StatusChip";
import Toast from "../components/ui/Toast";
import Topbar from "../components/layout/Topbar";
import { scans } from "../data/mockData";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Filter, ChevronDown, X } from "lucide-react";

export default function Dashboard({ theme, setTheme }) {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [toast, setToast] = useState(null);
  const [statusFilter, setStatusFilter] = useState("All");
  const [openFilter, setOpenFilter] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  const filteredScans = scans.filter((scan) => {
    const matchesSearch = scan.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" ||
      scan.status.toLowerCase() === statusFilter.toLowerCase();

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="h-screen flex overflow-hidden bg-gray-50 dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100">

      {/* DESKTOP SIDEBAR */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* MOBILE SIDEBAR */}
      {openSidebar && (
        <div className="fixed inset-0 z-999 flex">

          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpenSidebar(false)}
          />

          <div className="relative w-64 max-w-[80%] h-full bg-white dark:bg-[#111] shadow-xl z-1000">

            <button
              onClick={() => setOpenSidebar(false)}
              className="absolute top-3 right-3 md:hidden"
            >
              <X size={18} />
            </button>

            <Sidebar />
          </div>
        </div>
      )}

      {/* MAIN */}
      <div className="flex flex-col flex-1 w-full overflow-hidden">

        {/* TOPBAR */}
        <Topbar
          theme={theme}
          setTheme={setTheme}
          onMenuClick={() => setOpenSidebar(true)}
        />

        {/* SCROLL AREA */}
        <div className="flex-1 overflow-y-auto px-3 sm:px-4 md:px-6 py-4">

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {[
              { label: "Critical", value: 86, color: "text-red-500" },
              { label: "High", value: 16, color: "text-orange-500" },
              { label: "Medium", value: 26, color: "text-yellow-500" },
              { label: "Low", value: 16, color: "text-green-500" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white/80 dark:bg-white/3 border border-gray-200/60 dark:border-white/10 rounded-xl p-3"
              >
                <p className="text-xs text-gray-500">{item.label}</p>
                <p className={`text-lg font-semibold ${item.color}`}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          {/* ✅ CLEAN TOOLBAR */}
          <div className="flex flex-col sm:flex-row gap-3 mb-5">

            {/* SEARCH */}
            <div className="flex-1">
              <input
                placeholder="Search scans..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="
                  w-90 px-4 py-3 rounded-xl text-sm
                  border border-gray-300/70 dark:border-gray-700
                  bg-white/80 dark:bg-white/3
                  focus:outline-none focus:ring-2 focus:ring-teal-500/40
                "
              />
            </div>

            {/* FILTER */}
            <div className="relative w-full sm:w-55">

              <button
                onClick={() => setOpenFilter(!openFilter)}
                className="
                  flex items-center justify-between w-full
                  px-4 py-3 rounded-xl text-sm
                  border border-gray-300/70 dark:border-gray-700
                  bg-white/80 dark:bg-white/3
                  hover:bg-gray-100 dark:hover:bg-white/5
                "
              >
                <div className="flex items-center gap-2">
                  <Filter size={16} />
                  {statusFilter}
                </div>
                <ChevronDown size={16} />
              </button>

              {openFilter && (
                <div className="
                  absolute mt-2 w-full
                  bg-white dark:bg-[#111]
                  border border-gray-200 dark:border-gray-700
                  rounded-xl shadow-lg z-20 overflow-hidden
                ">
                  {["All", "Completed", "Scheduled", "Failed"].map((status) => (
                    <button
                      key={status}
                      onClick={() => {
                        setStatusFilter(status);
                        setOpenFilter(false);
                      }}
                      className={`
                        w-full text-left px-4 py-3 text-sm
                        hover:bg-gray-100 dark:hover:bg-white/5
                        ${statusFilter === status ? "text-teal-500 font-medium" : ""}
                      `}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              )}

            </div>
          </div>

          {/* MOBILE CARDS */}
          <div className="block sm:hidden space-y-3">
            {filteredScans.map((scan) => (
              <div
                key={scan.id}
                onClick={() => navigate(`/scan/${scan.id}`)}
                className="p-4 rounded-xl border border-gray-200/60 dark:border-white/10 bg-white/80 dark:bg-white/3"
              >
                <div className="flex justify-between items-start gap-2">
                  <p className="text-sm font-semibold wrap-break-words">
                    {scan.name}
                  </p>
                  <StatusChip status={scan.status} />
                </div>

                <p className="text-xs text-gray-500 mt-1 wrap-break-words">
                  {scan.type}
                </p>

                <div className="flex justify-between text-xs mt-2">
                  <span className="text-teal-500 font-semibold">
                    {scan.progress}%
                  </span>
                  <span className="text-gray-400 wrap-break-words">
                    {scan.lastScan}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* DESKTOP TABLE */}
          <div className="hidden sm:block bg-white/80 dark:bg-white/3 border border-gray-200/60 dark:border-white/10 rounded-2xl overflow-hidden">
            <table className="w-full table-fixed text-sm">
              <thead className="border-b border-gray-200/70 dark:border-white/10 text-gray-500">
                <tr>
                  <th className="w-[30%] px-3 py-3 text-left">Scan Name</th>
                  <th className="w-[15%]">Type</th>
                  <th className="w-[15%]">Status</th>
                  <th className="w-[15%]">Progress</th>
                  <th className="w-[25%]">Last Scan</th>
                </tr>
              </thead>

              <tbody>
                {filteredScans.map((scan) => (
                  <tr
                    key={scan.id}
                    onClick={() => navigate(`/scan/${scan.id}`)}
                    className="text-center border-b border-gray-100 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-white/5 cursor-pointer"
                  >
                    <td className="px-3 py-3 wrap-break-words text-left">{scan.name}</td>
                    <td className="wrap-break-words">{scan.type}</td>
                    <td><StatusChip status={scan.status} /></td>
                    <td className="text-teal-500">{scan.progress}%</td>
                    <td className="wrap-break-words">{scan.lastScan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>

      {toast && <Toast message={toast} onClose={() => setToast(null)} />}
    </div>
  );
}