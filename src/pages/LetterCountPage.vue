<script setup>
import CustomBoxComponent from "../components/CustomBoxComponent.vue";
import NextButttonComponent from "../components/NextButttonComponent.vue";
import { usePageStepStore } from "@/stores/store";

const pageStepStore = usePageStepStore();
const scriptLengthData = ["1분", "3분", "5분", "7분", "10분"];
</script>

<template>
  <div class="flex flex-col text-xl text-text-color px-6 h-full">
    <div class="flex-1 flex flex-col pt-10 gap-4">
      <label class="block font-bold">몇 분 정도의 스크립트를 원하시나요?</label>
      <CustomBoxComponent
        class="text-left"
        v-for="(scriptLength, index) in scriptLengthData"
        :key="index"
        :text="scriptLength"
      />
    </div>
    <NextButttonComponent
      :handleClickNextButton="pageStepStore.handleClickNextButton"
    />
  </div>
</template>

<style></style>
