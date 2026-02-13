import React from "react";

export const IconFibGolden = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      {/* --- Candle Background --- */}
      
      {/* Leg 1: Impulse Up */}
      <line x1="15" y1="80" x2="15" y2="90" stroke="#22c55e" strokeWidth="1" />
      <rect x="12" y="82" width="6" height="6" rx="1" fill="#22c55e" />

      <line x1="25" y1="60" x2="25" y2="85" stroke="#22c55e" strokeWidth="1" />
      <rect x="22" y="65" width="6" height="15" rx="1" fill="#22c55e" />

      <line x1="35" y1="20" x2="35" y2="65" stroke="#22c55e" strokeWidth="1" />
      <rect x="32" y="25" width="6" height="35" rx="1" fill="#22c55e" />

      {/* Leg 2: Retracement Down */}
      <line x1="45" y1="30" x2="45" y2="55" stroke="#ef4444" strokeWidth="1" />
      <rect x="42" y="35" width="6" height="15" rx="1" fill="#ef4444" />

      <line x1="55" y1="45" x2="55" y2="65" stroke="#ef4444" strokeWidth="1" />
      <rect x="52" y="50" width="6" height="10" rx="1" fill="#ef4444" />

      {/* Leg 3: Bounce Up */}
      <line x1="65" y1="40" x2="65" y2="60" stroke="#22c55e" strokeWidth="1" />
      <rect x="62" y="45" width="6" height="10" rx="1" fill="#22c55e" />


      {/* --- Fib Overlay --- */}

      {/* 100% Line */}
      <line x1="10" y1="20" x2="90" y2="20" stroke="#64748b" strokeWidth="0.5" strokeDasharray="2 2" />
      
      {/* 61.8% Line */}
      <line x1="10" y1="63.2" x2="90" y2="63.2" stroke="#fbbf24" strokeWidth="0.5" />
      <text x="88" y="62" fontFamily="monospace" fontSize="5" fill="#fbbf24" textAnchor="end">61.8%</text>

      {/* 50% Line */}
      <line x1="10" y1="55" x2="90" y2="55" stroke="#fbbf24" strokeWidth="0.5" />
      <text x="88" y="53" fontFamily="monospace" fontSize="5" fill="#fbbf24" textAnchor="end">50.0%</text>

      {/* 0% Line */}
      <line x1="10" y1="90" x2="90" y2="90" stroke="#64748b" strokeWidth="0.5" strokeDasharray="2 2" />

      {/* Golden Zone Fill */}
      <rect x="10" y="55" width="80" height="8.2" fill="#fbbf24" fillOpacity="0.15" />

      <text x="55" y="75" fontFamily="monospace" fontSize="6" fill="#fbbf24" textAnchor="middle">GOLDEN BOUNCE</text>
    </svg>
  );
};
