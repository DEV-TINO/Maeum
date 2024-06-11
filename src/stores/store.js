import { defineStore } from "pinia";
import { ref } from "vue";

export const usePageStepStore = defineStore("pageStep", () => {
  const pageStep = ref(1);
  const updatePageStep = (value) => {
    pageStep.value = value;
  };
  return { pageStep, updatePageStep };
});
