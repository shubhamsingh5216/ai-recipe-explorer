import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getMealById } from '../../api/mealApi';
import LoadingSpinner from '../../components/LoadingSpinner';
import { ArrowLeft, Youtube } from 'lucide-react';

const MealDetailPage = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMeal = async () => {
      if (!id) return;

      try {
        setLoading(true);
        const data = await getMealById(id);
        setMeal(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch meal details. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMeal();
  }, [id]);

  const getIngredients = (meal) => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];

      if (ingredient && ingredient.trim() !== '') {
        ingredients.push({
          ingredient,
          measure: measure || '',
        });
      }
    }
    return ingredients;
  };

  if (!id) {
    return <div className="text-center py-10">Meal ID not specified</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link to="/meals" className="inline-flex items-center text-purple-600 hover:text-purple-800 transition-colors">
            <ArrowLeft className="mr-2 h-5 w-5" /> Back to Meals
          </Link>
        </div>

        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <div className="text-center text-red-600 py-8">{error}</div>
        ) : !meal ? (
          <div className="text-center py-8">
            <p className="text-gray-600">Meal not found.</p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-auto object-cover" />
              </div>
              <div className="md:w-1/2 p-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">{meal.strMeal}</h1>

                <div className="flex flex-wrap gap-2 mb-4">
                  {meal.strCategory && (
                    <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">
                      {meal.strCategory}
                    </span>
                  )}
                  {meal.strArea && (
                    <span className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full">
                      {meal.strArea}
                    </span>
                  )}
                  {meal.strTags &&
                    meal.strTags.split(',').map((tag, index) => (
                      <span key={index} className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
                        {tag.trim()}
                      </span>
                    ))}
                </div>

                {meal.strYoutube && (
                  <a
                    href={meal.strYoutube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors mb-6"
                  >
                    <Youtube className="mr-2 h-5 w-5" /> Watch Video
                  </a>
                )}

                <h2 className="text-xl font-semibold text-gray-800 mb-2">Ingredients</h2>
                <ul className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-2">
                  {getIngredients(meal).map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>
                        {item.measure} {item.ingredient}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Instructions</h2>
              <div className="prose max-w-none">
                {meal.strInstructions
                  .split('\r\n')
                  .filter(Boolean)
                  .map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MealDetailPage;
