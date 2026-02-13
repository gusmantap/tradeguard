import React from "react";

export const IconEMASlope = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* 200 EMA (Long-term) - Slower Slope */}
      <path 
        d="M10 80 Q50 70 90 40" 
        stroke="#475569" 
        strokeWidth="2" 
        fill="none"
      />
      <text x="85" y="35" fontFamily="monospace" fontSize="8" fill="#475569">200</text>

      {/* 50 EMA (Short-term) - Stronger Slope */}
      <path 
        d="M10 70 Q50 50 90 10" 
        stroke="#3b82f6" 
        strokeWidth="2" 
        fill="none"
      />
      <text x="92" y="15" fontFamily="monospace" fontSize="8" fill="#3b82f6">50</text>

      {/* Price Action: Respecting the 50 EMA (Dynamic Support) */}
      
      {/* Candle 1 (Pullback to EMA) */}
      <line x1="30" y1="45" x2="30" y2="65" stroke="#22c55e" strokeWidth="2" />
      <rect x="25" y="50" width="10" height="10" rx="2" fill="#22c55e" /> {/* Wick touches blue line */}

      {/* Candle 2 (Bounce) */}
      <line x1="50" y1="30" x2="50" y2="55" stroke="#22c55e" strokeWidth="2" />
      <rect x="45" y="35" width="10" height="15" rx="2" fill="#22c55e" />

      {/* Candle 3 (Extension) */}
      <line x1="70" y1="10" x2="70" y2="40" stroke="#22c55e" strokeWidth="2" />
      <rect x="65" y="15" width="10" height="20" rx="2" fill="#22c55e" />

    </svg>
  );
};
