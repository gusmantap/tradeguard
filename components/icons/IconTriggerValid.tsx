import React from "react";

export const IconTriggerValid = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="512" height="512" rx="32" fill="#0B0E11" />
      
      {/* Support Line */}
      <path d="M64 350H448" stroke="#546E7A" strokeWidth="4" strokeDasharray="8 8" />

      {/* Candle 1: Red Bearish */}
      <rect x="150" y="200" width="40" height="150" fill="#FF3D00" rx="4" />
      <line x1="170" y1="180" x2="170" y2="350" stroke="#FF3D00" strokeWidth="6" />

      {/* Candle 2: Green Bullish Pinbar / Engulfing */}
      {/* Pinbar Wick */}
      <line x1="256" y1="250" x2="256" y2="420" stroke="#00C853" strokeWidth="6" />
      {/* Pinbar Body (Small, at top) */}
      <rect x="236" y="240" width="40" height="60" fill="#00C853" rx="4" />
      
      {/* Search/Zoom glass effect to highlight the trigger */}
      <circle cx="256" cy="320" r="100" stroke="#2962FF" strokeWidth="8" strokeDasharray="16 8" />
      <line x1="330" y1="390" x2="400" y2="460" stroke="#2962FF" strokeWidth="12" strokeLinecap="round" />
      
      {/* Checkmark */}
      <path d="M380 150 L410 180 L460 120" stroke="#00C853" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />

    </svg>
  );
};
