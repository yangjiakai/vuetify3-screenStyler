<script setup lang="ts">
import { useCustomizeThemeStore } from "@/stores/customizeTheme";
const customizeTheme = useCustomizeThemeStore();
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
  background: url("https://w.wallhaven.cc/full/yx/wallhaven-yxxvox.png");
  background-size: cover;
}
</style>
