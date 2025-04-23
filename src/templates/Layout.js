import React from 'react';
import Navbar from '../organisms/Navbar';
import Footer from '../organisms/Footer';

const Layout = ({ title, children }) => {
  return (
    <div className="max-w-4xl mx-auto px-4">

      <Navbar />

       <h1 className="text-3xl font-bold text-darkBlue my-6">{title}</h1>
       <h2 className="text-darkBlue my-6">{children}</h2>

      

      <Footer />

    </div>
  );
};

export default Layout;
