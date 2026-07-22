import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary-grown' | 'primary-restored' | 'gold' | 'outline' | 'ghost';
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
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl cursor-pointer';

  const sizeStyles = {
    sm: 'px-3.5 py-1.5 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-7 py-3.5 text-base gap-2.5',
  };

  const variantStyles = {
    'primary-grown': 'bg-[#4A5D50] text-[#FAF8F4] hover:bg-[#3D4E43] focus:ring-[#C9962F] shadow-sm hover:shadow',
    'primary-restored': 'bg-[#45566B] text-[#FAF8F4] hover:bg-[#374657] focus:ring-[#B08D57] shadow-sm hover:shadow',
    'gold': 'bg-[#C9962F] text-[#FAF8F4] hover:bg-[#b08226] focus:ring-[#4A5D50] shadow-sm hover:shadow',
    'outline': 'border-2 border-[#4A5D50] text-[#4A5D50] hover:bg-[#4A5D50] hover:text-[#FAF8F4] focus:ring-[#4A5D50]',
    'ghost': 'text-[#2B2E2C] hover:bg-[#4A5D50]/10 focus:ring-[#4A5D50]',
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
      {icon && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
