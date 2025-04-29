import React from "react";
import {
  FaTh,
  FaBell,
  FaSearch,
  FaMicrophone,
  FaUserCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="flex items-center justify-between px-8 py-4 bg-black text-white border-b border-gray-800">
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-2">
          <img
            src="/images/speedo-prime.png"
            alt="Speedo Prime"
            className="h-8"
          />
        </div>
        <nav className="hidden md:flex space-x-6 text-sm text-gray-300">
          <Link to="/">Profile</Link>
          <Link to="/products">Products</Link>
          <a href="#">TV Shows</a>
          <a href="#">New/Upcoming</a>
          <a href="#">My List</a>
          <a href="#" className="text-red-600">
            Browse by language
          </a>
          <a href="#">Speedo Tube</a>
        </nav>
      </div>

      <div className="flex items-center space-x-4">
        <FaSearch />
        <FaTh />
        <FaMicrophone />
        <FaBell />
        <FaUserCircle />
      </div>
    </div>
  );
};

export default Navbar;
