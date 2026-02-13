import React from "react";

export const IconPsychPanic = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Chaos Lines / ZigZag Pulse */}
      <path
        d="M10 50 L30 20 L50 80 L70 30 L90 60"
        stroke="#ef4444"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Sweat Drops / Particles */}
      <circle cx="30" cy="10" r="2" fill="#ef4444" />
      <circle cx="50" cy="90" r="2" fill="#ef4444" />
      <circle cx="70" cy="20" r="2" fill="#ef4444" />

      {/* Exclamation Mark */}
      <rect x="48" y="35" width="4" height="20" rx="2" fill="#ef4444" />
      <circle cx="50" cy="65" r="2" fill="#ef4444" />

    </svg>
  );
};
