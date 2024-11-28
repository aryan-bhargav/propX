import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center space-y-4">
        <p className="text-gray-400">
          © {new Date().getFullYear()} 9FlyProperties. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
          <a href="#" className="text-gray-400 hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
