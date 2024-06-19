<script setup>
import { usePageStepStore } from "@/stores/store";
import { useRouter } from "vue-router";

const router = useRouter();
const pageStepStore = usePageStepStore();
const handleClickBackButton = () => {
  pageStepStore.updatePageStep(pageStepStore.pageStep - 1);
};
</script>
<template>
  <div class="pt-8 px-2 flex flex-row w-full">
    <img src="/images/header-previous.png" @click="handleClickBackButton()" />
    <div class="flex-1"></div>
  </div>
</template>

<style></style>
