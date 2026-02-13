import React from "react";

export const IconMicroFakeout = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      {/* Resistance Line */}
      <line x1="10" y1="30" x2="90" y2="30" stroke="#64748b" strokeWidth="1" strokeDasharray="4 4" />
      <text x="90" y="25" fontFamily="monospace" fontSize="6" fill="#64748b" textAnchor="end">RESISTANCE</text>
      
      {/* Support Line */}
      <line x1="10" y1="80" x2="90" y2="80" stroke="#64748b" strokeWidth="1" strokeDasharray="4 4" />
      <text x="90" y="92" fontFamily="monospace" fontSize="6" fill="#64748b" textAnchor="end">SUPPORT</text>

      {/* Candle 1: Ranging */}
      <line x1="25" y1="40" x2="25" y2="70" stroke="#3b82f6" strokeWidth="1" />
      <rect x="20" y="50" width="10" height="15" rx="1" fill="#3b82f6" />

      {/* Candle 2: Fakeout (Wick only break) */}
      <line x1="50" y1="25" x2="50" y2="70" stroke="#ef4444" strokeWidth="1" /> {/* Wick crosses resistance */}
      <rect x="45" y="40" width="10" height="20" rx="1" fill="#ef4444" /> {/* Body stays below */}

      {/* Candle 3: Back in range */}
      <line x1="75" y1="40" x2="75" y2="65" stroke="#3b82f6" strokeWidth="1" />
      <rect x="70" y="45" width="10" height="10" rx="1" fill="#3b82f6" />
        
       {/* Fakeout Label */}
      <text x="50" y="15" fontFamily="monospace" fontSize="6" fontWeight="bold" fill="#ef4444" textAnchor="middle">FAKE</text>
    </svg>
  );
};
