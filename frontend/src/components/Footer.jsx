import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t text-center text-sm text-gray-600 py-4">
      © {new Date().getFullYear()} PhysioConnect. All rights reserved.
    </footer>
  );
};

export default Footer;
