# Weather Dashboard 🌦️

Simple weather app I built with Vanilla JS. No frameworks, just clean code and a glassmorphism design that looks pretty nice.

![Weather Dashboard Preview](https://github.com/Zainul342/Weather-Dashboard/assets/placeholder/preview.png)
*(Replace this link with your actual screenshot later)*

## What's Inside

Basically it shows you the real-time weather with all the details like humidity, wind speed, and pressure. Also got a 5-day forecast so you know if you need an umbrella later in the week.

The design uses this frosted glass effect (glassmorphism) on top of a bento grid layout. It adapts to mobile screens too so it doesnt look broken on your phone.

And yeah, supports both Dark Mode and Light Mode depending on your vibe.

## Tech Stack

Kept it simple for this one.

- **HTML/CSS/JS** - The classics
- **Phosphor Icons** for the visuals
- **OpenWeatherMap API** for the data
- **Netlify Functions** to handle the API calls securely

## How to Try It

You can check out the live version here:
[Live Demo](https://weather-dashboard-zainul.netlify.app)

**Running it locally**

1. Clone the repo first

   ```bash
   git clone https://github.com/Zainul342/Weather-Dashboard.git
   ```

2. Set up the API Key
   I use a config file for local dev so the key isn't exposed.
   Copy `js/config.example.js` to `js/config.js` and paste your OpenWeatherMap key in there.

3. Run it
   Just open `index.html` in your browser. Using Live Server in VS Code is probably the easiest way.

## About Security

Since this is a client-side app, storing API keys is usually tricky. I set up Netlify Serverless Functions to handle the requests in production. This way the API key stays hidden in the environment variables and never hits the browser. Safest way to do it.

## Credits

Built by **Zainul342**.
