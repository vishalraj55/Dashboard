import { useEffect } from "react";

export default function Toast({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 animate-slideUp">

      <div className="backdrop-blur-xl bg-white/70 dark:bg-white/10 border border-white/30 dark:border-white/10 shadow-lg rounded-2xl px-4 sm:px-6 py-3 flex items-center gap-3 min-w-50 max-w-xs">

        {/* Accent dot */}
        <div className="w-2 h-2 rounded-full bg-teal-500"></div>

        {/* Message */}
        <p className="text-xs sm:text-sm text-gray-800 dark:text-gray-200 font-medium">
          {message}
        </p>

      </div>

    </div>
  );
}