<script setup>
import { usePageStepStore } from "@/stores/store";

const pageStepStore = usePageStepStore();
</script>
<template>
  <div class="w-full flex flex-row justify-between items-center px-6">
    <div class="w-72 h-2 bg-box-color rounded-full relative">
      <div
        :style="{ width: `${(pageStepStore.pageStep / 6) * 100}%` }"
        class="bg-primary-color rounded-full h-full"
      ></div>
    </div>
    <h1>{{ pageStepStore.pageStep }}/6</h1>
  </div>
</template>

<style scoped></style>
