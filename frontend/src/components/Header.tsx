import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">DocGen</div>
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-blue-300">Home</Link>
          <Link to="/about" className="hover:text-blue-300">About Us</Link>
          <Link to="/contact" className="hover:text-blue-300">Contact</Link>
          <Link to="/pricing" className="hover:text-blue-300">Pricing</Link>
        </nav>
        <div className="hidden md:flex space-x-4">
          <Link to="/login" className="hover:text-blue-300">Login</Link>
          <Link to="/signup" className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100">Sign Up</Link>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-blue-600">
          <nav className="flex flex-col space-y-2 p-2">
            <Link to="/" className="hover:text-blue-300">Home</Link>
            <Link to="/about" className="hover:text-blue-300">About Us</Link>
            <Link to="/contact" className="hover:text-blue-300">Contact</Link>
            <Link to="/pricing" className="hover:text-blue-300">Pricing</Link>
            <Link to="/login" className="hover:text-blue-300">Login</Link>
            <Link to="/signup" className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100">Sign Up</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;