<script setup>
import { ref } from "vue";
import CustomBoxComponent from "../components/CustomBoxComponent.vue";
import NextButttonComponent from "../components/NextButttonComponent.vue";
import { useRouter } from "vue-router";
import { usePageStepStore } from "@/stores/store";

const EVENT_TYPE_DATA = ["경사", "조사", "기타"];
const router = useRouter();
const selectedIndex = ref(-1);
const { saveScriptData } = usePageStepStore();

const handleClickCustomBox = (idx) => {
  selectedIndex.value = idx;
};

const handleClickNextButton = () => {
  if (selectedIndex.value === 0) {
    router.push({ name: "eventHappy" });
    saveScriptData("eventType", "경사");
  } else if (selectedIndex.value === 1) {
    router.push({ name: "eventSad" });
    saveScriptData("eventType", "조사");
  } else if (selectedIndex.value === 2) {
    router.push({ name: "eventOther" });
  }
};
</script>
<template>
  <div class="flex flex-col text-xl text-text-color px-6 h-full">
    <div class="flex-1 flex flex-col pt-10 gap-4">
      <label class="block font-bold">스크립트의 내용은 무엇인가요?</label>
      <CustomBoxComponent
        v-for="(eventType, index) in EVENT_TYPE_DATA"
        :key="index"
        :text="eventType"
        class="text-left"
        @click="handleClickCustomBox(index)"
        :isActive="selectedIndex === index"
      />
    </div>
    <NextButttonComponent :handleClickNextButton="handleClickNextButton" />
  </div>
</template>

<style></style>
