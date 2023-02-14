<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts"></script>

<template>
  <v-navigation-drawer theme="dark" color="#171717" rail>
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
    <!---Nav -->
    <!-- ---------------------------------------------- -->
    <v-list>
      <v-list-item prepend-icon="mdi-image-outline" value="wall" to="/">
        <v-tooltip
          activator="parent"
          location="right"
          class=""
          text="wall"
        ></v-tooltip>
      </v-list-item>
      <v-list-item prepend-icon="mdi-widgets" value="widgets" to="/">
        <v-tooltip
          activator="parent"
          location="right"
          text="widgets"
        ></v-tooltip>
      </v-list-item>
      <v-list-item prepend-icon="mdi-star-outline" value="icons" to="/">
        <v-tooltip activator="parent" location="right" text="icons"></v-tooltip>
      </v-list-item>
      <v-list-item prepend-icon="mdi-laptop" value="dock" to="/">
        <v-tooltip activator="parent" location="right" text="dock"></v-tooltip>
      </v-list-item>
      <v-list-item prepend-icon="mdi-cog-outline" value="config" to="/">
        <v-tooltip
          activator="parent"
          location="right"
          text="config"
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
