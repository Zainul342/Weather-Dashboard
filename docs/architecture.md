# Architecture Documentation - Weather Dashboard

## System Overview

Weather Dashboard adalah client-side web application yang berkomunikasi langsung dengan OpenWeather API untuk mendapatkan data cuaca real-time.

## High-Level Architecture

```
┌─────────────┐
│   Browser   │
│   (User)    │
└──────┬──────┘
       │
       │ HTTP Request
       │
┌──────▼──────────────────┐
│   index.html            │
│   + styles.css          │
│   + app.js              │
└──────┬──────────────────┘
       │
       │ Fetch API
       │
┌──────▼──────────────────┐
│  OpenWeather API        │
│  (External Service)     │
└─────────────────────────┘
```

## Data Flow

### 1. User Search Flow

```
User Input → Form Submit → fetchWeatherData() 
→ API Call → Response → displayWeatherData() → DOM Update
```

### 2. Error Flow

```
API Error → Catch Block → displayError() → Error Message Display
```

## Component Breakdown

### HTML Structure

```
┌─────────────────────────┐
│      Header             │
│  (Title/Logo)           │
├─────────────────────────┤
│   Search Section        │
│  (Form + Input)         │
├─────────────────────────┤
│  Weather Display        │
│  (Main Content Area)    │
├─────────────────────────┤
│   Error Display         │
│  (Error Messages)       │
├─────────────────────────┤
│      Footer             │
│  (Attribution)          │
└─────────────────────────┘
```

### JavaScript Modules (Logical Separation)

```
app.js
├── Configuration
│   ├── API_KEY
│   └── API_BASE_URL
│
├── DOM Elements
│   ├── searchForm
│   ├── cityInput
│   ├── weatherDisplay
│   └── errorDisplay
│
├── Event Handlers
│   └── handleSearch()
│
├── API Functions
│   └── fetchWeatherData(city)
│
└── UI Functions
    ├── displayWeatherData(data)
    └── displayError(message)
```

## API Integration

### Endpoint Used

```
GET https://api.openweathermap.org/data/2.5/weather
```

### Parameters

| Parameter | Value | Description |
|-----------|-------|-------------|
| q | {city_name} | City name |
| appid | {API_KEY} | API key |
| units | metric | Celsius |
| lang | id | Indonesian |

### Response Structure

```json
{
  "name": "Jakarta",
  "main": {
    "temp": 28.5,
    "humidity": 80
  },
  "weather": [{
    "description": "cerah",
    "icon": "01d"
  }],
  "wind": {
    "speed": 3.5
  }
}
```

## Error Handling Strategy

### Error Types

1. **Network Errors**: Offline, timeout
2. **API Errors**:
   - 404: City not found
   - 401: Invalid API key
   - 429: Rate limit exceeded
3. **Validation Errors**: Empty input

### Handling Approach

```javascript
try {
  // API call
} catch (error) {
  // Display user-friendly message
  // Log to console for debugging
}
```

## File Structure

```
weather-dashboard/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styles
├── js/
│   └── app.js          # All JavaScript logic
├── assets/
│   └── icons/          # (Future) Custom icons
├── docs/
│   ├── prd.md          # Product requirements
│   └── architecture.md # This file
└── task.md             # Project tasks
```

## Technology Decisions

### Why No Build Tool?

- **Reason**: Beginner-friendly, focus on fundamentals
- **Trade-off**: No transpilation, no module bundling
- **Acceptable for**: Small static site

### Why No Framework?

- **Reason**: Learn vanilla JavaScript first
- **Trade-off**: More manual DOM manipulation
- **Acceptable for**: Simple one-page app

### Why GitHub Pages?

- **Reason**: Free, easy deployment for static sites
- **Trade-off**: No backend, API key exposed
- **Acceptable for**: Learning project

## Security Considerations

### API Key Exposure

⚠️ **Known Limitation**: API key is exposed in client-side code

**For Learning Project:**

- Acceptable risk (free tier, limited calls)
- Document as learning limitation

**For Production:**

- Use backend proxy
- Environment variables + build step
- Rate limiting

## Performance Considerations

### Loading Strategy

- Minimal dependencies (no external libraries)
- Small CSS file (<5KB)
- Fast initial page load

### API Calls

- On-demand only (user search)
- No auto-refresh (avoid unnecessary calls)
- Future: Consider caching recent searches

## Browser Compatibility

**Target Browsers:**

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

**Required Features:**

- Fetch API
- ES6 (async/await, arrow functions, template literals)
- CSS Grid/Flexbox

## Future Architecture Improvements

1. **Component-based**: Refactor to modules
2. **State Management**: Simple state object
3. **Build Tool**: Vite for environment variables
4. **Backend Proxy**: Express.js API wrapper
5. **PWA**: Service worker for offline support

---

*Created: 2026-01-15*
*Version: 1.0*
