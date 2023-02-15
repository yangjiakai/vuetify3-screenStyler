<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { useStylerStore } from "@/stores/stylerStore";
const stylerStore = useStylerStore();

const mainNav = ref([
  {
    icon: "mdi-image-outline",
    value: "wall",
    text: "wall",
    panel: "wall",
  },
  {
    icon: "mdi-widgets",
    value: "widgets",
    text: "widgets",
    panel: "widgets",
  },
  {
    icon: "mdi-star-outline",
    value: "icons",
    text: "icons",
    panel: "icons",
  },
  {
    icon: "mdi-laptop",
    value: "dock",
    text: "dock",
    panel: "dock",
  },
  {
    icon: "mdi-cog-outline",
    value: "options",
    text: "options",
    panel: "options",
  },
]);
</script>

<template>
  <v-navigation-drawer color="#171717" rail>
    <!-- ---------------------------------------------- -->
    <!---Top Area -->
    <!-- ---------------------------------------------- -->
    <template v-slot:prepend>
      <v-card color="#171717" height="200" variant="flat">
        <v-list-item
          class="mt-5"
          prepend-icon="mdi-widgets"
          value="widgets"
          to="/"
        >
          <v-tooltip
            activator="parent"
            location="right"
            text="widgets"
          ></v-tooltip>
        </v-list-item>
      </v-card>
    </template>
    <!-- ---------------------------------------------- -->
    <!---Main Nav -->
    <!-- ---------------------------------------------- -->
    <v-list>
      <v-list-item
        v-for="item in mainNav"
        :active="item.value === stylerStore.currentPanel"
        :key="item.value"
        :prepend-icon="item.icon"
        :value="item.value"
        @click="stylerStore.currentPanel = item.panel"
      >
        <v-tooltip
          activator="parent"
          location="right"
          class=""
          :text="item.text"
        ></v-tooltip>
      </v-list-item>
    </v-list>
    <!-- ---------------------------------------------- -->
    <!---Bottom Area -->
    <!-- ---------------------------------------------- -->
    <template v-slot:append>
      <v-list active-class="">
        <v-list-item
          prepend-icon="mdi-content-save-outline"
          value="save"
          to="/"
        >
          <v-tooltip
            activator="parent"
            location="right"
            text="save"
          ></v-tooltip>
        </v-list-item>
        <v-list-item prepend-icon="mdi-tray-arrow-down" value="download" to="/">
          <v-tooltip
            activator="parent"
            location="right"
            text="download"
          ></v-tooltip>
        </v-list-item>
        <v-list-item prepend-icon="mdi-check-circle" value="confirm" to="/">
          <v-tooltip
            activator="parent"
            location="right"
            text="confirm"
          ></v-tooltip>
        </v-list-item>
      </v-list>
    </template>
  </v-navigation-drawer>
</template>

<style scoped lang="scss"></style>
