# Product Requirements Document - Weather Dashboard

## 1. Overview

Weather Dashboard adalah aplikasi web sederhana yang menampilkan informasi cuaca real-time menggunakan OpenWeather API. Project ini dirancang sebagai learning project untuk memahami async JavaScript, API integration, dan error handling.

## 2. Target Audience

- **Primary:** Beginner web developers yang ingin belajar:
  - Fetch API / Async JavaScript
  - Error handling
  - API integration
- **Secondary:** End users yang butuh quick weather lookup

## 3. User Stories

### Must Have (MVP)

- **US-001:** Sebagai user, saya ingin bisa search kota dan melihat cuaca saat ini
- **US-002:** Sebagai user, saya ingin melihat suhu, kelembaban, dan kondisi cuaca
- **US-003:** Sebagai user, saya ingin mendapat feedback jika kota tidak ditemukan
- **US-004:** Sebagai user, saya ingin UI yang responsif di mobile dan desktop

### Nice to Have (Future)

- **US-005:** Sebagai user, saya ingin melihat forecast 5 hari ke depan
- **US-006:** Sebagai user, saya ingin toggle antara Celsius dan Fahrenheit
- **US-007:** Sebagai user, saya ingin dark/light mode
- **US-008:** Sebagai user, saya ingin melihat riwayat pencarian

## 4. Tech Stack

### Frontend

- **HTML5**: Semantic markup
- **CSS3**: Modern styling dengan CSS Variables
- **JavaScript (ES6+)**: Fetch API, Async/Await

### API

- **OpenWeather API**: Free tier (1000 calls/day)
  - Current Weather Data
  - (Future) 5 Day / 3 Hour Forecast

### Deployment

- **GitHub Pages**: Static site hosting
- **Git**: Version control

## 5. Core Features

### 5.1 Search Functionality

- Input field untuk nama kota
- Submit button (atau Enter key)
- Loading state saat fetch data
- Clear error messages

### 5.2 Weather Display

- Nama kota
- Icon cuaca
- Suhu (Celsius)
- Deskripsi kondisi cuaca
- Kelembaban
- Kecepatan angin

### 5.3 Error Handling

- City not found (404)
- Invalid API key (401)
- Network errors
- Empty input validation

## 6. Design Requirements

### UI/UX

- Clean, modern design
- Mobile-first responsive
- Clear typography
- Accessible (ARIA labels, semantic HTML)
- Visual feedback untuk loading/error states

### Color Scheme

- Primary: Blue (#2563eb)
- Secondary: Dark Blue (#1e40af)
- Background: Light Blue (#f0f9ff)
- Error: Red (#dc2626)

## 7. Technical Constraints

- No backend required (static site)
- API key exposed (acceptable untuk learning project)
- Free tier API limits (rate limiting)
- Browser compatibility: Modern browsers (ES6+ support)

## 8. Success Metrics

### For Learning Goals

- ✅ Successfully implement async/await
- ✅ Handle all common API errors
- ✅ Responsive design works on mobile
- ✅ Code is clean and well-commented

### For User Experience

- Page load < 2s
- API response display < 3s
- Zero console errors
- Works on Chrome, Firefox, Safari

## 9. Timeline

- **Day 1:** Setup + HTML/CSS (Phase 0-3)
- **Day 2:** JavaScript core functions (Phase 4)
- **Day 3:** Error handling + testing (Phase 5)
- **Day 4:** Deployment + documentation (Phase 6-7)
- **Day 5:** Polish + learning documentation

## 10. Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| API key exposed | Document as limitation, mention proxy alternative |
| Rate limiting | Note free tier limits, implement user feedback |
| Offline functionality | Out of scope for MVP, document as future feature |
| Browser compatibility | Test on modern browsers, document requirements |

## 11. Future Enhancements (Backlog)

1. 5-day forecast display
2. Temperature unit toggle (C/F)
3. Geolocation support
4. Dark mode
5. Local storage for recent searches
6. Weather charts (Chart.js)
7. PWA conversion
8. Backend proxy for API key security

---

*Created: 2026-01-15*
*Version: 1.0*
