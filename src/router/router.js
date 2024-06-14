import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../pages/MainPage.vue"),
    },
    {
      path: "/options",
      name: "script",
      component: () => import("../components/BasicLayout.vue"),
      children: [
        {
          path: "from-who",
          name: "user",
          component: () => import("../pages/UserNamePage.vue"),
        },
        {
          path: "to-who",
          name: "opponent",
          component: () => import("../pages/OpponentNamePage.vue"),
        },
        {
          path: "event",
          name: "event",
          component: () => import("../pages/EventPage.vue"),
        },
        {
          path: "event/happy",
          name: "eventHappy",
          component: () => import("../pages/HappyEventPage.vue"),
        },
        {
          path: "event/sad",
          name: "eventSad",
          component: () => import("../pages/SadEventPage.vue"),
        },
        {
          path: "event/other",
          name: "eventOther",
          component: () => import("../pages/OtherEventPage.vue"),
        },
        {
          path: "letter-count",
          name: "letterCount",
          component: () => import("../pages/LetterCountPage.vue"),
        },
        {
          path: "intimacy",
          name: "intimacy",
          component: () => import("../pages/IntimacyPage.vue"),
        },
        {
          path: "speech",
          name: "speech",
          component: () => import("../pages/SpeechPage.vue"),
        },
      ],
    },
    {
      path: "/loading",
      name: "loading",
      component: () => import("../pages/LoadingPage.vue"),
    },
    {
      path: "/result",
      name: "result",
      component: () => import("../pages/ResultPage.vue"),
    },
  ],
});

export default router;
