import React from "react";

export const IconMicroBreak = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      {/* Resistance Line (Dashed as per legend for trendlines/levels) */}
      <line x1="10" y1="40" x2="90" y2="40" stroke="#64748b" strokeWidth="1" strokeDasharray="4 4" />
      <text x="88" y="35" fontFamily="monospace" fontSize="6" fill="#64748b" textAnchor="end">RESISTANCE</text>

      {/* Candle 1: Setup (Green) */}
      <line x1="30" y1="45" x2="30" y2="70" stroke="#22c55e" strokeWidth="1" />
      <rect x="25" y="50" width="10" height="15" rx="1" fill="#22c55e" />

      {/* Candle 2: Breakout (Strong Marubozu crossing the line) */}
      <line x1="60" y1="20" x2="60" y2="60" stroke="#22c55e" strokeWidth="1" />
      <rect x="55" y="25" width="10" height="30" rx="1" fill="#22c55e" />
      
      {/* Breakout Label */}
      <text x="60" y="15" fontFamily="monospace" fontSize="6" fontWeight="bold" fill="#22c55e" textAnchor="middle">BREAK!</text>
    </svg>
  );
};
