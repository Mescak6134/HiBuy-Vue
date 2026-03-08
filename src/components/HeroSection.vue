<script setup lang="ts">
/**
 * HeroSection.vue – Hero-Bereich (ganz oben)
 *
 * ANPASSEN:
 * - Überschrift, Text → heroContent Objekt
 * - Kennzahlen → stats Array
 */

import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route  = useRoute()

const heroContent = {
  label:       'Esslingen & Umgebung',
  headline:    'Snacks & Getränke.',
  headlineSub: 'Frisch. 24/7.',
  description: 'Moderne Automaten mit kalten Drinks und Lieblingssnacks – bargeldlos, zuverlässig und immer befüllt.',
  cta:         'Standort vorschlagen',
}

const stats = [
  { value: '24/7',  label: 'Verfügbar' },
  { value: '< 48h', label: 'Refill-Zeit' },
  { value: '100%',  label: 'Bargeldlos möglich' },
]

// Gleiche Logik wie Navbar – funktioniert auch von anderen Seiten
async function goToKontakt(): Promise<void> {
  if (route.path !== '/') {
    await router.push('/')
    await new Promise(r => setTimeout(r, 150))
  }
  const el = document.getElementById('kontakt')
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
  <section id="hero" class="hero section">
    <div class="container hero__inner">

      <!-- Linke Spalte: Text -->
      <div class="hero__content">
        <span class="hero__label">{{ heroContent.label }}</span>

        <h1 class="hero__headline">
          {{ heroContent.headline }}<br />
          <em>{{ heroContent.headlineSub }}</em>
        </h1>

        <p class="hero__description">{{ heroContent.description }}</p>

        <!-- Button nutzt router-basiertes Scroll statt href -->
        <button class="btn-primary" @click="goToKontakt">
          {{ heroContent.cta }}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="8" x2="13" y2="8"/><polyline points="9 4 13 8 9 12"/>
          </svg>
        </button>

        <!-- Kennzahlen -->
        <div class="hero__stats">
          <div v-for="stat in stats" :key="stat.label" class="hero__stat">
            <span class="hero__stat-value">{{ stat.value }}</span>
            <span class="hero__stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>

      <!-- Rechte Spalte: Visuelle Karte -->
      <div class="hero__visual" aria-hidden="true">
        <div class="hero__card">
          <div class="hero__card-icon">
            <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
              <rect x="8" y="6" width="36" height="40" rx="3" stroke="currentColor" stroke-width="2"/>
              <rect x="13" y="12" width="26" height="16" rx="2" fill="currentColor" opacity="0.12"/>
              <rect x="13" y="12" width="26" height="16" rx="2" stroke="currentColor" stroke-width="1.5"/>
              <rect x="13" y="32" width="5" height="8" rx="1" fill="currentColor" opacity="0.3"/>
              <rect x="21" y="32" width="5" height="8" rx="1" fill="currentColor" opacity="0.3"/>
              <rect x="29" y="32" width="5" height="8" rx="1" fill="currentColor" opacity="0.3"/>
              <circle cx="26" cy="20" r="4" fill="currentColor" opacity="0.6"/>
            </svg>
          </div>
          <p class="hero__card-title">Immer bereit</p>
          <p class="hero__card-sub">Keine Warteschlangen. Keine Kasse. Einfach holen und gehen.</p>
          <div class="hero__card-tags">
            <span class="tag">Karte</span>
            <span class="tag">Handy</span>
            <span class="tag">Bar</span>
          </div>
        </div>

        <!-- Deko-Elemente -->
        <div class="hero__deco-ring" />
        <div class="hero__deco-dot hero__deco-dot--1" />
        <div class="hero__deco-dot hero__deco-dot--2" />
      </div>

    </div>
  </section>
</template>

<style scoped>
.hero__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-12);
  align-items: center;
  min-height: 80vh;
}

