<script setup>
import HeaderBar from "./HeaderBar.vue";
import ProgressBar from "./ProgressBar.vue";
</script>
<template>
  <div class="flex flex-col justify-center items-center h-full">
    <HeaderBar />
    <ProgressBar />
    <div class="flex-1 w-full h-full">
      <router-view></router-view>
    </div>
  </div>
</template>

<style></style>
