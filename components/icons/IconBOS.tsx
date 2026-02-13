import React from "react";

export const IconBOS = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg 
      viewBox="0 0 512 512" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      {/* Key Level Line */}
      <line x1="64" y1="216" x2="448" y2="216" stroke="#64748b" strokeWidth="12" strokeDasharray="24 24" strokeLinecap="round"/>

      {/* Candle 1: Setup (Green) */}
      <line x1="160" y1="240" x2="160" y2="350" stroke="#22c55e" strokeWidth="8" strokeLinecap="round"/>
      <rect x="136" y="260" width="48" height="60" rx="8" fill="#22c55e" />

      {/* Candle 2: Breakout (Green Strong) Crossing the line */}
      <line x1="320" y1="120" x2="320" y2="300" stroke="#22c55e" strokeWidth="8" strokeLinecap="round"/>
      <rect x="296" y="150" width="48" height="120" rx="8" fill="#22c55e" />
    </svg>
  );
};
