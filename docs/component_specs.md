# Component Architecture & Technical Specs

This document fulfills the Component Planning requirement (Phase 3.3). It outlines the HTML structure, CSS methodology, and JavaScript function organization.

## 1. HTML Component Structure (Semantic)

The application uses a "Bento Grid" layout strategy.

```html
<body>
  <div class="app-container">
    
    <!-- 1. HEADER COMPONENT -->
    <header class="app-header">
      <div class="logo">...</div>
      <div class="search-container">...</div>
      <div class="actions">...</div>
    </header>

    <!-- 2. MAIN GRID COMPONENT -->
    <main class="bento-grid">
      
      <!-- 2.1 CURRENT WEATHER CARD (HERO) -->
      <section class="card main-card">
        <div class="card-header">City & Date</div>
        <div class="temp-display">Big Temp & Icon</div>
        <div class="desc-display">Weather Description</div>
      </section>

      <!-- 2.2 HIGHLIGHTS GRID (SIDEBAR) -->
      <div class="highlights-grid">
        <div class="card highlight-card">Humidity</div>
        <div class="card highlight-card">Wind</div>
        <div class="card highlight-card">UV Index</div>
        <div class="card highlight-card">Visibility</div>
      </div>

      <!-- 2.3 FORECAST ROW (BOTTOM) -->
      <section class="card forecast-section">
        <h3>5-Day Forecast</h3>
        <div class="forecast-container">
          <div class="forecast-item">...</div>
          <!-- Repeated x5 -->
        </div>
      </section>

    </main>
  </div>
</body>
```

## 2. CSS Architecture

We are using **Vanilla CSS with Variables** and a **Utility-First** approach for common patterns (Glassmorphism), combined with **BEM-ish** class naming for components.

### Naming Convention

- **Components**: `.card`, `.btn`, `.search-container`
- **Modifiers**: `.card--active` (if needed), `.icon-blue`
- **Utilities**: `.text-center`, `.flex-row` (if needed)

### Key Variables (`style.css`)

```css
:root {
  --bg-main: #0f172a;
  --bg-card: rgba(30, 41, 59, 0.7);
  --text-primary: #f8fafc;
  --text-accent: #38bdf8;
  --radius-lg: 24px;
}
```

## 3. JavaScript Logic (`app.js`)

The code will be organized into specific functions to maintain separation of concerns.

### Core Functions

1. **`init()`**: Checks local storage for last city, or loads default/geolocation.
2. **`handleSearch(city)`**: Main orchestrator. triggers fetch, then update UI.
3. **`fetchWeatherData(city)`**: Async function to hit OpenWeatherMap API (Current & Forecast).
4. **`updateCurrentWeather(data)`**: Updates the DOM elements for the main card.
5. **`updateHighlights(data)`**: Updates humidity, wind, etc.
6. **`updateForecast(data)`**: Generates and injects HTML for the 5-day forecast.
7. **`showError(message)`**: Displays user-friendly error messages (e.g., in a toast or modal).

### API Data Flow

User Input -> `handleSearch` -> `fetchWeatherData` -> API -> JSON -> `updateUI` functions -> DOM
