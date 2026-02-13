import React from "react";

export const IconApproachCompression = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* The Support Zone */}
      <rect x="10" y="80" width="80" height="10" rx="2" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 4" />
      <text x="50" y="96" fontFamily="monospace" fontSize="8" fill="#3b82f6" textAnchor="middle">SUPPORT</text>

      {/* Compression: Price "drifting" down slowly with overlapping candles */}
      
      {/* C1 */}
      <line x1="20" y1="20" x2="20" y2="40" stroke="#ef4444" strokeWidth="2" />
      <rect x="18" y="25" width="4" height="10" fill="#ef4444" />

      {/* C2 (Green retracement) */}
      <line x1="30" y1="30" x2="30" y2="45" stroke="#22c55e" strokeWidth="2" />
      <rect x="28" y="32" width="4" height="8" fill="#22c55e" />

      {/* C3 */}
      <line x1="40" y1="35" x2="40" y2="50" stroke="#ef4444" strokeWidth="2" />
      <rect x="38" y="38" width="4" height="8" fill="#ef4444" />

      {/* C4 */}
      <line x1="50" y1="45" x2="50" y2="60" stroke="#ef4444" strokeWidth="2" />
      <rect x="48" y="48" width="4" height="8" fill="#ef4444" />

      {/* C5 (Approaching) */}
      <line x1="60" y1="55" x2="60" y2="75" stroke="#ef4444" strokeWidth="2" />
      <rect x="58" y="60" width="4" height="10" fill="#ef4444" />

      {/* Stairs down arrow indicating slow path */}
      <path d="M70 30 Q80 50 70 75" stroke="#94a3b8" strokeWidth="1" strokeDasharray="2 2" markerEnd="url(#arrow)" fill="none" />

    </svg>
  );
};
