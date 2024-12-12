import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const options = [
  "History",
  "Geo-politics",
  "Mythology",
  "Space",
  "Technology",
  "Art",
  "Music",
  "Science",
  "Literature",
  "Sports",
  "Travel",
  "Nature",
  "Philosophy",
  "Programming",
  "Psychology",
  "Mathematics",
  "Economics",
  "Culture",
  "Engineering",
  "Education",
];

const InterestPage = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleOption = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
    console.log("Selected Interests:", selectedOptions);
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-pink-500 to-yellow-500 rounded-full filter blur-2xl opacity-30"></div>
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-gradient-to-br from-indigo-400 to-teal-400 rounded-full filter blur-2xl opacity-25 animate-pulse"></div>
      </div>

      <div className="relative z-10 flex flex-col w-11/12 max-w-lg p-8 bg-gray-800 rounded-lg shadow-2xl">
        <h2 className="text-3xl font-extrabold text-center text-white">
          Choose Your Field of Interest
        </h2>
        <p className="mt-2 text-sm text-center text-gray-400">
          Select all that apply from the options below.
        </p>

        <div className="grid grid-cols-2 gap-4 mt-6 sm:grid-cols-3">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => toggleOption(option)}
              className={`px-4 py-2 text-sm font-medium text-center rounded-lg ${
                selectedOptions.includes(option)
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        <button
          onClick={handleSubmit}
          className="w-full px-4 py-3 mt-6 text-sm font-bold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-md hover:from-blue-600 hover:to-purple-600 focus:ring-2 focus:ring-blue-300"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default InterestPage;
