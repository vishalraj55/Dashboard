import { useParams } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import ThemeToggle from "../components/ui/ThemeToggle";
import CircularProgress from "../components/ui/CircularProgress";
import StepTracker from "../components/ui/StepTracker";
import SeverityBadge from "../components/ui/SeverityBadge";
import { scans } from "../data/mockData";
import { useState } from "react";

export default function ScanDetail({ theme, setTheme }) {
  const { id } = useParams();
  const scan = scans.find((s) => s.id === Number(id));
  const [tab, setTab] = useState("activity");

  if (!scan) return <div>Scan not found</div>;

  return (
    <div className="flex min-h-screen bg-white dark:bg-[#0F0F0F] text-gray-900 dark:text-white">

      <Sidebar />

      <div className="flex-1 p-6 md:p-12">

        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-2xl font-semibold">
            {scan.name}
          </h1>
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row gap-10 mb-12">

          <div className="flex items-center gap-6">
            <CircularProgress value={scan.progress} />
            <div>
              <p className="text-sm text-gray-500">
                In Progress
              </p>
              <StepTracker active={2} />
            </div>
          </div>

          {/* Metadata */}
          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <p className="text-gray-500">Scan Type</p>
              <p>{scan.type}</p>
            </div>
            <div>
              <p className="text-gray-500">Targets</p>
              <p>google.com</p>
            </div>
            <div>
              <p className="text-gray-500">Started At</p>
              <p>Nov 22, 09:00 AM</p>
            </div>
            <div>
              <p className="text-gray-500">Credentials</p>
              <p>2 Active</p>
            </div>
          </div>
        </div>

        {/* Console + Findings */}
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Console */}
          <div className="flex-1 bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-gray-800 rounded-xl p-6">
            <div className="flex gap-6 mb-6">
              <button
                onClick={() => setTab("activity")}
                className={`text-sm ${
                  tab === "activity"
                    ? "text-teal-500"
                    : "text-gray-500"
                }`}
              >
                Activity Log
              </button>
              <button
                onClick={() => setTab("verification")}
                className={`text-sm ${
                  tab === "verification"
                    ? "text-teal-500"
                    : "text-gray-500"
                }`}
              >
                Verification Loops
              </button>
            </div>

            <div className="font-mono text-xs space-y-2 text-gray-600 dark:text-gray-400">
              <p>[09:00:00] Starting reconnaissance...</p>
              <p>[09:02:00] Apache 2.4.65 detected</p>
              <p className="text-red-500">
                IDOR vulnerability detected
              </p>
            </div>
          </div>

          {/* Findings */}
          <div className="w-full lg:w-96 space-y-6">
            <div className="bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-gray-800 p-6 rounded-xl">
              <SeverityBadge level="Critical" />
              <h3 className="mt-3 font-semibold">
                SQL Injection
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                /api/users/profile
              </p>
            </div>

            <div className="bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-gray-800 p-6 rounded-xl">
              <SeverityBadge level="High" />
              <h3 className="mt-3 font-semibold">
                Unauthorized Access
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                /api/auth/login
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Status Bar */}
        <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-6 text-sm flex flex-wrap gap-6 text-gray-500">
          <span>Sub-agents: 0</span>
          <span>Parallel Executions: 2</span>
          <span>Operations: 1</span>
          <span>Critical: 1</span>
          <span>High: 1</span>
        </div>

      </div>
    </div>
  );
}