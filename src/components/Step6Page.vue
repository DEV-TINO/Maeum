<script setup>
import CustomBoxComponent from "./CustomBoxComponent.vue";
import NextButttonComponent from "./NextButttonComponent.vue";
import { usePageStepStore } from "@/stores/store";
import router from "@/router/router";

const pageStepStore = usePageStepStore();
pageStepStore.updatePageStep(6);
const handleClickNextButton = () => {
  router.push("/loading");
};
const data = [
  "다정한",
  "공손한",
  "친근한",
  "편안한",
  "감정적",
  "격양된",
  "명령적",
  "강압적",
  "격식적",
];
</script>
<template>
  <div class="flex flex-col text-xl text-text-color px-6 h-full">
    <div class="flex-1 flex flex-col pt-10 gap-4">
      <label class="block font-bold"
        >어떤 말투로 스크립트를 생성하고 싶나요?</label
      >
      <div class="grid grid-cols-3 text-center gap-2 gap-y-3 text-lg">
        <CustomBoxComponent
          v-for="(item, index) in data"
          :key="index"
          :text="item"
        />
      </div>
    </div>
    <NextButttonComponent :handleClickNextButton="handleClickNextButton" />
  </div>
</template>

<style></style>
