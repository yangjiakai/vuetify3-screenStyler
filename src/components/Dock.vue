<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
// 返回可用图标集的列表。
import { listCollcetionsApi, getCollcetionIconsApi } from "@/api/iconifyApi";
import { Icon } from "@iconify/vue";

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
const color = ref("#cc0");

const dockStyles = reactive({
  backgroundColor: "#cc0",
  backgroundAlpha: 1.0,
  bottom: "400px",
  color: "#cc0",
  iconSize: 30,
});

const backgroundColor = computed(
  () => `rgba(${dockStyles.backgroundColor}, ${dockStyles.backgroundAlpha})`
);

const bgC = ref("#ccc");
getIcons();
</script>

<template>
  <div class="dock">
    <h1>title</h1>
    <Icon
      v-for="icon in icons"
      :icon="prefix + ':' + icon"
      width="100"
      class="mr-3"
    />
  </div>
</template>

<style scoped lang="scss">
.dock {
  position: fixed;
  bottom: 200px;
  right: v-bind(bottom);
  background-color: v-bind(backgroundColor);
  h1 {
    color: v-bind(color);
  }
}
</style>
