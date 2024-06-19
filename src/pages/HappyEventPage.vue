<script setup>
import { ref } from "vue";
import CustomBoxComponent from "../components/CustomBoxComponent.vue";
import NextButttonComponent from "../components/NextButttonComponent.vue";
import { usePageStepStore } from "@/stores/store";
import { useRouter } from "vue-router";

const router = useRouter();
const pageStepStore = usePageStepStore();
const HAPPY_EVENT_DATA = [
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
const selectedIndex = ref(-1);

const handleClickNextButton = () => {
  if (selectedIndex.value === -1) return;

  pageStepStore.saveScriptData(["경사", HAPPY_EVENT_DATA[selectedIndex.value]]);
  pageStepStore.handleClickNextButton();
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
      <label class="block font-bold">어떤 경사인가요?</label>
      <div class="grid grid-cols-3 text-center gap-2 gap-y-3 text-lg">
        <CustomBoxComponent
          v-for="(happyEvent, index) in HAPPY_EVENT_DATA"
          :key="index"
          :text="happyEvent"
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
