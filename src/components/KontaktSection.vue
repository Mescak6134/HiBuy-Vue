<script setup lang="ts">
/**
 * KontaktSection.vue – Kontakt
 * ANPASSEN: contactInfo Objekt unten
 */

const contactInfo = {
  phone: '+49 171 90 12 134',
  phoneTel: '+4917190121234',
  email: 'hibuy@gmx.de',
  address: 'Neckarstraße 27, 73728 Esslingen am Neckar',
}
</script>

<template>
  <section id="kontakt" class="section">
    <div class="container kontakt__inner">

      <div class="kontakt__header">
        <span class="section-label">Kontakt</span>
        <h2>Standort vorschlagen</h2>
        <p class="section-desc">
          Du hast einen Standort in Esslingen oder Umgebung?
          Meld dich einfach – wir antworten schnell.
        </p>
      </div>

      <div class="kontakt__cards">

        <a :href="`tel:${contactInfo.phoneTel}`" class="kontakt-card kontakt-card--phone">
          <div class="kontakt-card__glow" aria-hidden="true" />
          <div class="kontakt-card__icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14z"/>
            </svg>
          </div>
          <div class="kontakt-card__body">
            <span class="kontakt-card__label">Anrufen</span>
            <span class="kontakt-card__value">{{ contactInfo.phone }}</span>
          </div>
          <div class="kontakt-card__arrow">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </div>
        </a>

        <a :href="`mailto:${contactInfo.email}`" class="kontakt-card kontakt-card--email">
          <div class="kontakt-card__glow" aria-hidden="true" />
          <div class="kontakt-card__icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </div>
          <div class="kontakt-card__body">
            <span class="kontakt-card__label">E-Mail schreiben</span>
            <span class="kontakt-card__value">{{ contactInfo.email }}</span>
          </div>
          <div class="kontakt-card__arrow">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </div>
        </a>

        <div class="kontakt-card kontakt-card--address">
          <div class="kontakt-card__icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
          <div class="kontakt-card__body">
            <span class="kontakt-card__label">Adresse</span>
            <span class="kontakt-card__value">{{ contactInfo.address }}</span>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.kontakt__inner {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: var(--space-12);
  align-items: center;
}

.section-label {
  display: inline-block; font-size: 0.75rem; font-weight: 600;
  letter-spacing: 0.1em; text-transform: uppercase;
  color: var(--color-text-muted); margin-bottom: var(--space-2);
}
.section-desc { margin-top: var(--space-2); font-size: 1rem; }

/* ─── Karten ──────────────────────────────────────────────── */
.kontakt__cards {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.kontakt-card {
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  text-decoration: none;
  overflow: hidden;
  transition: transform var(--transition), box-shadow var(--transition), border-color var(--transition);
}

a.kontakt-card:hover {
  transform: translateX(4px);
  box-shadow: var(--shadow-sm);
  border-color: var(--color-text-muted);
  opacity: 1;
}

/* Leuchtfleck */
.kontakt-card__glow {
  position: absolute; top: -20px; right: -20px;
  width: 100px; height: 100px; border-radius: 50%;
  opacity: 0.3; filter: blur(30px); pointer-events: none;
  transition: opacity var(--transition-slow);
}
.kontakt-card--phone .kontakt-card__glow { background: #d4e8d0; }
.kontakt-card--email .kontakt-card__glow { background: #d0dff0; }
a.kontakt-card:hover .kontakt-card__glow { opacity: 0.6; }
[data-theme="dark"] .kontakt-card__glow { opacity: 0.15; }

/* Icon */
.kontakt-card__icon {
  display: flex; align-items: center; justify-content: center;
  width: 48px; height: 48px; flex-shrink: 0;
  background-color: var(--color-tag);
  border-radius: var(--radius-md);
  color: var(--color-text);
}

/* Text */
.kontakt-card__body {
  display: flex; flex-direction: column; gap: 2px; flex: 1; min-width: 0;
}
.kontakt-card__label {
  font-size: 0.75rem; font-weight: 600; letter-spacing: 0.05em;
  text-transform: uppercase; color: var(--color-text-muted);
}
.kontakt-card__value {
  font-size: 0.95rem; font-weight: 500;
  color: var(--color-text); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}

/* Pfeil */
.kontakt-card__arrow {
  color: var(--color-text-muted); flex-shrink: 0;
  transition: transform var(--transition), color var(--transition);
}
a.kontakt-card:hover .kontakt-card__arrow {
  transform: translateX(4px);
  color: var(--color-text);
}

/* Adress-Karte hat keinen Hover-Pfeil */
.kontakt-card--address { cursor: default; }
.kontakt-card--address:hover { transform: none; box-shadow: none; border-color: var(--color-border); }

@media (max-width: 768px) {
  .kontakt__inner { grid-template-columns: 1fr; gap: var(--space-6); }
}
</style>
