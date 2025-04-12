import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCocktailById } from '../../api/cocktailApi';
import LoadingSpinner from '../../components/LoadingSpinner';
import { ArrowLeft, Wine } from 'lucide-react';

const CocktailDetailPage = () => {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCocktail = async () => {
      if (!id) return;
      
      try {
        setLoading(true);
        const data = await getCocktailById(id);
        setCocktail(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch cocktail details. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCocktail();
  }, [id]);

  const getIngredients = (cocktail) => {
    const ingredients = [];
    for (let i = 1; i <= 15; i++) {
      const ingredient = cocktail[`strIngredient${i}`];
      const measure = cocktail[`strMeasure${i}`];
      
      if (ingredient && ingredient.trim() !== '') {
        ingredients.push({
          ingredient,
          measure: measure || ''
        });
      }
    }
    return ingredients;
  };

  if (!id) {
    return <div className="text-center py-10">Cocktail ID not specified</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link to="/cocktails" className="inline-flex items-center text-purple-600 hover:text-purple-800 transition-colors">
            <ArrowLeft className="mr-2 h-5 w-5" /> Back to Cocktails
          </Link>
        </div>
        
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <div className="text-center text-red-600 py-8">{error}</div>
        ) : !cocktail ? (
          <div className="text-center py-8">
            <p className="text-gray-600">Cocktail not found.</p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={cocktail.strDrinkThumb} 
                  alt={cocktail.strDrink} 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="md:w-1/2 p-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">{cocktail.strDrink}</h1>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {cocktail.strAlcoholic && (
                    <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">
                      {cocktail.strAlcoholic}
                    </span>
                  )}
                  {cocktail.strGlass && (
                    <span className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full">
                      Served in: {cocktail.strGlass}
                    </span>
                  )}
                </div>
                
                <div className="mb-6">
                  <Wine className="h-8 w-8 text-purple-600 mb-2" />
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">Ingredients</h2>
                  <ul className="grid grid-cols-1 gap-2">
                    {getIngredients(cocktail).map((item, index) => (
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
            </div>
            
            <div className="p-6 border-t border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Instructions</h2>
              <div className="prose max-w-none">
                <p>{cocktail.strInstructions}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CocktailDetailPage;
