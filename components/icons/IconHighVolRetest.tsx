import React from "react";

export const IconHighVolRetest = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      {/* Resistance / Support Flip Line */}
      <line x1="10" y1="50" x2="90" y2="50" stroke="#64748b" strokeWidth="1" strokeDasharray="4 4" />
      
      {/* Price Action: Break -> Retest -> Bounce */}
      <path 
        d="M10 70 L30 50 L40 30 L50 45 L60 50 L75 30 L90 10" 
        stroke="#22c55e" 
        strokeWidth="2" 
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      {/* Highlights: Break and Retest points */}
      <circle cx="40" cy="30" r="2" fill="#22c55e" /> {/* Break */}
      <circle cx="60" cy="50" r="2" fill="#3b82f6" /> {/* Retest */}
      <text x="60" y="60" fontFamily="monospace" fontSize="6" fill="#3b82f6" textAnchor="middle">RETEST</text>

      {/* Volume Bars (Bottom) */}
      <line x1="10" y1="85" x2="90" y2="85" stroke="#334155" strokeWidth="1" />
      
      {/* Normal vol */}
      <rect x="20" y="75" width="5" height="10" fill="#475569" />
      <rect x="30" y="70" width="5" height="15" fill="#475569" />
      
      {/* HIGH VOL (Aligned with break) */}
      <rect x="40" y="55" width="5" height="30" fill="#22c55e" />
      <text x="42.5" y="95" fontFamily="monospace" fontSize="6" fill="#22c55e" textAnchor="middle">VOL</text>
      
      {/* Lower vol on retest */}
      <rect x="50" y="78" width="5" height="7" fill="#475569" />
      <rect x="60" y="80" width="5" height="5" fill="#475569" />
    </svg>
  );
};
