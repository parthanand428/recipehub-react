import React from "react";

const About = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-orange-50 to-white flex items-center justify-center px-6">
      <div className="max-w-4xl bg-white rounded-3xl shadow-2xl p-10 md:p-14">
        
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 text-center mb-4">
          About <span className="text-orange-500">RecipeHub</span>
        </h1>

        {/* Slogan */}
        <p className="text-center text-lg text-gray-600 mb-8">
          Discover. Cook. Enjoy.
        </p>

        {/* Divider */}
        <div className="w-24 h-1 bg-orange-500 mx-auto mb-8 rounded-full"></div>

        {/* Content */}
        <div className="text-gray-700 text-lg leading-relaxed space-y-6 text-center md:text-left">
          <p>
            <strong>RecipeHub</strong> is a modern recipe discovery platform
            designed to help you explore delicious meals with ease. Whether
            you’re a beginner or a passionate home chef, RecipeHub makes
            cooking simple and enjoyable.
          </p>

          <p>
            Search recipes by ingredients, explore different meal types, and
            get inspired by popular dishes from around the world — all in one
            place.
          </p>

          <p>
            Built with ❤️ using modern web technologies, this project focuses
            on clean UI, smooth navigation, and a delightful user experience.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-10 text-center text-sm text-gray-500">
          Made with <span className="text-red-500">❤️</span> by{" "}
          <span className="font-semibold text-gray-700">Parth Anand</span>
        </div>
      </div>
    </section>
  );
};

export default About;

