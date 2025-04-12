import axios from "axios";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

// Fetch all meal categories
export const getMealCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/categories.php`);
    return response.data.categories || [];
  } catch (error) {
    console.error("Error fetching meal categories:", error);
    return [];
  }
};

// Fetch meals by category
export const getMealsByCategory = async (category) => {
  try {
    const response = await axios.get(`${BASE_URL}/filter.php?c=${category}`);
    return response.data.meals || [];
  } catch (error) {
    console.error(`Error fetching meals for category ${category}:`, error);
    return [];
  }
};

// Fetch meal details by ID
export const getMealById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/lookup.php?i=${id}`);
    return response.data.meals ? response.data.meals[0] : null;
  } catch (error) {
    console.error(`Error fetching meal details for ID ${id}:`, error);
    return null;
  }
};

// Search meals by name
export const searchMealsByName = async (name) => {
  try {
    const response = await axios.get(`${BASE_URL}/search.php?s=${name}`);
    return response.data.meals || [];
  } catch (error) {
    console.error(`Error searching meals by name ${name}:`, error);
    return [];
  }
};
