<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/header/Header.vue'
import { ref, provide } from 'vue'

const theme = ref('light')
provide('theme', theme)

document.cookie = 'Hello=Do you want a Cookie?'
document.cookie = 'Alien=I am An Alien!'
window.localStorage.setItem('1', 'I')
window.localStorage.setItem('2', '-')
window.localStorage.setItem('3', 'A')
window.localStorage.setItem('4', 'M')
window.localStorage.setItem('5', '-')
window.localStorage.setItem('6', 'A')
window.localStorage.setItem('7', 'N')
window.localStorage.setItem('8', '-')
window.localStorage.setItem('9', 'A')
window.localStorage.setItem('10', 'L')
window.localStorage.setItem('11', 'I')
window.localStorage.setItem('12', 'E')
window.localStorage.setItem('13', 'N')
</script>

<template>
  <!-- One bug,-->
  <!-- two,-->
  <!-- Three bug, -->
  <!-- four. -->
  <!-- I love the little bugs, -->
  <!-- waiting at my door. -->
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
  --background-color: #cfe4e5;
  --forground-color: #333;
  --transition-length: 0.1s;

  background-color: var(--background-color);
  font-family: 'Roboto Mono', serif;
  font-optical-sizing: auto;
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
}

.dark {
  --background-color: #333;
  --forground-color: #cfe4e5;
  background-color: var(--background-color);
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
