import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo or Brand Name */}
        <h1 className="text-xl font-bold">
          <Link to="/">MyApp</Link>
        </h1>

        {/* Navigation Links */}
        <div className="space-x-6">
          <Link to="/" className="hover:text-sky-400 transition">Home</Link>
          <Link to="/login" className="hover:text-sky-400 transition">Login</Link>
          <Link to="/register" className="bg-sky-500 px-4 py-2 rounded-md hover:bg-sky-600 transition">
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
