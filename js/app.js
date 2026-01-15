/*
  Weather Dashboard - Main App Logic
  fetches data from OpenWeatherMap, updates the UI
*/

// API Config - using Netlify serverless functions to hide the key
// In production, the key is stored in Netlify env variables
// For local dev, you can still use the key directly (see below)
const IS_PRODUCTION = window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1'
const API_KEY = IS_PRODUCTION ? '' : '65c3882ca12361ab49e9fdf325479117' // only used locally
const BASE_URL = IS_PRODUCTION ? '/.netlify/functions' : 'https://api.openweathermap.org/data/2.5'

// STATE - keeps track of current settings and cached data
let currentUnit = localStorage.getItem('unit') || 'metric' // metric = Celsius, imperial = Fahrenheit
let currentWeatherData = null // cache the last weather response
let currentForecastData = null // cache the last forecast response

// DOM Elements - grab em once, use em everywhere
const cityNameEl = document.getElementById('city-name')
const currentDateEl = document.getElementById('current-date')
const currentTempEl = document.getElementById('current-temp')
const tempUnitEl = document.querySelector('.temp-unit')
const weatherIconEl = document.getElementById('weather-icon')
const weatherDescEl = document.getElementById('weather-description')
const feelsLikeEl = document.getElementById('feels-like')
const humidityEl = document.getElementById('humidity')
const windSpeedEl = document.getElementById('wind-speed')
const windDirectionEl = document.getElementById('wind-direction')
const visibilityEl = document.getElementById('visibility')
const pressureEl = document.getElementById('pressure')
const forecastContainer = document.getElementById('forecast-container')
const searchInput = document.getElementById('search-input')
const searchBtn = document.getElementById('search-btn')
const geoBtn = document.getElementById('geo-btn')
const unitToggle = document.getElementById('unit-toggle')
const themeToggle = document.getElementById('theme-toggle')

// convert celsius to fahrenheit
function celsiusToFahrenheit(c) {
    return (c * 9 / 5) + 32
}

// get the right unit symbol
function getUnitSymbol() {
    return currentUnit === 'metric' ? '°C' : '°F'
}

// update all temp displays based on current unit
function updateTempDisplays() {
    if (!currentWeatherData) return

    // the api already returns in metric, so we convert if imperial
    let temp = currentWeatherData.main.temp
    let feelsLike = currentWeatherData.main.feels_like

    if (currentUnit === 'imperial') {
        temp = celsiusToFahrenheit(temp)
        feelsLike = celsiusToFahrenheit(feelsLike)
    }

    currentTempEl.textContent = Math.round(temp)
    feelsLikeEl.textContent = Math.round(feelsLike)
    tempUnitEl.textContent = getUnitSymbol()

    // update forecast temps too
    if (currentForecastData) {
        displayForecast(currentForecastData)
    }
}

// format date to something readable like "Thursday, Jan 15"
function formatDate(timestamp) {
    const date = new Date(timestamp * 1000)
    const options = { weekday: 'long', month: 'short', day: 'numeric' }
    return date.toLocaleDateString('en-US', options)
}

// convert wind degrees to direction like "NE" or "SW"
function getWindDirection(degrees) {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']
    const index = Math.round(degrees / 45) % 8
    return directions[index]
}

// the main fetch function - grabs current weather by city name
async function fetchWeatherData(city) {
    // in production, use serverless function. locally, use direct API
    const url = IS_PRODUCTION
        ? `${BASE_URL}/weather?city=${encodeURIComponent(city)}`
        : `${BASE_URL}/weather?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`

    try {
        const res = await fetch(url)

        if (!res.ok) {
            // user probably typed wrong city name
            if (res.status === 404) {
                throw new Error('City not found, double check the spelling?')
            }
            if (res.status === 401) {
                throw new Error('API key issue, check if its valid')
            }
            throw new Error('Something went wrong with the API')
        }

        const data = await res.json()
        return data

    } catch (err) {
        console.error('fetchWeatherData error:', err.message)
        throw err // re-throw so caller can handle it
    }
}

