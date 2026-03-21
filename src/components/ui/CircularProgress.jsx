export default function CircularProgress({ value, size = 100 }) {
  const stroke = 8;
  const radius = size / 2;
  const normalizedRadius = radius - stroke;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset =
    circumference - (value / 100) * circumference;

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg height={size} width={size} className="rotate-90">
        {/* Background Track */}
        <circle
          stroke="currentColor"
          className="text-gray-200 dark:text-gray-800"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />

        {/* Progress */}
        <circle
          stroke="url(#gradient)"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className="transition-all duration-500 ease-out"
        />

        {/* Gradient */}
        <defs>
          <linearGradient id="gradient">
            <stop offset="0%" stopColor="#14b8a6" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </linearGradient>
        </defs>
      </svg>

      {/* Center Text */}
      <span className="absolute text-xs sm:text-sm font-medium">
        {value}%
      </span>
    </div>
  );
}