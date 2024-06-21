<script setup>
import { usePageStepStore } from "@/stores/store";

const { moveToPreviousPage } = usePageStepStore();
</script>
<template>
  <div class="pt-8 px-2 flex flex-row w-full">
    <img src="/images/header-previous.png" @click="moveToPreviousPage" />
    <div class="flex-1"></div>
  </div>
</template>

<style></style>
