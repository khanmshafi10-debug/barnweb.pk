import React from 'react';

interface BarnRoofMotifProps {
  className?: string;
  color?: string; // hex or tailwind class
  variant?: 'line' | 'peak' | 'divider';
  height?: number;
}

export const BarnRoofMotif: React.FC<BarnRoofMotifProps> = ({
  className = '',
  color = 'currentColor',
  variant = 'line',
  height = 16
}) => {
  if (variant === 'peak') {
    return (
      <svg
        viewBox="0 0 100 24"
        className={`w-full ${className}`}
        style={{ height: `${height}px` }}
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M 0,24 L 50,2 L 100,24"
          fill="none"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (variant === 'divider') {
    return (
      <div className={`w-full flex items-center justify-center my-6 opacity-80 ${className}`}>
        <div className="h-[1px] flex-1 bg-current opacity-20"></div>
        <svg
          viewBox="0 0 40 16"
          className="w-10 h-4 mx-4 flex-shrink-0"
          aria-hidden="true"
        >
          <path
            d="M 2,14 L 20,2 L 38,14"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="h-[1px] flex-1 bg-current opacity-20"></div>
      </div>
    );
  }

  // Default simple pitched-roof line
  return (
    <svg
      viewBox="0 0 32 16"
      className={`inline-block ${className}`}
      style={{ height: `${height}px`, width: `${height * 2}px` }}
      aria-hidden="true"
    >
      <path
        d="M 2,14 L 16,3 L 30,14"
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
