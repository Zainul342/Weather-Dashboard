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
4. Value: `YOUR_ACTUAL_API_KEY_HERE` (Paste key kamu disini)
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

**IMPORTANT:** The API key is NOT hardcoded anymore for security.

To test locally:

1. **Create your local config file:**
   - Copy `js/config.example.js` to `js/config.js`
   - Edit `js/config.js` and add your actual API key

2. **Open `index.html` in browser** (Live Server)

3. It will work exactly the same as before

**Note:** `js/config.js` is in `.gitignore` so your key won't be committed.

---

## 🔒 Security Summary

### ❌ **BEFORE (Unsafe):**

- API key hardcoded in `app.js`
- Visible on public GitHub repo
- Anyone can steal it

### ✅ **NOW (Secure):**

- **Production:** Key in Netlify env variable (hidden)
- **Locally:** Key in `js/config.js` (gitignored)
- **GitHub:** NO API key visible

---

## 📝 Notes

- Netlify auto-detects `netlify.toml` and `netlify/functions/`
- Functions will be available at `/.netlify/functions/weather` and `/.netlify/functions/forecast`
- No npm install needed (Netlify handles it)
- Branch name is `master` not `main` (use `git push origin master`)
