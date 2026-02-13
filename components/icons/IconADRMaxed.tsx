import React from "react";

export const IconADRMaxed = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      {/* Limit Line */}
      <line x1="10" y1="20" x2="90" y2="20" stroke="#ef4444" strokeWidth="1" strokeDasharray="4 4" />
      <text x="50" y="15" fontFamily="monospace" fontSize="6" fill="#ef4444" textAnchor="middle">MAX RANGE (100%)</text>

      {/* D-1 Candle (Reference) - Gray */}
      <text x="30" y="90" fontFamily="monospace" fontSize="6" fill="#64748b" textAnchor="middle">D-1</text>
      <line x1="30" y1="20" x2="30" y2="80" stroke="#94a3b8" strokeWidth="1" />
      <rect x="25" y="30" width="10" height="40" rx="1" fill="#94a3b8" opacity="0.5" />

      {/* Today Candle - Green (Maxed Out) */}
      <text x="70" y="90" fontFamily="monospace" fontSize="6" fill="#ef4444" textAnchor="middle">TODAY</text>
      <line x1="70" y1="20" x2="70" y2="80" stroke="#ef4444" strokeWidth="1" />
      <rect x="65" y="25" width="10" height="50" rx="1" fill="#ef4444" />

      {/* Rejection Arrow */}
      <path 
        d="M70 18 Q85 10 90 40" 
        stroke="#ef4444" 
        strokeWidth="2" 
        markerEnd="url(#arrowhead-red)" 
      />

      <defs>
        <marker id="arrowhead-red" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#ef4444" />
        </marker>
      </defs>
    </svg>
  );
};
