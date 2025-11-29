import React from "react";
import { Link } from "react-router-dom";
import { FiAlertTriangle } from "react-icons/fi";

const NotFound = () => {
  return (
    <div className="h-screen bg-black flex flex-col items-center justify-center text-center px-6">

      {/* STATIC TRIANGLE ICON */}
      <FiAlertTriangle className="text-7xl md:text-8xl text-red-600 mb-4" />

      {/* Colorful Gradient Text */}
      <h1 className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-purple-500 via-pink-500 to-blue-500 drop-shadow-lg">
        404
      </h1>

      <p className="text-gray-300 text-xl md:text-2xl mt-4 font-light">
        Oops! The page you're looking for doesn't exist.
      </p>

      <Link
        to="/"
        className="mt-8 bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full text-lg shadow-lg hover:shadow-purple-700/40 transition-all"
      >
        Go Back Home
      </Link>

    </div>
  );
};

export default NotFound;
