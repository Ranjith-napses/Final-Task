import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center py-6 text-sm text-gray-600">
      <div className="flex justify-center gap-6 items-center">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <img src="/icons/fb.png" alt="Facebook" className="w-6 h-6" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <img src="/icons/insta.png" alt="Instagram" className="w-6 h-6" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <img src="/icons/group.png" alt="Twitter" className="w-6 h-6" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <img src="/icons/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
        </a>
      </div>
      <p className="mt-4 text-xs">© 2020 All rights reserved</p>
    </footer>
  );
};

export default Footer;
