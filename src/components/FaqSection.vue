<script setup lang="ts">
/**
 * FaqSection.vue – Häufig gestellte Fragen
 *
 * ANPASSEN:
 * - Fragen/Antworten → faqs Array
 * - Weitere Fragen einfach als neues Objekt ergänzen
 */

import { ref } from "vue";

interface FaqItem {
    question: string;
    answer: string;
}

const faqs: FaqItem[] = [
    {
        question: "Welche Voraussetzungen braucht ein Standort?",
        answer: "Stromanschluss (Standard 230V), ein trockener und gut erreichbarer Platz sowie die Genehmigung des Besitzers oder Verwalters. Der Rest liegt bei uns.",
    },
    {
        question: "Wer übernimmt Befüllung und Wartung?",
        answer: "Wir. Dank Live-Telemetrie sehen wir Füllstände und Störungen in Echtzeit und reagieren proaktiv – bevor der Automat leer läuft.",
    },
    {
        question: "Welche Bezahlarten sind möglich?",
        answer: "Kontaktlos (Karte, Smartphone), QR sowie optional Bargeld. Wir richten das System gemeinsam mit dir nach den Bedürfnissen deines Standorts ein.",
    },
    {
        question: "Wie schnell ist die Aufstellung?",
        answer: "Nach dem Standort-Check in der Regel innerhalb von 7–14 Werktagen. Wir koordinieren alles – Transport, Aufbau und erste Befüllung.",
    },
    {
        question: "Entstehen für mich als Standortgeber Kosten?",
        answer: "In der Regel nicht. Details besprechen wir individuell – das Modell richtet sich nach Standort und Vereinbarung.",
    },
];

// Aktuell geöffnete FAQ-Karte (Index oder null)
const openIndex = ref<number | null>(null);

function toggle(index: number): void {
    openIndex.value = openIndex.value === index ? null : index;
}
</script>

<template>
    <section id="faq" class="section">
        <div class="container faq__inner">
            <!-- Linke Spalte: Header -->
            <div class="faq__header">
                <span class="section-label">Antworten</span>
                <h2>Häufige Fragen</h2>
                <p class="section-desc">
                    Nicht gefunden was du suchst?
                    <a href="#kontakt">Schreib uns direkt.</a>
                </p>
            </div>

            <!-- Rechte Spalte: Akkordeon -->
            <div class="faq__list">
                <div
                    v-for="(faq, index) in faqs"
                    :key="index"
                    class="faq__item"
                    :class="{ 'faq__item--open': openIndex === index }"
                >
                    <button
                        class="faq__question"
                        :aria-expanded="openIndex === index"
                        @click="toggle(index)"
                    >
                        <span>{{ faq.question }}</span>
                        <!-- Plus / Minus Icon -->
                        <span class="faq__icon" aria-hidden="true">
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                            >
                                <line
                                    x1="8"
                                    y1="3"
                                    x2="8"
                                    y2="13"
                                    class="faq__icon-vert"
                                />
                                <line x1="3" y1="8" x2="13" y2="8" />
                            </svg>
                        </span>
                    </button>

                    <div class="faq__answer">
                        <p>{{ faq.answer }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.faq__inner {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: var(--space-12);
    align-items: start;
}

/* ─── Header ──────────────────────────────────────────────── */
.section-label {
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--color-text-muted);
    margin-bottom: var(--space-2);
}

.section-desc {
    margin-top: var(--space-2);
    font-size: 1rem;
}

.section-desc a {
    color: var(--color-text);
    text-decoration: underline;
    text-underline-offset: 3px;
}

/* ─── FAQ-Liste ───────────────────────────────────────────── */
.faq__list {
    display: flex;
    flex-direction: column;
    gap: 0;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    overflow: hidden;
}

.faq__item {
    border-bottom: 1px solid var(--color-border);
    background-color: var(--color-surface);
    transition: background-color var(--transition-slow);
}

.faq__item:last-child {
    border-bottom: none;
}

.faq__item--open {
    background-color: var(--color-surface-alt);
}

/* ─── Frage-Button ────────────────────────────────────────── */
.faq__question {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--space-3);
    padding: var(--space-3) var(--space-4);
    background: transparent;
    border: none;
    cursor: pointer;
    text-align: left;
    font-family: var(--font-body);
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--color-text);
    transition: color var(--transition);
}

.faq__question:hover {
    color: var(--color-text);
}

/* ─── Plus/Minus Icon ─────────────────────────────────────── */
.faq__icon {
    flex-shrink: 0;
    color: var(--color-text-muted);
    transition: transform var(--transition);
}

.faq__item--open .faq__icon {
    transform: rotate(45deg);
}

.faq__icon-vert {
    transition: opacity var(--transition);
}

/* ─── Antwort ─────────────────────────────────────────────── */
.faq__answer {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 300ms ease;
    overflow: hidden;
}

.faq__item--open .faq__answer {
    grid-template-rows: 1fr;
}

.faq__answer p {
    min-height: 0;
    padding: 0 var(--space-4) var(--space-4);
    font-size: 0.9rem;
    line-height: 1.7;
}

/* ─── Responsive ──────────────────────────────────────────── */
@media (max-width: 768px) {
    .faq__inner {
        grid-template-columns: 1fr;
        gap: var(--space-5);
    }
}

@media (max-width: 480px) {
    .faq__question {
        font-size: 0.9rem;
        padding: var(--space-2) var(--space-3);
    }
    .faq__answer p {
        padding: 0 var(--space-3) var(--space-3);
    }
}
</style>
