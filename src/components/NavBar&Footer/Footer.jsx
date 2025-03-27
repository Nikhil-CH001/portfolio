import React from 'react';
import SocialLinks from '../icons&social_links/SocialLinks';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 sm:py-8 min-h-20 sm:min-h-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl flex flex-col sm:flex-row justify-between items-center h-full gap-4 sm:gap-0">
        {/* Copyright Notice */}
        <div className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
          <p>© {new Date().getFullYear()} Nikhil Chaudhary. All Rights Reserved</p>
        </div>
        {/* Social Media Icons */}
        <SocialLinks className="flex space-x-4 sm:space-x-6" />
      </div>
    </footer>
  );
};

export default Footer;