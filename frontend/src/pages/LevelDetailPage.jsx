import React from "react";
import { Link, useParams } from "react-router-dom";

const LevelDetailPage = () => {
  const { level } = useParams();  // Get the level number from URL
  const levelInfo = {
    1: { stars: 3, prompt: "Complete the puzzle to move ahead!" },
    2: { stars: 2, prompt: "Solve the challenge in under 3 minutes!" },
    3: { stars: 1, prompt: "Try again to earn more stars!" },
    4: { stars: 3, prompt: "Perfect! You've completed this level!" },
    5: { stars: 2, prompt: "Good job! Keep going!" },
    6: { stars: 1, prompt: "Oops! Try to improve your score next time." },
    7: { stars: 3, prompt: "Excellent! You've earned 3 stars!" },
    8: { stars: 2, prompt: "Great effort! You earned 2 stars." },
    9: { stars: 3, prompt: "Fantastic! You nailed it!" },
    10: { stars: 1, prompt: "Don't give up! Try again for more stars." },
    11: { stars: 2, prompt: "Nice work! You can do better!" },
    12: { stars: 1, prompt: "Need improvement. Try once more!" },
    13: { stars: 3, prompt: "Superb! You're doing great!" },
    14: { stars: 2, prompt: "Well done! Almost perfect!" },
    15: { stars: 3, prompt: "Awesome! You're on fire!" }
  };

  const currentLevel = levelInfo[level] || { stars: 0, prompt: "Level not found" };

  // Helper function to render stars
  const renderStars = (stars) => {
    const totalStars = 3;
    return (
      <div className="flex space-x-1">
        {Array.from({ length: totalStars }).map((_, index) => (
          <svg
            key={index}
            className={`w-6 h-6 ${index < stars ? "text-blue-500" : "text-gray-400"}`} // Blue for filled stars, Gray for empty stars
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
          Level {level}
        </h2>
        <p className="mt-2 text-sm text-center text-gray-400">
          Complete the level challenge to earn your stars!
        </p>

        <div className="flex justify-center mt-6">
          {renderStars(currentLevel.stars)}
        </div>

        <div className="mt-6 text-center text-white">
          <h3 className="text-xl font-semibold">Level Details</h3>
          <p className="mt-2 text-sm text-gray-400">
            {currentLevel.prompt}
          </p>
        </div>

        <div className="mt-6 flex justify-center space-x-4">
          <Link to="/level" className="px-6 py-2 text-sm font-bold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-300">
            Back to Levels
          </Link>
          <Link to={`/level/${parseInt(level) + 1}`} className="px-6 py-2 text-sm font-bold text-white bg-green-500 rounded-lg shadow-md hover:bg-green-600 focus:ring-2 focus:ring-green-300">
            Next Level
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LevelDetailPage;
