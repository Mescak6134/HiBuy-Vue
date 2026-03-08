<script setup lang="ts">
/**
 * AngebotSection.vue – Sortiment
 * ANPASSEN: products Array unten bearbeiten
 */

interface Product {
  title: string
  description: string
  colorVar: string
  iconPath: string
}

const products: Product[] = [
  {
    title: 'Kalte Getränke',
    description: 'Klassiker & Trend-Drinks – stets perfekt gekühlt und immer frisch befüllt. Von Cola über Wasser bis hin zu Energydrinks und Säften.',
    colorVar: 'green',
    iconPath: 'M8 2h8l1 6H7L8 2zM7 8v10a2 2 0 002 2h6a2 2 0 002-2V8M10 12v4M14 12v4',
  },
  {
    title: 'Exotische Getränke',
    description: 'Ausgefallene Geschmäcker aus aller Welt – Asia-Drinks, mexikanische Limonaden, japanische Softdrinks und aktuelle Trend-Imports.',
    colorVar: 'blue',
    iconPath: 'M12 2a7 7 0 017 7c0 4-3 7-5 10H10C8 16 5 13 5 9a7 7 0 017-7zM9 21h6M10 17h4',
  },
  {
    title: 'Snack-Vielfalt',
    description: 'Herzhaft oder süß, klein oder sättigend – Chips, Riegel, Nüsse, Gebäck und mehr. Für jeden Hunger das Richtige.',
    colorVar: 'amber',
    iconPath: 'M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z',
  },
]
</script>

<template>
  <section id="angebot" class="section">
    <div class="container">

      <div class="section-header">
        <span class="section-label">Was wir bieten</span>
        <h2>Unser Sortiment</h2>
        <p class="section-desc">
          Drei Kategorien, ein Automat – oder kombiniert. Wir kümmern uns
          um Aufstellung, Befüllung und Service.
        </p>
      </div>

      <div class="product-grid">
        <div
          v-for="product in products"
          :key="product.title"
          class="product-card"
          :class="`product-card--${product.colorVar}`"
        >
          <div class="product-card__header">
            <div class="product-card__icon-wrap">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path :d="product.iconPath" />
              </svg>
            </div>
          </div>

          <div class="product-card__body">
            <h3>{{ product.title }}</h3>
            <p>{{ product.description }}</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.section-header {
  max-width: 560px;
  margin-bottom: var(--space-8);
}
.section-label {
  display: inline-block;
  font-size: 0.72rem; font-weight: 700;
  letter-spacing: 0.12em; text-transform: uppercase;
  color: var(--color-text-muted);
  margin-bottom: var(--space-2);
}
.section-desc { margin-top: var(--space-2); font-size: 0.975rem; }

.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-3);
}

.product-card {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: transform var(--transition), box-shadow var(--transition);
  display: flex;
  flex-direction: column;
}
.product-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.product-card__header {
  display: flex;
  align-items: center;
  padding: var(--space-3) var(--space-4);
  border-bottom: 1px solid var(--color-border);
}

.product-card--green .product-card__header { background-color: var(--color-green-light); }
.product-card--blue  .product-card__header { background-color: var(--color-blue-light); }
.product-card--amber .product-card__header { background-color: var(--color-amber-light); }

.product-card__icon-wrap {
  display: flex; align-items: center; justify-content: center;
  width: 40px; height: 40px; border-radius: var(--radius-md);
  background-color: rgba(255,255,255,0.7);
}
[data-theme="dark"] .product-card__icon-wrap { background-color: rgba(255,255,255,0.08); }

.product-card--green .product-card__icon-wrap { color: var(--color-green); }
.product-card--blue  .product-card__icon-wrap { color: var(--color-blue); }
.product-card--amber .product-card__icon-wrap { color: var(--color-amber); }

.product-card__body {
  padding: var(--space-4);
  display: flex; flex-direction: column; gap: var(--space-2);
  flex: 1;
}
.product-card__body h3 { font-size: 1.1rem; }
.product-card__body p  { font-size: 0.9rem; line-height: 1.7; margin: 0; }

@media (max-width: 900px) {
  .product-grid { grid-template-columns: 1fr; max-width: 460px; }
}
</style>
