<script setup>
import { ref } from "vue";
import CustomBoxComponent from "../components/CustomBoxComponent.vue";
import NextButttonComponent from "../components/NextButttonComponent.vue";
import { usePageStepStore } from "@/stores/store";

const SPEECH_DATA = [
  "다정한",
  "공손한",
  "친근한",
  "편안한",
  "감정적",
  "격양된",
  "명령적",
  "강압적",
  "격식적",
];
const selectedIndex = ref(-1);
const { moveToNextPage, saveScriptData } = usePageStepStore();

const handleClickCustomBox = (idx) => {
  selectedIndex.value = idx;
};

const handleClickNextButton = () => {
  if (selectedIndex.value === -1) return;

  saveScriptData({ speech: SPEECH_DATA[selectedIndex.value] });
  moveToNextPage();
};
</script>

<template>
  <div class="flex flex-col text-xl text-text-color px-6 h-full">
    <div class="flex-1 flex flex-col pt-10 gap-4">
      <label class="block font-bold"
        >어떤 말투로 스크립트를 생성하고 싶나요?</label
      >
      <div class="grid grid-cols-3 text-center gap-2 gap-y-3 text-lg">
        <CustomBoxComponent
          v-for="(speech, index) in SPEECH_DATA"
          :key="index"
          :text="speech"
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
