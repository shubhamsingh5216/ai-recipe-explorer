import React, { useState, useEffect } from 'react';
import { getMealCategories } from '../../api/mealApi';
import MealCategoryCard from '../../components/meals/MealCategoryCard';
import SearchBar from '../../components/SearchBar';
import LoadingSpinner from '../../components/LoadingSpinner';
import { useNavigate } from 'react-router-dom';

const MealsPage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const data = await getMealCategories();
        setCategories(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch meal categories. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleSearch = (query) => {
    navigate(`/meals/search/${query}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Explore Meal Categories</h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Browse through our collection of meal categories or search for specific recipes
          </p>
          <SearchBar onSearch={handleSearch} placeholder="Search for meals..." />
        </div>

        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <div className="text-center text-red-600 py-8">{error}</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <MealCategoryCard key={category.idCategory} category={category} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MealsPage;
