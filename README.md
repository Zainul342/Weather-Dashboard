# 🌦️ Weather Dashboard

> A premium, glassmorphism-styled weather dashboard built with **Vanilla JS**. Zero frameworks, 100% vibes.

![Weather Dashboard Preview](https://github.com/Zainul342/Weather-Dashboard/assets/placeholder/preview.png)
*(Note: Replace this image link with your actual screenshot)*

## ✨ Features

- **Real-time Weather**: Current temp, humidity, wind, visibility, pressure.
- **5-Day Forecast**: Plan your week with a quick glance.
- **Glassmorphism UI**: Modern, sleek, frosted glass aesthetic.
- **Dark/Light Mode**: Toggle between "Midnight Slate" and "Daylight Sky".
- **Dynamic Units**: One-click switch between Celsius (°C) and Fahrenheit (°F).
- **Geolocation**: Get weather for your current location instantly.
- **Responsive**: Bento grid layout that adapts from desktop to mobile.

## 🛠️ Tech Stack

- **Core**: HTML5, CSS3 (Variables + Flexbox/Grid), JavaScript (ES6+).
- **Icons**: [Phosphor Icons](https://phosphoricons.com/).
- **Font**: [Inter](https://fonts.google.com/specimen/Inter) from Google Fonts.
- **Data**: [OpenWeatherMap API](https://openweathermap.org/).
- **Deployment**: Netlify (Serverless Functions).

## 🚀 Getting Started

### Option 1: Live Demo

Check it out here: **[Live Demo Link](https://weather-dashboard-zainul.netlify.app)**

### Option 2: Run Locally

1. **Clone the repo**

   ```bash
   git clone https://github.com/Zainul342/Weather-Dashboard.git
   cd Weather-Dashboard
   ```

2. **Setup API Key**
   - Create `js/config.js` from the example:

     ```bash
     cp js/config.example.js js/config.js
     ```

   - Get your key from [OpenWeatherMap](https://home.openweathermap.org/api_keys).
   - Paste it into `js/config.js`.

3. **Go Live!**
   - Open `index.html` with VS Code Live Server.
   - Or just drag correct `index.html` to your browser.

## 🔒 Security Note

This project uses **Netlify Serverless Functions** in production to hide the API Key from the frontend.

- **Local**: Uses `js/config.js` (gitignored).
- **Production**: Uses environment variables (`process.env.OPENWEATHER_API_KEY`).

## 📂 Project Structure

```
├── css/
│   └── styles.css       # The aesthetics (variables, glassmorphism)
├── js/
│   ├── app.js           # Core logic (state, DOM, event listeners)
│   ├── config.js        # API Key (Local only - GITIGNORED)
│   └── config.example.js
├── netlify/
│   └── functions/       # Serverless backend for security
├── docs/                # Architecture & Design docs
├── index.html           # Structure (Bento grid layout)
└── task.md              # Project roadmap & checklist
```

## 👨‍💻 Credits

- Design inspired by modern UI trends (Bento Grids, Glassmorphism).
- Built by **Zainul342**.
