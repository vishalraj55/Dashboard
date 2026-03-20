export default function StatusChip({ status }) {
  const styles = {
    Completed: "bg-green-500/15 text-green-500",
    Scheduled: "bg-gray-400/20 text-gray-500",
    Failed: "bg-red-500/15 text-red-500",
  };

  return (
    <span
      className={`px-3 py-1 text-xs rounded-full font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
}