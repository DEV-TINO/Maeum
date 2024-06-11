<script setup>
import { usePageStepStore } from "@/stores/store";
import CustomBoxComponent from "../components/CustomBoxComponent.vue";
import NextButttonComponent from "../components/NextButttonComponent.vue";
import router from "@/router/router";

const intimacyData = [
  "아주 많이",
  "많이",
  "보통",
  "조금",
  "아주 조금",
  "안친함",
];
const pageStepStore = usePageStepStore();
pageStepStore.updatePageStep(5);
const handleClickNextButton = () => {
  router.push("/script/accent");
};
</script>
<template>
  <div class="flex flex-col text-xl text-text-color px-6 h-full">
    <div class="flex-1 flex flex-col pt-10 gap-4">
      <label class="block font-bold">상대방과 얼마나 친하시나요?</label>
      <div class="grid grid-cols-3 text-center gap-2 gap-y-3 text-lg">
        <CustomBoxComponent
          v-for="(intimacy, index) in intimacyData"
          :key="index"
          :text="intimacy"
        />
      </div>
    </div>
    <NextButttonComponent :handleClickNextButton="handleClickNextButton" />
  </div>
</template>

<style></style>
