import React from "react";

export const IconSpreadTight = (props: React.SVGProps<SVGSVGElement>) => {
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

      {/* Ask Line (Green / Buy) */}
      <line x1="10" y1="48" x2="90" y2="48" stroke="#22c55e" strokeWidth="1" />
      <text x="92" y="49" fontFamily="monospace" fontSize="4" fill="#22c55e" textAnchor="start">ASK</text>

      {/* Bid Line (Red / Sell) */}
      <line x1="10" y1="52" x2="90" y2="52" stroke="#ef4444" strokeWidth="1" />
      <text x="92" y="53" fontFamily="monospace" fontSize="4" fill="#ef4444" textAnchor="start">BID</text>

      {/* Spread Indicator */}
      <line x1="50" y1="48" x2="50" y2="52" stroke="#64748b" strokeWidth="0.5" />
      
      {/* Pip Label */}
      <rect x="35" y="35" width="30" height="10" rx="2" fill="#0f172a" stroke="#64748b" strokeWidth="0.5" />
      <text x="50" y="42" fontFamily="monospace" fontSize="5" fill="#e2e8f0" textAnchor="middle">0.8 Pips</text>

      {/* Candles background (Faint) */}
      <rect x="20" y="40" width="4" height="20" fill="#334155" opacity="0.3" />
      <rect x="70" y="35" width="4" height="30" fill="#334155" opacity="0.3" />

    </svg>
  );
};
