import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'

// ─── Routen ───────────────────────────────────────────────────
// Hier kannst du einfach neue Seiten hinzufügen:
// { path: '/meine-seite', component: () => import('./views/MeineSeite.vue') }
import HomeView from './views/HomeView.vue'
import ImpressumView from './views/ImpressumView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/impressum', component: ImpressumView },
  ],
  // Scrollt nach oben bei Seitenwechsel
  scrollBehavior() {
    return { top: 0 }
  },
})

const app = createApp(App)
app.use(router)
app.mount('#app')
