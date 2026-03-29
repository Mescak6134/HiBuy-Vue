<script setup lang="ts">
/**
 * TheNavbar.vue – Navigationsleiste
 *
 * ANPASSEN:
 * - Links → navLinks Array
 * - Logo → navbar__logo-text im Template
 */
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useTheme } from '@/composables/useTheme'

const { isDark, toggleTheme } = useTheme()
const router = useRouter()
const route = useRoute()

// ── Navigations-Links ─────────────────────────────────────────
// to: '#id' = scroll auf Startseite zur Sektion
// to: '/pfad' = andere Seite
const navLinks = [
  { label: 'Home',      anchor: 'hero' },
  { label: 'Sortiment', anchor: 'angebot' },
  { label: 'Kontakt',   anchor: 'kontakt' },
]

// Scrollt zur Sektion – falls nicht auf Startseite, erst dorthin navigieren
async function scrollTo(anchor: string): Promise<void> {
  closeMenu()
  if (route.path !== '/') {
    await router.push('/')
    await new Promise(r => setTimeout(r, 100))
  }
  const el = document.getElementById(anchor)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const menuOpen = ref(false)
const toggleMenu = () => { menuOpen.value = !menuOpen.value }
const closeMenu  = () => { menuOpen.value = false }
</script>

<template>
  <header class="navbar">
    <div class="container navbar__inner">

      <!-- Logo -->
      <button class="navbar__logo" @click="scrollTo('hero')">
        <span class="navbar__logo-text">Hi<em>Buy</em></span>
        <span class="navbar__logo-badge">24/7</span>
      </button>

      <!-- Desktop Nav -->
      <nav class="navbar__nav" aria-label="Hauptnavigation">
        <button
          v-for="link in navLinks"
          :key="link.anchor"
          class="navbar__link"
          @click="scrollTo(link.anchor)"
        >
          {{ link.label }}
        </button>
        <RouterLink to="/impressum" class="navbar__link">Impressum</RouterLink>
      </nav>

      <!-- Rechts: Theme + Hamburger -->
      <div class="navbar__actions">
        <button
          class="theme-toggle"
          :title="isDark ? 'Hell' : 'Dunkel'"
          :aria-label="isDark ? 'Hellen Modus aktivieren' : 'Dunklen Modus aktivieren'"
          @click="toggleTheme"
        >
          <svg v-if="isDark" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <circle cx="12" cy="12" r="4"/>
            <line x1="12" y1="2" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="2" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="22" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
          <svg v-else width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
          </svg>
        </button>

        <button
          class="hamburger"
          :class="{ 'hamburger--open': menuOpen }"
          aria-label="Menü"
          @click="toggleMenu"
        >
          <span /><span /><span />
        </button>
      </div>
    </div>

    <!-- Mobile Menü -->
    <div class="mobile-menu" :class="{ 'mobile-menu--open': menuOpen }">
      <nav>
        <button
          v-for="link in navLinks"
          :key="link.anchor"
          class="mobile-menu__link"
          @click="scrollTo(link.anchor)"
        >
          {{ link.label }}
        </button>
        <RouterLink to="/impressum" class="mobile-menu__link" @click="closeMenu">Impressum</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  position: sticky; top: 0; z-index: 100;
  background-color: var(--color-bg);
  border-bottom: 1px solid var(--color-border);
  transition: background-color var(--transition-slow), border-color var(--transition-slow);
}
.navbar__inner {
  display: flex; align-items: center;
  justify-content: space-between; height: 64px;
}

/* Logo als Button */
.navbar__logo {
  display: flex; align-items: center; gap: 8px;
  background: none; border: none; cursor: pointer; padding: 0;
}
.navbar__logo-text {
  font-family: var(--font-display);
  font-size: 1.35rem; font-weight: 800;
  color: var(--color-text); letter-spacing: -0.03em;
}
.navbar__logo-text em { font-style: normal; opacity: 0.45; }
.navbar__logo-badge {
  font-family: var(--font-body); font-size: 0.65rem; font-weight: 700;
  letter-spacing: 0.05em; background-color: var(--color-tag);
  color: var(--color-text-muted); padding: 2px 7px; border-radius: var(--radius-full);
}

/* Desktop Nav */
.navbar__nav {
  display: flex; align-items: center; gap: var(--space-3);
}
.navbar__link {
  font-size: 0.875rem; font-weight: 500;
  color: var(--color-text-muted);
  background: none; border: none; cursor: pointer;
  padding: 0; font-family: var(--font-body);
  text-decoration: none;
  transition: color var(--transition);
}
.navbar__link:hover,
.navbar__link.router-link-active { color: var(--color-text); }

/* Aktionen */
.navbar__actions { display: flex; align-items: center; gap: var(--space-1); }

.theme-toggle {
  display: flex; align-items: center; justify-content: center;
  width: 38px; height: 38px;
  border: 1px solid var(--color-border); border-radius: var(--radius-full);
  background: transparent; color: var(--color-text-muted); cursor: pointer;
  transition: all var(--transition);
}
.theme-toggle:hover { background-color: var(--color-surface-alt); color: var(--color-text); }

.hamburger {
  display: none; flex-direction: column; justify-content: center;
  gap: 5px; width: 38px; height: 38px;
  background: transparent; border: 1px solid var(--color-border);
  border-radius: var(--radius-sm); cursor: pointer; padding: 8px 9px;
  transition: background-color var(--transition);
}
.hamburger span {
  display: block; width: 100%; height: 1.5px;
  background-color: var(--color-text); border-radius: 2px;
  transition: all var(--transition); transform-origin: center;
}
.hamburger--open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
.hamburger--open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
.hamburger--open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

/* Mobile Menü */
.mobile-menu {
  display: none; overflow: hidden;
  max-height: 0; transition: max-height 300ms ease;
  border-top: 1px solid transparent;
}
.mobile-menu--open { max-height: 300px; border-top-color: var(--color-border); }
.mobile-menu nav { display: flex; flex-direction: column; padding: var(--space-2) 0; }
.mobile-menu__link {
  padding: var(--space-1) var(--space-3);
  font-weight: 500; font-size: 0.95rem;
  color: var(--color-text-muted);
  background: none; border: none; cursor: pointer;
  font-family: var(--font-body); text-align: left;
  text-decoration: none;
  transition: color var(--transition), background-color var(--transition);
}
.mobile-menu__link:hover { color: var(--color-text); background-color: var(--color-surface-alt); }

@media (max-width: 768px) {
  .navbar__nav { display: none; }
  .hamburger { display: flex; }
  .mobile-menu { display: block; }
}
@media (max-width: 360px) {
  .navbar__logo-text { font-size: 1.1rem; }
  .navbar__logo-badge { font-size: 0.58rem; padding: 2px 5px; }
  .theme-toggle { width: 32px; height: 32px; }
  .hamburger { width: 32px; height: 32px; }
}
</style>
