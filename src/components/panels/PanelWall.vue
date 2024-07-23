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
import MyWallpapearSetting from "@/components/wall/MyWallpapearSetting.vue";
const panel = ref([0, 1]);
console.log(gradients);
</script>

<template>
  <v-expansion-panels v-model="panel" class="mt-5" multiple>
    <!-- ---------------------------------------------- -->
    <!---ColorSetting -->
    <!-- ---------------------------------------------- -->
    <v-expansion-panel>
      <v-expansion-panel-title class="font-weight-bold"
        >Solid Color</v-expansion-panel-title
      >
      <v-expansion-panel-text><ColorSetting /> </v-expansion-panel-text>
    </v-expansion-panel>
    <!-- ---------------------------------------------- -->
    <!---GradientSetting -->
    <!-- ---------------------------------------------- -->

    <v-expansion-panel>
      <v-expansion-panel-title class="font-weight-bold"
        >Gradient</v-expansion-panel-title
      >
      <v-expansion-panel-text>
        <GradientSetting />
      </v-expansion-panel-text>
    </v-expansion-panel>
    <v-expansion-panel>
      <v-expansion-panel-title class="font-weight-bold"
        >Unsplash Wallpapers</v-expansion-panel-title
      >
      <v-expansion-panel-text>
        <UnsplshWalPaperSetting />
      </v-expansion-panel-text>
    </v-expansion-panel>
    <!-- <v-expansion-panel>
      <v-expansion-panel-title class="font-weight-bold">WallHeaven Wallpapers</v-expansion-panel-title>
      <v-expansion-panel-text
        ><WallpaperHeavenSetting
      /></v-expansion-panel-text>
    </v-expansion-panel> -->
    <v-expansion-panel>
      <v-expansion-panel-title class="font-weight-bold"
        >My Wallpapersc</v-expansion-panel-title
      >
      <v-expansion-panel-text>
        <MyWallpapearSetting> </MyWallpapearSetting>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<style scoped lang="scss"></style>
