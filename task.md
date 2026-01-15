# 🌦️ Weather Dashboard - Task List

> **Project:** Weather Dashboard dengan API OpenWeather
> **Tech Stack:** HTML, CSS, JavaScript (Fetch API)
> **Deployment:** GitHub Pages
> **Timeline:** ~3-5 hari (beginner-friendly)

---

## 📌 Project Overview

Dashboard cuaca real-time yang menampilkan informasi cuaca berdasarkan lokasi user. Fokus pada:

- Real-time data fetching dari OpenWeather API
- Async JavaScript & Error Handling
- UI responsif dengan simple charts

---

## PHASE 0: SETUP ENVIRONMENT

### 0.1 IDE & Tools Setup

- [x] Pastikan VS Code / Antigravity siap digunakan
- [x] Install extension: Live Server (untuk development)
- [x] Setup folder structure project

### 0.2 Project Initialization

- [x] Buat struktur folder dasar:

  ```
  /weather-dashboard
  ├── index.html
  ├── css/
  │   └── styles.css
  ├── js/
  │   └── app.js
  ├── assets/
  │   └── icons/
  └── docs/
      ├── prd.md
      └── architecture.md
  ```

- [x] Initialize Git repository
- [x] Buat `.gitignore` (jika perlu)

### 0.3 API Setup

