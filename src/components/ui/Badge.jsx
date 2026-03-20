export default function Badge({ label, color }) {
  const colors = {
    critical: "bg-red-500/20 text-red-400",
    high: "bg-orange-500/20 text-orange-400",
    medium: "bg-yellow-500/20 text-yellow-400",
    low: "bg-green-500/20 text-green-400",
  };

  return (
    <span
      className={`px-3 py-1 text-xs rounded-full ${colors[color]}`}
    >
      {label}
    </span>
  );
}