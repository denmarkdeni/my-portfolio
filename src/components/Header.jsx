import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animateHeader, setAnimateHeader] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    setAnimateHeader(true);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 bg-[#1E3A8A] bg-opacity-80 backdrop-blur-sm text-[#F5F5F5] shadow-lg transition-transform duration-700 ease-in-out ${
        animateHeader ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold hover:scale-105 transition duration-300 text-[#22D3EE]">
          Maria Deniston
        </h1>

        <nav className="hidden md:flex space-x-6">
          <a href="#hello" className="hover:text-[#22D3EE] transition duration-300">Home</a>
          <a href="#about" className="hover:text-[#22D3EE] transition duration-300">About</a>
          <a href="#projects" className="hover:text-[#22D3EE] transition duration-300">Projects</a>
          <a href="#contact" className="hover:text-[#22D3EE] transition duration-300">Contact</a>
        </nav>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#1E3A8A] bg-opacity-80 backdrop-blur-sm px-6 py-4 space-y-4 text-center text-[#F5F5F5] animate-fade-in">
          <a href="#hello" className="block hover:text-[#22D3EE] transition duration-300" onClick={toggleMenu}>Home</a>
          <a href="#about" className="block hover:text-[#22D3EE] transition duration-300" onClick={toggleMenu}>About</a>
          <a href="#projects" className="block hover:text-[#22D3EE] transition duration-300" onClick={toggleMenu}>Projects</a>
          <a href="#contact" className="block hover:text-[#22D3EE] transition duration-300" onClick={toggleMenu}>Contact</a>
        </div>
      )}
    </header>
  );
};

export default Header;