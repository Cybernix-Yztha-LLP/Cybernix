// src/components/Button.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from  "lucide-react"; 

interface ButtonProps {
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
  href?: string;
  to?: string;
  onClick?: () => void;
  width?: string;
}

const Button = ({ children, variant, href, to, onClick, width }: ButtonProps) => {
  const baseStyles = `group inline-flex items-center gap-4 px-6 py-3 rounded-full transition-colors ${width ? width : 'w-48'}`; // Added default width and gap
  const variants = {
    primary: "bg-black text-white hover:bg-gray-800",
    secondary: "bg-white text-black border-2 border-black hover:bg-gray-50"
  };

  const buttonContent = (
    <div className="flex items-center justify-between w-full">
      <span>{children}</span>
      <span className={`w-6 h-6 ${variant === 'primary' ? 'bg-white text-black' : 'bg-black text-white'} rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform`}>
        <ArrowRight className="w-4 h-4" />
      </span>
    </div>
  );

  if (to) {
    return (
      <Link to={to} className={`${baseStyles} ${variants[variant]}`}>
        {buttonContent}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={`${baseStyles} ${variants[variant]}`}>
        {buttonContent}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]}`}>
      {buttonContent}
    </button>
  );
};

export default Button;