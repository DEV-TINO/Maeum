<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
  },
});
</script>
<template>
  <button
    class="bg-box-color h-12 rounded-xl px-4"
    :class="{
      'border-primary-color border-2 bg-select-box-color text-primary-color':
        isActive,
    }"
  >
    {{ text }}
  </button>
</template>
