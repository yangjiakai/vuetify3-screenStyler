<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { searchWallpaperApi } from "@/api/wallhavenApi";
import type { Photo } from "@/types/unsplashTypes";

const wallpapers = ref<any[]>([]);
const getWallpapers = async () => {
  const res = await searchWallpaperApi({ sorting: "topList" });
  wallpapers.value = res.data;
};

onMounted(() => {
  getWallpapers();
});

const changeBg = (gradient: string) => {};
</script>

<template>
  <perfect-scrollbar class="d-flex flex-wrap gradient-panel">
    <v-img
      width="42"
      height="42"
      cover
      class="ma-1"
      v-for="wallpapper in wallpapers"
      :key="wallpapper.id"
      :src="wallpapper.thumbs.small"
    ></v-img>

    <!-- <v-card
      width="42"
      height="42"
      class="ma-1"
      v-for="wallpapper in wallpapers"
      :key="wallpapper.id"
      :style="`background: url(${wallpapper.urls.regular})}`"
      @click="changeBg(wallpapper.urls.regular)"
    >
    </v-card> -->
  </perfect-scrollbar>
</template>

<style scoped lang="scss">
.gradient-panel {
  // height: 500px;
}
</style>
