export default function CircularProgress({ value, size = 110 }) {
  const stroke = 10;
  const radius = size / 2;
  const normalizedRadius = radius - stroke;
  const circumference = normalizedRadius * 2 * Math.PI;

  const strokeDashoffset =
    circumference - (value / 100) * circumference;

  // Dynamic color logic (no UI structure changed)
  const getColor = () => {
    if (value < 40) return ["#ef4444", "#f87171"]; 
    if (value < 60) return ["#facc15", "#fde047"];
    return ["#22c55e", "#4ade80"]; 
  };

  const [startColor, endColor] = getColor();

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg
        height={size}
        width={size}
        className="-rotate-90"
      >
        {/* Background Track */}
        <circle
          cx={radius}
          cy={radius}
          r={normalizedRadius}
          strokeWidth={stroke}
          fill="transparent"
          className="text-white/10"
          stroke="currentColor"
        />

        {/* Glow Layer */}
        <circle
          cx={radius}
          cy={radius}
          r={normalizedRadius}
          strokeWidth={stroke}
          fill="transparent"
          stroke="url(#gradient)"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{
            filter: `drop-shadow(0 0 4px ${startColor})`,
          }}
        />

        {/* Main Progress */}
        <circle
          cx={radius}
          cy={radius}
          r={normalizedRadius}
          strokeWidth={stroke}
          fill="transparent"
          stroke="url(#gradient)"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-700 ease-out"
        />

        {/* Dynamic Gradient */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={startColor} />
            <stop offset="100%" stopColor={endColor} />
          </linearGradient>
        </defs>
      </svg>

      {/* Center Content */}
      <div className="absolute flex flex-col items-center">
        <span className="text-xl font-semibold tracking-tight">
          {value}%
        </span>
        <span className="text-[10px] text-gray-400 uppercase tracking-wider">
          Complete
        </span>
      </div>
    </div>
  );
}