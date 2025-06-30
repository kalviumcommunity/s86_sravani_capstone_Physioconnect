import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">PhysioConnect</h1>
        <div className="space-x-6">
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <Link to="/therapists" className="hover:text-yellow-300">Therapists</Link>
          <Link to="/appointments" className="hover:text-yellow-300">Appointments</Link>
          <Link to="/login" className="hover:text-yellow-300">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
