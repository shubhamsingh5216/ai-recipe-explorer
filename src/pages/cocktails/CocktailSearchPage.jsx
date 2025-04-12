import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { searchCocktailsByName } from '../../api/cocktailApi';
import CocktailCard from '../../components/cocktails/CocktailCard';
import SearchBar from '../../components/SearchBar';
import LoadingSpinner from '../../components/LoadingSpinner';
import { ArrowLeft } from 'lucide-react';

const CocktailSearchPage = () => {
  const { query } = useParams();
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCocktails = async () => {
      if (!query) return;
      
      try {
        setLoading(true);
        const data = await searchCocktailsByName(query);
        setCocktails(data);
        setError(null);
      } catch (err) {
        setError('Failed to search cocktails. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCocktails();
  }, [query]);

  const handleSearch = (newQuery) => {
    window.location.href = `/cocktails/search/${newQuery}`;
  };

  if (!query) {
    return <div className="text-center py-10">Search query not specified</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link to="/cocktails" className="inline-flex items-center text-purple-600 hover:text-purple-800 transition-colors">
            <ArrowLeft className="mr-2 h-5 w-5" /> Back to Categories
          </Link>
        </div>
        
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Search Results for "{query}"</h1>
          <div className="max-w-md mx-auto">
            <SearchBar onSearch={handleSearch} placeholder="Search for cocktails..." />
          </div>
        </div>

        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <div className="text-center text-red-600 py-8">{error}</div>
        ) : cocktails.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-600">No cocktails found matching "{query}".</p>
            <p className="text-gray-600 mt-2">Try a different search term or browse our categories.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cocktails.map((cocktail) => (
              <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CocktailSearchPage;
