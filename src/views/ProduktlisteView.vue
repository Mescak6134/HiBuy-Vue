<script setup lang="ts">
/**
 * ProduktlisteView.vue – Produktliste
 *
 * ANPASSEN:
 * - Produkte → spalten Array unten
 * - Preis hinzufügen: preis: '1,50 €' ergänzen
 * - Produkt ausblenden: verfuegbar: false setzen
 * - Neu-Badge: neu: true setzen
 */

import { ref, computed } from 'vue'

interface Produkt {
    name: string;
    beschreibung?: string;
    preis?: string;
    verfuegbar?: boolean;
    neu?: boolean;
}

interface Spalte {
    titel: string;
    colorVar: string;
    produkte: Produkt[];
}

const spalten: Spalte[] = [
    {
        titel: "Getränke",
        colorVar: "blue",
        produkte: [
            { name: "28-Black" },
            { name: "Black Gazoz" },
            { name: "Die Limo Kirsche" },
            { name: "Die Limo Limette" },
            { name: "Die Limo Orange" },
            { name: "Do-Qu Ice'n'Fries" },
            { name: "DoQu Bubble Boom" },
            { name: "Durstlöscher Blueberry" },
            { name: "Durstlöscher Candy" },
            { name: "Durstlöscher Pfirsich" },
            { name: "Elefant Bay Blueberry" },
            { name: "Elefant Bay Pome" },
            { name: "Fresh-Drinks Black-Cherry-Ice" },
            { name: "Fritz Kola" },
            { name: "Fuze-Tea Pfirsich" },
            { name: "Fuze-Tea Zitrone" },
            { name: "Grazi T" },
            { name: "Kalter Kaffee Blau" },
            { name: "Kalter Kaffee Rot" },
            { name: "Kirsche-Zitrone T" },
            { name: "Moloko Energy" },
            { name: "Mystery Blueberry" },
            { name: "Mystery Hot Cola" },
            { name: "Paulaner Limo Grün" },
            { name: "Paulaner Limo Orange" },
            { name: "Paulaner Spezi" },
            { name: "Pfirsich T" },
            { name: "Power-Ade Blau" },
            { name: "Red-Bull" },
            { name: "Red-Bull Blue" },
            { name: "Red-Bull Green" },
            { name: "Red-Bull Peach (Schweden)" },
            { name: "Red-Bull Purple" },
            { name: "Red-Bull Sea-Blue" },
            { name: "Red-Bull Spring" },
            { name: "Red-Bull Sugar Free (Light)" },
            { name: "Red-Bull White" },
            { name: "Capri Sonne" },
            { name: "Red-Bull Winter" },
            { name: "Red-Bull Yellow" },
            { name: "Red-Bull Zero" },
            { name: "Wasser Still" },
            { name: "Wasser Sprudel" },
            { name: "Zitronen T" },
        ],
    },
    {
        titel: "Snacks",
        colorVar: "amber",
        produkte: [
            { name: "AirHead" },
            { name: "Balisto Berry" },
            { name: "Balisto Korn Mix" },
            { name: "Balisto Müsli" },
            { name: "Buldak Cheese" },
            { name: "Cekirdek Gold" },
            { name: "Cekirdek Grün" },
            { name: "Chips Deluxe" },
            { name: "Corny Schoko" },
            { name: "Corny Schoko Banane" },
            { name: "Corny White" },
            { name: "Duplo Riegel" },
            { name: "Ferrero Duplo Chocnut" },
            { name: "Flipz Cinnamon" },
            { name: "Flipz Salted Caramel Coated Pretzels" },
            { name: "Freezes Extreme Sour" },
            { name: "Freezes Rainbow Bites" },
            { name: "Frosty Bites Puffs" },
            { name: "Frosty Bites Watermelon" },
            { name: "Happy Hippo Cacao" },
            { name: "Hanuta" },
            { name: "Hersheys" },
            { name: "Jelibon Sour Patch" },
            { name: "Kinder Bueno" },
            { name: "Kinder Cards" },
            { name: "Kinder Country" },
            { name: "Kitkat Classic" },
            { name: "Kitkat White" },
            { name: "Knoppers" },
            { name: "Krusty Krunch Popcorn Crushed Coconut" },
            { name: "Lion White" },
            { name: "Lions" },
            { name: "M&Ms Crispy" },
            { name: "M&Ms Peanut" },
            { name: "M&Ms Schoko" },
            { name: "Manner Schnitten Vollk" },
            { name: "Mars" },
            { name: "Mister Tom" },
            { name: "Mr Beast Feastables Almond" },
            { name: "Mr Beast Feastables Peanut Butter" },
            { name: "Nesquick" },
            { name: "Nestle Nuts" },
            { name: "Oreo Original" },
            { name: "Pickup Original" },
            { name: "Pickup Schoko+Mil" },
            { name: "Pokemon Blau" },
            { name: "Pokemon Pink" },
            { name: "Reeses Original Cups" },
            { name: "Reeses White Cups" },
            { name: "Ritter Sport Vollnuss" },
            { name: "Seven Days Schoko" },
            { name: "Skittles Crazy Sour" },
            { name: "Skittles Dessert - Pink" },
            { name: "Skittles Fruit" },
            { name: "Skittles Giants Gooey - Fruits" },
            { name: "Skittles Squishy Clouds" },
            { name: "Snickers" },
            { name: "Snickers Creamy" },
            { name: "Studentenfutter" },
            { name: "Takis Blue Heat" },
            { name: "Takis Fuego" },
            { name: "Takis Nacho" },
            { name: "Takis Zombie" },
            { name: "Twix" },
            { name: "Ültje Kessel Nuesse" },
            { name: "Warhead Cubes" },
            { name: "Zahnstocher Berry Mix" },
            { name: "Zahnstocher Blaubeere" },
            { name: "Zahnstocher Grape" },
            { name: "Zahnstocher Watermelon" },
        ],
    },
];

