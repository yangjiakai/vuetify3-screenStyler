<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { useStylerStore } from "@/stores/stylerStore";
const stylerStore = useStylerStore();
const back = computed(() => stylerStore.currentBackground);
</script>

<template>
  <v-card class="wall-card" height="600" width="1000"> </v-card>
</template>

<style scoped lang="scss">
.wall-card {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: 50%;
  transform: translateY(-50%);
  background: v-bind(back);
  background-size: cover;
  background-position: center center;
}
</style>
