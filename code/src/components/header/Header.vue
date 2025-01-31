<script setup lang="ts">
  import HeaderLink from './HeaderLink.vue'
</script>

<template>
  <div class="header">
    <HeaderLink to="#about">about</HeaderLink>
    <HeaderLink to="#projects">projects</HeaderLink>
    <HeaderLink to="#blog">blog</HeaderLink>
    <HeaderLink to="#links">links</HeaderLink>
  </div>
</template>

<style>
  .header {
    display: flex;
    justify-content: center;

    padding: 16px;
    gap: 32px;
  }
</style>