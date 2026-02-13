import React from "react";

export const IconBreakoutFakeout = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      {/* Resistance Level */}
      <line x1="10" y1="40" x2="90" y2="40" stroke="#64748b" strokeWidth="1" strokeDasharray="4 4" />
      <text x="90" y="35" fontFamily="monospace" fontSize="6" fill="#64748b" textAnchor="end">RESISTANCE</text>

      {/* Candle 1: Inside */}
      <line x1="30" y1="50" x2="30" y2="80" stroke="#3b82f6" strokeWidth="1" />
      <rect x="25" y="60" width="10" height="15" rx="1" fill="#3b82f6" />

      {/* Candle 2: FAKEOUT (Wick crosses, Body closes below) */}
      <line x1="60" y1="20" x2="60" y2="80" stroke="#ef4444" strokeWidth="1" /> {/* Long Wick up */}
      <rect x="55" y="50" width="10" height="20" rx="1" fill="#ef4444" /> {/* Body below resistance */}
      
      {/* Label for the Wick */}
      <text x="60" y="15" fontFamily="monospace" fontSize="6" fill="#ef4444" textAnchor="middle">WICK ONLY</text>
    </svg>
  );
};
