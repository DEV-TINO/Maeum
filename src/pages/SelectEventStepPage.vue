<script setup>
import { ref } from "vue";
import CustomBoxComponent from "../components/CustomBoxComponent.vue";
import NextButttonComponent from "../components/NextButttonComponent.vue";
import { useRouter } from "vue-router";
import { usePageStepStore } from "@/stores/store";

const eventTypeData = ["경사", "조사", "기타"];
const router = useRouter();
const pageStepStore = usePageStepStore();
const selectedIndex = ref(0);
const handleClickCustomBox = (idx) => {
  console.log(idx);
  selectedIndex.value = idx;
};
pageStepStore.updatePageStep(3);
const handleClickNextButton = () => {
  if (selectedIndex.value === 0) {
    router.push("/script/event/happy");
  } else if (selectedIndex.value === 1) {
    router.push("/script/event/sad");
  } else {
    router.push("/script/event/other");
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
      />
    </div>
    <NextButttonComponent :handleClickNextButton="handleClickNextButton" />
  </div>
</template>

<style></style>
