<template>
  <div class="mt-8 px-2 flex flex-row w-full">
    <img
      src="/public/images/header-previous.png"
      @click="handleClickMoveToStep1"
    />
    <div class="flex-1"></div>
  </div>
</template>

<script>
export default {
  methods: {
    handleClickMoveToStep1() {
      this.$router.go(-1);
    },
  },
};
</script>

<style></style>
