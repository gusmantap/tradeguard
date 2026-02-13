import React from "react";

export const IconZoneUsed = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* The Used Zone (Weaker) */}
      <rect x="10" y="70" width="80" height="20" rx="2" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="1" />
      
      {/* Multiple Touches Visualization */}
      {/* Touch 1 */}
      <path d="M20 50 L25 75 L30 55" stroke="#ef4444" strokeWidth="2" fill="none" />
      <circle cx="25" cy="75" r="2" fill="#ef4444" />
      
      {/* Touch 2 */}
      <path d="M40 55 L45 75 L50 60" stroke="#ef4444" strokeWidth="2" fill="none" />
      <circle cx="45" cy="75" r="2" fill="#ef4444" />
      
      {/* Touch 3 (Drilling) */}
      <path d="M60 60 L65 78 L70 65" stroke="#ef4444" strokeWidth="2" fill="none" />
      <circle cx="65" cy="78" r="2" fill="#ef4444" />
      
      {/* Touch 4 (Deeper) */}
      <path d="M80 65 L85 82" stroke="#ef4444" strokeWidth="2" fill="none" />
      <circle cx="85" cy="82" r="2" fill="#ef4444" />

      {/* Warning / Count Overlay */}
      <rect x="35" y="25" width="30" height="16" rx="4" fill="#ef4444" />
      <text x="50" y="37" fontFamily="monospace" fontSize="10" fontWeight="bold" fill="white" textAnchor="middle">&gt;3x</text>

    </svg>
  );
};
