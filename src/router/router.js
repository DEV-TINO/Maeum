import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../pages/MainPage.vue"),
    },
    {
      path: "/step",
      component: () => import("../components/BasicLayout.vue"),
      children: [
        {
          path: "1",
          component: () => import("../pages/InputUserNameStepPage.vue"),
        },
        {
          path: "2",
          component: () => import("../pages/InputOpponentNameStepPage.vue"),
        },
        {
          path: "3",
          component: () => import("../pages/SelectEventStepPage.vue"),
        },
        {
          path: "3/1",
          component: () => import("../pages/SelectHappyEventStepPage.vue"),
        },
        {
          path: "3/2",
          component: () => import("../pages/SelectSadEventStepPage.vue"),
        },
        {
          path: "3/3",
          component: () => import("../pages/InputOtherEventStepPage.vue"),
        },
        {
          path: "4",
          component: () => import("../pages/SelectScriptLengthStepPage.vue"),
        },
        {
          path: "5",
          component: () => import("../pages/SelectIntimacyStepPage.vue"),
        },
        {
          path: "6",
          component: () => import("../pages/SelectScriptAccentStepPage.vue"),
        },
      ],
    },
    {
      path: "/loading",
      component: () => import("../pages/LoadingPage.vue"),
    },
    {
      path: "/result",
      component: () => import("../pages/ResultPage.vue"),
    },
  ],
});

export default router;
