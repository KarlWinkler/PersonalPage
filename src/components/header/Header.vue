<script setup lang="ts">
import HeaderLink from './HeaderLink.vue'
</script>

<template>
  <div class="header">
    <img alt="karl winkler logo" class="logo" src="/src/assets/logo.svg" width="48" height="48" />
    <HeaderLink to="#about">about</HeaderLink>
    <HeaderLink to="#projects">projects</HeaderLink>
    <HeaderLink to="#blog">blog</HeaderLink>
    <HeaderLink to="#links">links</HeaderLink>
  </div>
</template>

<style>
.header {
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 16px 64px;
  gap: 32px;
}
</style>
