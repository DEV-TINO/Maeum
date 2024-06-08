<template>
  <div class="flex flex-col text-xl text-text-color px-6 h-full">
    <div class="flex-1 flex flex-col pt-10 gap-4">
      <label class="block font-bold">상대방과 얼마나 친하시나요?</label>
      <div class="grid grid-cols-3 text-center gap-2 gap-y-3 text-lg">
        <CustomBoxComponent
          v-for="(item, index) in data"
          :key="index"
          :text="item"
        />
      </div>
    </div>
    <NextButttonComponent :handleClickNextButton="handleClickNextButton" />
  </div>
</template>

<script>
import { useStore } from "@/stores/store";
import CustomBoxComponent from "./CustomBoxComponent.vue";
import NextButttonComponent from "./NextButttonComponent.vue";
import router from "@/router/router";

export default {
  components: { CustomBoxComponent, NextButttonComponent },
  setup() {
    const data = ["아주 많이", "많이", "보통", "조금", "아주 조금", "안친함"];
    const store = useStore();
    store.updatePageStep(5);
    const handleClickNextButton = () => {
      router.push("/step/6");
    };
    return {
      data,
      handleClickNextButton,
    };
  },
};
</script>

<style></style>
