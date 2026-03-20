export default function Button({ children, onClick, variant = "primary" }) {
  const base =
    "px-5 py-2 rounded-lg font-medium transition";

  const styles = {
    primary:
      "bg-primary text-black hover:opacity-90",
    ghost:
      "border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-card",
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${styles[variant]}`}
    >
      {children}
    </button>
  );
}