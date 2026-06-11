// API Configuration for different environments
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:1240';

export const API = {
  BASE_URL: API_BASE_URL,
  ENDPOINTS: {
    ABOUT_US: `${API_BASE_URL}/about-us`,
    CONTACT: `${API_BASE_URL}/contact`,
    GLOSSARY: `${API_BASE_URL}/glossary`,
    FAQ: `${API_BASE_URL}/faq`,
    RECIPES: `${API_BASE_URL}/recipes`,
    RECIPE_DETAILS: (id) => `${API_BASE_URL}/recipes/${id}`,
    SUBMIT_RECIPE: `${API_BASE_URL}/recipes/submit`,
    REPORT_RECIPE: `${API_BASE_URL}/recipes/report`,
    TRENDING_RECIPES: `${API_BASE_URL}/recipes/trending`,
    SEARCH: `${API_BASE_URL}/search`,
    LOGIN: `${API_BASE_URL}/login`,
    SIGNUP: `${API_BASE_URL}/signup`,
    ADMIN: `${API_BASE_URL}/admin`,
    BMI: `${API_BASE_URL}/bmi`,
    HEALTH_RECOMMENDATIONS: `${API_BASE_URL}/health-recommendations`,
    MEAL_PLANNING: `${API_BASE_URL}/meal-planning`,
  }
};

export default API;
