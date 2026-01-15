// Weather Dashboard Application Logic

// DOM Elements
const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
const locationBtn = document.getElementById('location-btn');

// UI Elements
const cityNameEl = document.querySelector('.city-name');
const dateEl = document.querySelector('.current-date');
const tempEl = document.querySelector('.main-temp');
const descEl = document.querySelector('.weather-desc');
const humidityEl = document.getElementById('humidity');
const windSpeedEl = document.getElementById('wind-speed');

// API Constants (Will be replaced with actual env or user input methodology later)
// For a frontend-only project, we might expose the key or ask the user to input it.
// For now, I'll structure it to take a key, but we'll need to discuss security or just use a free key for demo.
const API_KEY = 'YOUR_API_KEY_HERE'; // TODO: Handle API Key safely
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Check local storage for last searched city
    const lastCity = localStorage.getItem('lastCity');
    if (lastCity) {
        // fetchWeather(lastCity); // Uncomment when fetch is implemented
        console.log(`Loading last searched city: ${lastCity}`);
        updateUIPlaceholder(lastCity);
    } else {
        // Default View or Geolocation
        console.log('App initialized. Waiting for user input.');
    }
});

searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
        handleSearch(city);
    }
});

cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const city = cityInput.value.trim();
        if (city) {
            handleSearch(city);
        }
    }
});

locationBtn.addEventListener('click', () => {
    console.log('Geolocation requested...');
    // TODO: Implement navigator.geolocation
});

// Core Functions
function handleSearch(city) {
    console.log(`Searching for: ${city}`);
    // Save to local storage
    localStorage.setItem('lastCity', city);

    // TODO: Call API
    // fetchWeather(city);

    // For now, just update UI to show interaction works
    updateUIPlaceholder(city);
}

function updateUIPlaceholder(city) {
    cityNameEl.textContent = city;
    // Mock data update
    const now = new Date();
    dateEl.textContent = now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
    tempEl.textContent = '28';
    descEl.textContent = 'Partly Cloudy';
}
