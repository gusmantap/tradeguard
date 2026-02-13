import React from "react";

export const IconRiskSafe = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Shield Outline */}
      <path
        d="M50 20 C30 20, 20 30, 20 50 C20 80, 50 90, 50 90 C50 90, 80 80, 80 50 C80 30, 70 20, 50 20 Z"
        stroke="#22c55e"
        strokeWidth="2"
        fill="#22c55e"
        fillOpacity="0.1"
      />
      
      {/* Checkmark inside Shield */}
      <path
        d="M35 50 L45 60 L65 40"
        stroke="#22c55e"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

       {/* RR Ratio Text or Symbol: 1:2 */}
       {/* Represented as One small block vs Two Big blocks stack */}
       <rect x="25" y="10" width="10" height="10" rx="2" fill="#ef4444" opacity="0.8"/>
       <rect x="65" y="5" width="10" height="20" rx="2" fill="#22c55e" opacity="0.8"/>

    </svg>
  );
};
