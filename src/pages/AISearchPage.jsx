import React, { useState } from "react";
import { searchMealsByName } from "../api/mealApi";
import { searchCocktailsByName } from "../api/cocktailApi";
import MealCard from "../components/meals/MealCard";
import CocktailCard from "../components/cocktails/CocktailCard";
import LoadingSpinner from "../components/LoadingSpinner";
import { Search, Sparkles, Utensils, Wine } from "lucide-react";

const AISearchPage = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [meals, setMeals] = useState([]);
  const [cocktails, setCocktails] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [activeTab, setActiveTab] = useState("meals");

  const handleSearch = async (e) => {
    e.preventDefault();
    
    if (!query.trim()) return;
    
    setLoading(true);
    setSearchPerformed(true);
    
    try {
      const [mealsData, cocktailsData] = await Promise.all([
        searchMealsByName(query),
        searchCocktailsByName(query),
      ]);
      
      setMeals(mealsData);
      setCocktails(cocktailsData);
      
      if (mealsData.length > 0) {
        setActiveTab("meals");
      } else if (cocktailsData.length > 0) {
        setActiveTab("cocktails");
      }
    } catch (error) {
      console.error("Error during AI search:", error);
    } finally {
      setLoading(false);
    }
  };

  const getPlaceholderSuggestions = () => {
    const suggestions = [
      "chicken with vegetables",
      "vegetarian pasta",
      "gluten-free dessert",
      "quick breakfast ideas",
      "margarita variations",
      "non-alcoholic drinks",
      "summer cocktails",
      "dinner party recipes",
    ];
    return suggestions[Math.floor(Math.random() * suggestions.length)];
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <div className="bg-purple-600 text-white p-3 rounded-full">
              <Sparkles className="h-8 w-8" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            AI-Powered Recipe Search
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Describe what you're looking for, and our AI will find the perfect recipes for you.
          </p>
          
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={`Try "${getPlaceholderSuggestions()}"...`}
                className="w-full px-4 py-3 pl-12 pr-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-6 w-6 text-gray-400" />
              </div>
              <button
                type="submit"
                className="absolute inset-y-0 right-0 px-4 py-2 bg-purple-600 text-white rounded-r-lg hover:bg-purple-700"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        {loading ? (
          <LoadingSpinner />
        ) : searchPerformed && (
          <div>
            {meals.length === 0 && cocktails.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-600">No results found for "{query}".</p>
              </div>
            ) : (
              <div>
                <div className="flex justify-center mb-6">
                  <div className="inline-flex rounded-md shadow-sm">
                    <button
                      onClick={() => setActiveTab("meals")}
                      className={`flex items-center px-4 py-2 text-sm font-medium rounded-l-lg ${
                        activeTab === "meals"
                          ? "bg-purple-600 text-white"
                          : "bg-white text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <Utensils className="mr-2 h-5 w-5" />
                      Meals ({meals.length})
                    </button>
                    <button
                      onClick={() => setActiveTab("cocktails")}
                      className={`flex items-center px-4 py-2 text-sm font-medium rounded-r-lg ${
                        activeTab === "cocktails"
                          ? "bg-purple-600 text-white"
                          : "bg-white text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <Wine className="mr-2 h-5 w-5" />
                      Cocktails ({cocktails.length})
                    </button>
                  </div>
                </div>

                {activeTab === "meals" && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                      Meal Suggestions
                    </h2>
                    {meals.length === 0 ? (
                      <p className="text-center text-gray-600">
                        No meal suggestions found. Try the cocktails tab!
                      </p>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {meals.map((meal) => (
                          <MealCard key={meal.idMeal} meal={meal} />
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {activeTab === "cocktails" && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                      Cocktail Suggestions
                    </h2>
                    {cocktails.length === 0 ? (
                      <p className="text-center text-gray-600">
                        No cocktail suggestions found. Try the meals tab!
                      </p>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {cocktails.map((cocktail) => (
                          <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AISearchPage;
