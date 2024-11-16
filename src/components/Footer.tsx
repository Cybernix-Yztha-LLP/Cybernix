//import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Contact */}
          <div className="space-y-4">
            <Logo />
            <div className="space-y-2">
              <h3 className="text-lg font-medium mb-4">Contact us on</h3>
              <p>Phone: 9856785409</p>
              <p>Email: cybernix@gmail.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
              <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
              <li><Link to="/courses" className="hover:text-gray-300">Courses</Link></li>
              <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-medium mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/courses" className="hover:text-gray-300">Trading</Link></li>
              <li><Link to="/courses" className="hover:text-gray-300">Linux</Link></li>
              <li><Link to="/courses" className="hover:text-gray-300">Web Development</Link></li>
              <li><Link to="/courses" className="hover:text-gray-300">Data Science</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Follow Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Facebook</a></li>
              <li><a href="#" className="hover:text-gray-300">Twitter</a></li>
              <li><a href="#" className="hover:text-gray-300">LinkedIn</a></li>
              <li><a href="#" className="hover:text-gray-300">Instagram</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 mt-8 border-t border-gray-800 text-center">
          <div className="mb-4">
            <Logo />
          </div>
          <p className="text-sm text-gray-400">
            All rights reserved. Copyright © Cybernix {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;