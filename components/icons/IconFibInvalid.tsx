import React from "react";

export const IconFibInvalid = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      {/* --- Candle Background --- */}
      
      {/* Leg 1: Impulse Up */}
      <line x1="15" y1="80" x2="15" y2="90" stroke="#94a3b8" strokeWidth="1" />
      <rect x="12" y="82" width="6" height="6" rx="1" fill="#94a3b8" />

      <line x1="25" y1="60" x2="25" y2="85" stroke="#94a3b8" strokeWidth="1" />
      <rect x="22" y="65" width="6" height="15" rx="1" fill="#94a3b8" />

      <line x1="35" y1="20" x2="35" y2="65" stroke="#94a3b8" strokeWidth="1" />
      <rect x="32" y="25" width="6" height="35" rx="1" fill="#94a3b8" />

      {/* Leg 2: Deep Retracement */}
      <line x1="45" y1="30" x2="45" y2="60" stroke="#ef4444" strokeWidth="1" />
      <rect x="42" y="35" width="6" height="20" rx="1" fill="#ef4444" />

      <line x1="55" y1="55" x2="55" y2="85" stroke="#ef4444" strokeWidth="1" />
      <rect x="52" y="60" width="6" height="20" rx="1" fill="#ef4444" />

      <line x1="65" y1="75" x2="65" y2="95" stroke="#ef4444" strokeWidth="1" />
      <rect x="62" y="80" width="6" height="15" rx="1" fill="#ef4444" />


      {/* --- Fib Overlay --- */}

      {/* 100% Line */}
      <line x1="10" y1="20" x2="90" y2="20" stroke="#64748b" strokeWidth="0.5" strokeDasharray="2 2" />
      
      {/* Golden Zone (Faint) */}
      <line x1="10" y1="63.2" x2="90" y2="63.2" stroke="#64748b" strokeWidth="0.5" opacity="0.3" />
      <line x1="10" y1="55" x2="90" y2="55" stroke="#64748b" strokeWidth="0.5" opacity="0.3" />

      {/* 78.6% Line (Red) */}
      <line x1="10" y1="75" x2="90" y2="75" stroke="#ef4444" strokeWidth="0.5" strokeDasharray="2 2" />
      <text x="88" y="73" fontFamily="monospace" fontSize="5" fill="#ef4444" textAnchor="end">78.6%</text>

      {/* 0% Line */}
      <line x1="10" y1="90" x2="90" y2="90" stroke="#64748b" strokeWidth="0.5" strokeDasharray="2 2" />

      <text x="65" y="45" fontFamily="monospace" fontSize="6" fill="#ef4444" textAnchor="start">TOO DEEP</text>
    </svg>
  );
};
