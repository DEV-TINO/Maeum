<script setup>
import router from "@/router/router";
import CustomBoxComponent from "../components/CustomBoxComponent.vue";
import NextButttonComponent from "../components/NextButttonComponent.vue";
import { usePageStepStore } from "@/stores/store";
const pageStepStore = usePageStepStore();
pageStepStore.updatePageStep(3);
const sadEventData = [
  "장례",
  "추모",
  "제사",
  "반려동물",
  "이별",
  "가족",
  "이혼",
  "실직",
  "건강악화",
  "부상",
  "자연재해",
  "유산",
];
const handleClickNextButton = () => {
  router.push({ name: "letterCount" });
};
</script>
<template>
  <div class="flex flex-col text-xl text-text-color px-6 h-full">
    <div class="flex-1 flex flex-col pt-10 gap-4">
      <label class="block font-bold">어떤 조사인가요?</label>
      <div class="grid grid-cols-3 text-center gap-2 gap-y-3 text-lg">
        <CustomBoxComponent
          v-for="(sadEvent, index) in sadEventData"
          :key="index"
          :text="sadEvent"
        />
      </div>
      <h4 class="text-center font-semibold text-sm text-bright-text-color">
        여기에 없으신가요?
      </h4>
    </div>
    <NextButttonComponent :handleClickNextButton="handleClickNextButton" />
  </div>
</template>

<style></style>
