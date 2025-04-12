import React from "react";
import { Link } from "react-router-dom";

const MealCategoryCard = ({ category }) => {
  return (
    <Link to={`/meals/category/${category.strCategory}`} className="group">
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="relative overflow-hidden">
          <img 
            src={category.strCategoryThumb} 
            alt={category.strCategory} 
            className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
            {category.strCategory}
          </h3>
          <p className="text-sm text-gray-600 mt-1 line-clamp-2">
            {category.strCategoryDescription}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MealCategoryCard;
