<script setup>
import { ref } from "vue";
import CustomInputComponent from "../components/CustomInputComponent.vue";
import NextButttonComponent from "../components/NextButttonComponent.vue";
import { usePageStepStore } from "@/stores/store";

const { moveToNextPage, saveScriptData } = usePageStepStore();
const otherEvent = ref("");

const handleClickNextButton = () => {
  if (!otherEvent.value) return;

  const result = { eventType: "기타", eventDetail: otherEvent.value };
  saveScriptData(result);
  moveToNextPage();
};
</script>

<template>
  <div class="flex flex-col text-xl text-text-color px-6 h-full">
    <div class="flex-1 flex flex-col pt-10 gap-4">
      <label class="block font-bold">어떤 스크립트를 생성하고 싶나요?</label>
      <CustomInputComponent v-model="otherEvent" />
    </div>
    <NextButttonComponent :handleClickNextButton="handleClickNextButton" />
  </div>
</template>

<style></style>
