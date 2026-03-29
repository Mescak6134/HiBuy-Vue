<script setup lang="ts">
/**
 * HomeView.vue – Startseite
 *
 * Hier werden alle Sektionen der Startseite zusammengebaut.
 *
 * NEUE SEKTION HINZUFÜGEN:
 * 1. Neue Komponente in src/components/ erstellen
 * 2. Hier importieren: import MeineSektion from '@/components/MeineSektion.vue'
 * 3. Im Template einbinden: <MeineSektion />
 */
import HeroSection from '@/components/HeroSection.vue'
import AngebotSection from '@/components/AngebotSection.vue'
import FaqSection from '@/components/FaqSection.vue'
import KontaktSection from '@/components/KontaktSection.vue'
</script>

<template>
  <div>
    <HeroSection />
    <AngebotSection />
    <FaqSection />
    <KontaktSection />
  </div>
</template>
