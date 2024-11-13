import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
  href?: string;
  onClick?: () => void;
}

const Button = ({ children, variant, href, onClick }: ButtonProps) => {
  const baseStyles = "group flex items-center gap-2 px-6 py-3 rounded-full transition-colors";
  const variants = {
    primary: "bg-black text-white hover:bg-gray-800",
    secondary: "bg-white text-black border-2 border-black hover:bg-gray-50"
  };

  const className = `${baseStyles} ${variants[variant]}`;

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