# HiBuy – Vue 3 + TypeScript Website

Moderne, modulare Website für HiBuy GbR.  
Gebaut mit **Vue 3**, **TypeScript** und **Vite**.

---

## 🚀 Schnellstart

### Voraussetzungen
- [Node.js](https://nodejs.org/) Version 18 oder neuer

### Installation & Start

```bash
# 1. Abhängigkeiten installieren
npm install

# 2. Entwicklungsserver starten (lokale Vorschau)
npm run dev

# 3. Browser öffnen → http://localhost:5173
```

### Für die Produktion bauen

```bash
npm run build
# → Fertige Dateien landen in /dist
```

---

## 📁 Projektstruktur

```
hibuy/
├── index.html                  ← HTML-Einstiegspunkt (Titel, Fonts)
├── src/
│   ├── main.ts                 ← App-Start + Routen-Definition
│   ├── App.vue                 ← Wurzel-Komponente (Navbar + Footer)
│   │
│   ├── assets/
│   │   └── css/
│   │       └── global.css      ← 🎨 FARBEN & DESIGN HIER ANPASSEN
│   │
│   ├── composables/
│   │   └── useTheme.ts         ← Dark/Light Modus Logik (Cookie)
│   │
│   ├── components/             ← Wiederverwendbare Bausteine
│   │   ├── TheNavbar.vue       ← Navigation (oben)
│   │   ├── TheFooter.vue       ← Fußzeile
│   │   ├── HeroSection.vue     ← Hero-Bereich
│   │   ├── AngebotSection.vue  ← Angebots-Karten
│   │   ├── FaqSection.vue      ← Häufige Fragen
│   │   └── KontaktSection.vue  ← Kontaktformular
│   │
│   └── views/                  ← Seiten (eine pro URL)
│       ├── HomeView.vue        ← Startseite (/)
│       └── ImpressumView.vue   ← Impressum (/impressum)
│
└── public/
    └── favicon.svg             ← Browser-Tab-Icon
```

---

## ✏️ Häufige Anpassungen

### Texte & Inhalte ändern

Jede Komponente hat ein **Datenobjekt ganz oben** im `<script>` Bereich.  
Einfach die Werte dort ändern – kein HTML anfassen nötig.

**Beispiel** – Hero-Text ändern (`HeroSection.vue`):
```typescript
const heroContent = {
  headline: 'Dein neuer Titel hier',
  description: 'Deine neue Beschreibung...',
  // ...
}
```

**Beispiel** – FAQ-Frage hinzufügen (`FaqSection.vue`):
```typescript
const faqs = [
  // ... bestehende Fragen ...
  {
    question: 'Meine neue Frage?',
    answer: 'Die Antwort darauf.',
  },
]
```

### Farben ändern

Alle Farben sind in einer einzigen Datei definiert:  
→ `src/assets/css/global.css`

Dort findest du zwei Blöcke:
- `:root { ... }` → Farben für den **hellen Modus**
- `[data-theme="dark"] { ... }` → Farben für den **dunklen Modus**

```css
:root {
  --color-accent: #1a1a18;   /* ← Hauptfarbe (Buttons etc.) ändern */
  --color-bg: #f7f4ee;       /* ← Seitenhintergrund ändern */
}
```

### Neue Seite hinzufügen

1. Neue Datei in `src/views/` erstellen, z.B. `MeineSeitView.vue`
2. In `src/main.ts` als Route registrieren:
```typescript
{ path: '/meine-seite', component: () => import('./views/MeineSeitView.vue') }
```
3. In der Navbar verlinken (`TheNavbar.vue`, `navLinks` Array):
```typescript
{ label: 'Meine Seite', to: '/meine-seite' }
```

### Neue Sektion auf der Startseite

1. Neue Datei in `src/components/` erstellen, z.B. `MeineSektion.vue`
2. In `src/views/HomeView.vue` einbinden:
```vue
<script setup>
import MeineSektion from '@/components/MeineSektion.vue'
</script>
<template>
  <MeineSektion />   <!-- Einfach hier einfügen -->
</template>
```

---

## 🌙 Dark/Light Modus

Der Modus wird automatisch gespeichert – kein Tracking, kein Vendor.

**Technisch:** Cookie `hibuy-theme` mit Wert `dark` oder `light`.  
Beim ersten Besuch: System-Präferenz des Nutzers wird verwendet.  
Lebensdauer: 1 Jahr.

Die gesamte Logik liegt in: `src/composables/useTheme.ts`

---

## 📋 Impressum anpassen

Alle rechtlichen Angaben in `src/views/ImpressumView.vue` oben im `impressumData` Objekt:

```typescript
const impressumData = {
  company: 'HiBuy GbR',
  representatives: ['Vorname Nachname'],  // ← Vornamen ergänzen!
  street: 'Neckarstraße 27',
  // ...
  vatId: 'DE123456789',   // ← USt-ID eintragen (oder null lassen)
}
```

---

## 🛠 Tech-Stack

| Was | Womit |
|-----|-------|
| Framework | Vue 3 (Composition API) |
| Sprache | TypeScript |
| Build-Tool | Vite |
| Routing | Vue Router 4 |
| Fonts | Google Fonts (DM Sans, Syne) |
| Dark Mode | Eigene Cookie-Lösung (kein Vendor) |
| Styling | Scoped CSS + CSS-Variablen |
