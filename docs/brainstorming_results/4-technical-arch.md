# Technical Architecture - Code yang Ga Berantakan

## Problem Statement

Junior dev biasanya nulis semua code di satu file app.js. Fetch API, DOM manipulation, event listener, semuanya campur jadi satu. Pas project makin gede, jadi susah di maintain.

Kita mau bikin arsitektur yang proper. Modular. Gampang di debug. Gampang di scale.

## Error Handling yang Bener

### Jangan Pake Alert

Seriously, alert() itu tahun 2000an. User liat alert box langsung ilfeel. Keliatan amatir.

### Robust Error Handling itu Gimana

Pertama, bedain tipe error nya

Ada network error. Ini pas koneksi mati atau timeout.
Ada API error. Ini pas API return status code yang bukan 200.
Ada validation error. Ini pas user input yang ga valid.

Masing masing harus di handle beda.

### Retry Mechanism

Kalo network lagi flaky, jangan langsung nyerah. Coba lagi.

Tapi jangan spam. Pake exponential backoff. Percobaan pertama tunggu 1 detik. Kedua tunggu 2 detik. Ketiga tunggu 4 detik. Kalo masih gagal baru kasih tau user.

```javascript
async function fetchWithRetry(url, maxRetries = 3) {
  let attempt = 0
  
  while (attempt < maxRetries) {
    try {
      const response = await fetch(url)
      if (!response.ok) throw new Error('API error')
      return await response.json()
    } catch (error) {
      attempt++
      if (attempt === maxRetries) throw error
      await new Promise(r => setTimeout(r, 1000 * Math.pow(2, attempt)))
    }
  }
}
```

### Graceful Degradation

Kalo fetch gagal total, jangan biarin app kosong. Tampillin data terakhir dari cache. Kasih indicator "Data dari 10 menit lalu".

User tetep bisa liat info cuaca, walau mungkin ga paling update.

### UI Feedback yang Proper

Error message tampilin di dalam app. Bukan alert box.

Bisa pake toast notification yang muncul di pojok. Atau inline message di tempat yang relevan.

```javascript
function showError(message) {
  const toast = document.createElement('div')
  toast.className = 'toast error'
  toast.textContent = message
  document.body.appendChild(toast)
  
  setTimeout(() => toast.remove(), 3000)
}
```

## Caching Strategy

### Kenapa Perlu Cache

API call itu ada limit nya. OpenWeather free tier ada batasan berapa call per menit.

Plus, user ga perlu data yang update tiap detik. Cuaca ga berubah secepat itu. Cache 5-10 menit itu reasonable.

### Implementasi Simple

Pake localStorage. Simpen data bareng timestamp nya.

```javascript
const CACHE_TTL = 5 * 60 * 1000 // 5 menit

function getCache(key) {
  const cached = localStorage.getItem(key)
  if (!cached) return null
  
  const { data, timestamp } = JSON.parse(cached)
  if (Date.now() - timestamp > CACHE_TTL) {
    localStorage.removeItem(key)
    return null
  }
  
  return data
}

function setCache(key, data) {
  localStorage.setItem(key, JSON.stringify({
    data,
    timestamp: Date.now()
  }))
}
```

### Flow nya

Pas mau fetch data, cek cache dulu.
Kalo ada dan masih valid, pake data dari cache.
Kalo ga ada atau expired, fetch dari API.
Setelah fetch, simpen ke cache.

```javascript
async function getWeather(city) {
  const cacheKey = `weather_${city}`
  
  // Check cache first
  const cached = getCache(cacheKey)
  if (cached) return cached
  
  // Fetch from API
  const data = await fetchWeather(city)
  setCache(cacheKey, data)
  
  return data
}
```

## Struktur Folder yang Modular

### Jangan Semua di Satu File

Ini struktur yang gue rekomendasiin

```
src/
├── api.js        // Semua yang related sama API call
├── cache.js      // Logic caching
├── ui.js         // DOM manipulation
├── utils.js      // Helper functions
└── main.js       // Entry point, orchestrator
```

### api.js

Fokus ke fetch data. Error handling yang related sama network. Retry logic.

```javascript
const API_KEY = 'xxx'
const BASE_URL = 'https://api.openweathermap.org/data/2.5'

export async function fetchWeather(city) {
  const url = `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
  return await fetchWithRetry(url)
}

export async function fetchForecast(city) {
  const url = `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`
  return await fetchWithRetry(url)
}
```

### cache.js

Pure caching logic. Ga tau soal weather atau API. Cuma tau cara simpen dan ambil data.

```javascript
export function getCache(key) { ... }
export function setCache(key, data) { ... }
export function clearCache(key) { ... }
```

### ui.js

Semua DOM manipulation di sini. Render data ke HTML. Update element. Show hide things.

```javascript
export function renderWeather(data) {
  document.getElementById('temp').textContent = `${data.main.temp}°`
  document.getElementById('condition').textContent = data.weather[0].description
  // etc
}

export function showLoading() {
  document.getElementById('loader').classList.remove('hidden')
}

export function hideLoading() {
  document.getElementById('loader').classList.add('hidden')
}

export function showError(message) { ... }
```

### utils.js

Helper functions yang reusable. Format date. Debounce. Throttle.

```javascript
export function formatTime(timestamp) {
  return new Date(timestamp * 1000).toLocaleTimeString('id-ID', {
    hour: '2-digit',
    minute: '2-digit'
  })
}

export function debounce(fn, delay) {
  let timeout
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => fn(...args), delay)
  }
}
```

### main.js

Ini yang nyatuin semuanya. Import dari module lain. Setup event listener. Init app.

```javascript
import { fetchWeather } from './api.js'
import { getCache, setCache } from './cache.js'
import { renderWeather, showLoading, hideLoading, showError } from './ui.js'
import { debounce } from './utils.js'

async function loadWeather(city) {
  showLoading()
  
  try {
    const cacheKey = `weather_${city}`
    let data = getCache(cacheKey)
    
    if (!data) {
      data = await fetchWeather(city)
      setCache(cacheKey, data)
    }
    
    renderWeather(data)
  } catch (error) {
    showError('Gagal ambil data cuaca')
  } finally {
    hideLoading()
  }
}

// Event listeners
document.getElementById('search-form').addEventListener('submit', (e) => {
  e.preventDefault()
  const city = document.getElementById('search-input').value
  loadWeather(city)
})

// Init
loadWeather('Jakarta')
```

## Takeaway

Code yang proper itu

Modular. Setiap file punya responsibility yang jelas.

Resilient. Error di handle dengan baik. Ada fallback.

Performant. Ga fetch berlebihan. Pake cache.

Maintainable. Gampang debug. Gampang tambahin fitur baru.

Ini bedanya junior sama senior. Bukan soal bisa bikin app jalan. Tapi bikin app yang sustainable.
