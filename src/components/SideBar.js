import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

const SideBar = () => {
  const [isShow, setIsShow] = useState(false);
  const { keyword, mealType } = useParams();
  const [searchTerm, setSearchTerm] = useState(keyword);

  const navigate = useNavigate();

  const mealTypes = [
    "Main Course",
    "Side Dish",
    "Dessert",
    "Appetizer",
    "Salad",
    "Bread",
    "Breakfast",
    "Soup",
    "Beverage",
    "Sauce",
    "Marinade",
    "Fingerfood",
    "Snack",
    "Drink",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}/${mealType}`);
    setIsShow(false);
  };

  const renderMealType = (name) => {
    const value = name.toLowerCase();
    const isActive = mealType === value;

    return (
      <button
        key={name}
        disabled={isActive}
        onClick={() => {
          navigate(`/search/${keyword}/${value}`);
          setIsShow(false);
        }}
        className={`px-3 py-1 rounded-full text-sm font-medium transition
          ${
            isActive
              ? "bg-orange-500 text-white"
              : "bg-orange-100 text-orange-700 hover:bg-orange-200"
          }`}
      >
        {name}
      </button>
    );
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="fixed right-5 top-5 md:hidden z-50 bg-white/80 backdrop-blur-md p-2 rounded-full shadow"
        onClick={() => setIsShow(!isShow)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isShow ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 h-screen md:h-auto z-40
        w-3/4 md:w-1/4 lg:w-1/5
        bg-gradient-to-b from-orange-50 to-white
        border-r border-orange-100
        p-6 transition-transform duration-300
        ${isShow ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        {/* Brand */}
        <div className="text-center mb-8">
          <Link to="/" className="text-3xl font-extrabold text-orange-500">
            RecipeHub
          </Link>
        </div>

        {/* Search */}
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="relative rounded-xl bg-white shadow-sm p-3">
            <input
              type="text"
              placeholder="Find recipes..."
              className="w-full bg-transparent outline-none text-gray-800"
              value={searchTerm === "random" ? "" : searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              required
            />
          </div>
        </form>

        {/* Meal Types */}
        <div>
          <h2 className="font-semibold text-gray-700 mb-3">Meal Type</h2>

          <div className="flex flex-wrap gap-2">
            {mealTypes.map(renderMealType)}

            {/* All button */}
            <button
              disabled={mealType === "all"}
              onClick={() => {
                navigate(`/search/${keyword}/all`);
                setIsShow(false);
              }}
              className={`px-3 py-1 rounded-full text-sm font-medium transition
                ${
                  mealType === "all"
                    ? "bg-orange-500 text-white"
                    : "bg-orange-100 text-orange-700 hover:bg-orange-200"
                }`}
            >
              All
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideBar;

