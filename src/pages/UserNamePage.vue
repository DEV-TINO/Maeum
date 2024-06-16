<script setup>
import { ref } from "vue";
import CustomInputComponent from "../components/CustomInputComponent.vue";
import NextButttonComponent from "../components/NextButttonComponent.vue";
import { usePageStepStore } from "@/stores/store";

const pageStepStore = usePageStepStore();
const userName = ref("");

const handleClickNextButton = () => {
  if (userName.value === "") {
    return;
  }
  pageStepStore.saveScriptData(userName.value);
  pageStepStore.handleClickNextButton();
};
</script>

<template>
  <div class="flex flex-col text-xl text-text-color px-6 h-full">
    <div class="flex-1 flex flex-col pt-10 gap-4">
      <label class="block font-bold">이름을 입력해주세요</label>
      <CustomInputComponent v-model="userName" />
    </div>
    <NextButttonComponent :handleClickNextButton="handleClickNextButton" />
  </div>
</template>

<style></style>
