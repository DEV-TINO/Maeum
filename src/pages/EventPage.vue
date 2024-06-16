<script setup>
import { ref } from "vue";
import CustomBoxComponent from "../components/CustomBoxComponent.vue";
import NextButttonComponent from "../components/NextButttonComponent.vue";
import { useRouter } from "vue-router";

const eventTypeData = ["경사", "조사", "기타"];
const router = useRouter();
const selectedIndex = ref(-1);

const handleClickCustomBox = (idx) => {
  selectedIndex.value = idx;
};

const handleClickNextButton = () => {
  if (selectedIndex.value === 0) {
    router.push({ name: "eventHappy" });
  } else if (selectedIndex.value === 1) {
    router.push({ name: "eventSad" });
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
        v-for="(eventType, index) in eventTypeData"
        :key="index"
        :text="eventType"
        class="text-left"
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
