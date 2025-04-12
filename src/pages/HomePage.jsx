import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Culinary Explorer</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover delicious meals, exotic cocktails, and get AI-powered recipe recommendations
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/meals" className="bg-white text-purple-700 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
              Explore Meals
            </Link>
            <Link to="/cocktails" className="bg-transparent border-2 border-white hover:bg-white hover:text-purple-700 px-6 py-3 rounded-lg font-semibold transition-colors">
              Discover Cocktails
            </Link>
          </div>
        </div>
      </section>

      {/* Meals Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Explore Delicious Meals</h2>
              <p className="text-gray-600 mb-6">
                Discover a world of culinary delights with our extensive collection of recipes from around the globe. 
                From quick and easy meals to gourmet dishes, find the perfect recipe for any occasion.
              </p>
              <Link to="/meals" className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors">
                Browse Meal Categories <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Delicious Food" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cocktails Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pl-8">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Discover Exotic Cocktails</h2>
              <p className="text-gray-600 mb-6">
                Explore our collection of cocktail recipes, from classic favorites to creative concoctions. 
                Learn how to mix the perfect drink for any occasion, whether you're hosting a party or enjoying a quiet evening.
              </p>
              <Link to="/cocktails" className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors">
                Browse Cocktail Categories <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Cocktails" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AI Search Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-100 to-purple-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">AI-Powered Recipe Search</h2>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
            Not sure what to cook or drink? Let our AI assistant help you find the perfect recipe based on your preferences, 
            available ingredients, or dietary restrictions.
          </p>
          <Link to="/ai-search" className="bg-purple-600 text-white hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold transition-colors inline-block">
            Try AI Search
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
