<script setup lang="ts">
/**
 * KontaktSection.vue – Kontakt
 * ANPASSEN: contactInfo Objekt unten
 */

const contactInfo = {
    phone: "+49 171 90 12 134",
    email: "hibuy@gmx.de",
    address: "Neckarstraße 27, 73728 Esslingen am Neckar",
    mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Neckarstra%C3%9Fe+27+73728+Esslingen+am+Neckar",
};
</script>

<template>
    <section id="kontakt" class="section">
        <div class="container kontakt__inner">
            <div class="kontakt__header">
                <span class="section-label">Kontakt</span>
                <h2>Kontaktiere uns</h2>
                <p class="section-desc">
                    Fragen oder Probleme mit deinem Kauf? Kontaktiere uns. Wir
                    helfen dir schnell weiter.
                </p>
            </div>

            <div class="kontakt__cards">
                <!-- Telefon -->
                <a :href="`tel:${contactInfo.phone.replace(/\s/g, '')}`" class="kontakt-card">
                    <div class="kontakt-card__icon">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.8"
                            stroke-linecap="round"
                        >
                            <path
                                d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14z"
                            />
                        </svg>
                    </div>
                    <div class="kontakt-card__body">
                        <span class="kontakt-card__label">Rufnummer</span>
                        <span class="kontakt-card__value">{{
                            contactInfo.phone
                        }}</span>
                    </div>
                    <div class="kontakt-card__action-wrap">
                        <span class="kontakt-card__action">Anrufen</span>
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                        >
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </div>
                </a>

                <!-- E-Mail -->
                <a :href="`mailto:${contactInfo.email}`" class="kontakt-card">
                    <div class="kontakt-card__icon">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.8"
                            stroke-linecap="round"
                        >
                            <path
                                d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                            />
                            <polyline points="22,6 12,13 2,6" />
                        </svg>
                    </div>
                    <div class="kontakt-card__body">
                        <span class="kontakt-card__label">E-Mail</span>
                        <span class="kontakt-card__value">{{
                            contactInfo.email
                        }}</span>
                    </div>
                    <div class="kontakt-card__action-wrap">
                        <span class="kontakt-card__action">Schreiben</span>
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                        >
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </div>
                </a>

                <!-- Adresse -->
                <a
                    :href="contactInfo.mapsUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="kontakt-card"
                >
                    <div class="kontakt-card__icon">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.8"
                            stroke-linecap="round"
                        >
                            <path
                                d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
                            />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                    </div>
                    <div class="kontakt-card__body">
                        <span class="kontakt-card__label">Adresse</span>
                        <span class="kontakt-card__value">{{
                            contactInfo.address
                        }}</span>
                    </div>
                    <div class="kontakt-card__action-wrap">
                        <span class="kontakt-card__action">Navigieren</span>
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                        >
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </div>
                </a>
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

/* ─── Karten ──────────────────────────────────────────────── */
.kontakt__cards {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
}

.kontakt-card {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    padding: var(--space-3) var(--space-4);
    background-color: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    text-decoration: none;
    transition:
        transform var(--transition),
        box-shadow var(--transition),
        border-color var(--transition);
}

.kontakt-card:hover {
    transform: translateX(4px);
    box-shadow: var(--shadow-sm);
    border-color: var(--color-text-muted);
    opacity: 1;
}

/* Icon */
.kontakt-card__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    flex-shrink: 0;
    background-color: var(--color-tag);
    border-radius: var(--radius-md);
    color: var(--color-text);
}

/* Text */
.kontakt-card__body {
    display: flex;
    flex-direction: column;
    gap: 2px;
    flex: 1;
    min-width: 0;
}
.kontakt-card__label {
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: var(--color-text-muted);
}
.kontakt-card__value {
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--color-text);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

/* Aktions-Bereich rechts – immer gleich groß, zentriert */
.kontakt-card__action-wrap {
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
    width: 110px;
    justify-content: flex-end;
    color: var(--color-text-muted);
    border-left: 1px solid var(--color-border);
    padding-left: var(--space-3);
    transition: color var(--transition);
}

/* Aktionstext – standardmäßig versteckt, bei Hover sichtbar */
.kontakt-card__action {
    font-size: 0.78rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    white-space: nowrap;
    opacity: 0;
    transform: translateX(-4px);
    transition:
        opacity var(--transition),
        transform var(--transition);
}

.kontakt-card:hover .kontakt-card__action {
    opacity: 1;
    transform: translateX(0);
}

.kontakt-card:hover .kontakt-card__action-wrap {
    color: var(--color-text);
}

/* Pfeil bewegt sich beim Hover */
.kontakt-card__action-wrap svg {
    flex-shrink: 0;
    transition: transform var(--transition);
}
.kontakt-card:hover .kontakt-card__action-wrap svg {
    transform: translateX(3px);
}

/* ─── Responsive ──────────────────────────────────────────── */
@media (max-width: 768px) {
    .kontakt__inner {
        grid-template-columns: 1fr;
        gap: var(--space-5);
    }
}

@media (max-width: 480px) {
    .kontakt-card__value {
        white-space: normal;
        word-break: break-word;
        font-size: 0.88rem;
    }
    .kontakt-card__icon {
        width: 40px;
        height: 40px;
    }
    .kontakt-card__action {
        display: none;
    }
    .kontakt-card__action-wrap {
        width: auto;
        padding-left: var(--space-2);
    }
}
</style>
