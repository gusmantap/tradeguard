import React from "react";

export const IconSpreadWide = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      {/* Background Grid (Optional Context) */}
      <line x1="10" y1="20" x2="10" y2="80" stroke="#334155" strokeWidth="0.5" strokeDasharray="2 2" />
      <line x1="90" y1="20" x2="90" y2="80" stroke="#334155" strokeWidth="0.5" strokeDasharray="2 2" />

      {/* Ask Line (Green / Buy) - Way Higher */}
      <line x1="10" y1="35" x2="90" y2="35" stroke="#22c55e" strokeWidth="1" />
      <text x="92" y="36" fontFamily="monospace" fontSize="4" fill="#22c55e" textAnchor="start">ASK</text>

      {/* Bid Line (Red / Sell) - Way Lower */}
      <line x1="10" y1="65" x2="90" y2="65" stroke="#ef4444" strokeWidth="1" />
      <text x="92" y="66" fontFamily="monospace" fontSize="4" fill="#ef4444" textAnchor="start">BID</text>

      {/* Spread Indicator (Gap) */}
      <line x1="50" y1="35" x2="50" y2="65" stroke="#ef4444" strokeWidth="0.5" strokeDasharray="2 2" />
      <path d="M48 35 L52 35" stroke="#ef4444" strokeWidth="0.5" />
      <path d="M48 65 L52 65" stroke="#ef4444" strokeWidth="0.5" />

      {/* Pip Label - Warning Color */}
      <rect x="35" y="45" width="30" height="10" rx="2" fill="#450a0a" stroke="#ef4444" strokeWidth="0.5" />
      <text x="50" y="52" fontFamily="monospace" fontSize="5" fill="#fca5a5" textAnchor="middle">5.0 Pips</text>

       {/* Candles background (Faint) - Lost in spread */}
       <rect x="25" y="45" width="4" height="10" fill="#334155" opacity="0.3" />
       
    </svg>
  );
};
