<script setup>
import { ref } from "vue";
import CustomBoxComponent from "../components/CustomBoxComponent.vue";
import NextButttonComponent from "../components/NextButttonComponent.vue";
import { usePageStepStore } from "@/stores/store";
import { useRouter } from "vue-router";

const SAD_EVENT_DATA = [
  "장례",
  "추모",
  "제사",
  "반려동물",
  "이별",
  "가족",
  "이혼",
  "실직",
  "건강악화",
  "부상",
  "자연재해",
  "유산",
];
const selectedIndex = ref(-1);
const router = useRouter();
const { moveToNextPage, saveScriptData } = usePageStepStore();

const handleClickNextButton = () => {
  if (selectedIndex.value === -1) return;

  saveScriptData({ eventType: SAD_EVENT_DATA[selectedIndex.value] });
  moveToNextPage();
};

const handleClickCustomBox = (idx) => {
  selectedIndex.value = idx;
};

const moveToOtherEventPage = () => {
  router.push({ name: "eventOther" });
};
</script>

<template>
  <div class="flex flex-col text-xl text-text-color px-6 h-full">
    <div class="flex-1 flex flex-col pt-10 gap-4">
      <label class="block font-bold">어떤 조사인가요?</label>
      <div class="grid grid-cols-3 text-center gap-2 gap-y-3 text-lg">
        <CustomBoxComponent
          v-for="(sadEvent, index) in SAD_EVENT_DATA"
          :key="index"
          :text="sadEvent"
          @click="handleClickCustomBox(index)"
          :class="{
            'border-primary-color border-2 bg-select-box-color text-primary-color':
              selectedIndex === index,
          }"
        />
      </div>
      <h4
        class="text-center font-semibold text-sm text-bright-text-color"
        @click="moveToOtherEventPage()"
      >
        여기에 없으신가요?
      </h4>
    </div>
    <NextButttonComponent :handleClickNextButton="handleClickNextButton" />
  </div>
</template>

<style></style>
