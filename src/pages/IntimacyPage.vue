<script setup>
import { usePageStepStore } from "@/stores/store";
import CustomBoxComponent from "../components/CustomBoxComponent.vue";
import NextButttonComponent from "../components/NextButttonComponent.vue";
import { ref } from "vue";

const INTIMACY_DATA = [
  "아주 많이",
  "많이",
  "보통",
  "조금",
  "아주 조금",
  "안친함",
];
const selectedIndex = ref(-1);
const { moveToNextPage, saveScriptData } = usePageStepStore();

const handleClickCustomBox = (idx) => {
  selectedIndex.value = idx;
};

const handleClickNextButton = () => {
  if (selectedIndex.value === -1) return;

  saveScriptData("intimacy", INTIMACY_DATA[selectedIndex.value]);
  moveToNextPage();
};
</script>

<template>
  <div class="flex flex-col text-xl text-text-color px-6 h-full">
    <div class="flex-1 flex flex-col pt-10 gap-4">
      <label class="block font-bold">상대방과 얼마나 친하시나요?</label>
      <div class="grid grid-cols-3 text-center gap-2 gap-y-3 text-lg">
        <CustomBoxComponent
          v-for="(intimacy, index) in INTIMACY_DATA"
          :key="index"
          :text="intimacy"
          @click="handleClickCustomBox(index)"
          :class="{
            'border-primary-color border-2 bg-select-box-color text-primary-color':
              selectedIndex === index,
          }"
        />
      </div>
    </div>
    <NextButttonComponent :handleClickNextButton="handleClickNextButton" />
  </div>
</template>

<style></style>
