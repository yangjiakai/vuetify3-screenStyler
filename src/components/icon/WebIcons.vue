<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { getCollcetionIconsApi } from "@/api/iconifyApi";
import { Icon } from "@iconify/vue";
import { useStylerStore } from "@/stores/stylerStore";
const stylerStore = useStylerStore();

const icons = ref([]);
const prefix = ref("skill-icons");
const getIcons = async () => {
  const res = await getCollcetionIconsApi(prefix.value);
  icons.value = res.data.uncategorized;
};

const target = ref("dock");
const addTo = (icon: string) => {
  if (target.value === "dock") {
    stylerStore.dockItems.push(icon);
  }
};

getIcons();
</script>

<template>
  <div class="">
    <Icon
      v-for="icon in icons"
      :icon="prefix + ':' + icon"
      :width="46"
      class="ma-2"
      @click="addTo(icon)"
    />
  </div>
</template>

<style scoped lang="scss"></style>
