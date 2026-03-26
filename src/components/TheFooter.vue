<script setup lang="ts">
/**
 * TheFooter.vue – Fußzeile
 *
 * ANPASSEN:
 * - Adresse & Kontakt → contactInfo Objekt
 * - Links → footerLinks Array
 */

const contactInfo = {
    company: "HiBuy GbR",
    street: "Neckarstraße 27",
    city: "73728 Esslingen am Neckar",
    phone: "+49 171 90 12 134",
    email: "hibuy@gmx.de",
};

const currentYear = new Date().getFullYear();
</script>

<template>
    <footer class="footer">
        <div class="container footer__inner">
            <div class="footer__brand">
                <span class="footer__logo">Hi<em>Buy</em></span>
                <p class="footer__tagline">Moderne Automaten in Esslingen</p>
            </div>

            <div class="footer__contact">
                <p>{{ contactInfo.company }}</p>
                <p>{{ contactInfo.street }}, {{ contactInfo.city }}</p>
                <p>
                    <a :href="`tel:${contactInfo.phone.replace(/\s/g, '')}`">{{
                        contactInfo.phone
                    }}</a>
                    &ensp;·&ensp;
                    <a :href="`mailto:${contactInfo.email}`">{{
                        contactInfo.email
                    }}</a>
                </p>
            </div>

            <div class="footer__links">
                <RouterLink to="/impressum">Impressum</RouterLink>
                <RouterLink to="/impressum#datenschutz">Datenschutz</RouterLink>
                <RouterLink to="/impressum#cookies">Cookies</RouterLink>
            </div>
        </div>
        <div class="footer__bottom">
            <div class="container">
                <p>© {{ currentYear }} HiBuy GbR. Alle Rechte vorbehalten.</p>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    border-top: 1px solid var(--color-border);
    background-color: var(--color-bg);
    transition: background-color var(--transition-slow);
    margin-top: var(--space-12);
}

.footer__inner {
    display: grid;
    grid-template-columns: 1fr 1fr auto;
    gap: var(--space-6);
    padding-top: var(--space-6);
    padding-bottom: var(--space-6);
    align-items: start;
}

.footer__logo {
    font-family: var(--font-display);
    font-size: 1.4rem;
    font-weight: 800;
    color: var(--color-text);
    letter-spacing: -0.03em;
    display: block;
    margin-bottom: var(--space-1);
}

.footer__logo em {
    font-style: normal;
    opacity: 0.4;
}

.footer__tagline {
    font-size: 0.85rem;
    color: var(--color-text-muted);
    line-height: 1.5;
}

.footer__contact p {
    font-size: 0.85rem;
    color: var(--color-text-muted);
    line-height: 1.8;
}

.footer__contact a {
    color: var(--color-text-muted);
    transition: color var(--transition);
}

.footer__contact a:hover {
    color: var(--color-text);
    opacity: 1;
}

.footer__links {
    display: flex;
    flex-direction: column;
    gap: var(--space-1);
}

.footer__links a {
    font-size: 0.85rem;
    color: var(--color-text-muted);
    transition: color var(--transition);
}

.footer__links a:hover {
    color: var(--color-text);
    opacity: 1;
}

.footer__bottom {
    border-top: 1px solid var(--color-border);
    padding: var(--space-2) 0;
}

.footer__bottom p {
    font-size: 0.78rem;
    color: var(--color-text-muted);
    opacity: 0.7;
}

@media (max-width: 700px) {
    .footer__inner {
        grid-template-columns: 1fr;
        gap: var(--space-4);
    }
    .footer__contact p {
        word-break: break-word;
    }
    .footer__contact a {
        word-break: break-all;
    }
}
</style>
