<script setup>
import router from "@/router/router";
import CustomBoxComponent from "../components/CustomBoxComponent.vue";
import NextButttonComponent from "../components/NextButttonComponent.vue";
import { usePageStepStore } from "@/stores/store";

const pageStepStore = usePageStepStore();
pageStepStore.updatePageStep(3);
const data = [
  "결혼",
  "생일",
  "승진",
  "집들이",
  "졸업",
  "성인",
  "상 수상",
  "공연",
  "기념일",
  "합격",
  "출산",
  "취업",
];
const handleClickNextButton = () => {
  router.push("/step/4");
};
</script>
<template>
  <div class="flex flex-col text-xl text-text-color px-6 h-full">
    <div class="flex-1 flex flex-col pt-10 gap-4">
      <label class="block font-bold">어떤 경사인가요?</label>
      <div class="grid grid-cols-3 text-center gap-2 gap-y-3 text-lg">
        <CustomBoxComponent
          v-for="(item, index) in data"
          :key="index"
          :text="item"
        />
      </div>
      <h4 class="text-center font-semibold text-sm text-[#AFAFAF]">
        여기에 없으신가요?
      </h4>
    </div>
    <NextButttonComponent :handleClickNextButton="handleClickNextButton()" />
  </div>
</template>

<style></style>
