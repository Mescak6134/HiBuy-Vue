<script setup lang="ts">
/**
 * AngebotSection.vue – Sortiment
 * ANPASSEN: products Array unten bearbeiten
 */
interface Product {
  title: string
  description: string
  colorVar: string
}

const products: Product[] = [
  {
    title: 'Kalte & Exotische Getränke',
    description: 'Bei uns erwartet dich eine vielfältige Auswahl an kalten Getränken. Von Wasser bis zu besonderen Softdrinks aus aller Welt.',
    colorVar: 'blue',
  },
  {
    title: 'Vielfältige Snacks',
    description: 'Bei uns findest du eine vielfältige Auswahl an Snacks. Von süß bis herzhaft ist für den kleinen und großen Hunger etwas dabei.',
    colorVar: 'amber',
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
          Unsere Automaten im 24/7 Shop bieten dir eine große Vielfalt
          an Produkten – praktisch, schnell und jederzeit verfügbar.
        </p>
      </div>

      <div class="product-grid">
        <div
          v-for="product in products"
          :key="product.title"
          class="product-card"
          :class="`product-card--${product.colorVar}`"
        >
          <div class="product-card__header" />
          <div class="product-card__body">
            <h3 class="product-card__title">{{ product.title }}</h3>
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
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-3);
}

.product-card {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: visible;
  transition: transform var(--transition), box-shadow var(--transition);
  display: flex;
  flex-direction: column;
}
.product-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

/* Farbiger Streifen oben */
.product-card__header {
  height: 8px;
  border-bottom: 1px solid var(--color-border);
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
}
.product-card--blue  .product-card__header { background-color: var(--color-blue); }
.product-card--amber .product-card__header { background-color: var(--color-amber); }

.product-card__body {
  padding: var(--space-4);
  padding-top: var(--space-5);
  display: flex; flex-direction: column;
  gap: var(--space-2); flex: 1;
}

/* Titel in Kachelfarbe */
.product-card__title { font-size: 1.1rem; }
.product-card--blue  .product-card__title { color: var(--color-blue); }
.product-card--amber .product-card__title { color: var(--color-amber); }

.product-card__body p { font-size: 0.9rem; line-height: 1.7; margin: 0; }

@media (max-width: 900px) {
  .product-grid { grid-template-columns: 1fr; }
}
@media (max-width: 640px) {
  .section-header { margin-bottom: var(--space-5); }
  .product-card__title { font-size: 1rem; }
}
</style>
