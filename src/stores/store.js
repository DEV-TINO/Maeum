import { defineStore } from "pinia";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";

const URL_MAP = {
  0: { name: "main" },
  1: { name: "user" },
  2: { name: "opponent" },
  3: { name: "event" },
  4: { name: "letterCount" },
  5: { name: "intimacy" },
  6: { name: "speech" },
  7: { name: "loading" },
};

export const usePageStepStore = defineStore("pageStep", () => {
  const router = useRouter();

  const pageStep = ref(0);

  const updatePageStep = (value) => {
    if (value < 0 || value > 7) return;
    pageStep.value = value;
  };

  const handleClickNextButton = () => {
    updatePageStep(pageStep.value + 1);
  };

  watch(pageStep, (newpageStep) => {
    router.push(URL_MAP[newpageStep]);
  });

  const scriptData = ref([]);

  const saveScriptData = (data) => {
    scriptData.value[pageStep.value - 1] = data;
  };

  return {
    pageStep,
    updatePageStep,
    handleClickNextButton,
    scriptData,
    saveScriptData,
  };
});
