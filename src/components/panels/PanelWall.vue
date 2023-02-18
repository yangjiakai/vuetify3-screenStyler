<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { gradients } from "@/data/gradients";
import ColorSetting from "@/components/wall/ColorSetting.vue";
import GradientSetting from "@/components/wall/GradientSetting.vue";
import UnsplshWalPaperSetting from "@/components/wall/UnsplshWalPaperSetting.vue";
import WallpaperHeavenSetting from "@/components/wall/WallpaperHeavenSetting.vue";

const panel = ref([0, 1]);
console.log(gradients);
</script>

<template>
  <v-expansion-panels v-model="panel" class="mt-5" multiple>
    <!-- ---------------------------------------------- -->
    <!---ColorSetting -->
    <!-- ---------------------------------------------- -->
    <v-expansion-panel>
      <v-expansion-panel-title>Solid Color</v-expansion-panel-title>
      <v-expansion-panel-text><ColorSetting /> </v-expansion-panel-text>
    </v-expansion-panel>
    <!-- ---------------------------------------------- -->
    <!---GradientSetting -->
    <!-- ---------------------------------------------- -->

    <v-expansion-panel>
      <v-expansion-panel-title>Gradient</v-expansion-panel-title>
      <v-expansion-panel-text>
        <GradientSetting />
      </v-expansion-panel-text>
    </v-expansion-panel>
    <v-expansion-panel>
      <v-expansion-panel-title>Unsplash Wallpapers</v-expansion-panel-title>
      <v-expansion-panel-text>
        <UnsplshWalPaperSetting />
      </v-expansion-panel-text>
    </v-expansion-panel>
    <!-- <v-expansion-panel>
      <v-expansion-panel-title>WallHeaven Wallpapers</v-expansion-panel-title>
      <v-expansion-panel-text
        ><WallpaperHeavenSetting
      /></v-expansion-panel-text>
    </v-expansion-panel> -->
    <v-expansion-panel>
      <v-expansion-panel-title>Layered</v-expansion-panel-title>
      <v-expansion-panel-text> Some content </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<style scoped lang="scss"></style>
