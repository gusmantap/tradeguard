import React from "react";

export const IconSideways = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg 
      viewBox="0 0 512 512" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      {/* Resistance */}
      <line x1="64" y1="128" x2="448" y2="128" stroke="#64748b" strokeWidth="12" strokeDasharray="24 24" strokeLinecap="round"/>
      
      {/* Support */}
      <line x1="64" y1="384" x2="448" y2="384" stroke="#64748b" strokeWidth="12" strokeDasharray="24 24" strokeLinecap="round"/>

      {/* Candle 1: Up (Green) */}
      <line x1="128" y1="160" x2="128" y2="350" stroke="#22c55e" strokeWidth="8" strokeLinecap="round"/>
      <rect x="104" y="200" width="48" height="100" rx="8" fill="#22c55e" />

      {/* Candle 2: Down (Red) */}
      <line x1="256" y1="150" x2="256" y2="360" stroke="#ef4444" strokeWidth="8" strokeLinecap="round"/>
      <rect x="232" y="180" width="48" height="150" rx="8" fill="#ef4444" />

      {/* Candle 3: Middle (Green) */}
      <line x1="384" y1="200" x2="384" y2="320" stroke="#22c55e" strokeWidth="8" strokeLinecap="round"/>
      <rect x="360" y="240" width="48" height="40" rx="8" fill="#22c55e" />
    </svg>
  );
};
