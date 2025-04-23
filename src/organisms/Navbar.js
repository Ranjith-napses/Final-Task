import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const baseClass = "hover:text-red-500";
  const activeClass = "text-red-500";

  return (
    <nav className="flex justify-end py-4">
      <div className="space-x-4">
        <NavLink to="/blog" end className={({ isActive }) => isActive ? `${baseClass} ${activeClass}` : baseClass} > Blog         </NavLink>
        <NavLink to="/Work" className={({ isActive }) => isActive ? `${baseClass} ${activeClass}` : baseClass} >     Works        </NavLink>
        <NavLink  to="/Workdetails" className={({isActive})=> isActive ? `${baseClass} ${activeClass}`:baseClass}>   Workdetails  </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
