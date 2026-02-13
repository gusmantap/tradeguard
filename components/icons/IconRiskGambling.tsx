import React from "react";

export const IconRiskGambling = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Bomb Shape */}
      <circle cx="50" cy="55" r="25" fill="#ef4444" fillOpacity="0.2" stroke="#ef4444" strokeWidth="2" />
      
      {/* Fuse */}
      <path d="M50 30 Q50 10 70 15" stroke="#94a3b8" strokeWidth="2" fill="none" />
      
      {/* Spark */}
      <path d="M70 15 L75 10 M70 15 L75 20 M70 15 L65 10" stroke="#fbbf24" strokeWidth="2" />

      {/* Skull / Crossbones simplified as X */}
      <path d="M40 45 L60 65" stroke="#ef4444" strokeWidth="2" />
      <path d="M60 45 L40 65" stroke="#ef4444" strokeWidth="2" />
    </svg>
  );
};
