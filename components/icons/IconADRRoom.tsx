import React from "react";

export const IconADRRoom = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      {/* Dashed lines for high/lows */}
      <line x1="10" y1="20" x2="90" y2="20" stroke="#64748b" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="10" y1="80" x2="90" y2="80" stroke="#64748b" strokeWidth="1" strokeDasharray="2 2" />

      {/* D-1 Candle (Reference) - Gray */}
      <text x="30" y="90" fontFamily="monospace" fontSize="6" fill="#64748b" textAnchor="middle">D-1</text>
      <line x1="30" y1="20" x2="30" y2="80" stroke="#94a3b8" strokeWidth="1" />
      <rect x="25" y="30" width="10" height="40" rx="1" fill="#94a3b8" opacity="0.5" />

      {/* Today Candle - Green (Current Progress) */}
      <text x="70" y="90" fontFamily="monospace" fontSize="6" fill="#22c55e" textAnchor="middle">TODAY</text>
      <line x1="70" y1="50" x2="70" y2="80" stroke="#22c55e" strokeWidth="1" />
      <rect x="65" y="60" width="10" height="15" rx="1" fill="#22c55e" />

      {/* Potential / Room Growth (Ghost) */}
      <rect x="65" y="20" width="10" height="40" rx="1" stroke="#22c55e" strokeWidth="1" strokeDasharray="2 2" fill="none" />
      <text x="70" y="15" fontFamily="monospace" fontSize="6" fill="#3b82f6" textAnchor="middle">POTENTIAL</text>
      
      {/* Link the potential */}
      <path d="M70 50 L70 25" stroke="#3b82f6" strokeWidth="1" markerEnd="url(#arrowhead)" />

      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6" />
        </marker>
      </defs>
    </svg>
  );
};
