<script setup>
import { ref } from "vue";
import CustomBoxComponent from "../components/CustomBoxComponent.vue";
import NextButttonComponent from "../components/NextButttonComponent.vue";
import { useRouter } from "vue-router";
import { usePageStepStore } from "@/stores/store";

const data = ["경사", "조사", "기타"];
const router = useRouter();
const pageStepStore = usePageStepStore();
const selectedIndex = ref(0);
const handleClickBox = (idx) => {
  console.log(idx);
  selectedIndex.value = idx;
};
pageStepStore.updatePageStep(3);
const handleClickNextButton = () => {
  router.push(`/step/3/${selectedIndex.value + 1}`);
};
</script>
<template>
  <div class="flex flex-col text-xl text-text-color px-6 h-full">
    <div class="flex-1 flex flex-col pt-10 gap-4">
      <label class="block font-bold">스크립트의 내용은 무엇인가요?</label>
      <CustomBoxComponent
        v-for="(item, index) in data"
        :key="index"
        :text="item"
        class="text-left"
        @click="handleClickBox(index)"
      />
    </div>
    <NextButttonComponent :handleClickNextButton="handleClickNextButton" />
  </div>
</template>

<style></style>
