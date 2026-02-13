import React from "react";

export const IconPsychCalm = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Zen Circle / Enso */}
      <path
        d="M50 20 C70 20 90 40 90 60 C90 80 70 90 50 90 C30 90 10 70 10 50 C10 35 25 20 40 20"
        stroke="#3b82f6"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Lotus / Balanced Stones */}
      <rect x="42" y="60" width="16" height="10" rx="4" fill="#3b82f6" />
      <rect x="45" y="48" width="10" height="8" rx="3" fill="#3b82f6" fillOpacity="0.8" />
      <rect x="47" y="38" width="6" height="6" rx="2" fill="#3b82f6" fillOpacity="0.6" />

    </svg>
  );
};
