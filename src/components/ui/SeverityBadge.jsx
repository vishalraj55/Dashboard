export default function SeverityBadge({ level }) {
  const styles = {
    Critical: "bg-red-500/15 text-red-500",
    High: "bg-orange-500/15 text-orange-400",
    Medium: "bg-yellow-500/15 text-yellow-400",
    Low: "bg-green-500/15 text-green-400",
  };

  return (
    <span
      className={`px-3 py-1 text-xs rounded-full font-medium ${styles[level]}`}
    >
      {level}
    </span>
  );
}