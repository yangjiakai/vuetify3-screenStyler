<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { gradients } from "@/data/gradients";
const changeBgColor = (gradient: any) => {};
</script>

<template>
  <perfect-scrollbar class="d-flex flex-wrap gradient-panel">
    <v-card
      width="42"
      height="42"
      class="ma-1"
      v-for="gradient in gradients"
      :key="gradient.name"
      :style="`background: linear-gradient(${gradient.colors[0]}, ${gradient.colors[1]}`"
      @click="changeBgColor(gradient)"
    >
    </v-card>
  </perfect-scrollbar>
</template>

<style scoped lang="scss">
.gradient-panel {
  height: 500px;
}
</style>
