<script setup>
import { useRouter } from "vue-router";
import CustomInputComponent from "../components/CustomInputComponent.vue";
import NextButttonComponent from "../components/NextButttonComponent.vue";
import { usePageStepStore } from "@/stores/store";

const router = useRouter();
const pageStepStore = usePageStepStore();
pageStepStore.updatePageStep(1);
const handleClickNextButton = () => {
  router.push({ name: "opponent" });
};
</script>
<template>
  <div class="flex flex-col text-xl text-text-color px-6 h-full">
    <div class="flex-1 flex flex-col pt-10 gap-4">
      <label class="block font-bold">이름을 입력해주세요</label>
      <CustomInputComponent />
    </div>
    <NextButttonComponent :handleClickNextButton="handleClickNextButton" />
  </div>
</template>
<style></style>
