import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const baseClass = "hover:text-red-500";
  const activeClass = "text-red-500";

  return (
    <nav className="flex justify-between py-4">
      <div className="text-lg font-bold">Portfolio</div>
      <div className="space-x-4">
        <NavLink
          to="#"
          className={({ isActive }) =>
            isActive ? `${baseClass} ${activeClass}` : baseClass
          }
        >
          Blog
        </NavLink>
        <NavLink
          to="#"
          className={({ isActive }) =>
            isActive ? `${baseClass} ${activeClass}` : baseClass
          }
        >
          Works
        </NavLink>
      
      </div>
    </nav>
  );
};

export default Navbar;
