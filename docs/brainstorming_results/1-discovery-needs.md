# Discovery Session - Apa Sih yang User Beneran Mau?

## Mindset Dulu

Jadi gini, kebanyakan weather app yang ada di portfolio junior itu cuma nampilin data doang. Suhu 28 derajat. Humidity 80%. Angin sekian km/jam. Terus? User mau ngapain sama angka-angka itu?

Yang bener itu bukan kasih data, tapi kasih insight. Bukan "suhu 30 derajat", tapi "hari ini bakal keringetan sih, mending pake kaos tipis aja". Nah itu baru valuable.

## Needs - Yang User Beneran Butuh

User tuh basically cuma mau tau satu hal. Hari ini gue perlu siapin apa?

Payung? Jaket? Sunscreen? Mereka ga peduli humidity berapa persen. Yang mereka mau tau itu apakah bakal gerah atau ngga. Apakah bakal kehujanan pas pulang kantor. Apakah UV nya bahaya buat kulit.

Jadi fitur yang kita bikin harus ngejawab pertanyaan itu. Bukan dump data mentah terus user disuruh interpretasi sendiri.

Contoh real

- Jangan tulis "Temperature 32C, Humidity 85%"  
- Tulis aja "Panas banget hari ini, rasanya kaya 38 derajat karena lembab. Mending indoor aja"

Ini yang namanya actionable intelligence. User baca, langsung tau harus ngapain.

## Pains - Apa yang Bikin User Kesel

### Loading lama

Ini classic banget. Weather app yang butuh 5 detik buat load data. Di era sekarang itu udah ga acceptable. User maunya instant.

### Kebanyakan angka

Buka app, langsung disuguhin 10 metric berbeda. Overwhelm. User bingung mana yang penting mana yang ngga.

### Visual yang jelek di dark mode

Ini sering banget kejadian. Light mode bagus, dark mode berantakan. Warna ga kontras, text susah dibaca. Padahal kebanyakan user sekarang pake dark mode.

### Forecast yang sering meleset

User udah males percaya sama weather app karena sering salah. Bilang cerah tapi malah hujan. Ini masalah trust.

### Notifikasi yang ganggu

Dikasih alert tiap ada perubahan cuaca kecil. Annoying. User end up matiin notifikasi semua.

## Gains - Gimana Caranya Bikin User Wow

### Personalized recommendation

Kasih saran yang kontekstual. Bukan cuma data cuaca, tapi apa artinya buat aktivitas user hari itu.

### Visual yang immersive

Background yang berubah sesuai cuaca. Bukan gradient biru standar yang boring. Bikin user ngerasa engage sama app nya.

### Quick glance info

Dalam 3 detik user udah tau kondisi cuaca hari ini. Ga perlu scroll scroll, ga perlu baca banyak angka.

### Accuracy indicator

Kasih tau user seberapa akurat forecast ini. Transparency bikin trust naik.

## Perbandingan Average Dev vs Top 1%

| Yang Average Dev Bikin | Yang Top 1% Bikin |
|------------------------|-------------------|
| Nampilin suhu 28C gitu aja | Nampilin "Feels like 32C, bakal keringetan" |
| Ikon cuaca dari API yang pecah | Custom icon SVG yang clean |
| Satu layout buat semua kondisi | Dynamic UI yang berubah sesuai cuaca |
| Error handling pake alert() | Graceful error dengan fallback ke cache |
| Fetch data tiap kali refresh | Smart caching biar ga boros API call |
| Search bar standar | Geolocation auto + search dengan autocomplete |
| Forecast list biasa | Probabilistic info "60% chance hujan jam 3 sore" |

Intinya sih, average dev fokus di technical functionality doang. Top 1% fokus di user experience dan value yang dideliver.
