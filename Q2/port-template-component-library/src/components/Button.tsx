import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '' 
}) => {
  const variantClass = variant === 'primary' ? 'btn-primary' : 'btn-outline-secondary';
  
  return (
    <button 
      onClick={onClick}
      className={`btn ${variantClass} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;