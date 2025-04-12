import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getMealsByCategory } from '../../api/mealApi';
import MealCard from '../../components/meals/MealCard';
import LoadingSpinner from '../../components/LoadingSpinner';
import { ArrowLeft } from 'lucide-react';

const MealCategoryPage = () => {
  const { category } = useParams();
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      if (!category) return;

      try {
        setLoading(true);
        const data = await getMealsByCategory(category);
        setMeals(data);
        setError(null);
      } catch (err) {
        setError(`Failed to fetch meals for category "${category}". Please try again later.`);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMeals();
  }, [category]);

  if (!category) {
    return <div className="text-center py-10">Category not specified</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link to="/meals" className="inline-flex items-center text-purple-600 hover:text-purple-800 transition-colors">
            <ArrowLeft className="mr-2 h-5 w-5" /> Back to Categories
          </Link>
        </div>

        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{category} Recipes</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our collection of delicious {category.toLowerCase()} recipes from around the world
          </p>
        </div>

        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <div className="text-center text-red-600 py-8">{error}</div>
        ) : meals.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-600">No meals found for this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {meals.map((meal) => (
              <MealCard key={meal.idMeal} meal={meal} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MealCategoryPage;
