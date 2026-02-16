// src/components/SocialIcons.jsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaGooglePlusG, FaYoutube } from 'react-icons/fa'; // import some icons

const SocialIcons = () => {
  return (
    <ul className="flex justify-center space-x-6">
      <li className="relative group">
        <a
          href="#"
          className="flex items-center justify-center w-20 h-20 rounded-lg bg-white shadow-lg transition-transform transform group-hover:scale-105 group-hover:rotate-12 duration-300"
        >
          <FaFacebookF className="text-2xl text-blue-600 transition-all duration-200 group-hover:text-white" />
        </a>
      </li>
      <li className="relative group">
        <a
          href="#"
          className="flex items-center justify-center w-20 h-20 rounded-lg bg-white shadow-lg transition-transform transform group-hover:scale-105 group-hover:rotate-12 duration-300"
        >
          <FaTwitter className="text-2xl text-blue-400 transition-all duration-200 group-hover:text-white" />
        </a>
      </li>
      <li className="relative group">
        <a
          href="#"
          className="flex items-center justify-center w-20 h-20 rounded-lg bg-white shadow-lg transition-transform transform group-hover:scale-105 group-hover:rotate-12 duration-300"
        >
          <FaInstagram className="text-2xl text-pink-500 transition-all duration-200 group-hover:text-white" />
        </a>
      </li>
      <li className="relative group">
        <a
          href="#"
          className="flex items-center justify-center w-20 h-20 rounded-lg bg-white shadow-lg transition-transform transform group-hover:scale-105 group-hover:rotate-12 duration-300"
        >
          <FaGooglePlusG className="text-2xl text-red-500 transition-all duration-200 group-hover:text-white" />
        </a>
      </li>
      <li className="relative group">
        <a
          href="#"
          className="flex items-center justify-center w-20 h-20 rounded-lg bg-white shadow-lg transition-transform transform group-hover:scale-105 group-hover:rotate-12 duration-300"
        >
          <FaYoutube className="text-2xl text-red-600 transition-all duration-200 group-hover:text-white" />
        </a>
      </li>
    </ul>
  );
};

export default SocialIcons;
