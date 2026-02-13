import React from "react";

export const IconZoneFresh = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* The Fresh Zone (Demand) */}
      <rect x="10" y="70" width="80" height="20" rx="2" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="1" />
      
      {/* 1. Origin of the Move (The "Freshness") */}
      {/* Strong Green Candle leaving the zone */}
      <rect x="20" y="50" width="10" height="30" rx="1" fill="#22c55e" />
      <line x1="25" y1="40" x2="25" y2="80" stroke="#22c55e" strokeWidth="2" />
      
      {/* 2. Price returning for the FIRST time */}
      {/* Dashed path showing return */}
      <path d="M35 40 Q55 20 75 50" stroke="#94a3b8" strokeWidth="2" strokeDasharray="2 2" fill="none" />
      
      {/* 3. The First Touch (Respect) */}
      {/* Red candle wicking into zone but closing above */}
      <line x1="75" y1="50" x2="75" y2="75" stroke="#ef4444" strokeWidth="2" /> {/* Wick touches zone */}
      <rect x="70" y="50" width="10" height="15" rx="1" fill="#ef4444" /> {/* Body stays above */}
      
      {/* Checkmark for "Fresh" */}
      <circle cx="85" cy="30" r="10" fill="#22c55e" />
      <path d="M80 30 L84 34 L90 26" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

    </svg>
  );
};
