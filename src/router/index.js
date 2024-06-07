import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../components/MainPage.vue"),
    },
    {
      path: "/step/1",
      component: () => import("../components/Step1Page.vue"),
    },
  ],
});
export default router;
