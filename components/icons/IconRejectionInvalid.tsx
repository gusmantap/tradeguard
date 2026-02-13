import React from "react";

export const IconRejectionInvalid = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* The Support Zone */}
      <rect x="10" y="45" width="80" height="10" rx="2" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="1" />
      <text x="85" y="40" fontFamily="monospace" fontSize="8" fill="#3b82f6" textAnchor="middle">ZONE</text>

      {/* No Reaction: Price smashes through */}

      {/* Approaching Candle */}
      <line x1="30" y1="10" x2="30" y2="30" stroke="#ef4444" strokeWidth="2" />
      <rect x="25" y="15" width="10" height="15" rx="2" fill="#ef4444" />

      {/* SMASH CANDLE (Big Red Body Breaking Zone) */}
      <line x1="50" y1="30" x2="50" y2="80" stroke="#ef4444" strokeWidth="2" />
      {/* Body crosses the zone completely */}
      <rect x="45" y="35" width="10" height="40" rx="2" fill="#ef4444" />

      {/* Follow through */}
      <line x1="70" y1="70" x2="70" y2="90" stroke="#ef4444" strokeWidth="2" />
      <rect x="65" y="75" width="10" height="15" rx="2" fill="#ef4444" />

      {/* "No Stopping" Arrow */}
      <path d="M40 25 L40 90" stroke="#ef4444" strokeWidth="2" strokeDasharray="2 2" markerEnd="url(#arrow)" />

    </svg>
  );
};
