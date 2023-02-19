<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { useStylerStore } from "@/stores/stylerStore";
const stylerStore = useStylerStore();

const solidColors = ref([
  "#02577A",
  "#09A4EC",
  "#89D6FB",
  "#D4F0FC",
  "#332B40",
  "#074B63",
  "#018B73",
  "#8CB303",
  "#E6DD00",
  "#F9C004",
  "#FF5733",
  "#BD0A3E",
  "#8B1643",
  "#571E48",
]);

const changeColor = (color: string) => {
  stylerStore.currentBackground = color;
};
</script>

<template>
  <div class="d-flex flex-wrap">
    <v-card
      width="42"
      height="42"
      class="ma-1"
      v-for="color in solidColors"
      :key="color"
      :color="color"
      @click="changeColor(color)"
    >
    </v-card>
  </div>
</template>

<style scoped lang="scss"></style>
