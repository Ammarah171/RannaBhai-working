# Frontend API Migration Guide

## Components Requiring Updates

This file lists all 38 locations that need to be updated to use the new `API` configuration.

### Files to Update (19 components):

1. **AboutUs.js** - 1 update
2. **AdminPanel.js** - 6 updates
3. **BMI.js** - 0 updates
4. **Contact.js** - 2 updates
5. **FAQ.js** - 1 update
6. **Glossary.js** - 1 update
7. **HealthRecommendations.js** - 1 update
8. **Home.js** - 3 updates
9. **IngredientDetails.js** - 1 update
10. **Ingredients.js** - 1 update
11. **MealPlanning.js** - 1 update
12. **nearme.js** - 1 update
13. **RecipeDetails.js** - 2 updates
14. **RecipeOfTheDay.js** - 1 update
15. **RecipeSubmit.js** - 1 update
16. **ReportRecipe.js** - 2 updates
17. **Search.js** - 1 update
18. **TrendingRecipe.js** - 3 updates
19. **Login/dashboard.js** - 2 updates
20. **Login/login.js** - 1 update
21. **Login/signup.js** - 1 update
22. **Login/AdminPanel.js** - 3 updates

---

## Pattern for Updates

### Pattern 1: axios.get()
**Before:**
```javascript
const response = await axios.get("http://localhost:1240/about-us");
```

**After:**
```javascript
import API from '../config/api';
// or import API from '../../config/api'; (adjust path as needed)

const response = await axios.get(API.ENDPOINTS.ABOUT_US);
```

### Pattern 2: axios.post()
**Before:**
```javascript
await axios.post("http://localhost:1240/contact", postData);
```

**After:**
```javascript
import API from '../config/api';
await axios.post(API.ENDPOINTS.CONTACT, postData);
```

### Pattern 3: fetch() API
**Before:**
```javascript
const response = await fetch('http://localhost:1240/recipes');
```

**After:**
```javascript
import API from '../config/api';
const response = await fetch(API.ENDPOINTS.RECIPES);
```

### Pattern 4: Dynamic URLs with IDs
**Before:**
```javascript
const response = await axios.get(`http://localhost:1240/recipe/${id}`);
```

**After:**
```javascript
import API from '../config/api';
const response = await axios.get(API.ENDPOINTS.RECIPE_DETAILS(id));
```

---

## File-by-File Update Instructions

### 1. AboutUs.js
```javascript
// Add at top
import API from '../config/api';

// Line 12: Change
const response = await axios.get("http://localhost:1240/about-us");
// To:
const response = await axios.get(API.ENDPOINTS.ABOUT_US);
```

### 2. AdminPanel.js (6 updates)
```javascript
// Add at top
import API from '../config/api';

// Line 31: Change
const response = await axios.get('http://localhost:1240/faqs');
// To:
const response = await axios.get(API.ENDPOINTS.FAQ);

// Line 39: Change
const response = await axios.get('http://localhost:1240/meals');
// To:
const response = await axios.get(API.ENDPOINTS.MEAL_PLANNING);

// Line 73: Change
await axios.delete(`http://localhost:1240/delete-meal/${id}`);
// To:
await axios.delete(`${API.BASE_URL}/delete-meal/${id}`);

// Line 87: Change
await axios.put(`http://localhost:1240/update-meal/${mealFormData.id}`, mealFormData);
// To:
await axios.put(`${API.BASE_URL}/update-meal/${mealFormData.id}`, mealFormData);

// Line 89: Change
await axios.post('http://localhost:1240/add-new-meal', mealFormData);
// To:
await axios.post(`${API.BASE_URL}/add-new-meal`, mealFormData);

// Line 124: Change
await axios.delete(`http://localhost:1240/delete-faq/${id}`);
// To:
await axios.delete(`${API.BASE_URL}/delete-faq/${id}`);

// Line 138: Change
await axios.put(`http://localhost:1240/update-faq/${formData.id}`, formData);
// To:
await axios.put(`${API.BASE_URL}/update-faq/${formData.id}`, formData);

// Line 140: Change
await axios.post('http://localhost:1240/add-new-faq', formData);
// To:
await axios.post(`${API.BASE_URL}/add-new-faq`, formData);
```

### 3. Contact.js (2 updates)
```javascript
// Add at top
import API from '../config/api';

