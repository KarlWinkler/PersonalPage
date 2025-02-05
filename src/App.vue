<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/header/Header.vue'
</script>

<template>
  <div class="app-container">
    <Header />

    <RouterView />

    <div class="footer">
      <h3>footer</h3>
    </div>
  </div>
</template>

<style>
body {
  background-color: #c7e3e4;

  font-family: 'Roboto Mono', serif;
  font-optical-sizing: auto;
  font-size: 16px;
  font-weight: 200;
  font-style: normal;
}

.app-container {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  width: 100%;
}
</style>
