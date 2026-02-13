import React from "react";

export const IconApproachMomentum = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* The Support Zone */}
      <rect x="10" y="80" width="80" height="10" rx="2" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 4" />
      <text x="50" y="96" fontFamily="monospace" fontSize="8" fill="#3b82f6" textAnchor="middle">SUPPORT</text>

      {/* Momentum: Massive Red Candles crashing down */}

      {/* Big Candle 1 */}
      <line x1="30" y1="10" x2="30" y2="40" stroke="#ef4444" strokeWidth="2" />
      <rect x="20" y="15" width="20" height="20" rx="2" fill="#ef4444" />

      {/* Big Candle 2 (The Crash) */}
      <line x1="55" y1="35" x2="55" y2="85" stroke="#ef4444" strokeWidth="2" />
      <rect x="45" y="40" width="20" height="40" rx="2" fill="#ef4444" />
      
      {/* Speed Lines */}
      <path d="M75 30 L70 50" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
      <path d="M80 35 L75 55" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>

      {/* Warning Impact */}
      <path d="M40 85 L35 90 M55 85 L60 90 M70 85 L75 90" stroke="#ef4444" strokeWidth="2" />

    </svg>
  );
};
