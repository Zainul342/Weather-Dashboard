# Weather Dashboard Design System

## Overview

This document outlines the visual language for the Weather Dashboard. The design aims for a "Premium Dark Mode" aesthetic, inspired by modern bento-grid layouts and glassmorphism.

## 1. Color Palette

### Backgrounds

- **Main Background**: `#0F172A` (Slate 900) - Deep, rich dark blue/black.
- **Card Background (Glass)**: `rgba(30, 41, 59, 0.7)` (Slate 800 with opacity) - For the frosted glass effect.
- **Card Border**: `rgba(255, 255, 255, 0.1)` - Subtle border for definition.

### Typography

- **Primary Text**: `#F8FAFC` (Slate 50) - Almost white for maximum readability.
- **Secondary Text**: `#94A3B8` (Slate 400) - Muted blue-gray for labels and secondary info.
- **Accent Text**: `#38BDF8` (Sky 400) - For links or active states.

### Weather Accents (Dynamic)

- **Sunny/Clear**: `#FBBF24` (Amber 400) to `#F59E0B` (Amber 500) gradient.
- **Cloudy**: `#94A3B8` (Slate 400) to `#64748B` (Slate 500).
- **Rain/Drizzle**: `#38BDF8` (Sky 400) to `#0EA5E9` (Sky 500).
- **Thunderstorm**: `#818CF8` (Indigo 400) to `#6366F1` (Indigo 500).
- **Snow**: `#E2E8F0` (Slate 200) to `#CBD5E1` (Slate 300).

## 2. Typography

**Font Family**: `Inter`, sans-serif (Clean, modern, readable).

| Use Case | Size | Weight | Details |
| :--- | :--- | :--- | :--- |
| **Big Temp** | `6rem` (96px) | Bold (700) | The hero element on the main card. |
| **City Name** | `2rem` (32px) | SemiBold (600)| Location header. |
| **Date/Status**| `1rem` (16px) | Regular (400)| Supporting text. |
| **Metrics** | `1.5rem` (24px)| Bold (700) | For humidity, wind, etc. values. |
| **Labels** | `0.875rem` (14px)| Medium (500) | Uppercase labels (e.g., "HUMIDITY"). |

## 3. Layout & Grid

### Bento Grid Concept

 The UI is composed of a grid of containers ("cards").

- **Desktop**: 3-column or 4-column grid. Main weather card spans 2 columns.
- **Mobile**: Single column stack. Cards stack vertically with consistent spacing.

### Spacing (Rem based)

- **Container Padding**: `2rem` (32px)
- **Card Gap**: `1.5rem` (24px)
- **Card Padding**: `1.5rem` (24px)

## 4. Components

### Glass Card

- **Background**: Semi-transparent dark slate.
- **Blur**: `backdrop-filter: blur(12px)`
- **Border**: 1px solid white/10.
- **Shadow**: Soft, diffused shadow to lift it from the background.

### Search Bar

- **Shape**: Fully rounded pill shape.
- **Bg**: Darker than cards (`rgba(15, 23, 42, 0.8)`).
- **Interaction**: Glow effect on focus.

### Weather Icons

- Large, 3D-style icons for the main display (if available) or clean SVG icons.
- Avoid low-res pixelated bitmaps.
