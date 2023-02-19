<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { useStylerStore } from "@/stores/stylerStore";
import { getTopicPhotosApi } from "@/api/unsplashApi";
import type { Photo } from "@/types/unsplashTypes";

const wallpapers = ref<Photo[]>([]);
const stylerStore = useStylerStore();
const getWallpapers = async () => {
  const res = await getTopicPhotosApi("wallpapers", { per_page: 30 });
  wallpapers.value = res.data;
};

onMounted(() => {
  getWallpapers();
});

const changeBg = (photo: Photo) => {
  currentPhoto.value = photo;
  stylerStore.currentBackground = `url(${photo.urls.full})`;
};

const currentPhoto = ref<Photo>();
</script>

<template>
  <perfect-scrollbar class="d-flex flex-wrap wallpaper-panel">
    <v-img
      width="42"
      height="42"
      cover
      class="ma-1 wallpaper-card"
      :class="currentPhoto?.id === wallpapper.id ? 'active-card' : ''"
      v-for="wallpapper in wallpapers"
      :key="wallpapper.id"
      :src="wallpapper.urls.thumb"
      @click="changeBg(wallpapper)"
    ></v-img>
  </perfect-scrollbar>
  <v-btn class="mt-3" color="gray" block>More Wallpapers</v-btn>
</template>

<style scoped lang="scss">
.wallpaper-panel {
  max-height: 500px;
}

.wallpaper-card {
  cursor: pointer;
  border-radius: 10px;
}

.active-card {
  border: 2px solid #eee;
}
</style>
