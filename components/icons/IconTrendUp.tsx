import React from "react";

export const IconTrendUp = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg 
      viewBox="0 0 512 512" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      {/* Dashed Support Line */}
      <line x1="64" y1="400" x2="448" y2="400" stroke="#64748b" strokeWidth="12" strokeDasharray="24 24" strokeLinecap="round"/>

      {/* Candle 1: HL (Green) */}
      <line x1="128" y1="320" x2="128" y2="420" stroke="#22c55e" strokeWidth="8" strokeLinecap="round"/>
      <rect x="104" y="340" width="48" height="60" rx="8" fill="#22c55e" />

      {/* Candle 2: Higher Low / Retest (Red) */}
      <line x1="256" y1="280" x2="256" y2="380" stroke="#ef4444" strokeWidth="8" strokeLinecap="round"/>
      <rect x="232" y="300" width="48" height="40" rx="8" fill="#ef4444" />

      {/* Candle 3: HH (Green Strong) */}
      <line x1="384" y1="150" x2="384" y2="320" stroke="#22c55e" strokeWidth="8" strokeLinecap="round"/>
      <rect x="360" y="180" width="48" height="120" rx="8" fill="#22c55e" />
    </svg>
  );
};
