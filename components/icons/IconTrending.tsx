import React from "react";

export const IconTrending = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Background */}
      <rect width="512" height="512" rx="32" fill="#0B0E11" />
      
      {/* Grid Lines (Subtle) */}
      <path d="M64 128H448" stroke="#1F2937" strokeWidth="2" strokeDasharray="8 8" />
      <path d="M64 256H448" stroke="#1F2937" strokeWidth="2" strokeDasharray="8 8" />
      <path d="M64 384H448" stroke="#1F2937" strokeWidth="2" strokeDasharray="8 8" />

      {/* Trend Line (Uptrend Support) */}
      <path d="M64 400L448 100" stroke="#2962FF" strokeWidth="4" strokeDasharray="16 8" opacity="0.5" />

      {/* Candles (Uptrend Pattern: HL -> HH -> HL -> HH) */}
      
      {/* Candle 1 (Green) - Low */}
      <rect x="80" y="320" width="30" height="60" fill="#00C853" rx="4" />
      <line x1="95" y1="300" x2="95" y2="400" stroke="#00C853" strokeWidth="4" />

      {/* Candle 2 (Red) - Retest */}
      <rect x="130" y="340" width="30" height="40" fill="#FF3D00" rx="4" />
      <line x1="145" y1="330" x2="145" y2="390" stroke="#FF3D00" strokeWidth="4" />

      {/* Candle 3 (Green) - Breakout High */}
      <rect x="180" y="250" width="30" height="100" fill="#00C853" rx="4" />
      <line x1="195" y1="230" x2="195" y2="360" stroke="#00C853" strokeWidth="4" />

      {/* Candle 4 (Red) - Higher Low */}
      <rect x="230" y="270" width="30" height="30" fill="#FF3D00" rx="4" />
      <line x1="245" y1="260" x2="245" y2="310" stroke="#FF3D00" strokeWidth="4" />

      {/* Candle 5 (Green) - Higher High */}
      <rect x="280" y="180" width="30" height="110" fill="#00C853" rx="4" />
      <line x1="295" y1="160" x2="295" y2="300" stroke="#00C853" strokeWidth="4" />
      
      {/* Candle 6 (Green) - Momentum */}
      <rect x="330" y="140" width="30" height="80" fill="#00C853" rx="4" />
      <line x1="345" y1="120" x2="345" y2="230" stroke="#00C853" strokeWidth="4" />
      
      {/* Arrow Indicator */}
      <path d="M400 100L420 80L440 100" stroke="#00C853" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M420 80V160" stroke="#00C853" strokeWidth="8" strokeLinecap="round" />

    </svg>
  );
};
