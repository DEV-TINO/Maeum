<script setup>
import { ref } from "vue";
import CustomBoxComponent from "../components/CustomBoxComponent.vue";
import NextButttonComponent from "../components/NextButttonComponent.vue";
import { usePageStepStore } from "@/stores/store";

const pageStepStore = usePageStepStore();
const SCRIPT_LEN_DATA = ["1분", "3분", "5분", "7분", "10분"];
const selectedIndex = ref(-1);

const handleClickCustomBox = (idx) => {
  selectedIndex.value = idx;
};

const handleClickNextButton = () => {
  if (selectedIndex.value === -1) return;

  pageStepStore.saveScriptData(SCRIPT_LEN_DATA[selectedIndex.value]);
  pageStepStore.handleClickNextButton();
};
</script>

<template>
  <div class="flex flex-col text-xl text-text-color px-6 h-full">
    <div class="flex-1 flex flex-col pt-10 gap-4">
      <label class="block font-bold">몇 분 정도의 스크립트를 원하시나요?</label>
      <CustomBoxComponent
        class="text-left"
        v-for="(scriptLength, index) in SCRIPT_LEN_DATA"
        :key="index"
        :text="scriptLength"
        @click="handleClickCustomBox(index)"
        :class="{
          'border-primary-color border-2 bg-select-box-color text-primary-color':
            selectedIndex === index,
        }"
      />
    </div>
    <NextButttonComponent :handleClickNextButton="handleClickNextButton" />
  </div>
</template>

<style></style>