// Line 23: Change
.get("http://localhost:1240/users")
// To:
.get(`${API.BASE_URL}/users`)

// Line 39: Change
const response = await axios.post("http://localhost:1240/contact", postData);
// To:
const response = await axios.post(API.ENDPOINTS.CONTACT, postData);
```

### 4. FAQ.js (1 update)
```javascript
// Add at top
import API from '../config/api';

// Line 18: Change
const response = await axios.get('http://localhost:1240/faqs');
// To:
const response = await axios.get(API.ENDPOINTS.FAQ);
```

### 5. Glossary.js (1 update)
```javascript
// Add at top
import API from '../config/api';

// Line 15: Change
const response = await axios.get("http://localhost:1240/glossary");
// To:
const response = await axios.get(API.ENDPOINTS.GLOSSARY);
```

### 6. HealthRecommendations.js (1 update)
```javascript
// Add at top
import API from '../config/api';

// Line 14: Change
const response = await axios.get("http://localhost:1240/health");
// To:
const response = await axios.get(API.ENDPOINTS.HEALTH_RECOMMENDATIONS);
```

### 7. Home.js (3 updates)
```javascript
// Add at top
import API from '../config/api';

// Line 16: Change
const response = await fetch('http://localhost:1240/recipes');
// To:
const response = await fetch(API.ENDPOINTS.RECIPES);

