export function DataBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated Grid Pattern */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 80 0 L 0 0 0 80"
              fill="none"
              stroke="rgba(255, 255, 255, 0.03)"
              strokeWidth="1"
            />
          </pattern>
          <linearGradient id="fadeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(0, 168, 232, 0.08)" />
            <stop offset="50%" stopColor="rgba(0, 168, 232, 0.03)" />
            <stop offset="100%" stopColor="rgba(0, 168, 232, 0.08)" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Curved Chart Lines */}
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-50"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M 0 400 Q 300 200 600 350 T 1200 400 T 1800 300 L 1920 300 L 1920 0 L 0 0 Z"
          fill="url(#fadeGradient)"
          opacity="0.5"
        />
        <path
          d="M 0 400 Q 300 200 600 350 T 1200 400 T 1800 300"
          stroke="rgba(0, 168, 232, 0.15)"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      {/* Secondary Wave */}
      <svg
        className="absolute bottom-0 left-0 w-full h-full opacity-40"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M 0 800 Q 400 600 800 750 T 1600 800 L 1920 800 L 1920 1080 L 0 1080 Z"
          fill="rgba(0, 168, 232, 0.04)"
        />
        <path
          d="M 0 800 Q 400 600 800 750 T 1600 800"
          stroke="rgba(0, 168, 232, 0.1)"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      {/* Scattered Data Points */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Top section points */}
        <circle cx="10%" cy="15%" r="3" fill="rgba(0, 168, 232, 0.15)" />
        <circle cx="25%" cy="25%" r="2" fill="rgba(255, 255, 255, 0.08)" />
        <circle cx="45%" cy="10%" r="4" fill="rgba(0, 168, 232, 0.12)" />
        <circle cx="65%" cy="20%" r="2.5" fill="rgba(255, 255, 255, 0.06)" />
        <circle cx="85%" cy="18%" r="3" fill="rgba(0, 168, 232, 0.1)" />
        <circle cx="92%" cy="30%" r="2" fill="rgba(255, 255, 255, 0.07)" />
        
        {/* Middle section points */}
        <circle cx="15%" cy="45%" r="2.5" fill="rgba(0, 168, 232, 0.08)" />
        <circle cx="35%" cy="55%" r="3" fill="rgba(255, 255, 255, 0.05)" />
        <circle cx="55%" cy="50%" r="2" fill="rgba(0, 168, 232, 0.12)" />
        <circle cx="75%" cy="48%" r="3.5" fill="rgba(255, 255, 255, 0.06)" />
        <circle cx="90%" cy="52%" r="2" fill="rgba(0, 168, 232, 0.09)" />
        
        {/* Bottom section points */}
        <circle cx="8%" cy="75%" r="3" fill="rgba(255, 255, 255, 0.07)" />
        <circle cx="28%" cy="82%" r="2.5" fill="rgba(0, 168, 232, 0.1)" />
        <circle cx="48%" cy="78%" r="3.5" fill="rgba(255, 255, 255, 0.05)" />
        <circle cx="68%" cy="85%" r="2" fill="rgba(0, 168, 232, 0.11)" />
        <circle cx="88%" cy="80%" r="3" fill="rgba(255, 255, 255, 0.08)" />
      </svg>

      {/* Connecting Lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="20%"
          y1="30%"
          x2="40%"
          y2="50%"
          stroke="rgba(0, 168, 232, 0.05)"
          strokeWidth="1"
          strokeDasharray="4,4"
        />
        <line
          x1="60%"
          y1="25%"
          x2="75%"
          y2="48%"
          stroke="rgba(255, 255, 255, 0.03)"
          strokeWidth="1"
          strokeDasharray="4,4"
        />
        <line
          x1="30%"
          y1="55%"
          x2="55%"
          y2="78%"
          stroke="rgba(0, 168, 232, 0.04)"
          strokeWidth="1"
          strokeDasharray="4,4"
        />
      </svg>

      {/* Radial Gradient Overlays for Glow Effect */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#00A8E8] rounded-full blur-[120px] opacity-[0.03]"></div>
      <div className="absolute bottom-40 right-1/4 w-96 h-96 bg-[#00A8E8] rounded-full blur-[120px] opacity-[0.04]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00A8E8] rounded-full blur-[150px] opacity-[0.02]"></div>
    </div>
  );
}
