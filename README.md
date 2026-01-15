# 🌦️ Weather Dashboard

> Just a clean weather app built with **Vanilla JS**. No fancy frameworks, just good vibes and glassmorphism.

![Weather Dashboard Preview](https://github.com/Zainul342/Weather-Dashboard/assets/placeholder/preview.png)
*(Note: Replace this image link with your actual screenshot)*

## ✨ What's Inside

- **Real-time Weather**: See whats happening outside right now. Temp, wind, humidity, the works.
- **5-Day Forecast**: Quick look at the week ahead so you dont get caught in the rain.
- **Glassmorphism UI**: Made it look slick with that frosted glass effect. Premium feel.
- **Dark/Light Mode**: Toggle between "Midnight Slate" and "Daylight Sky". cause dark mode is life, but light mode exists too.
- **Dynamic Units**: Click the button to switch °C/°F. Easy.
- **Geolocation**: One click to see weather where you're at.
- **Responsive**: Looks good on your laptop OR your phone. Bento grid layout adapts.

## 🛠️ Built With

- **HTML/CSS/JS**: Basic stack, raw power. No React/Vue overhead here.
- **Icons**: [Phosphor Icons](https://phosphoricons.com/) - clean lines.
- **Font**: [Inter](https://fonts.google.com/specimen/Inter) - keeping it readable.
- **API**: [OpenWeatherMap](https://openweathermap.org/) - backend logic.
- **Deploy**: Netlify (using Serverless Functions cause we care about security).

## 🚀 How to Try It

### Live Demo

Go click this: **[Live Demo Link](https://weather-dashboard-zainul.netlify.app)**

### Run on Your Machine

1. **Clone it**

   ```bash
   git clone https://github.com/Zainul342/Weather-Dashboard.git
   cd Weather-Dashboard
   ```

2. **Fix the API Key**
   - Grab the example config:

     ```bash
     cp js/config.example.js js/config.js
     ```

   - Get a key from [OpenWeatherMap](https://home.openweathermap.org/api_keys) (its free).
   - Paste it into `js/config.js`.

3. **Run it**
   - Open `index.html` with Live Server.
   - Or literally just drag the file into Chrome. Done.

## 🔒 Security Stuff

Yeah, we used **Netlify Serverless Functions** for production.

- **Locally**: Uses `js/config.js` (which is ignored by git, so your key is safe).
- **Production**: Uses environment variables.
- **Github**: Clean. No keys leaked here.

## 📂 Folder Structure

```
├── css/
│   └── styles.css       # All the styling magic
├── js/
│   ├── app.js           # The brains (fetch data, update DOM)
│   ├── config.js        # API Key lives here (Local only)
│   └── config.example.js
├── netlify/
│   └── functions/       # Serverless endpoints (hides our keys)
├── docs/                # Blueprint stuff
├── index.html           # The skeleton
└── task.md              # Checklist of what we did
```

## 👨‍💻 Credits

Built by **Zainul342**. Inspired by those Dribbble inputs we saw.
