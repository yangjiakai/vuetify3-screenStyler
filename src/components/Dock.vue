<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
// 返回可用图标集的列表。
import { getCollcetionIconsApi } from "@/api/iconifyApi";
import { Icon } from "@iconify/vue";
import { useStylerStore } from "@/stores/stylerStore";
const stylerStore = useStylerStore();

const icons = ref([]);
const prefix = ref("skill-icons");

const getIcons = async () => {
  const res = await getCollcetionIconsApi(prefix.value);
  stylerStore.dockItems = res.data.uncategorized.slice(0, 10);
  console.log(icons.value);
};

const backgroundColor = computed(
  () =>
    `rgba(${stylerStore.dock.backgroudColor.r}, ${stylerStore.dock.backgroudColor.g}, ${stylerStore.dock.backgroudColor.b}, ${stylerStore.dock.backgroudColor.a})`
);

const distance = computed(() => stylerStore.dock.distance + "px");
const isVertical = computed(
  () =>
    stylerStore.dock.position === "top" ||
    stylerStore.dock.position === "bottom"
);
getIcons();
</script>

<template>
  <div
    v-if="stylerStore.dock.isShow"
    class="dock"
    :class="stylerStore.dock.position"
  >
    <template v-for="icon in stylerStore.dockItems" :key="icon">
      <v-divider
        :class="isVertical ? 'mx-3' : 'my-3'"
        v-if="icon === 'divider'"
        :vertical="isVertical"
        color="red"
        width="100%"
      ></v-divider>
      <Icon
        v-else
        :icon="prefix + ':' + icon"
        :width="stylerStore.dock.size"
        class="ma-2"
      />
    </template>
    <!-- <Icon
      v-for="icon in stylerStore.dockItems"
      :icon="prefix + ':' + icon"
      :width="stylerStore.dock.size"
      class="ma-2"
    /> -->
  </div>
</template>

<style scoped lang="scss">
.dock {
  position: fixed;
  display: flex;
  align-items: center;
  border-radius: 10px;
  transform: translateX(-50%);
  background-color: v-bind(backgroundColor);
}

.top {
  top: v-bind(distance);
  left: 50%;
  transform: translateX(-50%);
}

.bottom {
  left: 50%;
  bottom: v-bind(distance);
  transform: translateX(-50%);
}

.left {
  left: v-bind(distance);
  top: 50%;
  transform: translateY(-50%);
  flex-direction: column;
}

.right {
  top: 50%;
  right: v-bind(distance);
  transform: translateY(-50%);
  flex-direction: column;
}
</style>
