import React from "react";
import { Link } from "react-router-dom";

const MealCard = ({ meal }) => {
  return (
    <Link to={`/meal/${meal.idMeal}`} className="group">
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="relative overflow-hidden">
          <img 
            src={meal.strMealThumb} 
            alt={meal.strMeal} 
            className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
            {meal.strMeal}
          </h3>
          {meal.strCategory && (
            <p className="text-sm text-gray-600 mt-1">
              Category: {meal.strCategory}
            </p>
          )}
          {meal.strArea && (
            <p className="text-sm text-gray-600">
              Cuisine: {meal.strArea}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default MealCard;
