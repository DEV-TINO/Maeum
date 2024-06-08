<template>
  <div class="flex flex-col justify-center items-center h-full">
    <HeaderBar />
    <ProgressBar />
    <div class="flex-1 w-full h-full">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HeaderBar from "./HeaderBar.vue";
import ProgressBar from "./ProgressBar.vue";

export default {
  components: {
    HeaderBar,
    ProgressBar,
  },
};
</script>

<style></style>
