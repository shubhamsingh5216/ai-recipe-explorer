import React from "react";
import { Link } from "react-router-dom";

const CocktailCard = ({ cocktail }) => {
  return (
    <Link to={`/cocktail/${cocktail.idDrink}`} className="group">
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="relative overflow-hidden">
          <img
            src={cocktail.strDrinkThumb}
            alt={cocktail.strDrink}
            className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
          {cocktail.strAlcoholic && (
            <div className="absolute top-2 right-2 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
              {cocktail.strAlcoholic}
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
            {cocktail.strDrink}
          </h3>
          {cocktail.strGlass && (
            <p className="text-sm text-gray-600 mt-1">Served in: {cocktail.strGlass}</p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default CocktailCard;
