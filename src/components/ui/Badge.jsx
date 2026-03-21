export default function Badge({ label, color }) {
  const colors = {
    critical: "bg-red-500/15 text-red-400 border-red-500/30",
    high: "bg-orange-500/15 text-orange-400 border-orange-500/30",
    medium: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
    low: "bg-green-500/15 text-green-400 border-green-500/30",
  };

  return (
    <span
      className={`
        inline-flex items-center justify-center
        px-2 sm:px-3 py-0.5 sm:py-1
        text-[10px] sm:text-xs font-medium
        rounded-full border
        whitespace-nowrap
        ${colors[color]}
      `}
    >
      {label}
    </span>
  );
}