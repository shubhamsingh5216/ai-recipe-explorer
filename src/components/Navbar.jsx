import React from "react";
import { Link } from "react-router-dom";
import { Utensils, Wine, Search } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold flex items-center">
            <span className="mr-2">Culinary Explorer</span>
          </Link>

          <div className="flex space-x-6">
            <Link to="/" className="flex items-center hover:text-yellow-300 transition-colors">
              <Utensils className="mr-1 h-5 w-5" />
              <span>Meals</span>
            </Link>
            <Link to="/cocktails" className="flex items-center hover:text-yellow-300 transition-colors">
              <Wine className="mr-1 h-5 w-5" />
              <span>Cocktails</span>
            </Link>
            <Link to="/ai-search" className="flex items-center hover:text-yellow-300 transition-colors">
              <Search className="mr-1 h-5 w-5" />
              <span>AI Search</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
