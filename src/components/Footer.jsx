import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-12 animate-fade-in">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm transition duration-300 hover:text-white">
          &copy; {new Date().getFullYear()} Maria Deniston | All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
