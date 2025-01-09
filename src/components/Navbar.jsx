import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className=" text-white bg-[#070916] border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link to="/">
                        <span className="roboto-slab text-2xl md:text-3xl font-bold text-purple-500">
                            remotely
                        </span>
                        </Link>
                    </div>

                    {/* Navigation */}
                    <div className="flex space-x-4">
                        <button className="px-4 py-2 rounded-md bg-[#72389f] hover:bg-purple-600">
                            Log In
                        </button>
                        <button className="px-4 py-2 rounded-md bg-gray-700 hover:bg-gray-600">
                            Sign Up
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    {/* <div className="md:hidden">
                        <button
                            type="button"
                            className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </button>
                    </div> */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
