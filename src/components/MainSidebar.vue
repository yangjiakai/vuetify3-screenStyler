<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { useStylerStore } from "@/stores/stylerStore";
import { Icon } from "@iconify/vue";
import navData from "@/data/mainNav";
const stylerStore = useStylerStore();
const mainNav = ref(navData);
</script>

<template>
  <v-navigation-drawer color="#1e1f22" rail>
    <!-- ---------------------------------------------- -->
    <!---Top Area -->
    <!-- ---------------------------------------------- -->
    <template v-slot:prepend>
      <v-card color="#1e1f22" height="200" variant="flat">
        <v-list-item class="mt-5" value="widgets" to="/">
          <Icon width="26" icon="vscode-icons:file-type-c-al" />
          <v-tooltip
            activator="parent"
            location="right"
            text="Vuetify3-Styler"
            theme="light"
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
          theme="light"
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
            theme="light"
          ></v-tooltip>
        </v-list-item>
        <v-list-item prepend-icon="mdi-tray-arrow-down" value="download" to="/">
          <v-tooltip
            activator="parent"
            location="right"
            text="download"
            theme="light"
          ></v-tooltip>
        </v-list-item>
        <v-list-item prepend-icon="mdi-check-circle" value="confirm" to="/">
          <v-tooltip
            activator="parent"
            location="right"
            text="confirm"
            theme="light"
          ></v-tooltip>
        </v-list-item>
      </v-list>
    </template>
  </v-navigation-drawer>
</template>

<style scoped lang="scss"></style>
