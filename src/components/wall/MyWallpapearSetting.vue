<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { useStylerStore } from "@/stores/stylerStore";

const wallpapers = ref<string[]>([]);
const stylerStore = useStylerStore();
const getWallpapers = async () => {
  wallpapers.value = [
    "https://images.unsplash.com/photo-1513346940221-6f673d962e97?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://firebasestorage.googleapis.com/v0/b/wallingapp.appspot.com/o/attachments%2Fh1BtWGEdBSCDddNvsXE2sunucN2KsJJqhj6Vg9Q8jE3OTinqfd.png?alt=media",
  ];
};

onMounted(() => {
  getWallpapers();
});

const changeBg = (photo: string) => {
  currentPhoto.value = photo;
  stylerStore.currentBackground = `url(${photo})`;
};

const currentPhoto = ref<string>("");
</script>

<template>
  <perfect-scrollbar class="d-flex flex-wrap wallpaper-panel">
    <v-img
      width="42"
      height="42"
      cover
      v-for="wallpapper in wallpapers"
      class="ma-1 wallpaper-card"
      :class="currentPhoto === wallpapper ? 'active-card' : ''"
      :key="wallpapper"
      :src="wallpapper"
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
