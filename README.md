# M-Indicator 2.0

A modern, mobile-first commuter web experience inspired by India's most-used transit utility apps — unifying local trains, metro, buses, fares, and city coverage into a single informational front end.

![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![Leaflet](https://img.shields.io/badge/Leaflet-Maps-199900?style=flat-square&logo=leaflet&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

## Overview

Urban commuters in India juggle fragmented transit information across local trains, metro, buses, ferries and fares, with little in the way of a single, trustworthy, mobile-first entry point. M-Indicator 2.0 is a static multi-page site that presents that information as a cohesive product: a branded landing experience, an interactive city map, and dedicated pages for news, fares, and support — designed as the on-ramp to a companion mobile app.

## Features

- **Multi-page transit experience** — dedicated pages for news, upcoming features, advertising, contact, and terms
- **Transit feature catalog** — local/express train timetables, metro, mono rail, bus routes, auto/taxi fares, ferry routes, women-safety info, and emergency numbers
- **Interactive map** — Leaflet-based city/coverage visualization
- **Mobile-friendly navigation** — slide-out drawer, section anchors, animated intro overlay
- **App adoption funnel** — direct links to the Google Play and App Store listings

## Tech Stack

| Layer | Technology |
|---|---|
| Markup / Styling | HTML5, CSS3 |
| Behavior | Vanilla JavaScript |
| Build tool | Vite |
| Maps | Leaflet (CDN) |
| Hosting | Vercel |

## Getting Started

### Prerequisites
- Node.js 18+

### Installation & local development

```bash
git clone https://github.com/https-shubhamsahu/M-indicator-2.0.git
cd M-indicator-2.0
npm install
npm run dev
```

### Production build

```bash
npm run build     # outputs to dist/
npm run preview   # preview the production build locally
```

## Project Structure

```
M-indicator-2.0/
├── index.html          # Landing page
├── news.html
├── upcoming.html
├── resumedb.html
├── ad.html
├── contact.html
├── terms.html
├── 404.html
├── reviews.json
├── src/                 # Shared scripts/styles
├── public/              # Static assets (images, logos, video)
├── vite.config.js
└── vercel.json
```

## Deployment

The repository is preconfigured for Vercel: push to `main`, connect the repo in the Vercel dashboard, and it builds via `vite build` automatically.

## Roadmap

- Live timetable APIs and real-time delay alerts
- Personalized route recommendations
- Multilingual UI
- PWA support (offline caching, installability)
- Unified fare-calculation engine

## Contributing

Contributions are welcome — particularly around componentizing repeated page sections, asset optimization, and accessibility improvements. Fork the repo, create a feature branch, and open a pull request.

## License

No license file is currently present in this repository.
