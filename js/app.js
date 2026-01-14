// API Configuration
const API_KEY = 'YOUR_API_KEY_HERE'; // Replace with your OpenWeather API key
const API_BASE_URL = 'https://api.openweathermap.org/data/2.5';

// DOM Elements
const searchForm = document.getElementById('search-form');
const cityInput = document.getElementById('city-input');
const weatherDisplay = document.getElementById('weather-display');
const errorDisplay = document.getElementById('error-display');

// Event Listeners
searchForm.addEventListener('submit', handleSearch);

/**
 * Handle search form submission
 * @param {Event} e - Form submit event
 */
function handleSearch(e) {
    e.preventDefault();
    const cityName = cityInput.value.trim();
    
    if (cityName) {
        fetchWeatherData(cityName);
    }
}

/**
 * Fetch weather data from OpenWeather API
 * @param {string} city - City name
 */
async function fetchWeatherData(city) {
    try {
        // Show loading state
        weatherDisplay.innerHTML = '<p>Loading...</p>';
        errorDisplay.style.display = 'none';

        const response = await fetch(
            `${API_BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric&lang=id`
        );

        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('Kota tidak ditemukan');
            } else if (response.status === 401) {
                throw new Error('API key tidak valid');
            } else {
                throw new Error('Terjadi kesalahan, coba lagi nanti');
            }
        }

        const data = await response.json();
        displayWeatherData(data);

    } catch (error) {
        displayError(error.message);
    }
}

/**
 * Display weather data in the UI
 * @param {Object} data - Weather data from API
 */
function displayWeatherData(data) {
    const { name, main, weather, wind } = data;
    
    const html = `
        <h2>${name}</h2>
        <div class="weather-icon">
            <img src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png" 
                 alt="${weather[0].description}">
        </div>
        <p class="temperature">${Math.round(main.temp)}°C</p>
        <p class="description">${weather[0].description}</p>
        <div class="weather-details">
            <p>Kelembaban: ${main.humidity}%</p>
            <p>Kecepatan Angin: ${wind.speed} m/s</p>
        </div>
    `;
    
    weatherDisplay.innerHTML = html;
}

/**
 * Display error message
 * @param {string} message - Error message to display
 */
function displayError(message) {
    weatherDisplay.innerHTML = '<p class="placeholder">Ketik nama kota untuk melihat cuaca</p>';
    errorDisplay.innerHTML = `<p>❌ ${message}</p>`;
    errorDisplay.style.display = 'block';
}

// TODO: Implement geolocation feature
// TODO: Add 5-day forecast
// TODO: Add temperature unit toggle
