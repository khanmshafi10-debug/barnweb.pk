import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary-grown' | 'primary-restored' | 'gold' | 'outline' | 'ghost' | 'premium-gold' | 'premium-green' | 'premium-outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary-grown',
  size = 'md',
  children,
  icon,
  fullWidth = false,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = 'relative inline-flex items-center justify-center font-bold tracking-[1.5px] uppercase transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed rounded-[3px] overflow-hidden cursor-pointer group active:scale-[0.98]';

  const sizeStyles = {
    sm: 'px-4 py-2 text-[11px] gap-1.5',
    md: 'px-7 py-3 text-xs gap-2',
    lg: 'px-9 py-3.5 text-xs gap-2.5',
  };

  const variantStyles = {
    'primary-grown': 'bg-[#384E3C] text-[#FBFCFC] hover:bg-[#293B2D] shadow-md hover:shadow-xl hover:shadow-[#384E3C]/20 hover:-translate-y-0.5 btn-premium-green',
    'primary-restored': 'bg-[#483D8B] text-[#FBFCFC] hover:bg-[#3B3076] shadow-md hover:shadow-xl hover:shadow-[#483D8B]/30 hover:-translate-y-0.5',
    'gold': 'bg-[#FDD229] text-[#1E293B] hover:bg-[#FFE066] shadow-md hover:shadow-xl hover:shadow-[#FDD229]/40 hover:-translate-y-0.5 btn-premium-gold',
    'premium-gold': 'btn-premium-gold',
    'premium-green': 'btn-premium-green',
    'premium-outline': 'btn-premium-outline',
    'outline': 'border-2 border-[#384E3C] text-[#384E3C] bg-transparent hover:bg-[#384E3C] hover:text-[#FBFCFC] hover:-translate-y-0.5',
    'ghost': 'text-[#232924] hover:bg-[#384E3C]/10',
  };

  return (
    <button
      className={`
        ${baseStyles}
        ${sizeStyles[size]}
        ${variantStyles[variant]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      disabled={disabled}
      {...props}
    >
      {children}
      {icon && <span className="shrink-0 transition-transform duration-300 group-hover:translate-x-1.5">{icon}</span>}
    </button>
  );
};
