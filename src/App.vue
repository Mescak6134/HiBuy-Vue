<script setup lang="ts">
import TheNavbar from "@/components/TheNavbar.vue";
import TheFooter from "@/components/TheFooter.vue";
</script>

<template>
    <div class="app-wrapper">
        <TheNavbar />
        <main>
            <RouterView />
        </main>
        <TheFooter />
    </div>
</template>

<style>
@import "@/assets/fonts/css/fonts.css";
@import "@/assets/fonts/css/global.css";

.app-wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

main {
    flex: 1;
}
</style>
