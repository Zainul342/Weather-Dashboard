# Architecture Doc

## How This Thing Works

Super simple breakdown of how data moves through the app. No fancy diagrams, just plain english.

```
User types city name
       ↓
App grabs the input
       ↓
Check localStorage first (got cached data?)
       ↓
   Yes → use cached data, skip API
   No  → fetch from OpenWeather API
       ↓
API returns JSON with weather info
       ↓
App parses the data, extracts what we need
       ↓
Update the DOM with new info
       ↓
Save to localStorage for next time
```

Thats basically it. Nothing crazy going on here.

## The API Part

We're hitting OpenWeather's current weather endpoint

```
https://api.openweathermap.org/data/2.5/weather?q={city}&appid={key}&units=metric
```

What we get back is a JSON blob with a ton of stuff. We only care about a few things tho

- `main.temp` the actual temperature
- `main.feels_like` what it feels like with humidity and wind
- `main.humidity` percentage
- `weather[0].description` like "light rain" or "clear sky"
- `weather[0].icon` icon code for the condition
- `wind.speed` in meters per second
- `name` city name as the API knows it

API key goes in the URL. Yeah I know its exposed in client side code. For a portfolio project its fine. Real app would need a backend proxy but thats overkill for this.

## HTML Structure

Keeping the markup simple. Here's what sections we need

```
<body>
   │
   ├── header
   │     └── search form (input + button)
   │
   ├── main
   │     ├── hero section (big temp display)
   │     │     ├── city name
   │     │     ├── temperature
   │     │     ├── feels like
   │     │     ├── condition text
   │     │     └── weather icon
   │     │
   │     └── details grid
   │           ├── humidity card
   │           ├── wind speed card
   │           └── maybe more cards later
   │
   ├── error container (hidden by default)
   │
   └── loading indicator (hidden by default)
</body>
```

Main sections have clear jobs. Header handles input. Main shows the weather. Error and loading are utility elements that show/hide as needed.

## CSS Organization

Not gonna do a full breakdown but rough idea of how styles are organized

```
styles.css
   │
   ├── reset/base styles
   │     └── box sizing, margins, font defaults
   │
   ├── css variables
   │     ├── colors (dark theme palette)
   │     ├── spacing values
   │     └── font sizes
   │
   ├── layout
   │     ├── body and container
   │     ├── header
   │     └── main grid
   │
   ├── components
   │     ├── search form
   │     ├── hero display
   │     ├── detail cards
   │     ├── error message
   │     └── loading state
   │
   └── utilities
         ├── hidden class
         └── animation keyframes
```

## JavaScript Structure

For a beginner project we're keeping everything in one file but organized with comment sections. Eventually could split into modules but lets walk before we run.

```
app.js
   │
   ├── CONFIG
   │     └── api key, base url, cache duration
   │
   ├── STATE
   │     └── current weather data object
   │
   ├── DOM ELEMENTS
   │     └── grab all the elements we need upfront
   │
   ├── API FUNCTIONS
   │     ├── fetchWeather(city)
   │     └── maybe fetchForecast(city) later
   │
   ├── CACHE FUNCTIONS
   │     ├── getCache(key)
   │     └── setCache(key, data)
   │
   ├── UI FUNCTIONS
   │     ├── updateWeatherDisplay(data)
   │     ├── showError(message)
   │     ├── showLoading()
   │     └── hideLoading()
   │
   ├── EVENT HANDLERS
   │     └── form submit handler
   │
   └── INIT
         └── load default city or last searched
```

## Error Handling Flow

What happens when stuff goes wrong

**City not found (404)**
API returns error. We catch it, show friendly message like "couldn't find that city, check spelling maybe". Don't crash, don't show ugly alert box.

**Network dead**
Fetch throws. Check if we have cached data for that city. If yes, show stale data with a note saying "data might be old". If no cache, show error asking user to check connection.

**Empty input**
Don't even try to fetch. Just highlight the input field or show inline message.

**API limit hit**
Rare but possible. Show generic error. Maybe suggest trying again in a minute.

## Caching Strategy

localStorage based. Simple key value storage.

Key format is `weather_{cityname}` so each city has its own cache entry.

Value is JSON with the actual data plus a timestamp of when we fetched it.

On every fetch attempt, check cache first. If cache exists and its less than 5 minutes old, use cached data. If older than 5 min or doesnt exist, hit the API.

After successful API call, always update the cache.

Also store the last searched city separately so we can load it on page refresh.

## State Management

For a vanilla JS project we keep it real simple. One object holds the current weather data.

```javascript
let state = {
   city: null,
   temp: null,
   feelsLike: null,
   condition: null,
   icon: null,
   humidity: null,
   wind: null,
   lastUpdated: null
}
```

When new data comes in, update this object, then call the render function. Keeps a clear separation between data and display.

## Future Considerations

If this project grows, here's what we might add

**Module split**
Break app.js into api.js, cache.js, ui.js, utils.js. Use ES modules with import/export.

**Build step**
Add bundler like Vite. Lets us use env variables for API key, minify code, etc.

**TypeScript**
Type safety for the weather data objects. Helpful for bigger projects.

**Service worker**
PWA stuff. Offline support, push notifications.

But again, all that is future scope. For now we keep it vanilla and simple.

---

*This is a living doc, will update as we build*
