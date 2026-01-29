import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-orange-500 font-semibold"
      : "text-gray-700 hover:text-orange-500 transition";

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-extrabold text-orange-500">
          RecipeHub
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/search/random/all" className={linkClass}>Recipes</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu (FIXED SPACING) */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
          <div className="flex flex-col px-6 py-4 space-y-3">
            <NavLink
              to="/"
              onClick={() => setOpen(false)}
              className="block py-2 text-gray-700 hover:text-orange-500 font-medium"
            >
              Home
            </NavLink>

            <NavLink
              to="/search/random/all"
              onClick={() => setOpen(false)}
              className="block py-2 text-gray-700 hover:text-orange-500 font-medium"
            >
              Recipes
            </NavLink>

            <NavLink
              to="/about"
              onClick={() => setOpen(false)}
              className="block py-2 text-gray-700 hover:text-orange-500 font-medium"
            >
              About
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;


