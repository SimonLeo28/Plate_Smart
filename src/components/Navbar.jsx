import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white-400 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Brand */}
        <div className="text-black font-bold text-2xl">
          Plate Smart
        </div>
        
        {/* Navigation Links */}
        <div className="space-x-4">
          <a href="/" className="text-black font-bold hover:text-gray-900">Home</a>
          <a href="/About" className="text-black font-bold hover:text-gray-200">About</a>
          <a href="/Prop" className="text-black font-bold hover:text-gray-200">Props</a>
          <a href="/Contact" className="text-black font-bold hover:text-gray-200">Contact</a>
          <a href="/NGO" className="text-black font-bold hover:text-gray-200">NGO</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
