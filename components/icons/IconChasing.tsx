import React from "react";

export const IconChasing = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      {/* Visual cue: Price flying away, no structure */}
      
      {/* Candle 1: Already high */}
      <line x1="20" y1="50" x2="20" y2="90" stroke="#22c55e" strokeWidth="1" />
      <rect x="15" y="60" width="10" height="25" rx="1" fill="#22c55e" />

      {/* Candle 2: Higher */}
      <line x1="50" y1="30" x2="50" y2="70" stroke="#22c55e" strokeWidth="1" />
      <rect x="45" y="40" width="10" height="25" rx="1" fill="#22c55e" />

      {/* Candle 3: Sky rocketing */}
      <line x1="80" y1="10" x2="80" y2="50" stroke="#22c55e" strokeWidth="1" />
      <rect x="75" y="15" width="10" height="30" rx="1" fill="#22c55e" />

      {/* Speed lines indicating FOMO / Chase */}
      <path d="M10 80 L30 40" stroke="#ef4444" strokeWidth="1" strokeDasharray="2 2" />
      <text x="50" y="90" fontFamily="monospace" fontSize="6" fill="#ef4444" textAnchor="middle">NO STRUCTURE</text>
    </svg>
  );
};
