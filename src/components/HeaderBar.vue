<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const handleClickMoveToStep1 = () => {
  router.go(-1);
};
</script>
<template>
  <div class="mt-8 px-2 flex flex-row w-full">
    <img
      src="/public/images/header-previous.png"
      @click="handleClickMoveToStep1()"
    />
    <div class="flex-1"></div>
  </div>
</template>

<style></style>
