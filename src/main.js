import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router/router";

const app = createApp(App);
const store = createPinia();
app.use(store).use(router).mount("#app");
