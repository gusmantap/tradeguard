import React from "react";

export const IconCHoCH = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      {/* Background Grid/Context (Optional) */}
      
      {/* 1. Downtrend Structure (Lower Highs, Lower Lows) */}
      {/* LH1 */}
      <line x1="15" y1="30" x2="15" y2="45" stroke="#ef4444" strokeWidth="1" />
      <rect x="12" y="32" width="6" height="10" rx="1" fill="#ef4444" />

      {/* LL1 */}
      <line x1="25" y1="40" x2="25" y2="60" stroke="#ef4444" strokeWidth="1" />
      <rect x="22" y="45" width="6" height="12" rx="1" fill="#ef4444" />

      {/* LH2 (The Key Level to Break) */}
      <line x1="35" y1="35" x2="35" y2="55" stroke="#22c55e" strokeWidth="1" /> {/* Pullback */}
      <rect x="32" y="38" width="6" height="10" rx="1" fill="#22c55e" />
      
      {/* LL2 (The Reversal Point) */}
      <line x1="45" y1="50" x2="45" y2="70" stroke="#ef4444" strokeWidth="1" />
      <rect x="42" y="55" width="6" height="10" rx="1" fill="#ef4444" />

      {/* 2. The Break (ChoCH) */}
      {/* Impulsive Move Up */}
      <line x1="55" y1="45" x2="55" y2="65" stroke="#22c55e" strokeWidth="1" />
      <rect x="52" y="48" width="6" height="15" rx="1" fill="#22c55e" />

      {/* The BREAKOUT Candle closing above LH2 */}
      <line x1="65" y1="25" x2="65" y2="55" stroke="#22c55e" strokeWidth="1" />
      <rect x="62" y="30" width="6" height="20" rx="1" fill="#22c55e" />

      {/* 3. ChoCH Invalidation Line (at LH2 High) */}
      <line x1="30" y1="35" x2="90" y2="35" stroke="#64748b" strokeWidth="1" strokeDasharray="3 2" />
      <text x="90" y="32" fontFamily="monospace" fontSize="5" fill="#64748b" textAnchor="end">CHoCH</text>

      {/* Highlight the Break */}
      <circle cx="65" cy="35" r="3" stroke="#22c55e" strokeWidth="1" />
      
      {/* Label */}
      <text x="65" y="85" fontFamily="monospace" fontSize="6" fill="#22c55e" textAnchor="middle">TREND FLIP</text>
    </svg>
  );
};
