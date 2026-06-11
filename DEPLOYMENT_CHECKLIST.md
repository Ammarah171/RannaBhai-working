# RannBhai Deployment Checklist

## 🚀 Quick Start - 30 Minute Deployment

### Pre-Deployment (5 min)
- [ ] Ensure your code is pushed to GitHub
- [ ] Have your domain name ready
- [ ] Gather credentials:
  - MongoDB Atlas connection string
  - Spoonacular API key
  - Any other API keys you use

### Step 1: Deploy Backend (10 min)

#### Choose Your Platform:

**Railway (Recommended):**
```
1. Go to https://railway.app
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Select the "backend" directory
5. Add Environment Variables (see below)
6. Deploy!
7. Copy your Railway URL from the Dashboard
```

**Or Render:**
```
1. Go to https://render.com
2. Click "New +" → "Web Service"
3. Connect your GitHub repo
4. Name: rannbhai-backend
5. Build Command: npm install
6. Start Command: node index.js
7. Add Environment Variables (see below)
8. Deploy!
9. Copy your Render URL
```

**Environment Variables to Add:**
```
DB_URI=mongodb+srv://muuushfique:RannaBhaiconnect@rannabhai.446xt.mongodb.net/RannaBhai_db?retryWrites=true&w=majority&appName=RannaBhai
SPOONACULAR_API_KEY=dfeee5ed5aef40269b747f33dddac849
FRONTEND_URL=https://yourdomain.com
JWT_SECRET=any_random_string_here_12345
SESSION_SECRET=another_random_string_here_67890
NODE_ENV=production
PORT=1240
```

### Step 2: Get Your Backend URL (2 min)
- Once deployed, copy your backend URL from Railway/Render
- Format: `https://xxxxx.railway.app` or `https://xxxxx.onrender.com`

### Step 3: Deploy Frontend (10 min)

```
1. Go to https://vercel.com
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Set Root Directory to: "frontend"
5. Add Environment Variable:
   - REACT_APP_API_URL = [Your backend URL from Step 2]
6. Click "Deploy"
7. Copy your Vercel URL
```

### Step 4: Configure Domain (3 min)

1. **Point domain to Vercel:**
   - Go to Vercel project settings → Domains
   - Enter your domain
   - Update your domain registrar's DNS settings as instructed

2. **Update Backend CORS (Optional API subdomain):**
   - Update `FRONTEND_URL` in Railway/Render to: `https://yourdomain.com`

---

## 🔧 Required File Updates

### Update Frontend Components to Use API Config

All components using axios need to be updated. Here's the pattern:

**Before (OLD):**
```javascript
import axios from 'axios';
const response = await axios.get("http://localhost:1240/about-us");
```

**After (NEW):**
```javascript
import axios from 'axios';
import API from '../config/api';
const response = await axios.get(API.ENDPOINTS.ABOUT_US);
```

**Files to Update:**
- [ ] AboutUs.js
- [ ] Contact.js
- [ ] Glossary.js
- [ ] FAQ.js
- [ ] Home.js
- [ ] RecipeDetails.js
- [ ] Search.js
- [ ] AdminPanel.js
- [ ] RecipeSubmit.js
- [ ] ReportRecipe.js
- [ ] TrendingRecipe.js
- [ ] And any other components using axios

---

## ✅ Final Verification

After deployment, test these:

- [ ] Frontend loads at your domain: `https://yourdomain.com`
- [ ] Click around the app, no 404 errors
- [ ] Contact form works (should save to MongoDB)
- [ ] Recipes display correctly
- [ ] No CORS errors in browser console
- [ ] Network tab shows API calls going to your backend URL
- [ ] Backend logs show incoming requests

---

## 🆘 Troubleshooting

### Issue: "Cannot connect to database"
**Solution:** 
- Check MongoDB Atlas firewall: Allow `0.0.0.0/0` (all IPs)
- Verify connection string in Railway/Render environment variables

### Issue: "CORS error in console"
**Solution:**
- Make sure `FRONTEND_URL` is set in backend environment variables
- Frontend URL must match exactly (https://yourdomain.com, not http://)

### Issue: "API returns 404"
**Solution:**
- Verify backend is running (check logs in Railway/Render)
- Ensure API endpoints exist in `backend/routes/handler.js`
- Check that frontend is calling correct endpoint names

### Issue: "Build failed on Vercel"
**Solution:**
- Check build logs for specific error
- Most common: Missing dependencies (run `npm install` locally first)
- Make sure `.env.production` exists in frontend folder

---

## 📱 Local Testing (Before Deploying)

```bash
# In backend folder
npm install
npm run server

# In another terminal, in frontend folder
npm install
REACT_APP_API_URL=http://localhost:1240 npm start
```

---

## 📊 Deployment Architecture

```
User Browser
    ↓
Vercel (Frontend: yourdomain.com)
    ↓ HTTPS
Railway/Render (Backend API)
    ↓
MongoDB Atlas
```

---

## 🎯 Next Steps After Deployment

1. Monitor logs in Railway/Render for errors
2. Set up error tracking (optional: Sentry, LogRocket)
3. Enable backups for MongoDB
4. Set up SSL certificate (automatic with Vercel/Railway/Render)
5. Configure email notifications for deployment
6. Plan for database scaling if needed

---

## 💡 Pro Tips

- Use environment variables for all configuration
- Never commit `.env` files to git
- Monitor free tier limits (Railway/Render may have limits)
- Keep MongoDB Atlas firewall updated for authorized IPs only (for security)
- Set up uptime monitoring for your backend
- Use Vercel Analytics for frontend performance insights

---

**Questions?** Check [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed explanations.

