import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">
          Maria Deniston
        </h1>
        <nav className="space-x-4 text-sm md:text-base">
          <a href="#home" className="text-gray-600 hover:text-blue-600">Home</a>
          <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
          <a href="#projects" className="text-gray-600 hover:text-blue-600">Projects</a>
          <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
