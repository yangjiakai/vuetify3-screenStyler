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
const prefix = ref("vscode-icons");
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
  <perfect-scrollbar class="webicons-panel">
    <Icon
      v-for="icon in icons"
      :icon="prefix + ':' + icon"
      :width="46"
      class="ma-2 bg-white rounded"
      @click="addTo(icon)"
    />
  </perfect-scrollbar>
</template>

<style scoped lang="scss">
.webicons-panel {
  max-height: 500px;
}
</style>
