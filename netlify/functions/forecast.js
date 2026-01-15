// Netlify serverless function to fetch 5-day forecast
// This hides the API key from the client

const fetch = require('node-fetch')

exports.handler = async (event) => {
    // get city from query params
    const { city } = event.queryStringParameters

    // API key stored in Netlify env variables
    const API_KEY = process.env.OPENWEATHER_API_KEY

    if (!API_KEY) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'API key not configured' })
        }
    }

    if (!city) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'Missing city parameter' })
        }
    }

    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`

    try {
        const res = await fetch(url)
        const data = await res.json()

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
            body: JSON.stringify({ error: 'Failed to fetch forecast data' })
        }
    }
}
