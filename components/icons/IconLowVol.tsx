import React from "react";

export const IconLowVol = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      {/* Resistance Line */}
      <line x1="10" y1="40" x2="90" y2="40" stroke="#64748b" strokeWidth="1" strokeDasharray="4 4" />

      {/* Price Action: Weak Break / Sideways */}
      <path 
        d="M10 60 L30 50 L45 35 L55 38 L65 32 L80 35" 
        stroke="#94a3b8" 
        strokeWidth="1" 
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <text x="65" y="25" fontFamily="monospace" fontSize="6" fill="#94a3b8" textAnchor="middle">WEAK MOVE</text>

      {/* Volume Bars (Bottom) - ALL LOW */}
      <line x1="10" y1="85" x2="90" y2="85" stroke="#334155" strokeWidth="1" />
      
      <rect x="20" y="80" width="5" height="5" fill="#475569" />
      <rect x="30" y="78" width="5" height="7" fill="#475569" />
      <rect x="40" y="79" width="5" height="6" fill="#475569" />
      <rect x="50" y="81" width="5" height="4" fill="#475569" />
      <rect x="60" y="78" width="5" height="7" fill="#475569" />
      <rect x="70" y="80" width="5" height="5" fill="#475569" />
      
      <text x="50" y="95" fontFamily="monospace" fontSize="6" fill="#ef4444" textAnchor="middle">LOW VOL</text>
    </svg>
  );
};
