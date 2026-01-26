import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("random");

  const handleUserInput = (e) => {
    setKeyword(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${keyword}/all`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-orange-500 via-red-500 to-pink-500">
      
      {/* Web Name */}
      <div className="text-white text-center mb-8">
        <h1 className="text-6xl md:text-7xl font-bold">RecipeHub</h1>
        <h2 className="text-xl md:text-2xl font-semibold opacity-90 mt-2">
          Discover. Cook. Enjoy.
        </h2>
      </div>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="w-full flex justify-center">
        <div className="relative rounded-2xl bg-white p-4 md:w-96 w-4/5 shadow-xl">
          <input
            type="text"
            className="w-full bg-transparent outline-none text-gray-900"
            placeholder="What are you craving today?"
            onChange={handleUserInput}
            required
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        </div>
      </form>
    </div>
  );
};

export default HeroSection;

