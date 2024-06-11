<script setup>
const props = defineProps({
  handleClickNextButton: {
    type: Function,
    required: true,
  },
  text: {
    type: String,
  },
});
</script>
<template>
  <button
    @click="handleClickNextButton()"
    class="w-full h-12 my-11 bg-button-color text-white text-lg rounded-2xl font-bold"
  >
    {{ text == null ? "다음" : text }}
  </button>
</template>

<style></style>
