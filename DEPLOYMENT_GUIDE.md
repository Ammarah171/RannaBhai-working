# RannBhai Complete Deployment Guide

This guide will help you deploy your MERN stack application to production using:
- **Frontend**: Vercel
- **Backend**: Railway or Render
- **Database**: MongoDB Atlas (already configured)

## Pre-Deployment Checklist

- [ ] Git repository initialized and pushed to GitHub
- [ ] MongoDB Atlas connection string verified
- [ ] Spoonacular API key ready
- [ ] Custom domain obtained
- [ ] GitHub account created
- [ ] Vercel account created
- [ ] Railway/Render account created

---

## Part 1: Deploy Backend to Railway or Render

### Option A: Deploy to Railway (Recommended)

1. **Create Railway Account**
   - Go to https://railway.app
   - Sign up with GitHub
   - Connect your GitHub account

2. **Create New Project**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Authorize Railway to access your GitHub

3. **Configure Environment Variables**
   - In Railway dashboard, go to your project
   - Click on your backend service
   - Go to Variables tab
   - Add these variables:
     ```
     PORT=1240
     NODE_ENV=production
     DB_URI=mongodb+srv://muuushfique:RannaBhaiconnect@rannabhai.446xt.mongodb.net/RannaBhai_db?retryWrites=true&w=majority&appName=RannaBhai
     SPOONACULAR_API_KEY=dfeee5ed5aef40269b747f33dddac849
     FRONTEND_URL=https://yourdomain.com
     JWT_SECRET=your_strong_secret_key_here
     SESSION_SECRET=your_session_secret_key_here
     ```

4. **Deploy**
   - Railway automatically deploys from your main branch
   - Monitor the logs for successful deployment
   - Copy your Railway backend URL (e.g., `api.railway.app`)

### Option B: Deploy to Render

1. **Create Render Account**
   - Go to https://render.com
   - Sign up with GitHub

2. **Create New Web Service**
   - Click "New +"
   - Select "Web Service"
   - Connect your GitHub repository
   - Select the backend folder

3. **Configure Service**
   - **Name**: rannbhai-backend
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `node index.js`
   - **Instance Type**: Free (or Starter)

4. **Add Environment Variables**
   - In Settings, scroll to "Environment"
   - Add all variables from the Railway section above

5. **Deploy**
   - Click "Deploy"
   - Monitor deployment logs
   - Copy your Render service URL

---

## Part 2: Update Frontend Configuration

### Update Your API URL

1. **Edit `.env.production`**
   ```
   # Replace with your Railway/Render backend URL
   REACT_APP_API_URL=https://rannabhai-working-production.up.railway.app/
   ```

2. **Update CORS in Backend**
   - Update `backend/.env.production`:
     ```
     FRONTEND_URL=https://rannabhai.vercel.app
     ```

### Install API Configuration

The `frontend/src/config/api.js` file has been created for you. 
Now update your components to use it instead of hardcoded URLs.

Example transformation:
```javascript
// Before (OLD)
const response = await axios.get("http://localhost:1240/about-us");

// After (NEW)
import API from '../config/api';
const response = await axios.get(API.ENDPOINTS.ABOUT_US);
```

---

## Part 3: Deploy Frontend to Vercel

1. **Create Vercel Account**
   - Go to https://vercel.com
   - Sign up with GitHub

2. **Import Project**
   - Click "Add New"
   - Select "Project"
   - Select your GitHub repository
   - Select `./frontend` as the root directory

3. **Configure Build Settings**
   - **Framework Preset**: Create React App
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
   - **Install Command**: `npm install`

4. **Add Environment Variables**
   - Click "Environment Variables"
   - Add:
     ```
     REACT_APP_API_URL=https://rannabhai-working-production.up.railway.app/
     ```

5. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Vercel will provide a URL like `yourdomain.vercel.app`

---

## Part 4: Configure Custom Domain

### For Vercel Frontend:

1. Go to your Vercel project settings
2. Click "Domains"
3. Enter your custom domain
4. Follow DNS configuration instructions
5. Point your domain registrar to Vercel's nameservers or create CNAME records

### For Railway/Render Backend:

If you want a subdomain for your API (e.g., `api.yourdomain.com`):

1. In your domain registrar, create a CNAME record:
   ```
   Name: api
   Value: your-railway-url.com (or render URL)
   ```

2. Update `FRONTEND_URL` in backend environment variables:
   ```
   FRONTEND_URL=https://yourdomain.com
   ```

---

## Part 5: Update All API Calls in Frontend

Search for all `axios.get()` and `axios.post()` calls using hardcoded URLs.

Replace with API config:

```javascript
import API from '../config/api';

// Example: Contact form
axios.post(API.ENDPOINTS.CONTACT, formData);

// Example: Get recipes
axios.get(API.ENDPOINTS.RECIPES);

// Example: Get specific recipe
axios.get(API.ENDPOINTS.RECIPE_DETAILS(recipeId));
```

---

## Part 6: Testing & Verification

1. **Test Frontend**
   - Visit your Vercel URL
   - Check console for errors
   - Verify API calls reach backend

2. **Test Backend**
   - Visit `https://rannabhai-working.railway.internal/health` (if you have health check)
   - Check MongoDB connection logs
   - Verify environment variables are loaded

3. **Test API Calls**
   - Make a test API call from frontend
   - Check CORS headers
   - Verify database operations work

---

## Troubleshooting

### CORS Errors
- Ensure `FRONTEND_URL` is set correctly in backend
- Check that backend `.env` has proper FRONTEND_URL
- Verify API calls use correct domain

### Database Connection Issues
- Check MongoDB Atlas firewall IP whitelist (should be 0.0.0.0/0 for cloud deployments)
- Verify connection string is correct
- Check that IP is not blocked

### Build Failures
- Check build logs in Vercel/Railway/Render
- Ensure all dependencies are installed
- Verify environment variables are set

### API Not Found (404)
- Check backend logs for routing errors
- Verify API endpoints match frontend calls
- Ensure backend is running

---

## Environment Variables Summary

### Frontend (.env.production)
```
REACT_APP_API_URL=https://your-backend-url.com
```

### Backend (.env.production)
```
PORT=1240
NODE_ENV=production
DB_URI=your_mongodb_connection_string
SPOONACULAR_API_KEY=your_api_key
FRONTEND_URL=https://yourdomain.com
JWT_SECRET=your_strong_secret
SESSION_SECRET=your_session_secret
```

---

## Next Steps

1. [ ] Update all frontend components to use API config
2. [ ] Test locally with `npm run dev` in backend folder
3. [ ] Push code to GitHub
4. [ ] Deploy backend first
5. [ ] Update frontend API URL
6. [ ] Deploy frontend
7. [ ] Configure custom domain
8. [ ] Test all features
9. [ ] Monitor logs for errors
10. [ ] Set up monitoring/alerts

---

## Useful Links

- [Railway Documentation](https://docs.railway.app)
- [Render Documentation](https://render.com/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com)

