# HiBuy GbR – Website

Offizielle Website der HiBuy GbR, Esslingen am Neckar.  
Snack- und Getränkeautomaten · 24/7 · Bargeldlos.

## Tech Stack

- [Vue 3](https://vuejs.org/) + TypeScript
- [Vite](https://vitejs.dev/)
- Vue Router 4
- Scoped CSS + CSS Custom Properties

## Lokale Entwicklung

```bash
npm install
npm run dev        # → http://localhost:5173
```

## Deployment

```bash
npm run build      # Baut nach /dist
npx gh-pages -d dist  # Deployed auf GitHub Pages
```

## Projektstruktur

```
src/
├── components/
│   ├── TheNavbar.vue
│   ├── TheFooter.vue
│   ├── HeroSection.vue
│   ├── AngebotSection.vue
│   └── KontaktSection.vue
├── views/
│   ├── HomeView.vue
│   └── ImpressumView.vue
├── composables/
│   └── useTheme.ts       ← Dark/Light Mode
└── assets/
    ├── css/
    │   ├── global.css
    │   └── fonts.css
    └── fonts/            ← Lokale Schriften (woff2)
```

## Kontakt

HiBuy GbR · Neckarstraße 27 · 73728 Esslingen am Neckar  
hibuy@gmx.de · +49 171 90 12 134