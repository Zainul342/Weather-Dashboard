# Weather Dashboard PRD

## Whats This About

So we're making a weather dashboard. Not the boring kind that looks like every other junior portfolio project tho. The goal here is to build something that actually looks like a real developer made it. Clean UI, proper error handling, doesnt crash when you look at it wrong.

Basic idea is simple. You search a city, you get the weather. But the difference is we're not just dumping raw data on screen. Nobody cares that humidity is 85%. What they care about is whether they're gonna be sweating through their shirt today or not.

Think actionable info over data dumps. If its hot and humid, say something like "feels way hotter than actually is". If rain is coming, tell them to grab an umbrella. Thats the vibe we're going for.

## Who Is This For

Honestly anyone who wants quick weather info. Not meteorologists or anything, just regular people checking if they need a jacket.

Main persona is probably someone checking weather before heading out. They open the app, get the info in like 5 seconds, and go about their day. No scrolling through 10 different metrics trying to figure out what they mean.

## User Stories

**The basics**

As a user I wanna type in a city name and see the current weather. Pretty straightforward. Show me the temp, what it feels like, and the general condition (sunny, cloudy, raining, whatever).

As a user if I search for a city that doesnt exist or type something wrong, don't just break. Tell me nicely that you couldn't find it. Maybe suggest something close.

**Quality of life stuff**

As a user I don't wanna search for the same city every single time. Remember what I searched last and show me that when I come back.

As a user on my phone, I expect everything to work just as good as on desktop. No tiny text, no broken layouts, no horizontal scrolling.

**Nice to have scenarios**

As a user it would be cool to see a forecast so I can plan my week. But this is optional, not MVP.

As a user maybe auto detect my location sometimes? So I don't even have to type anything. But again, optional.

## Tech Stack

Keeping it simple here since this is a beginner level project

**Frontend**

- HTML for structure (semantic tags, accessibility basics)
- CSS for styling (vanilla CSS, no frameworks yet)
- JavaScript for the logic (fetch API, async await, DOM stuff)

**API**

- OpenWeather API free tier. Gets us current weather and maybe forecasts if we need em.

**Storage**  

- localStorage for caching data and remembering last search. Nothing fancy.

**Deployment**

- GitHub Pages. Free, easy, gets the job done.

No build tools, no bundlers, no npm packages. Just raw HTML CSS JS like the old days. We can upgrade later if needed.

## Features

### MVP (These are non negotiable)

**Search by city**
Text input, user types a city, hits enter or clicks search, data loads. Standard stuff.

**Current weather display**
Show the temperature (in celsius cuz metric makes sense), the "feels like" temp, and a description of the condition. Also need a weather icon thats not pixelated garbage from the API.

**Error handling that doesn't suck**
If city not found, show a friendly message. If network is dead, tell the user. No blank screens, no console errors that go unhandled, no alert() boxes like its 2005.

**Mobile responsive**
Works on phones. Thats the bar. Readable text, tappable buttons, no weird overflow issues.

**Loading state**
When fetching data, show something. A "loading..." text at minimum. Users shouldn't stare at a frozen screen wondering if the app died.

### Polish (If we got extra time)

**Cached data**
Store the last fetch in localStorage so we're not hitting the API constantly. Also means if user comes back, they see something immediately while fresh data loads.

**Dynamic background**
Change the background color or gradient based on weather. Sunny = warm vibes. Rainy = moody blues. Night = dark mode. Makes the app feel alive.

**Recent searches**
Remember the last 3 to 5 cities user searched. Show them as quick access buttons or something.

**Smooth animations**
Fade in data when it loads. Hover effects on cards. Small stuff that makes it feel premium.

### Dream Features (Future Us Problem)

- 5 day forecast with daily breakdown
- Hourly forecast for today
- Geolocation to auto detect user location
- Celsius to Fahrenheit toggle
- Charts showing temp over time (maybe chart.js)
- Weather alerts for extreme conditions

## Non Goals

Just to be super clear about what we're NOT doing here

- No backend server. Everything runs client side.
- No user accounts or authentication. This is a simple static site.
- No paid API features. Sticking to free tier only.
- No PWA stuff (offline mode, push notifications). Maybe later but not now.
- Not trying to compete with actual weather apps. This is a portfolio project that happens to be useful.

## When Is This Done

We know we're finished when

1. User can search any major city and get accurate weather data
2. The UI looks clean on both mobile and desktop
3. Errors are handled gracefully (no crashes, no console spam)
4. Code is organized and not a spaghetti mess
5. It's deployed and live on GitHub Pages

Thats the baseline. Everything else is bonus points.

## Design Direction

Not gonna write a whole design doc but quick notes from brainstorming

**Color palette**
Going dark mode. Slate and dark blues as base. Weather condition colors as accents. No bright blue gradients that every other weather app uses.

**Typography**
Clean sans serif. Inter or Poppins from Google Fonts. Big temperature number for the main display. Smaller supporting text for details.

**Layout**
Hero area in the middle with the main temp. Supporting info cards around it. Search bar at the top obviously. Keep it simple, don't over complicate.

**Icons**
Either find a decent icon set or use emojis tbh. Anything is better than the tiny pixelated PNGs from openweather.

## References

Check the brainstorming docs in `/docs/brainstorming_results/` for more detailed thinking on

- Discovery and user needs
- Competitive analysis
- Visual strategy
- Technical architecture

Those docs have the deeper breakdown of why we're doing what we're doing.

---

*Last updated Jan 2026*
