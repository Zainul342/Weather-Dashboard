// Netlify serverless function to fetch current weather
// This hides the API key from the client

const fetch = require('node-fetch')

exports.handler = async (event) => {
    // get city from query params
    const { city, lat, lon } = event.queryStringParameters

    // API key stored in Netlify env variables (not in code!)
    const API_KEY = process.env.OPENWEATHER_API_KEY

    if (!API_KEY) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'API key not configured' })
        }
    }

    // build URL based on whether we got city or coords
    let url
    if (city) {
        url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`
    } else if (lat && lon) {
        url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
    } else {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'Missing city or coordinates' })
        }
    }

    try {
        const res = await fetch(url)
        const data = await res.json()

        // pass through the response from OpenWeather
        return {
            statusCode: res.status,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to fetch weather data' })
        }
    }
}
