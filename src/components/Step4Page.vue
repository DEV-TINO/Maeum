<template>
  <div class="flex flex-col text-xl text-text-color px-6 h-full">
    <div class="flex-1 flex flex-col pt-10 gap-4">
      <label class="block font-bold">몇 분 정도의 스크립트를 원하시나요?</label>
      <CustomBoxComponent
        class="text-left"
        v-for="(item, index) in data"
        :key="index"
        :text="item"
      />
    </div>
    <NextButttonComponent :handleClickNextButton="handleClickNextButton" />
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import CustomBoxComponent from "./CustomBoxComponent.vue";
import NextButttonComponent from "./NextButttonComponent.vue";
import { useStore } from "@/stores/store";
export default {
  setup() {
    const router = useRouter();
    const store = useStore();
    store.updatePageStep(4);
    const data = ["1분", "3분", "5분", "7분", "10분"];
    const handleClickNextButton = () => {
      router.push("/step/5");
    };

    return { handleClickNextButton, data };
  },
  components: { CustomBoxComponent, NextButttonComponent },
};
</script>
<style></style>
