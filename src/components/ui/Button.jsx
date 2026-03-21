export default function Button({
  children,
  onClick,
  variant = "primary",
  disabled = false,
}) {
  const base = `
    inline-flex items-center justify-center
    px-3 sm:px-5 py-2
    text-xs sm:text-sm font-medium
    rounded-lg
    transition-all duration-200
    active:scale-[0.97]
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const styles = {
    primary: `
      bg-teal-500 text-black
      hover:opacity-90
    `,
    ghost: `
      border border-gray-300 dark:border-gray-700
      hover:bg-gray-100 dark:hover:bg-white/10
    `,
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${styles[variant]}`}
    >
      {children}
    </button>
  );
}