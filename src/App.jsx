import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MealsPage from './pages/meals/MealsPage';
import MealCategoryPage from './pages/meals/MealCategoryPage';
import MealDetailPage from './pages/meals/MealDetailPage';
import MealSearchPage from './pages/meals/MealSearchPage';
import CocktailsPage from './pages/cocktails/CocktailsPage';
import CocktailCategoryPage from './pages/cocktails/CocktailCategoryPage';
import CocktailDetailPage from './pages/cocktails/CocktailDetailPage';
import CocktailSearchPage from './pages/cocktails/CocktailSearchPage';
import AISearchPage from './pages/AISearchPage';

function App() {
  return React.createElement(
    Router,
    null,
    React.createElement(
      'div',
      { className: 'flex flex-col min-h-screen' },
      React.createElement(Navbar),
      React.createElement(
        'main',
        { className: 'flex-grow' },
        React.createElement(
          Routes,
          null,
          React.createElement(Route, { path: '/', element: React.createElement(HomePage) }),
          
          // Meal Routes
          React.createElement(Route, { path: '/meals', element: React.createElement(MealsPage) }),
          React.createElement(Route, { path: '/meals/category/:category', element: React.createElement(MealCategoryPage) }),
          React.createElement(Route, { path: '/meal/:id', element: React.createElement(MealDetailPage) }),
          React.createElement(Route, { path: '/meals/search/:query', element: React.createElement(MealSearchPage) }),
          
          // Cocktail Routes
          React.createElement(Route, { path: '/cocktails', element: React.createElement(CocktailsPage) }),
          React.createElement(Route, { path: '/cocktails/category/:category', element: React.createElement(CocktailCategoryPage) }),
          React.createElement(Route, { path: '/cocktail/:id', element: React.createElement(CocktailDetailPage) }),
          React.createElement(Route, { path: '/cocktails/search/:query', element: React.createElement(CocktailSearchPage) }),
          
          // AI Search Route
          React.createElement(Route, { path: '/ai-search', element: React.createElement(AISearchPage) })
        )
      ),
      React.createElement(Footer)
    )
  );
}

export default App;
