<template>
  <button class="bg-box-color h-12 rounded-xl px-4">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
