# Visual Strategy - Bikin Weather App yang Cakep

## Visi Utama

3 detik pertama user buka app, mereka harus langsung ngerasa "wah ini beda". Bukan weather app biasa yang gradient biru boring. Ini harus keliatan premium. Modern. Kayak app dari studio design top tier.

Dan yang paling penting, harus tetep performant. Ga ada gunanya visual bagus kalo loading 5 detik.

## Dynamic Background yang Ga Bikin Berat

### Konsepnya

Background berubah sesuai kondisi cuaca. Cerah keliatan warm. Hujan keliatan moody. Malam keliatan calm.

Tapi jangan pake video atau gambar gede. Itu bikin berat. Pake CSS aja.

### Gimana Caranya

Pake multiple layers

Layer pertama itu gradient utama. Ini yang kasih warna dasar sesuai kondisi cuaca.

Layer kedua itu blur overlay. Bikin efek depth. Soft gitu.

Layer ketiga itu noise texture ringan. Ini yang bikin keliatan ga flat. Premium feel.

Semua pake CSS pseudo elements. Ga perlu gambar tambahan.

### Mapping Warna

Cerah dan panas
Background gelap dengan hint orange atau kuning di pojok. Warm tapi ga norak.

Mendung
Abu abu gradient. Subtle. Ga terlalu dark tapi keliatan gloomy.

Hujan
Biru tua ke slate. Bisa tambahin efek rain pake CSS animation. Garis garis tipis yang turun.

Badai
Sama kaya hujan tapi sesekali ada flash putih. Lightning effect.

Malam
Deep dark dengan hint biru atau ungu. Stars kalo mau fancy tapi optional.

### Tips Performance

Jangan pake filter blur di banyak element. Cukup di body aja.

Cache kondisi cuaca di localStorage. Jadi pas refresh ga perlu fetch ulang cuma buat tau harus pake background apa.

Pake CSS variables buat warna. Ganti variable nya aja pas kondisi berubah. Transisi jadi smooth.

## Bento Grid Layout

### Kenapa Bento

Card kotak yang sama ukuran semua itu boring. Kayak tabel excel dikasih warna.

Bento grid itu layout yang asimetris tapi terorganisir. Ada hierarchy visual yang natural. Mata user langsung tau mana yang penting mana yang sekunder.

### Struktur yang Gue Rekomendasiin

```
+------------------+------------------+
|                  |                  |
|   HERO CARD      |   RAIN CHANCE    |
|   (Suhu utama)   |   (Tall card)    |
|                  |                  |
+------------------+------------------+
|                                     |
|   HOURLY FORECAST (Wide card)       |
|                                     |
+------------------+--------+---------+
|   UV INDEX       |  WIND  | SUNRISE |
+------------------+--------+---------+
```

Hero card paling gede. Isinya suhu utama, feels like, sama kondisi cuaca. Ini yang user liat pertama kali.

Rain chance card nya tall. Bisa pake vertical bar chart yang clean.

Hourly forecast wide. Scrollable horizontal. Preview 12-24 jam kedepan.

Sisanya card kecil kecil buat info tambahan. UV, angin, sunrise sunset, humidity.

### CSS Grid nya

```css
.bento {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.hero { grid-column: span 2; grid-row: span 2; }
.rain { grid-column: span 2; grid-row: span 2; }
.hourly { grid-column: span 4; }
.small { grid-column: span 1; }
```

Responsive? Tinggal ubah grid-template-columns jadi 2 kolom di mobile.

### Glassmorphism Touch

Setiap card pake efek glass. Background semi transparan. Blur dikit. Border tipis yang barely visible.

```css
.card {
  background: rgba(30, 41, 59, 0.5);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
}
```

Jangan terlalu banyak blur. Satu atau dua layer aja. Kebanyakan bikin berat dan noisy.

## Color Palette

### Lupain Biru Langit

Semua weather app pake biru. Boring. Predictable.

Kita pake dark mode luxury. Base nya gelap, accent nya jewel tones yang muted.

### Palette Rekomendasi

Background utama
Slate 950 atau yang lebih gelap lagi. Almost black tapi ada warmth dikit.

Surface atau card
Slate 800 dengan opacity. Semi transparan biar keliatan glass.

Border
Putih dengan opacity rendah banget. 5-10% aja. Barely visible tapi ada.

Text utama
Almost white. Slate 100.

Text sekunder
Slate 400. Muted tapi masih readable.

Accent sesuai cuaca
Sunny pake amber yang soft. Rain pake blue yang ga terlalu bright. Storm pake purple.

Success indicator
Emerald yang ga neon. Soft aja.

Warning
Coral atau red yang muted. Ga bikin mata sakit.

### Dynamic Color

Pake CSS custom properties

```css
:root {
  --accent: hsl(200, 80%, 60%);
}
```

Pas kondisi cuaca berubah, update variable nya pake JS. Semua element yang pake variable itu otomatis ikut berubah.

## Summary

Visual yang standout itu

Background yang hidup tapi ga berat. Pake CSS layers dan gradients.

Layout yang ga membosankan. Bento grid dengan hierarchy yang jelas.

Warna yang ga generic. Dark mode dengan accent yang kontekstual.

Dan yang paling penting, semua harus tetep smooth. 60fps. Load cepat. Jangan sacrifice performance demi estetika.

---

## Edisi Beginner Friendly (MVP Update)

Ide di atas emang keren, tapi bisa bikin pusing kalo baru belajar CSS. Ini versi simplenya yang tetep cakep:

### 1. Simple Dynamic Background

Ganti multiple layers dengan linear-gradient biasa.

* **Cerah**: `background: linear-gradient(to bottom, #FFD700, #FF8C00);` (Kuning ke Orange)
* **Hujan**: `background: linear-gradient(to bottom, #4B79A1, #283E51);` (Biru ke Gelap)
* **Malam**: `background: linear-gradient(to bottom, #0F2027, #203A43, #2C5364);`

Ganti class di `<body>` pake JS, CSS nya ngikut.

### 2. Simple Card Layout

Lupain asymmetric bento grid. Pake layout standar aja dulu:

* Header (Search bar)
* Hero Section (Suhu gede di tengah)
* Grid 2 kolom atau 3 kolom buat info tambahan (Humidity, Wind, UV).

```css
.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
}
```

Ini jauh lebih gampang di-responsive-in.

### 3. Basic Transparansi (Glass-lite)

Daripada `backdrop-filter: blur`, cukup pake background semi-transparan `rgba(255, 255, 255, 0.1)`. Udah keliatan modern kok di atas background gelap.