// fetch weather using lat/lon coords (for geolocation)
async function fetchWeatherByCoords(lat, lon) {
    const url = IS_PRODUCTION
        ? `${BASE_URL}/weather?lat=${lat}&lon=${lon}`
        : `${BASE_URL}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`

    try {
        const res = await fetch(url)

        if (!res.ok) {
            throw new Error('Couldnt get weather for your location')
        }

        return await res.json()

    } catch (err) {
        console.error('fetchWeatherByCoords error:', err.message)
        throw err
    }
}

// fetch 5 day forecast - returns list of weather data
async function fetchForecast(city) {
    const url = IS_PRODUCTION
        ? `${BASE_URL}/forecast?city=${encodeURIComponent(city)}`
        : `${BASE_URL}/forecast?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`

    try {
        const res = await fetch(url)
        if (!res.ok) throw new Error('Forecast fetch failed')
        return await res.json()
    } catch (err) {
        console.error('fetchForecast error:', err.message)
        return null // forecast is optional, dont break the whole thing
    }
}

// get users current location via browser geolocation
function getCurrentLocation() {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            reject(new Error('Geolocation not supported in this browser'))
            return
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                resolve({
                    lat: position.coords.latitude,
                    lon: position.coords.longitude
                })
            },
            (err) => {
                // user denied or timeout
                let msg = 'Couldnt get your location'
                if (err.code === 1) msg = 'Location access denied, enable it in browser settings'
                if (err.code === 2) msg = 'Position unavailable rn'
                if (err.code === 3) msg = 'Location request timed out'
                reject(new Error(msg))
            },
            { timeout: 10000 }
        )
    })
}

