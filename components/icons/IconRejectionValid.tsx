import React from "react";

export const IconRejectionValid = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* The Support Zone */}
      <rect x="10" y="70" width="80" height="10" rx="2" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="1" />
      <text x="50" y="92" fontFamily="monospace" fontSize="8" fill="#3b82f6" textAnchor="middle">ZONE</text>

      {/* Rejection Scenario: Hammer / Pinbar */}
      
      {/* Previous candle (Red) */}
      <line x1="30" y1="30" x2="30" y2="50" stroke="#ef4444" strokeWidth="2" />
      <rect x="25" y="30" width="10" height="20" rx="2" fill="#ef4444" />

      {/* THE REJECTION CANDLE (Green Pinbar) */}
      {/* Wick goes INTO zone and rejects */}
      <line x1="50" y1="40" x2="50" y2="75" stroke="#22c55e" strokeWidth="2" /> 
      {/* Body closes bullish */}
      <rect x="45" y="40" width="10" height="10" rx="2" fill="#22c55e" />

      {/* Next Candle (Bullish Confirmation) */}
      <line x1="70" y1="20" x2="70" y2="50" stroke="#22c55e" strokeWidth="2" />
      <rect x="65" y="25" width="10" height="25" rx="2" fill="#22c55e" />

      {/* Bounce Arrow */}
      <path d="M50 80 Q60 60 80 40" stroke="#22c55e" strokeWidth="2" markerEnd="url(#arrow)" fill="none" />

    </svg>
  );
};
