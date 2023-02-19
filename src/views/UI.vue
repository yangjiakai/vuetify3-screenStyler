<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { useCustomizeThemeStore } from "@/stores/customizeTheme";
import MainSidebar from "@/components/MainSidebar.vue";
import SubSidebar from "@/components/SubSidebar.vue";
import AppBar from "@/components/AppBar.vue";
import TempSidebar from "@/components/TempSidebar.vue";
import CustomizationMenu from "@/components/CustomizationMenu.vue";
import Dock from "@/components/Dock.vue";
import WallCard from "@/components/WallCard.vue";
</script>

<template>
  <!-- ---------------------------------------------- -->
  <!---Main Sidebar -->
  <!-- ---------------------------------------------- -->
  <MainSidebar />
  <!-- ---------------------------------------------- -->
  <!---Sub Sidebar -->
  <!-- ---------------------------------------------- -->
  <SubSidebar />
  <!-- ---------------------------------------------- -->
  <!---AppBar -->
  <!-- ---------------------------------------------- -->
  <AppBar />

  <!-- ---------------------------------------------- -->
  <!---TempSidebar -->
  <!-- ---------------------------------------------- -->

  <!-- <TempSidebar /> -->

  <!-- ---------------------------------------------- -->
  <!---Main -->
  <!-- ---------------------------------------------- -->
  <v-main>
    <RouterView />
  </v-main>
  <!-- ---------------------------------------------- -->
  <!---CustomizationMenu -->
  <!-- ---------------------------------------------- -->

  <!---Dock -->
  <!-- ---------------------------------------------- -->
  <Dock />
  <!-- ---------------------------------------------- -->
  <!---WallCard -->
  <!-- ---------------------------------------------- -->
  <!-- <WallCard /> -->
</template>

<style scoped lang="scss">
.scrollnav {
  height: calc(100vh - 60px);
}
</style>
