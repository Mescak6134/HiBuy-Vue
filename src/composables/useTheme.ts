/**
 * useTheme.ts – Dark/Light Modus mit Cookie-Speicherung
 *
 * Rechtsgrundlage: § 25 Abs. 2 Nr. 2 TTDSG
 * → Technisch notwendiges Cookie, kein Einverständnis erforderlich.
 *
 * Cookie-Name:   hibuy-theme
 * Cookie-Wert:   "dark" oder "light"
 * Laufzeit:      1 Jahr
 * Zweck:         Speichert die vom Nutzer gewählte Darstellung (hell/dunkel)
 * Drittanbieter: Nein – wird ausschließlich lokal gesetzt und gelesen
 *
 * BENUTZEN:
 *   import { useTheme } from '@/composables/useTheme'
 *   const { isDark, toggleTheme } = useTheme()
 */

import { ref, watch, onMounted } from 'vue'

// ── Cookie-Konfiguration ───────────────────────────────────────
const COOKIE_NAME  = 'hibuy-theme'   // Name des Cookies
const COOKIE_YEARS = 1               // Laufzeit in Jahren

// ── Hilfsfunktionen ───────────────────────────────────────────

function getCookie(name: string): string | null {
  const match = document.cookie
    .split('; ')
    .find(row => row.startsWith(name + '='))
  return match ? decodeURIComponent(match.split('=')[1]) : null
}

function setCookie(name: string, value: string): void {
  const expires = new Date()
  expires.setFullYear(expires.getFullYear() + COOKIE_YEARS)
  // SameSite=Strict: Cookie wird nicht bei externen Anfragen mitgesendet
  document.cookie = [
    `${name}=${encodeURIComponent(value)}`,
    `expires=${expires.toUTCString()}`,
    'path=/',
    'SameSite=Strict',
  ].join('; ')
}

// ── Globaler State (einmal, überall geteilt) ───────────────────
const isDark = ref(false)

export function useTheme() {

  function initTheme(): void {
    const saved = getCookie(COOKIE_NAME)
    if (saved === 'dark') {
      isDark.value = true
    } else if (saved === 'light') {
      isDark.value = false
    } else {
      // Kein Cookie vorhanden → Betriebssystem-Präferenz nutzen
      isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    applyTheme()
  }

  function applyTheme(): void {
    if (isDark.value) {
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
  }

  function toggleTheme(): void {
    isDark.value = !isDark.value
    setCookie(COOKIE_NAME, isDark.value ? 'dark' : 'light')
  }

  watch(isDark, applyTheme)
  onMounted(initTheme)

  return { isDark, toggleTheme }
}