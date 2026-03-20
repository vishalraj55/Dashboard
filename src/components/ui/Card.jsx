export default function Card({ children }) {
  return (
    <div className="bg-white dark:bg-card border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-sm">
      {children}
    </div>
  );
}