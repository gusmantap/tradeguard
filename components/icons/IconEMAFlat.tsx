import React from "react";

export const IconEMAFlat = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Flat / Entangled EMAs */}
      
      {/* 200 EMA - Flat */}
      <path 
        d="M10 50 Q50 50 90 50" 
        stroke="#475569" 
        strokeWidth="2" 
        fill="none"
      />
      <text x="85" y="45" fontFamily="monospace" fontSize="8" fill="#475569">200</text>

      {/* 50 EMA - Wavy / Crossing */}
      <path 
        d="M10 45 Q30 60 50 50 T90 55" 
        stroke="#3b82f6" 
        strokeWidth="2" 
        fill="none"
      />
      <text x="92" y="55" fontFamily="monospace" fontSize="8" fill="#3b82f6">50</text>

      {/* Price Action: Choppy / Whipsaw */}
      
      {/* Candle 1 (Below) */}
      <line x1="25" y1="55" x2="25" y2="75" stroke="#ef4444" strokeWidth="2" />
      <rect x="20" y="60" width="10" height="10" rx="2" fill="#ef4444" />

      {/* Candle 2 (Crossing Up) */}
      <line x1="45" y1="35" x2="45" y2="65" stroke="#22c55e" strokeWidth="2" />
      <rect x="40" y="40" width="10" height="20" rx="2" fill="#22c55e" />

      {/* Candle 3 (Crossing Down - Fakeout) */}
      <line x1="65" y1="40" x2="65" y2="70" stroke="#ef4444" strokeWidth="2" />
      <rect x="60" y="50" width="10" height="15" rx="2" fill="#ef4444" />

    </svg>
  );
};
