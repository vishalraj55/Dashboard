import { useParams } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import ThemeToggle from "../components/ui/ThemeToggle";
import CircularProgress from "../components/ui/CircularProgress";
import StepTracker from "../components/ui/StepTracker";
import SeverityBadge from "../components/ui/SeverityBadge";
import { scans } from "../data/mockData";
import { useState } from "react";

function Topbar({ scan, theme, setTheme }) {
  return (
    <div className="
      sticky top-0 z-40
      backdrop-blur-xl
      bg-white/70 dark:bg-white/5
      border-b border-gray-200/60 dark:border-white/10
      px-4 sm:px-6 md:px-10
      py-3
      flex items-center justify-between
    ">
      <h1 className="text-sm sm:text-base md:text-lg font-semibold">
        {scan.name}
      </h1>

      <ThemeToggle theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default function ScanDetail({ theme, setTheme }) {
  const { id } = useParams();
  const scan = scans.find((s) => s.id === Number(id));
  const [tab, setTab] = useState("activity");

  if (!scan) return <div className="p-6">Scan not found</div>;

  const vuln = scan.vulnerabilities;

  const total =
    Object.values(vuln).reduce((acc, val) => acc + val, 0) || 1;

  const colorMap = {
    critical: "bg-red-500",
    high: "bg-orange-500",
    medium: "bg-yellow-500",
    low: "bg-green-500",
  };

  const order = ["critical", "high", "medium", "low"];

  const data = order.map((key) => ({
    label: key.charAt(0).toUpperCase() + key.slice(1),
    count: vuln[key] || 0,
    value: Math.round(((vuln[key] || 0) / total) * 100),
    color: colorMap[key],
  }));

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-[#0F0F0F] text-gray-900 dark:text-white">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <Topbar scan={scan} theme={theme} setTheme={setTheme} />

        <div className="px-4 sm:px-6 md:px-10 py-5 sm:py-6 md:py-10">

          <div className="flex flex-col lg:flex-row gap-6 md:gap-10 mb-6 md:mb-12">

            <div className="flex items-center gap-4 sm:gap-6 bg-white/80 dark:bg-white/3 backdrop-blur border border-gray-200/60 dark:border-white/10 p-4 sm:p-6 rounded-2xl shadow-sm">
              <CircularProgress value={scan.progress} />
              <div>
                <p className="text-xs sm:text-sm text-gray-500">
                  {scan.status}
                </p>
                <StepTracker active={2} />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 text-xs sm:text-sm flex-1 bg-white/80 dark:bg-white/3 backdrop-blur border border-gray-200/60 dark:border-white/10 p-4 sm:p-6 rounded-2xl shadow-sm">
              <div>
                <p className="text-gray-500">Scan Type</p>
                <p>{scan.type}</p>
              </div>
              <div>
                <p className="text-gray-500">Last Scan</p>
                <p>{scan.lastScan}</p>
              </div>
              <div>
                <p className="text-gray-500">Progress</p>
                <p>{scan.progress}%</p>
              </div>
              <div>
                <p className="text-gray-500">Total Issues</p>
                <p>{total}</p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 dark:bg-white/3 backdrop-blur border border-gray-200/60 dark:border-white/10 p-4 sm:p-6 rounded-2xl shadow-sm mb-6 md:mb-10">
            <h2 className="text-sm sm:text-base font-medium mb-4">
              Vulnerability Distribution
            </h2>

            <div className="space-y-3">
              {data.map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between text-xs sm:text-sm mb-1">
                    <span>{item.label}</span>
                    <span>{item.count} ({item.value}%)</span>
                  </div>

                  <div className="w-full h-2 rounded-full bg-gray-200 dark:bg-gray-800">
                    <div
                      className={`h-2 rounded-full ${item.color}`}
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 md:gap-8">

            <div className="flex-1 bg-white/80 dark:bg-white/3 backdrop-blur border border-gray-200/60 dark:border-white/10 rounded-2xl p-4 sm:p-6 shadow-sm">

              <div className="flex gap-4 sm:gap-6 mb-4 sm:mb-6 overflow-x-auto">
                <button
                  onClick={() => setTab("activity")}
                  className={`text-xs sm:text-sm whitespace-nowrap ${
                    tab === "activity" ? "text-teal-500" : "text-gray-500"
                  }`}
                >
                  Activity Log
                </button>

                <button
                  onClick={() => setTab("verification")}
                  className={`text-xs sm:text-sm whitespace-nowrap ${
                    tab === "verification" ? "text-teal-500" : "text-gray-500"
                  }`}
                >
                  Verification Loops
                </button>
              </div>

              <div className="font-mono text-[10px] sm:text-xs space-y-2 text-gray-600 dark:text-gray-400">
                <p>[09:00:00] Starting scan...</p>
                <p>[09:02:00] Target discovered</p>
                <p className="text-red-500">
                  {vuln.critical > 0
                    ? "Critical vulnerability detected"
                    : "No critical issues"}
                </p>
              </div>
            </div>

            <div className="w-full lg:w-96 space-y-4 sm:space-y-6">
              {data
                .filter((item) => item.count > 0)
                .map((item) => (
                  <div
                    key={item.label}
                    className="bg-white/80 dark:bg-white/3 backdrop-blur border border-gray-200/60 dark:border-white/10 p-4 sm:p-6 rounded-2xl shadow-sm"
                  >
                    <SeverityBadge level={item.label} />

                    <h3 className="mt-2 sm:mt-3 font-semibold text-sm sm:text-base">
                      {item.label} Vulnerabilities
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2">
                      {item.count} issues detected
                    </p>
                  </div>
                ))}
            </div>
          </div>

          <div className="mt-8 md:mt-12 border-t border-gray-200 dark:border-gray-800 pt-4 sm:pt-6 text-xs sm:text-sm flex flex-wrap gap-4 sm:gap-6 text-gray-500">
            {data.map((item) => (
              <span key={item.label}>
                {item.label}: {item.count}
              </span>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}