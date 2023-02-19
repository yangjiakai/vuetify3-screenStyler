<script setup lang="ts">
import { useStylerStore } from "@/stores/stylerStore";
const stylerStore = useStylerStore();
const back = computed(() => stylerStore.currentBackground);
</script>

<template>
  <v-app id="app" theme="dark">
    <router-view> </router-view>
    <!-- <AppBar /> -->
    <v-main> </v-main>
  </v-app>
</template>

<style scoped>
#app {
  /* background: url("https://w.wallhaven.cc/full/yx/wallhaven-yxxvox.png"); */
  background: v-bind(back);
  background-size: cover;
  background-position: center center;
}
</style>
