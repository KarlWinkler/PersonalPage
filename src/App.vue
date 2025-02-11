<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/header/Header.vue'
import { ref, provide } from 'vue'

const theme = ref('light')
provide('theme', theme)
</script>

<template>
  <div :class="['app-container', theme]">
    <Header />

    <RouterView />

    <div class="footer">
      <h3>footer</h3>
    </div>
  </div>
</template>

<style>
body {
  background-color: #cfe4e5;
  --forground-color: #333;
  --transition-length: 0.1s;

  font-family: 'Roboto Mono', serif;
  font-optical-sizing: auto;
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
}

.dark {
  background-color: #333;
  --forground-color: #cfe4e5;
}

p {
  transition: var(--transition-length);
}

a {
  transition: var(--transition-length);
}

h1 {
  transition: var(--transition-length);
}

div {
  transition: var(--transition-length);
}

div::before {
  transition: var(--transition-length);
}

div::after {
  transition: var(--transition-length);
}

.app-container {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  width: 100%;

  color: var(--forground-color);
}
</style>
