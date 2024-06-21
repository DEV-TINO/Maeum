<script setup>
import { usePageStepStore } from "@/stores/store";
import { storeToRefs } from "pinia";

const { pageStep } = storeToRefs(usePageStepStore());
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
        :style="progressBarStep(pageStep)"
        class="bg-primary-color rounded-full h-full"
      ></div>
    </div>
    <h1 class="text-primary-color font-semibold">
      {{ pageStep }}/{{ MAX_PAGE_STEP }}
    </h1>
  </div>
</template>

<style scoped></style>
