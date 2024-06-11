<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <button class="bg-box-color h-12 rounded-xl px-4">
    {{ text }}
  </button>
</template>
