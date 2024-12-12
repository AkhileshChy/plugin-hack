import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { login } = useAuthStore();


    const handleSubmit = (e) => {
        e.preventDefault();
        login({ email, password });
        // Api call yahan aayega
        console.log("Email:", email);
        console.log("Password:", password);
    }
    return (
        <div className="relative flex items-center justify-center min-h-screen bg-gray-900 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full filter blur-3xl opacity-30"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-pink-500 to-yellow-500 rounded-full filter blur-2xl opacity-30"></div>
                <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-gradient-to-br from-indigo-400 to-teal-400 rounded-full filter blur-2xl opacity-25 animate-pulse"></div>
            </div>

            <div className="relative z-10 flex flex-col w-11/12 max-w-md p-8 bg-gray-800 rounded-lg shadow-2xl md:max-w-lg">
                <h2 className="text-3xl font-extrabold text-center text-white">
                    Sign In
                </h2>
                <p className="mt-2 text-sm text-center text-gray-400">
                    Access your account to explore amazing features.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-300">
                            Email Address
                        </label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 mt-1 text-sm text-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-300">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 mt-1 text-sm text-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            required
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <label className="flex items-center text-sm text-gray-400">
                            <input
                                type="checkbox"
                                className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <span className="ml-2">Remember me</span>
                        </label>
                        <a href="#" className="text-sm text-blue-400 hover:text-blue-300">
                            Forgot password?
                        </a>
                    </div>

                    <button
                        type="submit"
                        className="w-full px-4 py-3 text-sm font-bold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-md hover:from-blue-600 hover:to-purple-600 focus:ring-2 focus:ring-blue-300"
                    >
                        Sign In
                    </button>
                </form>

                <p className="mt-4 text-sm text-center text-gray-400">
                    Don't have an account?{" "}
                    <Link
                        to='/signup'
                        className="font-medium text-blue-400 hover:text-blue-300"
                    >
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