- [x] Daftar akun di [OpenWeatherMap](https://openweathermap.org/api)
- [x] Dapatkan API Key (gratis tier cukup)
- [x] Test API key dengan simple fetch di browser console

---

## PHASE 1: DISCOVERY & VALIDATION

### 1.1 Identifikasi Kebutuhan (Needs/Pains/Gains)

- [ ] **Needs:** Apa fitur wajib yang harus ada?
  - Tampilkan cuaca lokasi saat ini
  - Search lokasi by city name
  - Display: suhu, kelembaban, kondisi cuaca, ikon
- [ ] **Pains:** Masalah yang ingin diatasi
  - Perlu cek cuaca cepat tanpa buka banyak app
  - Error handling jika lokasi tidak ditemukan
- [ ] **Gains:** Outcome yang diharapkan
  - Single page dashboard yang informatif
  - Responsif di mobile dan desktop

### 1.2 Riset Referensi

- [ ] Lihat 3-5 contoh weather dashboard (UI/UX inspiration)
- [ ] Catat fitur yang menarik untuk diimplementasi
- [ ] Review OpenWeather API documentation

### 1.3 Competitive Analysis (Sederhana)

- [ ] Screenshot 2-3 weather app favorit
- [ ] Identifikasi kelebihan dan kekurangan masing-masing

---

## PHASE 2: DOCUMENTATION (PRD)

### 2.1 Buat PRD.md

- [x] Overview project
- [x] User Stories / Use Cases
- [x] Tech Stack lengkap
- [x] Daftar fitur (MVP vs Nice-to-have)

### 2.2 Architecture.md (Sederhana)

- [x] Data flow diagram (User → App → API → Response)
- [x] Component breakdown (HTML sections)

### 2.3 Rules.md (Opsional tapi Direkomendasikan)

- [ ] Code style preferences (naming conventions)
- [ ] Do's & Don'ts untuk project ini
- [ ] Error handling guidelines

---

## PHASE 3: RANCANGAN (Design & Architecture)

### 3.1 Design UI (Wireframe/Mockup)

- [ ] Sketch wireframe sederhana (bisa pakai Figma/paper)
- [ ] Tentukan layout: header, search bar, main display, forecast cards
- [ ] Pilih color scheme (sesuaikan dengan tema cuaca)

### 3.2 User Flow Mapping

- [ ] Flow 1: User buka app → Geolocation → Display cuaca
- [ ] Flow 2: User ketik city → Search → Display hasil
- [ ] Flow 3: Error handling (city not found, network error)

### 3.3 Component Planning

- [ ] List semua komponen HTML yang dibutuhkan
- [ ] Plan CSS class naming (BEM atau convention lain)
- [ ] Plan JavaScript functions/modules

---

## PHASE 4: DEVELOPMENT

### 4.1 HTML Structure

- [ ] Buat `index.html` dengan semantic HTML
- [ ] Header dengan judul app
- [ ] Search form (input + button)
- [ ] Main weather display section
- [ ] Forecast cards section (optional)
- [ ] Footer

### 4.2 CSS Styling

- [ ] Setup CSS reset/normalization
- [ ] Buat CSS variables untuk colors, fonts
- [ ] Style header & search bar
- [ ] Style weather display (current weather)
- [ ] Style forecast cards
- [ ] Responsive design (mobile-first)
- [ ] Tambahkan animasi/transisi halus

### 4.3 JavaScript - Core Functions

- [ ] Setup API constants (endpoint, API key)
- [ ] Function: `fetchWeatherData(city)` - get weather by city name
- [ ] Function: `fetchWeatherByCoords(lat, lon)` - get weather by coordinates
- [ ] Function: `getCurrentLocation()` - navigator.geolocation
- [ ] Function: `displayWeatherData(data)` - render ke DOM
- [ ] Function: `displayError(message)` - show error UI

### 4.4 JavaScript - Event Handlers

- [ ] Search form submission handler
- [ ] Geolocation button handler (optional)
- [ ] Keyboard events (Enter to search)

### 4.5 Error Handling

- [ ] Handle: API error responses (404, 401, etc.)
- [ ] Handle: Network errors (offline, timeout)
- [ ] Handle: Invalid input (empty search)
- [ ] Handle: Geolocation denied
- [ ] User-friendly error messages

### 4.6 Nice-to-Have Features (Jika Waktu Cukup)

- [ ] 5-day forecast display
- [ ] Temperature unit toggle (Celsius/Fahrenheit)
- [ ] Dark/Light mode toggle
- [ ] Local storage untuk recent searches
- [ ] Simple chart (suhu per jam) - bisa pakai Chart.js

---

## PHASE 5: VERIFICATION & TESTING

### 5.1 Self-Verification Checklist

- [ ] Semua fungsi berjalan tanpa error di console
- [ ] Fetch API berhasil mendapat data
- [ ] Data ditampilkan dengan benar
- [ ] Error handling berfungsi

### 5.2 Manual Testing Scenarios

- [ ] Test: Search kota valid (contoh: "Jakarta")
- [ ] Test: Search kota tidak valid (contoh: "xyzabc123")
- [ ] Test: Search kosong
- [ ] Test: Geolocation (jika implemented)
- [ ] Test: Responsif di mobile (DevTools)
- [ ] Test: Keyboard navigation

### 5.3 Browser Testing

- [ ] Test di Chrome
- [ ] Test di Firefox
- [ ] Test di mobile browser (Safari/Chrome)

### 5.4 Code Review

- [ ] Review semua JavaScript untuk best practices
- [ ] Check untuk hardcoded values yang seharusnya configurable
- [ ] Pastikan tidak ada API key exposed di public repo
  - [ ] Pertimbangkan proxy server atau environment handling

### 5.5 Accessibility Check

- [ ] Alt text untuk weather icons
- [ ] ARIA labels jika diperlukan
- [ ] Keyboard accessible

---

## PHASE 6: DEPLOYMENT

### 6.1 Prepare for Deployment

- [ ] Final code cleanup
- [ ] Pastikan semua paths relative (bukan absolute)
- [ ] Remove console.log statements (atau gunakan conditional)
- [ ] API key handling (catatan: di static site ini tetap exposed)

### 6.2 GitHub Setup

- [ ] Commit semua perubahan
- [ ] Push ke GitHub repository
- [ ] Enable GitHub Pages (Settings → Pages → Branch: main)
- [ ] Verify deployment URL works

### 6.3 Post-Deployment Checks

- [ ] Test live site functionality
- [ ] Check all API calls work on production
- [ ] Share URL untuk feedback

---

## PHASE 7: ITERATION & DOCUMENTATION

### 7.1 Collect Feedback

- [ ] Test sendiri penggunaan sehari-hari
- [ ] Minta review dari teman/komunitas
- [ ] Catat bugs atau improvement ideas

### 7.2 Documentation

- [ ] Update README.md dengan:
  - [ ] Project description
  - [ ] Features list
  - [ ] Screenshot/Demo
  - [ ] How to run locally
  - [ ] Tech stack used
  - [ ] Attributions (OpenWeather, icons, etc.)

### 7.3 Learning Documentation

- [ ] Buat catatan: Apa yang dipelajari dari project ini
- [ ] Document challenges dan solusinya
- [ ] Simpan snippets yang berguna untuk project berikutnya

### 7.4 Future Improvements (Backlog)

- [ ] Weather map integration
- [ ] Multiple location saving
- [ ] Push notifications
- [ ] PWA conversion (offline support)
- [ ] Backend proxy untuk hide API key

---

## 📋 Quick Reference - Yang DIPAKAI vs DIKURANGI

### ✅ DIPAKAI dari Workflow Original

| Item | Alasan |
|------|--------|
| Phase 0: Setup | Essential untuk semua project |
| Phase 1: Discovery (simplified) | Penting tapi disederhanakan |
| Phase 2: PRD | Penting untuk dokumentasi |
| Phase 4: Development | Core dari project |
| Phase 5: Testing | Wajib sebelum deploy |
| Phase 6: Deploy ke GitHub Pages | Target deployment |
| Fallback plan | Jika stuck, breakdown task |

### ➕ DITAMBAHKAN untuk Project Ini

| Item | Alasan |
|------|--------|
| API Key setup section | Spesifik untuk OpenWeather |
| Detailed error handling | Fokus project pada async/error handling |
| Accessibility check | Best practice modern web |
| Learning documentation | Karena ini learning project |

### ➖ DIKURANGI dari Workflow Original

| Item | Alasan |
|------|--------|
| Multi-agent setup | Overkill untuk beginner project |
| MCP servers/tools | Tidak diperlukan |
| Database design | Tidak ada backend |
| Auth/Permission | Tidak diperlukan |
| CI/CD Pipeline | Cukup manual deploy |
| Monitoring (Sentry) | Overkill untuk project ini |
| Premium AI tools | Gunakan gratis tier saja |

### 🔄 DIREVISI dari Workflow Original

| Item | Revisi |
|------|--------|
| Tech stack decision | Sudah fixed: HTML/CSS/JS |
| Context management | Simplified - project kecil |
| Rules file | Optional, bukan mandatory |
| Multi-AI chaining | Cukup 1 AI assistant |
| Deployment options | Fokus GitHub Pages saja |

---

## 💡 Tips untuk Project Ini

1. **API Key Safety**: Di static site, API key pasti exposed. Untuk production serius, pertimbangkan:
   - Environment variables via build tool
   - Backend proxy
   - Rate limiting pada API key

2. **Async/Await Focus**: Project ini bagus untuk latihan:
   - Try/catch blocks
   - Promise chaining vs async/await
   - Loading states

3. **Progressive Enhancement**: Mulai dari versi paling sederhana, tambah fitur bertahap.

4. **Mobile First**: Design untuk mobile dulu, baru scale up.

---

*Last updated: 2026-01-15*
*Based on: Best Practice Coding with AI Workflow*
