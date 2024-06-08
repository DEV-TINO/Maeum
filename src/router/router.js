import { useStore } from "@/stores/store";
import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../components/MainPage.vue"),
    },
    {
      path: "/step",
      component: () => import("../components/BasicLayout.vue"),
      children: [
        { path: "1", component: () => import("../components/Step1Page.vue") },
        { path: "2", component: () => import("../components/Step2Page.vue") },
        { path: "3", component: () => import("../components/Step3Page.vue") },
        {
          path: "3/1",
          component: () => import("../components/Step3-1Page.vue"),
        },
        {
          path: "3/2",
          component: () => import("../components/Step3-2Page.vue"),
        },
        {
          path: "3/3",
          component: () => import("../components/Step3-3Page.vue"),
        },
        { path: "4", component: () => import("../components/Step4Page.vue") },
        { path: "5", component: () => import("../components/Step5Page.vue") },
        { path: "6", component: () => import("../components/Step6Page.vue") },
      ],
    },
    {
      path: "/loading",
      component: () => import("../components/LoadingPage.vue"),
    },
    {
      path: "/result",
      component: () => import("../components/ResultPage.vue"),
    },
  ],
});

export default router;
