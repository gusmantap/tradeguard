import React from "react";

export const IconBreakoutBody = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      {/* Resistance Level */}
      <line x1="10" y1="50" x2="90" y2="50" stroke="#64748b" strokeWidth="1" strokeDasharray="4 4" />
      <text x="90" y="45" fontFamily="monospace" fontSize="6" fill="#64748b" textAnchor="end">RESISTANCE</text>

      {/* Candle 1: Testing */}
      <line x1="30" y1="55" x2="30" y2="80" stroke="#22c55e" strokeWidth="1" />
      <rect x="25" y="60" width="10" height="15" rx="1" fill="#22c55e" />

      {/* Candle 2: BREAKOUT (Body closes above) */}
      <line x1="60" y1="20" x2="60" y2="70" stroke="#22c55e" strokeWidth="1" />
      <rect x="55" y="25" width="10" height="30" rx="1" fill="#22c55e" />
      
      {/* Label for the Body Close */}
      <path d="M68 30 L75 30" stroke="#22c55e" strokeWidth="1" />
      <text x="78" y="32" fontFamily="monospace" fontSize="6" fill="#22c55e">BODY CLOSE</text>
    </svg>
  );
};
