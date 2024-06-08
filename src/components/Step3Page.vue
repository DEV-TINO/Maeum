<template>
  <div class="flex flex-col text-xl text-text-color px-6 h-full">
    <div class="flex-1 flex flex-col pt-10 gap-4">
      <label class="block font-bold">스크립트의 내용은 무엇인가요?</label>
      <CustomBoxComponent
        v-for="(item, index) in data"
        :key="index"
        :text="item"
        class="text-left"
        @click="handleClickBox(index)"
      />
    </div>
    <NextButttonComponent :handleClickNextButton="handleClickNextButton" />
  </div>
</template>

<script>
import { ref } from "vue";
import CustomBoxComponent from "./CustomBoxComponent.vue";
import NextButttonComponent from "./NextButttonComponent.vue";
import { useRouter } from "vue-router";
import { useStore } from "@/stores/store";

export default {
  components: { CustomBoxComponent, NextButttonComponent },
  setup() {
    const data = ref(["경사", "조사", "기타"]);
    const router = useRouter();
    const store = useStore();
    const selectedIndex = ref(0);
    const handleClickBox = (idx) => {
      console.log(idx);
      selectedIndex.value = idx;
    };
    store.updatePageStep(3);
    const handleClickNextButton = () => {
      router.push(`/step/3/${selectedIndex.value + 1}`);
    };
    return {
      data,
      handleClickNextButton,
      handleClickBox,
    };
  },
};
</script>

<style></style>
