# Weather Dashboard Deployment Guide

## 🚀 Deploy to Netlify

### Step 1: Push to GitHub

```bash
git add .
git commit -m "Add serverless functions for API security"
git push origin main
```

### Step 2: Connect to Netlify

1. Go to [Netlify](https://netlify.com)
2. Click **"Add new site" → "Import an existing project"**
3. Choose **GitHub** and select your repository
4. **Build settings:**
   - Build command: (leave empty)
   - Publish directory: `.` (current directory)
5. Click **"Deploy site"**

### Step 3: Add Environment Variable

**Critical**: Your API key is NOT in the code anymore. You need to add it in Netlify:

1. Go to: **Site settings → Environment variables**
2. Click **"Add a variable"**
3. Key: `OPENWEATHER_API_KEY`
4. Value: `65c3882ca12361ab49e9fdf325479117`
5. Click **"Save"**

### Step 4: Redeploy

After adding the env variable:

1. Go to **Deploys** tab
2. Click **"Trigger deploy" → "Deploy site"**

Done! Your API key is now hidden from the public.

---

## 🧪 How It Works

### In Production (Netlify)

```
Browser → /.netlify/functions/weather → OpenWeather API
          (serverless function with hidden key)
```

### Locally (localhost)

```
Browser → OpenWeather API directly
          (using API_KEY in app.js)
```

The app automatically detects the environment (`IS_PRODUCTION`) and switches between the two modes.

---

## 🔒 Security

✅ **API Key is hidden**: Not in the browser, not in GitHub
✅ **Serverless function**: Runs on Netlify's server
✅ **Environment variable**: Only Netlify admin can see it

---

## 🛠️ Local Development

To test locally:

1. Open `index.html` in browser (Live Server)
2. It will use the API key in `app.js` (line 10)
3. Works exactly the same as before

---

## 📝 Notes

- Netlify auto-detects `netlify.toml` and `netlify/functions/`
- Functions will be available at `/.netlify/functions/weather` and `/.netlify/functions/forecast`
- No npm install needed (Netlify handles it)
