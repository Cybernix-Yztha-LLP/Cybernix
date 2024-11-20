// src/components/Button.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
  href?: string;
  to?: string;
  onClick?: () => void;
  width?: string;
}

const Button = ({ children, variant, href, to, onClick }: ButtonProps) => {
  const baseStyles = "group flex items-center gap-2 px-6 py-3 rounded-full transition-colors";
  const variants = {
    primary: "bg-black text-white hover:bg-gray-800",
    secondary: "bg-white text-black border-2 border-black hover:bg-gray-50"
  };

  const className = `${baseStyles} ${variants[variant]}`;

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;