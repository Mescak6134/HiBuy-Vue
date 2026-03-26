import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import HomeView from "./views/HomeView.vue";
import ImpressumView from "./views/ImpressumView.vue";
import ProduktlisteView from "./views/ProduktlisteView.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: HomeView },
    { path: "/impressum", component: ImpressumView },
    { path: "/produkte", component: ProduktlisteView },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: "smooth" };
    }
    return { top: 0 };
  },
});

createApp(App).use(router).mount("#app");
