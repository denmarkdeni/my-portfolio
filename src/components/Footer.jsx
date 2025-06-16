import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-[#1E3A8A00] bg-opacity-80 backdrop-blur-sm text-[#F5F5F5] py-6 mt-12 animate-fade-in">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm transition duration-300 hover:text-[#22D3EE]">
          © {new Date().getFullYear()} Maria Deniston | All rights reserved
        </p>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <a href="https://github.com/denmarkdeni" target="_blank" rel="noopener noreferrer" className="hover:text-[#22D3EE] transition duration-300">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/maria-deniston" target="_blank" rel="noopener noreferrer" className="hover:text-[#22D3EE] transition duration-300">
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:mariadeniston111@gmail.com" className="hover:text-[#22D3EE] transition duration-300">
            <SiGmail size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;