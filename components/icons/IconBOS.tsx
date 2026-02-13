import React from "react";

export const IconBOS = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      {/* Resistance Line */}
      <line x1="10" y1="35" x2="90" y2="35" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 2" />
      <text x="90" y="30" fontFamily="monospace" fontSize="6" fill="#94a3b8" textAnchor="end" fontWeight="bold">RESISTANCE</text>

      {/* Candle 1: Approach (Green) */}
      <line x1="30" y1="40" x2="30" y2="70" stroke="#22c55e" strokeWidth="1" />
      <rect x="25" y="45" width="10" height="20" rx="1" fill="#22c55e" />

      {/* Candle 2: Small Pullback (Red) */}
      <line x1="50" y1="45" x2="50" y2="60" stroke="#ef4444" strokeWidth="1" />
      <rect x="45" y="48" width="10" height="8" rx="1" fill="#ef4444" />

      {/* Candle 3: BREAKOUT (Strong Green) */}
      <line x1="70" y1="20" x2="70" y2="55" stroke="#22c55e" strokeWidth="1" />
      <rect x="65" y="25" width="10" height="25" rx="1" fill="#22c55e" stroke="#bef264" strokeWidth="0.5" />

      {/* Label: BOS */}
      <text x="70" y="15" fontFamily="monospace" fontSize="8" fill="#22c55e" textAnchor="middle" fontWeight="bold">BOS!</text>
    </svg>
  );
};
