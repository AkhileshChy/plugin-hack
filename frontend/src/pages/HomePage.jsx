import React from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

const HomePage = () => {
    const { logout } = useAuthStore();
    const handleLogout = () => {
        // Clear local storage and redirect to login page
        logout();
    };
    return (
        <div className="min-h-screen bg-gray-900">
            {/* Navbar */}
            <nav className="flex items-center justify-between p-4 bg-gray-800 shadow-lg">
                <div className="text-xl font-bold text-white">
                    <Link to="/">Logo</Link>
                </div>
                <div className="flex space-x-6 text-white">
                    <Link to="/home" className="hover:text-blue-300">Home</Link>
                    <Link to="/about" className="hover:text-blue-300">About Us</Link>
                    <Link to="/contact" className="hover:text-blue-300">Contact Us</Link>
                </div>
                <div className="text-white">
                    <Link to="/login">
                        <button onClick={handleLogout} className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600">
                            Logout
                        </button>
                    </Link>
                </div>
            </nav>

            {/* Main Content */}
            <div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)] text-center">
                <h1 className="mb-8 text-4xl font-extrabold text-white">Welcome to MyApp</h1>
                <p className="mb-6 text-lg text-gray-300">
                    Explore our exciting features and improve your skills with our tools.
                </p>
                <div className="flex space-x-4">
                    <Link to="/level">
                        <button className="px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600">
                            Game
                        </button>
                    </Link>
                    <Link to="/test">
                        <button className="px-6 py-3 text-lg font-semibold text-white bg-green-500 rounded-lg hover:bg-green-600">
                            Test
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomePage;