import axios from "axios";

const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1";

// Fetch all cocktail categories
export const getCocktailCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/list.php?c=list`);
    return response.data.drinks || [];
  } catch (error) {
    console.error("Error fetching cocktail categories:", error);
    return [];
  }
};

// Fetch cocktails by category
export const getCocktailsByCategory = async (category) => {
  try {
    const response = await axios.get(`${BASE_URL}/filter.php?c=${category}`);
    return response.data.drinks || [];
  } catch (error) {
    console.error(`Error fetching cocktails for category ${category}:`, error);
    return [];
  }
};

// Fetch cocktail details by ID
export const getCocktailById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/lookup.php?i=${id}`);
    return response.data.drinks ? response.data.drinks[0] : null;
  } catch (error) {
    console.error(`Error fetching cocktail details for ID ${id}:`, error);
    return null;
  }
};

// Search cocktails by name
export const searchCocktailsByName = async (name) => {
  try {
    const response = await axios.get(`${BASE_URL}/search.php?s=${name}`);
    return response.data.drinks || [];
  } catch (error) {
    console.error(`Error searching cocktails by name ${name}:`, error);
    return [];
  }
};
