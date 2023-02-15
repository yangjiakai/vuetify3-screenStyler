<!--
* @Component: SubNav
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { useCustomizeThemeStore } from "@/stores/customizeTheme";
import { useLocale } from "vuetify";
const customizeTheme = useCustomizeThemeStore();
const { t } = useLocale();
const channels = ref([
  {
    id: 1,
    title: "qa",
    icon: "mdi-forum",
    url: "/",
    active: true,
  },
  {
    id: 2,
    title: "grammarCorrection",
    icon: "mdi-text-box-check-outline",
    url: "/",
    active: false,
  },
  {
    id: 3,
    title: "translation",
    icon: "mdi-translate",
    url: "/",
    active: false,
  },
  {
    id: 4,
    title: "explainCode",
    icon: "mdi-code-less-than-or-equal",
    url: "/",
    active: false,
  },
  {
    id: 5,
    title: "sqlTranslate",
    icon: "mdi-database-search",
    url: "/",
    active: false,
  },
]);

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
        <v-expansion-panels v-model="panel" class="mt-5" multiple>
          <v-expansion-panel>
            <v-expansion-panel-title>Panel 1</v-expansion-panel-title>
            <v-expansion-panel-text>
              <h1 v-for="i in 10">asdasd</h1>
            </v-expansion-panel-text>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-title>Panel 2</v-expansion-panel-title>
            <v-expansion-panel-text> Some content </v-expansion-panel-text>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-title>Panel 3</v-expansion-panel-title>
            <v-expansion-panel-text> Some content </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </perfect-scrollbar>
    </div>
  </v-navigation-drawer>
</template>

<style scoped lang="scss">
.scrollnav {
  height: calc(100vh - 100px);
}

.v-expansion-panel {
  background-color: rgba(0, 0, 0, 0.4);
  box-shadow: rgba(0, 0, 0, 0.3) 2px 4px 8px,
    rgba(155, 155, 155, 0.1) -1px -1px 1px 1px;
  border-radius: 5px;
  margin-bottom: 10px;
  color: white;
  .v-expansion-panel-header {
    height: 40px;
    line-height: 40px;
    padding: 0 10px;
    .v-expansion-panel-header__icon {
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .v-expansion-panel-content {
    padding: 0 10px;
  }
}
</style>
