<script setup>
import { ref } from "vue";
import CustomInputComponent from "../components/CustomInputComponent.vue";
import NextButttonComponent from "../components/NextButttonComponent.vue";
import { usePageStepStore } from "@/stores/store";

const { moveToNextPage, saveScriptData } = usePageStepStore();
const opponentName = ref("");

const handleClickNextButton = () => {
  if (opponentName.value === "") return;

  saveScriptData({ opponentName: opponentName.value });
  moveToNextPage();
};
</script>

<template>
  <div class="flex flex-col text-xl text-text-color px-6 h-full">
    <div class="flex-1 flex flex-col pt-10 gap-4">
      <label class="block font-bold">스크립트를 받을 사람의 이름은?</label>
      <CustomInputComponent v-model="opponentName" />
    </div>
    <NextButttonComponent :handleClickNextButton="handleClickNextButton" />
  </div>
</template>

<style></style>
