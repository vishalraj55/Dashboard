import { useParams } from "react-router-dom";
import { scans } from "../data/mockData";
import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";
import CircularProgress from "../components/ui/CircularProgress";

export default function ScanDetail({ theme, setTheme }) {
  const { id } = useParams();
  const scan = scans.find((s) => s.id === Number(id));

  if (!scan) return <div className="p-6">Scan not found</div>;

  const vuln = scan.vulnerabilities;

  const total =
    (vuln.critical || 0) +
    (vuln.high || 0) +
    (vuln.medium || 0) +
    (vuln.low || 0);

  const distribution = [
    { label: "Critical", key: "critical", color: "bg-red-500 text-red-400" },
    { label: "High", key: "high", color: "bg-orange-500 text-orange-400" },
    { label: "Medium", key: "medium", color: "bg-yellow-500 text-yellow-400" },
    { label: "Low", key: "low", color: "bg-green-500 text-green-400" },
  ];

  return (
    <div className="flex min-h-screen bg-[#0B0F14] text-white">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN */}
      <div className="flex-1 flex flex-col">

        {/* TOPBAR (REUSED) */}
        <Topbar theme={theme} setTheme={setTheme} />

        {/* CONTENT */}
        <div className="p-6 md:p-10 space-y-6">

          {/* HEADER */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-lg font-semibold">
                {scan.name}
              </h1>
              <p className="text-xs text-gray-400 mt-1">
                ID: SCN-{String(scan.id).padStart(5, "0")}
              </p>
            </div>

            <button className="border border-white/20 px-4 py-2 rounded-lg text-sm hover:bg-white/10">
              EXPORT REPORT
            </button>
          </div>

          {/* TOP GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* PROGRESS */}
            <div className="bg-[#11161D] border border-white/10 rounded-2xl p-6 flex gap-6 items-center">
              <CircularProgress value={scan.progress} />

              <div className="space-y-2 text-sm">
                <p className="text-green-400">Discovery ✓</p>
                <p className="text-green-400">Enumeration ✓</p>
                <p className="text-blue-400">Exploitation ▶</p>
                <p className="text-gray-500">Reporting</p>
              </div>
            </div>

            {/* SCAN INFO */}
            <div className="bg-[#11161D] border border-white/10 rounded-2xl p-6 text-sm space-y-4">
              <div>
                <p className="text-gray-400">SCAN TYPE</p>
                <p className="font-semibold">{scan.type}</p>
              </div>

              <div>
                <p className="text-gray-400">TARGET</p>
                <p className="text-teal-400">{scan.name}</p>
              </div>

              <div>
                <p className="text-gray-400">ENDPOINTS</p>
                <p className="font-semibold">{scan.endpoints || 0}</p>
              </div>
            </div>

            {/* TOTAL ISSUES */}
            <div className="bg-[#11161D] border border-white/10 rounded-2xl p-6 text-center">
              <p className="text-5xl font-bold">{total}</p>
              <p className="text-gray-400 text-sm mt-2">
                TOTAL ISSUES DETECTED
              </p>

              <div className="mt-4 space-y-1 text-xs">
                {distribution.map((item) => (
                  <p key={item.key} className={item.color.split(" ")[1]}>
                    {vuln[item.key] || 0} {item.label}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* MIDDLE GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* DISTRIBUTION */}
            <div className="bg-[#11161D] border border-white/10 rounded-2xl p-6 space-y-4">
              <h2 className="text-sm text-gray-400">
                VULNERABILITY DISTRIBUTION
              </h2>

              {distribution.map((item) => {
                const value = vuln[item.key] || 0;
                const percent = total
                  ? Math.round((value / total) * 100)
                  : 0;

                return (
                  <div key={item.key}>
                    <div className="flex justify-between text-xs mb-1">
                      <span>{item.label}</span>
                      <span>{value} · {percent}%</span>
                    </div>

                    <div className="h-2 bg-gray-800 rounded-full">
                      <div
                        className={`h-2 rounded-full ${item.color.split(" ")[0]}`}
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                  </div>
                );
              })}

              {scan.topVulnerabilities && (
                <div className="pt-4 flex flex-wrap gap-2 text-xs">
                  {scan.topVulnerabilities.map((tag) => (
                    <span
                      key={tag.name}
                      className="bg-white/5 px-2 py-1 rounded"
                    >
                      {tag.name} x{tag.count}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* SEVERITY CARDS */}
            <div className="space-y-4">
              {distribution.map((item) => (
                <SeverityCard
                  key={item.key}
                  title={item.label}
                  count={vuln[item.key] || 0}
                  color={item.key}
                />
              ))}
            </div>

            {/* SCAN INTELLIGENCE */}
            <div className="bg-[#11161D] border border-white/10 rounded-2xl p-6 space-y-4 text-sm">
              <h2 className="text-gray-400">SCAN INTELLIGENCE</h2>

              <div className="grid grid-cols-2 gap-4">
                <InfoBox label="RISK SCORE" value={scan.riskScore || "—"} />
                <InfoBox label="ATTACK SURFACE" value={scan.endpoints || 0} />
                <InfoBox label="EXPLOITABLE" value={scan.exploitable || 0} />
                <InfoBox label="FALSE POSITIVES" value={scan.falsePositives || 0} />
              </div>

              {scan.remediation && (
                <div className="pt-4 text-xs space-y-2 text-gray-400">
                  {scan.remediation.map((item, i) => (
                    <p key={i}>→ {item}</p>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* ACTIVITY LOG */}
          <div className="bg-[#11161D] border border-white/10 rounded-2xl p-6 font-mono text-xs text-gray-400 space-y-2">
            {scan.logs?.length ? (
              scan.logs.map((log, i) => (
                <p key={i}>{log}</p>
              ))
            ) : (
              <p>No logs available</p>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

/* COMPONENTS */

function SeverityCard({ title, count, color }) {
  const map = {
    critical: "text-red-400",
    high: "text-orange-400",
    medium: "text-yellow-400",
    low: "text-green-400",
  };

  return (
    <div className="bg-[#11161D] border border-white/10 rounded-2xl p-5">
      <p className={`${map[color]} text-sm`}>{title}</p>
      <p className="text-2xl font-bold mt-2">{count}</p>
    </div>
  );
}

function InfoBox({ label, value }) {
  return (
    <div className="bg-black/30 border border-white/10 rounded-lg p-3">
      <p className="text-gray-400 text-xs">{label}</p>
      <p className="text-lg font-semibold mt-1">{value}</p>
    </div>
  );
}