<script setup>
import { usePageStepStore } from "@/stores/store";

const { moveToNextPage } = usePageStepStore();
</script>

<template>
  <div
    class="h-full flex flex-col justify-center items-center bg-main-background bg-no-repeat bg-bottom"
  >
    <div class="flex flex-col justify-center items-center flex-1">
      <p class="font-semibold text-primary-color">스크립트를 마음에 담다</p>
      <p class="text-4xl text-primary-color font-extrabold tracking-wide">
        MAEUM
      </p>
      <img src="/images/main-logo.png" class="w-5/6" />
    </div>
    <button
      class="my-11 h-14 w-11/12 bg-white rounded-2xl text-button-color font-bold"
      @click="moveToNextPage()"
    >
      시작하기
    </button>
  </div>
</template>

<style></style>