// Line 50: Change
const response = await fetch(`http://localhost:1240/recipes/${recipeId}/like`, {
// To:
const response = await fetch(`${API.BASE_URL}/recipes/${recipeId}/like`, {

// Line 82: Change
const response = await fetch(`http://localhost:1240/recipes/${recipeId}/dislike`, {
// To:
const response = await fetch(`${API.BASE_URL}/recipes/${recipeId}/dislike`, {
```

### 8. IngredientDetails.js (1 update)
```javascript
// Add at top
import API from '../config/api';

// Line 17: Change
const response = await fetch(`http://localhost:1240/Ingredients/${id}`);
// To:
const response = await fetch(`${API.BASE_URL}/Ingredients/${id}`);
```

### 9. Ingredients.js (1 update)
```javascript
// Add at top
import API from '../config/api';

// Line 17: Change
const response = await fetch('http://localhost:1240/Ingredients');
// To:
const response = await fetch(API.ENDPOINTS.INGREDIENTS);
```

### 10. MealPlanning.js (1 update)
```javascript
// Add at top
import API from '../config/api';

// Line 21: Change
const response = await axios.get('http://localhost:1240/meals');
// To:
const response = await axios.get(API.ENDPOINTS.MEAL_PLANNING);
```

### 11. nearme.js (1 update)
```javascript
// Add at top
import API from '../config/api';

// Line 47: Change
const response = await axios.get('http://localhost:1240/stores', {
// To:
const response = await axios.get(`${API.BASE_URL}/stores`, {
```

### 12. RecipeDetails.js (2 updates)
```javascript
// Add at top
import API from '../config/api';

// Line 24: Change
const response = await axios.get(`http://localhost:1240/recipe/${id}`);
// To:
const response = await axios.get(API.ENDPOINTS.RECIPE_DETAILS(id));

// Line 41: Change
const response = await axios.post(`http://localhost:1240/recipe/${id}/reviews`, newReview);
// To:
const response = await axios.post(`${API.BASE_URL}/recipe/${id}/reviews`, newReview);
```

### 13. RecipeOfTheDay.js (1 update)
```javascript
// Add at top
import API from '../config/api';

// Line 15: Change
const response = await axios.get("http://localhost:1240/recipe-of-the-day");
// To:
const response = await axios.get(`${API.BASE_URL}/recipe-of-the-day`);
```

### 14. RecipeSubmit.js (1 update)
```javascript
// Add at top
import API from '../config/api';

// Line 38: Change
await axios.post('http://localhost:1240/submit-recipe', formData);
// To:
await axios.post(API.ENDPOINTS.SUBMIT_RECIPE, formData);
```

### 15. ReportRecipe.js (2 updates)
```javascript
// Add at top
import API from '../config/api';

// Line 15: Change
const response = await axios.get("http://localhost:1240/api/all-recipes");
// To:
const response = await axios.get(`${API.BASE_URL}/api/all-recipes`);

// Line 33: Change
await axios.post(`http://localhost:1240/api/recipe/report/${recipeId}`, {
// To:
await axios.post(`${API.BASE_URL}/api/recipe/report/${recipeId}`, {
```

### 16. Search.js (1 update)
```javascript
// Add at top
import API from '../config/api';

// Line 26: Change
const response = await axios.get(`http://localhost:1240/${searchType}`, {
// To:
const response = await axios.get(`${API.BASE_URL}/${searchType}`, {
```

### 17. TrendingRecipe.js (3 updates)
```javascript
// Add at top
import API from '../config/api';

// Line 12: Change
const response = await axios.get("http://localhost:1240/api/trending-recipes");
// To:
const response = await axios.get(API.ENDPOINTS.TRENDING_RECIPES);

// Line 48: Change
`http://localhost:1240/api/recipe/vote/${recipeId}`,
// To:
`${API.BASE_URL}/api/recipe/vote/${recipeId}`,

// Line 55: Change
const refreshedRecipes = await axios.get("http://localhost:1240/api/trending-recipes");
// To:
const refreshedRecipes = await axios.get(API.ENDPOINTS.TRENDING_RECIPES);
```

### 18. Login/dashboard.js (2 updates)
```javascript
// Add at top
import API from '../../config/api';

// Line 14: Change
const likedResponse = await axios.get("http://localhost:1240/api/user/liked-recipes", {
// To:
const likedResponse = await axios.get(`${API.BASE_URL}/api/user/liked-recipes`, {

// Line 18: Change
const reportedResponse = await axios.get("http://localhost:1240/api/user/reported-issues", {
// To:
const reportedResponse = await axios.get(`${API.BASE_URL}/api/user/reported-issues`, {
```

### 19. Login/login.js (1 update)
```javascript
// Add at top
import API from '../../config/api';

// Line 16: Change
const response = await axios.post("http://localhost:1240/api/login", formData);
// To:
const response = await axios.post(API.ENDPOINTS.LOGIN, formData);
```

### 20. Login/signup.js (1 update)
```javascript
// Add at top
import API from '../../config/api';

// Line 16: Change
await axios.post("http://localhost:1240/api/signup", formData);
// To:
await axios.post(API.ENDPOINTS.SIGNUP, formData);
```

### 21. Login/AdminPanel.js (3 updates)
```javascript
// Add at top
import API from '../../config/api';

// Line 17: Change
const response = await axios.get("http://localhost:1240/api/admin/recipes", {
// To:
const response = await axios.get(`${API.BASE_URL}/api/admin/recipes`, {

// Line 29: Change
const response = await axios.get("http://localhost:1240/api/admin/reports", {
// To:
const response = await axios.get(`${API.BASE_URL}/api/admin/reports`, {

// Line 41: Change
await axios.delete(`http://localhost:1240/api/admin/recipe/${id}`, {
// To:
await axios.delete(`${API.BASE_URL}/api/admin/recipe/${id}`, {
```

---

## Quick Checklist

- [ ] Created `frontend/src/config/api.js`
- [ ] Updated AboutUs.js
- [ ] Updated AdminPanel.js (6 places)
- [ ] Updated Contact.js (2 places)
- [ ] Updated FAQ.js
- [ ] Updated Glossary.js
- [ ] Updated HealthRecommendations.js
- [ ] Updated Home.js (3 places)
- [ ] Updated IngredientDetails.js
- [ ] Updated Ingredients.js
- [ ] Updated MealPlanning.js
- [ ] Updated nearme.js
- [ ] Updated RecipeDetails.js (2 places)
- [ ] Updated RecipeOfTheDay.js
- [ ] Updated RecipeSubmit.js
- [ ] Updated ReportRecipe.js (2 places)
- [ ] Updated Search.js
- [ ] Updated TrendingRecipe.js (3 places)
- [ ] Updated Login/dashboard.js (2 places)
- [ ] Updated Login/login.js
- [ ] Updated Login/signup.js
- [ ] Updated Login/AdminPanel.js (3 places)
- [ ] Test locally with `npm run dev` in backend
- [ ] Commit to GitHub
- [ ] Deploy to production

---

## Verification

After making all changes, test locally:

```bash
cd backend
npm run server

# In another terminal
cd frontend
npm start
```

All API calls should work exactly as before!

