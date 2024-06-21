import { defineStore } from "pinia";
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const URL_MAP = {
  main: 0,
  user: 1,
  opponent: 2,
  event: 3,
  eventHappy: 3,
  eventSad: 3,
  eventOther: 3,
  letterCount: 4,
  intimacy: 5,
  speech: 6,
  loading: 7,
};

export const usePageStepStore = defineStore("pageStep", () => {
  const route = useRoute();
  const router = useRouter();
  const pageStep = ref(0);

  const updatePageStep = (value) => {
    if (value < 0 || value > 7) return;
    pageStep.value = value;
  };

  watch(
    () => route.name,
    () => {
      updatePageStep(URL_MAP[route.name]);
    },
    { immediate: true }
  );

  const handleClickNextButton = () => {
    const nextRouteName = Object.keys(URL_MAP).find(
      (key) => URL_MAP[key] === pageStep.value + 1
    );

    router.push({ name: nextRouteName });
  };

  const handleClickBackButton = () => {
    const previousRouteName = Object.keys(URL_MAP).find(
      (key) => URL_MAP[key] === pageStep.value - 1
    );
    router.push({ name: previousRouteName });
  };

  const scriptData = ref([]);

  const saveScriptData = (data) => {
    scriptData.value[pageStep.value - 1] = data;
  };

  return {
    pageStep,
    updatePageStep,
    handleClickNextButton,
    handleClickBackButton,
    scriptData,
    saveScriptData,
  };
});
