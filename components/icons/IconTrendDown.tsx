import React from "react";

export const IconTrendDown = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg 
      viewBox="0 0 512 512" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      {/* Dashed Resistance Line */}
      <line x1="64" y1="112" x2="448" y2="112" stroke="#64748b" strokeWidth="12" strokeDasharray="24 24" strokeLinecap="round"/>

      {/* Candle 1: LH (Red) */}
      <line x1="128" y1="90" x2="128" y2="190" stroke="#ef4444" strokeWidth="8" strokeLinecap="round"/>
      <rect x="104" y="112" width="48" height="60" rx="8" fill="#ef4444" />

      {/* Candle 2: Lower High / Retest (Green) */}
      <line x1="256" y1="130" x2="256" y2="230" stroke="#22c55e" strokeWidth="8" strokeLinecap="round"/>
      <rect x="232" y="170" width="48" height="40" rx="8" fill="#22c55e" />

      {/* Candle 3: LL (Red Strong) */}
      <line x1="384" y1="190" x2="384" y2="360" stroke="#ef4444" strokeWidth="8" strokeLinecap="round"/>
      <rect x="360" y="210" width="48" height="120" rx="8" fill="#ef4444" />
    </svg>
  );
};
