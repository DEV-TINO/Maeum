import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../components/MainPage.vue"),
    },
    {
      path: "/script",
      component: () => import("../components/BasicLayout.vue"),
      children: [
        {
          path: "name",
          component: () => import("../components/InputNamePage.vue"),
        },
      ],
    },
  ],
});
export default router;
