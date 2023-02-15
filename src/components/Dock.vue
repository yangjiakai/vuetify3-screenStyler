<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
// 返回可用图标集的列表。
import { listCollcetionsApi, getCollcetionIconsApi } from "@/api/iconifyApi";
import { Icon } from "@iconify/vue";
import { useStylerStore } from "@/stores/stylerStore";
const stylerStore = useStylerStore();

const icons = ref([]);
const prefix = ref("skill-icons");

const getIcons = async () => {
  const res = await getCollcetionIconsApi(prefix.value);
  icons.value = res.data.uncategorized.slice(0, 10);
  console.log(icons.value);
};

const bgColor = ref("#000000");
const alpah = ref(1.0);
const bottom = ref("400px");

const backgroundColor = computed(
  () =>
    `rgba(${stylerStore.dock.backgroudColor.r}, ${stylerStore.dock.backgroudColor.g}, ${stylerStore.dock.backgroudColor.b}, ${stylerStore.dock.backgroudColor.a})`
);

const bgC = ref("#ccc");
getIcons();
</script>

<template>
  <div v-if="stylerStore.dock.isShow" class="dock">
    <Icon
      v-for="icon in icons"
      :icon="prefix + ':' + icon"
      :width="stylerStore.dock.size"
      class="mr-3"
    />
  </div>
</template>

<style scoped lang="scss">
.dock {
  position: fixed;
  padding: 10px;
  border-radius: 10px;
  bottom: 200px;
  right: v-bind(bottom);
  background-color: v-bind(backgroundColor);
}
</style>
