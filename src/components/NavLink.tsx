import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}

const NavLink = ({ href, children, active }: NavLinkProps) => (
  <Link
    to={href}
    className={`${
      active ? 'text-black' : 'text-gray-700'
    } hover:text-black px-3 py-2 text-sm font-medium transition-colors duration-200`}
  >
    {children}
  </Link>
);

export default NavLink;