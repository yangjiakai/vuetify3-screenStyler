<!--
* @Component: SubNav
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { useCustomizeThemeStore } from "@/stores/customizeTheme";
import { useLocale } from "vuetify";
import PanelWall from "@/components/panels/panelWall.vue";
import { useStylerStore } from "@/stores/stylerStore";
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
</script>

<template>
  <v-navigation-drawer
    class="sub-sidebar text-white"
    v-model="customizeTheme.subSidebar"
    width="300"
    color="rgba(40,40,40,.5)"
  >
    <!-- ---------------------------------------------- -->
    <!---Top Area -->
    <!-- ---------------------------------------------- -->
    <template v-slot:prepend>
      <v-card
        height="100"
        variant="flat"
        color="transparent"
        class="text-center py-5"
      >
        <h4 class="text-h4 mb-1 font-weight-thin">WALL</h4>
        <p class="">Desktop background</p>
      </v-card>
    </template>
    <!-- ---------------------------------------------- -->
    <!---Nav List -->
    <!-- ---------------------------------------------- -->
    <div>
      <perfect-scrollbar class="scrollnav px-5">
        <!-- ---------------------------------------------- -->
        <!---Wall Panel -->
        <!-- ---------------------------------------------- -->
        <PanelWall v-if="stylerStore.currentPanel === 'wall'" />
        <!-- ---------------------------------------------- -->
        <!---Widgets Panel -->
        <!-- ---------------------------------------------- -->

        <!-- ---------------------------------------------- -->
        <!---Icons Panel -->
        <!-- ---------------------------------------------- -->

        <!-- ---------------------------------------------- -->
        <!---Dock Panel -->
        <!-- ---------------------------------------------- -->

        <!-- ---------------------------------------------- -->
        <!---Options Panel -->
        <!-- ---------------------------------------------- -->
      </perfect-scrollbar>
    </div>
  </v-navigation-drawer>
</template>

<style scoped lang="scss">
.scrollnav {
  height: calc(100vh - 100px);
}
</style>
