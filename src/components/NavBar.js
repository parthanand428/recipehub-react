import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-orange-500 tracking-wide"
        >
          RecipeHub
        </Link>

        {/* Menu */}
        <div className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500"
                : "hover:text-orange-500 transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/search/random/all"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500"
                : "hover:text-orange-500 transition"
            }
          >
            Recipes
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500"
                : "hover:text-orange-500 transition"
            }
          >
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
