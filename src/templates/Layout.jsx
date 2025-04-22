import React from 'react';
import Navbar from '../organisms/Navbar';
import Footer from '../organisms/Footer';

const Layout = ({ title, children }) => {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <Navbar />
      <h1 className="text-3xl font-bold my-6">{title}</h1>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;