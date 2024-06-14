import { defineStore } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";

const URL_MAP = {
  1: { name: "user" },
  2: { name: "opponent" },
  3: { name: "event" },
  4: { name: "letterCount" },
  5: { name: "intimacy" },
  6: { name: "speech" },
  7: { name: "loading" },
};

export const usePageStepStore = defineStore("pageStep", () => {
  const pageStep = ref(0);
  const updatePageStep = (value) => {
    pageStep.value = value;
  };

  const router = useRouter();
  const handleClickNextButton = () => {
    updatePageStep(pageStep.value + 1);
    router.push(URL_MAP[pageStep.value]);
  };

  return { pageStep, updatePageStep, handleClickNextButton };
});