// take weather data and shove it into the DOM
function displayWeatherData(data) {
    // cache it for unit toggle later
    currentWeatherData = data

    // update main card
    cityNameEl.textContent = `${data.name}, ${data.sys.country}`
    currentDateEl.textContent = formatDate(data.dt)

    // handle temps based on current unit
    let temp = data.main.temp
    let feelsLike = data.main.feels_like
    if (currentUnit === 'imperial') {
        temp = celsiusToFahrenheit(temp)
        feelsLike = celsiusToFahrenheit(feelsLike)
    }

    currentTempEl.textContent = Math.round(temp)
    feelsLikeEl.textContent = Math.round(feelsLike)
    tempUnitEl.textContent = getUnitSymbol()

    // weather icon from openweather
    const iconCode = data.weather[0].icon
    weatherIconEl.style.display = 'block' // show icon again (might be hidden from error)
    weatherIconEl.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`
    weatherIconEl.alt = data.weather[0].description
    weatherDescEl.textContent = data.weather[0].description

    // update highlight cards
    humidityEl.textContent = data.main.humidity
    windSpeedEl.textContent = data.wind.speed.toFixed(1)
    windDirectionEl.textContent = `Direction: ${getWindDirection(data.wind.deg)}`
    visibilityEl.textContent = (data.visibility / 1000).toFixed(1) // convert m to km
    pressureEl.textContent = data.main.pressure
}

// display forecast data - just pick one entry per day
function displayForecast(data) {
    if (!data || !data.list) {
        console.log('no forecast data to show')
        return
    }

    // cache it for unit toggle
    currentForecastData = data

    // filter to get one forecast per day (noon-ish readings)
    const dailyForecasts = data.list.filter(item => item.dt_txt.includes('12:00:00'))

    // clear existing placeholder items
    forecastContainer.innerHTML = ''

    dailyForecasts.slice(0, 5).forEach(day => {
        const date = new Date(day.dt * 1000)
        const dayName = date.toLocaleDateString('en-US', { weekday: 'short' })
        const iconCode = day.weather[0].icon

        // convert temp if needed
        let temp = day.main.temp
        if (currentUnit === 'imperial') {
            temp = celsiusToFahrenheit(temp)
        }

        const itemHTML = `
      <div class="forecast-item">
        <p class="forecast-date">${dayName}</p>
        <img src="https://openweathermap.org/img/wn/${iconCode}@2x.png" alt="${day.weather[0].description}" class="forecast-icon">
        <p class="forecast-temp">${Math.round(temp)}${getUnitSymbol()}</p>
      </div>
    `
        forecastContainer.insertAdjacentHTML('beforeend', itemHTML)
    })
}

// show error to user - not just console.log
function displayError(message) {
    // for now we'll update the city name area to show the error
    // could make a toast/modal later but this works
    cityNameEl.textContent = 'Oops!'
    currentDateEl.textContent = message
    currentTempEl.textContent = '--'
    tempUnitEl.textContent = ''
    weatherDescEl.textContent = ''
    feelsLikeEl.textContent = '--'

    // hide the icon to avoid broken image
    weatherIconEl.style.display = 'none'
    weatherIconEl.src = ''
    weatherIconEl.alt = ''
}

// main handler - orchestrates the whole fetch -> display flow
async function handleSearch(city) {
    if (!city || city.trim() === '') {
        displayError('Type a city name first')
        return
    }

    try {
        // show loading state maybe? for now just fetch
        const weatherData = await fetchWeatherData(city.trim())
        displayWeatherData(weatherData)

        // also grab forecast
        const forecastData = await fetchForecast(city.trim())
        if (forecastData) {
            displayForecast(forecastData)
        }

        // save last searched city for next time
        localStorage.setItem('lastCity', city.trim())

    } catch (err) {
        displayError(err.message)
    }
}

// handle geolocation button click
async function handleGeoLocation() {
    try {
        geoBtn.disabled = true // prevent spam clicking

        const coords = await getCurrentLocation()
        const weatherData = await fetchWeatherByCoords(coords.lat, coords.lon)
        displayWeatherData(weatherData)

        // get forecast using the city name we just got
        const forecastData = await fetchForecast(weatherData.name)
        if (forecastData) {
            displayForecast(forecastData)
        }

        localStorage.setItem('lastCity', weatherData.name)

    } catch (err) {
        displayError(err.message)
    } finally {
        geoBtn.disabled = false
    }
}

// EVENT LISTENERS

// search button click
searchBtn.addEventListener('click', () => {
    handleSearch(searchInput.value)
})

// enter key in search input
searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        handleSearch(searchInput.value)
    }
})

// geolocation button
geoBtn.addEventListener('click', handleGeoLocation)

// unit toggle - switch between celsius and fahrenheit
unitToggle.addEventListener('click', () => {
    currentUnit = currentUnit === 'metric' ? 'imperial' : 'metric'
    localStorage.setItem('unit', currentUnit)

    // update the button label
    unitToggle.querySelector('.unit-label').textContent = getUnitSymbol()

    // re-render temps with new unit
    updateTempDisplays()
})

// theme toggle - switch between dark and light
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme')

    // update icon
    const icon = themeToggle.querySelector('i')
    if (document.body.classList.contains('light-theme')) {
        icon.className = 'ph ph-sun'
        localStorage.setItem('theme', 'light')
    } else {
        icon.className = 'ph ph-moon'
        localStorage.setItem('theme', 'dark')
    }
})

// INIT - run when page loads
function init() {
    // restore theme preference
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme')
        themeToggle.querySelector('i').className = 'ph ph-sun'
    }

    // restore unit preference - update button label
    unitToggle.querySelector('.unit-label').textContent = getUnitSymbol()

    // check if we have a last searched city saved
    const lastCity = localStorage.getItem('lastCity')

    if (lastCity) {
        // use the saved city
        handleSearch(lastCity)
    } else {
        // default to Jakarta or try geolocation
        handleSearch('Jakarta')
    }
}

// kick things off when DOM is ready
document.addEventListener('DOMContentLoaded', init)