// ── Suche ─────────────────────────────────────────────────────
const suchbegriff = ref('')

const suchergebnisse = computed(() => {
    const term = suchbegriff.value.trim().toLowerCase()
    if (!term) return []
    return spalten.flatMap(spalte =>
        spalte.produkte
            .filter(p => p.name.toLowerCase().includes(term))
            .map(p => ({ ...p, kategorie: spalte.titel, colorVar: spalte.colorVar }))
    )
})
</script>

<template>
    <div class="produkte-page section">
        <div class="container produkte-wrap">
            <RouterLink to="/" class="back-link">
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                >
                    <line x1="19" y1="12" x2="5" y2="12" />
                    <polyline points="12 19 5 12 12 5" />
                </svg>
                Zurück zur Startseite
            </RouterLink>

            <div class="produkte-hero">
                <span class="section-label">Sortiment</span>
                <h1>Unsere Produkte</h1>
                <p>Alle Artikel die in unseren Automaten erhältlich sind.</p>
            </div>

            <!-- Suchfeld -->
            <div class="suche-wrap">
                <svg class="suche-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                    v-model="suchbegriff"
                    class="suche-input"
                    type="text"
                    placeholder="Produkt suchen…"
                    autocomplete="off"
                    @keydown.esc="suchbegriff = ''"
                />
                <button v-if="suchbegriff" class="suche-clear" @click="suchbegriff = ''" aria-label="Suche löschen">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                        <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>
            </div>

            <!-- Suchergebnisse -->
            <template v-if="suchbegriff.trim()">
                <div v-if="suchergebnisse.length" class="such-liste">
                    <div
                        v-for="produkt in suchergebnisse"
                        :key="produkt.name"
                        class="produkt-item"
                        :class="[`spalte--${produkt.colorVar}`, { 'produkt-item--unavailable': produkt.verfuegbar === false }]"
                    >
                        <div class="produkt-item__left">
                            <div class="produkt-item__dot" />
                            <div class="produkt-item__info">
                                <span class="produkt-item__name">{{ produkt.name }}</span>
                                <span v-if="produkt.beschreibung" class="produkt-item__desc">{{ produkt.beschreibung }}</span>
                                <span v-if="produkt.verfuegbar === false" class="produkt-item__unavail">Derzeit nicht verfügbar</span>
                            </div>
                        </div>
                        <div class="produkt-item__right">
                            <span class="such-kategorie-badge" :class="`such-kategorie-badge--${produkt.colorVar}`">{{ produkt.kategorie }}</span>
                            <span v-if="produkt.neu" class="badge badge--neu">Neu</span>
                            <span v-if="produkt.preis" class="produkt-item__preis">{{ produkt.preis }}</span>
                        </div>
                    </div>
                </div>
                <div v-else class="keine-ergebnisse">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    <p>Kein Produkt gefunden für <strong>„{{ suchbegriff }}"</strong></p>
                </div>
            </template>

            <!-- Normale Tabellenansicht -->
            <div v-else class="spalten-grid">
                <div
                    v-for="spalte in spalten"
                    :key="spalte.titel"
                    class="spalte"
                    :class="`spalte--${spalte.colorVar}`"
                >
                    <div class="spalte__header">
                        <h2 class="spalte__titel">{{ spalte.titel }}</h2>
                        <span class="spalte__count"
                            >{{
                                spalte.produkte.filter(
                                    (p) => p.verfuegbar !== false,
                                ).length
                            }}
                            Artikel</span
                        >
                    </div>

                    <ul class="produkt-liste">
                        <li
                            v-for="produkt in spalte.produkte"
                            :key="produkt.name"
                            class="produkt-item"
                            :class="{
                                'produkt-item--unavailable':
                                    produkt.verfuegbar === false,
                            }"
                        >
                            <div class="produkt-item__left">
                                <div class="produkt-item__dot" />
                                <div class="produkt-item__info">
                                    <span class="produkt-item__name">{{
                                        produkt.name
                                    }}</span>
                                    <span
                                        v-if="produkt.beschreibung"
                                        class="produkt-item__desc"
                                        >{{ produkt.beschreibung }}</span
                                    >
                                    <span
                                        v-if="produkt.verfuegbar === false"
                                        class="produkt-item__unavail"
                                        >Derzeit nicht verfügbar</span
                                    >
                                </div>
                            </div>
                            <div class="produkt-item__right">
                                <span
                                    v-if="produkt.neu"
                                    class="badge badge--neu"
                                    >Neu</span
                                >
                                <span
                                    v-if="produkt.preis"
                                    class="produkt-item__preis"
                                    >{{ produkt.preis }}</span
                                >
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="hinweis">
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <p>
                    Unser Sortiment kann je nach Zeitpunkt und Verfügbarkeit
                    variieren. Bei Fragen kontaktiere uns gerne.
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.produkte-page {
    padding-bottom: var(--space-16);
}
.produkte-wrap {
    max-width: 960px;
}

