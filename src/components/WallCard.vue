<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts"></script>

<template>
  <v-card class="wall-card" height="600" width="1000"> </v-card>
</template>

<style scoped lang="scss">
.wall-card {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: 50%;
  transform: translateY(-50%);
  // background: #ccc;
  // background: linear-gradient(135deg, #fce38a, #f38181);
  background: url("https://images.unsplash.com/photo-1535408913330-a71d0a3e29ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80");
  background-size: cover;
  background-position: center center;
}
</style>
