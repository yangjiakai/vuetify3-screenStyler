<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { useStylerStore } from "@/stores/stylerStore";
const stylerStore = useStylerStore();
const sizeList = ref([32, 48, 64, 72, 96]);
const positionList = ref([
  { name: "top", icon: "mdi-menu-up" },
  { name: "bottom", icon: "mdi-menu-down" },
  { name: "left", icon: "mdi-menu-left" },
  { name: "right", icon: "mdi-menu-right" },
]);
</script>

<template>
  <div class="">
    <!-- ---------------------------------------------- -->
    <!---Use the Dock -->
    <!-- ---------------------------------------------- -->
    <h1 class="text-h6">Use the Dock</h1>
    <v-switch
      color="white"
      v-model="stylerStore.dock.isShow"
      hide-details
      :label="stylerStore.dock.isShow ? 'Use' : 'Close'"
      inset
    ></v-switch>
    <v-divider class="mb-5"></v-divider>
    <!-- ---------------------------------------------- -->
    <!---Separator -->
    <!-- ---------------------------------------------- -->
    <v-btn
      color="grey"
      class="my-5"
      block
      @click="stylerStore.dockItems.push('divider')"
      >Add Separator</v-btn
    >
    <v-divider class="my-5"></v-divider>
    <!-- ---------------------------------------------- -->
    <!---Dock Positon -->
    <!-- ---------------------------------------------- -->
    <h1 class="text-h6">Dock Position</h1>
    <div class="my-5 d-flex justify-center">
      <v-btn-toggle
        v-model="stylerStore.dock.position"
        variant="outlined"
        divided
      >
        <v-btn
          v-for="position in positionList"
          :key="position.name"
          @click="stylerStore.dock.position = position.name"
          size="small"
          width="60"
        >
          <v-icon :icon="position.icon"></v-icon>
        </v-btn>
      </v-btn-toggle>
    </div>

    <v-slider
      v-model="stylerStore.dock.distance"
      max="300"
      min="60"
      step="40"
      show-ticks="always"
      hide-details
    ></v-slider>

    <v-divider class="my-5"></v-divider>
    <!-- ---------------------------------------------- -->
    <!---Dock Size -->
    <!-- ---------------------------------------------- -->
    <h1 class="text-h6">Dock Size</h1>
    <v-btn-toggle class="my-5" variant="outlined" divided theme="dark">
      <v-btn
        size="small"
        v-for="size in sizeList"
        @click="stylerStore.dock.size = size"
      >
        {{ size }}
      </v-btn>
    </v-btn-toggle>
    <v-slider v-model="stylerStore.dock.size"></v-slider>
    <v-divider class="mb-5"></v-divider>
    <!-- ---------------------------------------------- -->
    <!---Dock Style -->
    <!-- ---------------------------------------------- -->
    <h1 class="text-h6">Dock Style</h1>
    <v-color-picker
      class="my-5"
      v-model="stylerStore.dock.backgroudColor"
      hide-inputs
      show-swatches
    ></v-color-picker>
  </div>
</template>

<style scoped lang="scss"></style>