.back-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--color-text-muted);
    margin-bottom: var(--space-6);
    transition: color var(--transition);
    text-decoration: none;
}
.back-link:hover {
    color: var(--color-text);
    opacity: 1;
}

.produkte-hero {
    margin-bottom: var(--space-8);
    padding-bottom: var(--space-5);
    border-bottom: 1px solid var(--color-border);
}
.section-label {
    display: inline-block;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--color-green);
    background: var(--color-green-light);
    padding: 3px 10px;
    border-radius: var(--radius-full);
    margin-bottom: var(--space-2);
}
.produkte-hero h1 {
    margin-bottom: 8px;
}
.produkte-hero p {
    font-size: 0.95rem;
    color: var(--color-text-muted);
}

.spalten-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-4);
    align-items: start;
}

.spalte {
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    overflow: hidden;
    background: var(--color-surface);
}
.spalte--blue {
    border-top: 4px solid var(--color-blue);
}
.spalte--amber {
    border-top: 4px solid var(--color-amber);
}

.spalte__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-3) var(--space-4);
    border-bottom: 1px solid var(--color-border);
    background: var(--color-surface-alt);
}
.spalte__titel {
    font-size: 1.05rem;
    font-weight: 700;
}
.spalte--blue .spalte__titel {
    color: var(--color-blue);
}
.spalte--amber .spalte__titel {
    color: var(--color-amber);
}

.spalte__count {
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--color-text-muted);
    background: var(--color-tag);
    padding: 2px 10px;
    border-radius: var(--radius-full);
}

.produkt-liste {
    list-style: none;
}

.produkt-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-2);
    padding: 9px var(--space-4);
    border-bottom: 1px solid var(--color-border);
    transition: background-color var(--transition);
}
.produkt-item:last-child {
    border-bottom: none;
}
.produkt-item:hover {
    background-color: var(--color-surface-alt);
}
.produkt-item--unavailable {
    opacity: 0.4;
}

