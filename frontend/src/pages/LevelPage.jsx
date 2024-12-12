import React from "react";
import { Link } from "react-router-dom";

const LevelPage = () => {
  const levels = [
    { level: 1, stars: 3 },
    { level: 2, stars: 2 },
    { level: 3, stars: 1 },
    { level: 4, stars: 3 },
    { level: 5, stars: 2 },
    { level: 6, stars: 1 },
    { level: 7, stars: 3 },
    { level: 8, stars: 2 },
    { level: 9, stars: 3 },
    { level: 10, stars: 1 },
    { level: 11, stars: 2 },
    { level: 12, stars: 1 },
    { level: 13, stars: 3 },
    { level: 14, stars: 2 },
    { level: 15, stars: 3 },
  ];

  // Helper function to render stars
  const renderStars = (stars) => {
    const totalStars = 3;
    return (
      <div className="flex space-x-1">
        {Array.from({ length: totalStars }).map((_, index) => (
          <svg
            key={index}
            className={`w-5 h-5 ${index < stars ? "text-green-800" : "text-gray-200"}`} // Blue for filled stars, Gray for empty stars
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M9.049 3.927a1 1 0 0 1 1.902 0l1.152 2.336a1 1 0 0 0 .754.52l2.588.181a1 1 0 0 1 .564 1.768l-1.968 1.772a1 1 0 0 0-.287.881l.637 2.484a1 1 0 0 1-1.455 1.091l-2.579-1.04a1 1 0 0 0-.882 0l-2.579 1.04a1 1 0 0 1-1.455-1.091l.637-2.484a1 1 0 0 0-.287-.881L4.256 8.632a1 1 0 0 1 .564-1.768l2.588-.181a1 1 0 0 0 .754-.52L9.05 3.928z"
              clipRule="evenodd"
            />
          </svg>
        ))}
      </div>
    );
  };
  

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-pink-500 to-yellow-500 rounded-full filter blur-2xl opacity-30"></div>
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-gradient-to-br from-indigo-400 to-teal-400 rounded-full filter blur-2xl opacity-25 animate-pulse"></div>
      </div>

      <div className="relative z-10 flex flex-col w-11/12 max-w-lg p-8 bg-gray-800 rounded-lg shadow-2xl md:max-w-xl">
        <h2 className="text-3xl font-extrabold text-center text-white">
          Select a Level
        </h2>
        <p className="mt-2 text-sm text-center text-gray-400">
          Choose your next adventure in the game.
        </p>

        <div className="grid grid-cols-5 gap-8 mt-6">
          {levels.map(({ level, stars }) => (
            <Link to={`/level/${level}`} key={level}>
              <div className="w-20 h-20 bg-yellow-500 text-white font-semibold rounded-lg flex flex-col items-center justify-center shadow-lg transform transition-transform hover:scale-105 cursor-pointer">
                <div>{level}</div>
                <div className="mt-2">{renderStars(stars)}</div>
              </div>
            </Link>
          ))}
        </div>

        
      </div>
    </div>
  );
};

export default LevelPage;
