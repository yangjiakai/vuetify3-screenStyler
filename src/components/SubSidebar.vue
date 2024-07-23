<!--
* @Component: SubNav
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { useCustomizeThemeStore } from "@/stores/customizeTheme";
import { useLocale } from "vuetify";
import PanelWall from "@/components/panels/PanelWall.vue";
import PanelDock from "@/components/panels/PanelDock.vue";
import PanelOptions from "@/components/panels/PanelOptions.vue";
import PanelIcons from "@/components/panels/PanelIcons.vue";
import PanelWidgets from "@/components/panels/PanelWidgets.vue";
import { useStylerStore } from "@/stores/stylerStore";
import navData from "@/data/mainNav";
const stylerStore = useStylerStore();
const customizeTheme = useCustomizeThemeStore();
const { t } = useLocale();
const panel = ref([0, 1]);
const active = ref(false);
const contentRef = ref(null);
const itemHeight = ref("0px");
const togglePanel = () => {
  active.value = !active.value;
};

const icon = computed(() => {
  return active.value ? "mdi-chevron-up" : "mdi-chevron-down";
});

const currentPanelInfo = computed(() => {
  return navData.find((item) => item.value === stylerStore.currentPanel);
});
</script>

<template>
  <v-navigation-drawer
    class="sub-sidebar text-white"
    v-model="customizeTheme.subSidebar"
    width="340"
    color="rgba(40,40,40,.5)"
  >
    <!-- ---------------------------------------------- -->
    <!---Top Area -->
    <!-- ---------------------------------------------- -->
    <template v-slot:prepend>
      <v-card height="100" variant="flat" class="text-center py-5">
        <h4 class="text-h4 mb-1 font-weight-thin">
          {{ currentPanelInfo?.value }}
        </h4>
        <p class="">{{ currentPanelInfo?.subtitle }}</p>
      </v-card>
    </template>
    <!-- ---------------------------------------------- -->
    <!---Nav List -->
    <!-- ---------------------------------------------- -->
    <div>
      <perfect-scrollbar class="scrollnav px-2">
        <!-- ---------------------------------------------- -->
        <!---Wall Panel -->
        <!-- ---------------------------------------------- -->
        <PanelWall v-if="stylerStore.currentPanel === 'wall'" />
        <!-- ---------------------------------------------- -->
        <!---Widgets Panel -->
        <!-- ---------------------------------------------- -->
        <PanelWidgets v-else-if="stylerStore.currentPanel === 'widgets'" />
        <!-- ---------------------------------------------- -->
        <!---Icons Panel -->
        <!-- ---------------------------------------------- -->
        <PanelIcons v-else-if="stylerStore.currentPanel === 'icons'" />
        <!-- ---------------------------------------------- -->
        <!---Dock Panel -->
        <!-- ---------------------------------------------- -->
        <PanelDock v-else-if="stylerStore.currentPanel === 'dock'" />

        <!-- ---------------------------------------------- -->
        <!---Options Panel -->
        <!-- ---------------------------------------------- -->
        <PanelOptions v-else-if="stylerStore.currentPanel === 'options'" />
      </perfect-scrollbar>
    </div>
  </v-navigation-drawer>
</template>

<style scoped lang="scss">
.scrollnav {
  height: calc(100vh - 100px);
}
</style>