.produkt-item__left {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    flex: 1;
    min-width: 0;
}
.produkt-item__dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    flex-shrink: 0;
}
.spalte--blue .produkt-item__dot {
    background: var(--color-blue);
    opacity: 0.6;
}
.spalte--amber .produkt-item__dot {
    background: var(--color-amber);
    opacity: 0.6;
}

.produkt-item__info {
    display: flex;
    flex-direction: column;
    gap: 1px;
    min-width: 0;
}
.produkt-item__name {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--color-text);
}
.produkt-item__desc {
    font-size: 0.75rem;
    color: var(--color-text-muted);
}
.produkt-item__unavail {
    font-size: 0.72rem;
    color: var(--color-amber);
    font-weight: 500;
}

.produkt-item__right {
    display: flex;
    align-items: center;
    gap: var(--space-1);
    flex-shrink: 0;
}
.produkt-item__preis {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--color-text);
    background: var(--color-tag);
    padding: 2px 8px;
    border-radius: var(--radius-full);
}

.badge {
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    padding: 2px 7px;
    border-radius: var(--radius-full);
}
.badge--neu {
    background: var(--color-green-light);
    color: var(--color-green);
}

.hinweis {
    display: flex;
    align-items: flex-start;
    gap: var(--space-2);
    margin-top: var(--space-6);
    padding: var(--space-3) var(--space-4);
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    color: var(--color-text-muted);
}
.hinweis svg {
    flex-shrink: 0;
    margin-top: 2px;
}
.hinweis p {
    font-size: 0.85rem;
    line-height: 1.6;
}

@media (max-width: 700px) {
    .spalten-grid {
        grid-template-columns: 1fr;
    }
}

/* ── Suche ────────────────────────────────────────────────── */
.suche-wrap {
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: var(--space-5);
}
.suche-icon {
    position: absolute;
    left: 14px;
    color: var(--color-text-muted);
    pointer-events: none;
}
.suche-input {
    width: 100%;
    padding: 10px 40px 10px 40px;
    font-family: var(--font-body);
    font-size: 0.9rem;
    color: var(--color-text);
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-full);
    outline: none;
    transition: border-color var(--transition), box-shadow var(--transition);
}
.suche-input::placeholder {
    color: var(--color-text-muted);
}
.suche-input:focus {
    border-color: var(--color-text-muted);
    box-shadow: 0 0 0 3px rgba(28, 26, 20, 0.07);
}
.suche-clear {
    position: absolute;
    right: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    background: var(--color-tag);
    border: none;
    border-radius: 50%;
    cursor: pointer;
    color: var(--color-text-muted);
    transition: background var(--transition), color var(--transition);
}
.suche-clear:hover {
    background: var(--color-border);
    color: var(--color-text);
}

/* ── Suchergebnisse ───────────────────────────────────────── */
.such-liste {
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    overflow: hidden;
    background: var(--color-surface);
    margin-bottom: var(--space-4);
}
.such-liste .produkt-item {
    border-bottom: 1px solid var(--color-border);
}
.such-liste .produkt-item:last-child {
    border-bottom: none;
}

.such-kategorie-badge {
    font-size: 0.68rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    padding: 2px 9px;
    border-radius: var(--radius-full);
}
.such-kategorie-badge--blue {
    background: var(--color-blue-light);
    color: var(--color-blue);
}
.such-kategorie-badge--amber {
    background: var(--color-amber-light);
    color: var(--color-amber);
}

.keine-ergebnisse {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-2);
    padding: var(--space-8) 0;
    color: var(--color-text-muted);
    text-align: center;
}
.keine-ergebnisse p {
    font-size: 0.9rem;
}
.keine-ergebnisse strong {
    color: var(--color-text);
}

@media (max-width: 480px) {
    .such-kategorie-badge {
        display: none;
    }
    .suche-input {
        font-size: 0.85rem;
    }
    .such-item {
        padding: 9px 12px;
    }
}
@media (max-width: 360px) {
    .produkte-hero h1 {
        font-size: 1.7rem;
    }
    .hinweis p {
        font-size: 0.8rem;
    }
}
</style>
