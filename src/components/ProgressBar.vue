<script setup>
import { usePageStepStore } from "@/stores/store";

const pageStepStore = usePageStepStore();
const MAX_PAGE_STEP = 6;
const progressBarStep = (step) => {
  return {
    width: `${(step / MAX_PAGE_STEP) * 100}%`,
  };
};
</script>
<template>
  <div class="w-full flex flex-row justify-between items-center px-6">
    <div class="w-72 h-2 bg-box-color rounded-full relative">
      <div
        :style="progressBarStep(pageStepStore.pageStep)"
        class="bg-primary-color rounded-full h-full"
      ></div>
    </div>
    <h1 class="text-primary-color font-semibold">
      {{ pageStepStore.pageStep }}/6
    </h1>
  </div>
</template>

<style scoped></style>
