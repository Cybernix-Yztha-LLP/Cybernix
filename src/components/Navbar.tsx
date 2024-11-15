import { useState } from 'react';
import { User, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import NavLink from './NavLink';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Courses', path: '/courses' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
];

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left - Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          
          {/* Desktop Navigation - Centered Links */}
          <div className="hidden md:flex justify-center flex-grow">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <NavLink 
                  key={item.name} 
                  href={item.path}
                  active={location.pathname === item.path}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Right - User Icon */}
          <div className="hidden md:flex items-center">
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
              <User className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out transform md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ top: '5rem' }}
      >
        <div className="p-4 space-y-2 text-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`block px-4 py-3 rounded-lg text-lg font-medium transition-colors duration-200 ${location.pathname === item.path ? 'bg-gray-100 text-black' : 'text-gray-600 hover:bg-gray-50 hover:text-black'}`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 mt-4 border-t border-gray-100">
            <button className="flex items-center justify-center w-full px-4 py-3 text-lg font-medium text-gray-600 hover:bg-gray-50 hover:text-black rounded-lg transition-colors duration-200">
              <User className="w-5 h-5 mr-3" />
              Account
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
