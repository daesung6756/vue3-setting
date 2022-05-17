import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

/* style */
import "@/assets/scss/reset.scss";
import "@/assets/scss/common.scss";
import "@/assets/scss/layout.scss";

createApp(App).use(store).use(router).mount("#app");
