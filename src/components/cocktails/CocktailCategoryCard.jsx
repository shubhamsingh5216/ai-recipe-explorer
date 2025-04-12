import React from "react";
import { Link } from "react-router-dom";
import { Wine } from "lucide-react";

const CocktailCategoryCard = ({ category }) => {
  return (
    <Link to={`/cocktails/category/${category}`} className="group">
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 h-32 flex items-center justify-center">
          <Wine className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-center text-gray-800 group-hover:text-purple-600 transition-colors">
            {category}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default CocktailCategoryCard;
