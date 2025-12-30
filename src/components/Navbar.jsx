import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900/80 backdrop-blur-md border-b border-gray-800 px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Left Side: Logo with Home Link */}
        <a href="/" className="group">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent cursor-pointer group-hover:scale-105 transition-transform duration-300">
            Ganesh.dev
          </div>
        </a>
        
        {/* Links shifted towards the Right */}
        <ul className="hidden md:flex flex-1 justify-end mr-14 space-x-10 text-gray-300 font-medium">
          <li>
            <a href="#about" className="hover:text-blue-400 transition-all duration-300">About</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-400 transition-all duration-300">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400 transition-all duration-300">Contact</a>
          </li>
        </ul>

        {/* Right Side: Hire Me Button */}
        <div className="flex items-center">
          <a 
            href="#contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-bold transition-all shadow-lg shadow-blue-500/20 active:scale-95"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;