/* ─── Linke Seite ─────────────────────────────────────────── */
.hero__label {
  display: inline-block;
  font-size: 0.75rem; font-weight: 600; letter-spacing: 0.1em;
  text-transform: uppercase; color: var(--color-text-muted);
  background-color: var(--color-tag);
  padding: 4px 12px; border-radius: var(--radius-full);
  margin-bottom: var(--space-3);
}

.hero__headline {
  margin-bottom: var(--space-3);
  line-height: 1.1;
}

.hero__headline em {
  font-style: normal;
  opacity: 0.4;
}

.hero__description {
  font-size: 1.05rem;
  max-width: 420px;
  margin-bottom: var(--space-4);
}

/* ─── CTA Button ──────────────────────────────────────────── */
.btn-primary {
  display: inline-flex; align-items: center; gap: 8px;
  background-color: var(--color-accent);
  color: var(--color-accent-fg);
  padding: 12px 24px; border-radius: var(--radius-full);
  font-weight: 600; font-size: 0.9rem; letter-spacing: 0.01em;
  border: none; cursor: pointer; font-family: inherit;
  transition: opacity var(--transition), transform var(--transition);
  text-decoration: none;
}
.btn-primary:hover {
  opacity: 0.82;
  transform: translateY(-1px);
}

/* ─── Stats ───────────────────────────────────────────────── */
.hero__stats {
  display: flex; gap: var(--space-6);
  margin-top: var(--space-6); padding-top: var(--space-4);
  border-top: 1px solid var(--color-border);
}
.hero__stat { display: flex; flex-direction: column; }
.hero__stat-value {
  font-family: var(--font-display);
  font-size: 1.5rem; font-weight: 800; letter-spacing: -0.03em;
  color: var(--color-text);
}
.hero__stat-label {
  font-size: 0.78rem; color: var(--color-text-muted); margin-top: 2px;
}

/* ─── Rechte Seite: Visuelle Karte ───────────────────────── */
.hero__visual {
  position: relative; display: flex;
  align-items: center; justify-content: center;
  height: 380px;
}
.hero__card {
  position: relative; z-index: 2;
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-6); width: 280px;
  box-shadow: var(--shadow-lg);
  transition: background-color var(--transition-slow), border-color var(--transition-slow);
}
.hero__card-icon { color: var(--color-text); margin-bottom: var(--space-3); opacity: 0.8; }
.hero__card-title {
  font-family: var(--font-display);
  font-size: 1.3rem; font-weight: 700;
  color: var(--color-text); margin-bottom: var(--space-1);
}
.hero__card-sub {
  font-size: 0.85rem; color: var(--color-text-muted);
  line-height: 1.6; margin-bottom: var(--space-3);
}
.hero__card-tags { display: flex; gap: 6px; flex-wrap: wrap; }

/* ─── Tags ────────────────────────────────────────────────── */
.tag {
  font-size: 0.75rem; font-weight: 500;
  color: var(--color-text-muted); background-color: var(--color-tag);
  padding: 3px 10px; border-radius: var(--radius-full);
}

/* ─── Deko-Elemente ───────────────────────────────────────── */
.hero__deco-ring {
  position: absolute; width: 340px; height: 340px;
  border-radius: 50%; border: 1px solid var(--color-border);
  z-index: 1; animation: spin-slow 30s linear infinite; opacity: 0.5;
}
.hero__deco-dot {
  position: absolute; border-radius: 50%;
  background-color: var(--color-text); z-index: 1;
}
.hero__deco-dot--1 { width: 8px; height: 8px; top: 50px; right: 80px; opacity: 0.15; }
.hero__deco-dot--2 { width: 5px; height: 5px; bottom: 80px; left: 60px; opacity: 0.1; }

@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

/* ─── Responsive ──────────────────────────────────────────── */
@media (max-width: 900px) {
  .hero__inner {
    grid-template-columns: 1fr; min-height: auto;
    padding-top: var(--space-8); padding-bottom: var(--space-8);
  }
  .hero__visual { height: 280px; }
}
@media (max-width: 480px) {
  .hero__stats { gap: var(--space-4); }
  .hero__visual { display: none; }
}
</style>