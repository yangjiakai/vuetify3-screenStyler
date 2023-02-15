<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
const panel = ref([0, 1]);
</script>

<template>
  <v-expansion-panels v-model="panel" class="mt-5" multiple>
    <v-expansion-panel>
      <v-expansion-panel-title>App Icons</v-expansion-panel-title>
      <v-expansion-panel-text> Some content</v-expansion-panel-text>
    </v-expansion-panel>
    <v-expansion-panel>
      <v-expansion-panel-title>Web Shortcuts</v-expansion-panel-title>
      <v-expansion-panel-text> Some content </v-expansion-panel-text>
    </v-expansion-panel>
    <v-expansion-panel>
      <v-expansion-panel-title>Custom Icon</v-expansion-panel-title>
      <v-expansion-panel-text> Some content </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<style scoped lang="scss"></style>
