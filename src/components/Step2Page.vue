<template>
  <div class="flex flex-col text-xl text-text-color px-6 h-full">
    <div class="flex-1 flex flex-col pt-10 gap-4">
      <label class="block font-bold">스크립트를 받을 사람의 이름은?</label>
      <CustomInputComponent />
    </div>
    <NextButttonComponent :handleClickNextButton="handleClickNextButton" />
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import CustomInputComponent from "./CustomInputComponent.vue";
import NextButttonComponent from "./NextButttonComponent.vue";
import { useStore } from "@/stores/store";
export default {
  setup() {
    const router = useRouter();
    const store = useStore();
    store.updatePageStep(2);
    const handleClickNextButton = () => {
      router.push("/step/3");
    };
    return { handleClickNextButton };
  },
  components: { CustomInputComponent, NextButttonComponent },
};
</script>
<style></style>
