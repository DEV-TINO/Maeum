import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../pages/MainPage.vue"),
    },
    {
      path: "/script",
      component: () => import("../components/BasicLayout.vue"),
      children: [
        {
          path: "username",
          component: () => import("../pages/InputUserNameStepPage.vue"),
        },
        {
          path: "opponentname",
          component: () => import("../pages/InputOpponentNameStepPage.vue"),
        },
        {
          path: "event",
          component: () => import("../pages/SelectEventStepPage.vue"),
        },
        {
          path: "event/happy",
          component: () => import("../pages/SelectHappyEventStepPage.vue"),
        },
        {
          path: "event/sad",
          component: () => import("../pages/SelectSadEventStepPage.vue"),
        },
        {
          path: "event/other",
          component: () => import("../pages/InputOtherEventStepPage.vue"),
        },
        {
          path: "length",
          component: () => import("../pages/SelectScriptLengthStepPage.vue"),
        },
        {
          path: "intimacy",
          component: () => import("../pages/SelectIntimacyStepPage.vue"),
        },
        {
          path: "accent",
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
