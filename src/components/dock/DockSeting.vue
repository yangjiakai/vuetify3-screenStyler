<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { useStylerStore } from "@/stores/stylerStore";
const stylerStore = useStylerStore();
const sizeList = ref([32, 48, 64, 72, 96]);
const color = ref({ r: 255, g: 0, b: 255, a: 1 });
// const size = ref(32);
</script>

<template>
  <div class="">
    <!-- ---------------------------------------------- -->
    <!---Use the Dock -->
    <!-- ---------------------------------------------- -->
    <h1>Use the Dock</h1>
    <v-switch
      color="error"
      v-model="stylerStore.dock.isShow"
      hide-details
      inset
    ></v-switch>
    <v-divider></v-divider>
    <!-- ---------------------------------------------- -->
    <!---Separator -->
    <!-- ---------------------------------------------- -->
    <v-btn block color="success">Add Separator</v-btn>
    <!-- ---------------------------------------------- -->
    <!---Dock Positon -->
    <!-- ---------------------------------------------- -->
    <h1>Dock Position</h1>
    <v-btn-toggle
      v-model="stylerStore.dock.position"
      variant="outlined"
      divided
    >
      <v-btn size="small">
        <v-icon icon="mdi-menu-down"></v-icon>
      </v-btn>

      <v-btn size="small">
        <v-icon icon="mdi-menu-up"></v-icon>
      </v-btn>

      <v-btn size="small">
        <v-icon icon="mdi-menu-left"></v-icon>
      </v-btn>
      <v-btn size="small">
        <v-icon icon="mdi-menu-right"></v-icon>
      </v-btn>
    </v-btn-toggle>
    <v-divider></v-divider>
    <!-- ---------------------------------------------- -->
    <!---Dock Size -->
    <!-- ---------------------------------------------- -->
    <h1>Dock Size</h1>
    <v-btn-toggle variant="outlined" divided theme="dark">
      <v-btn
        size="small"
        v-for="size in sizeList"
        @click="stylerStore.dock.size = size"
      >
        {{ size }}
      </v-btn>
    </v-btn-toggle>
    <v-range-slider thumb-label="always"></v-range-slider>
    <v-divider></v-divider>
    <!-- ---------------------------------------------- -->
    <!---Dock Style -->
    <!-- ---------------------------------------------- -->
    <h1>Dock Style</h1>
    <v-divider></v-divider>
    <v-color-picker
      v-model="stylerStore.dock.backgroudColor"
      hide-inputs
      show-swatches
    ></v-color-picker>
  </div>
</template>

<style scoped lang="scss"></style>
