import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        {/* Contact Info */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">ashwini tiwalkar</h2>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
          <a href="#skills" className="text-gray-600 hover:text-gray-900">Skills</a>
          <a href="#experience" className="text-gray-600 hover:text-gray-900">Experience</a>
          <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
          <a href="#education" className="text-gray-600 hover:text-gray-900">Education</a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-400">
            <FaTwitter size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
            <FaGithub size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600">
            <FaInstagram size={24} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} TownHall Dev. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Contact;