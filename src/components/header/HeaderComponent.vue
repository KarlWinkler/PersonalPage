<script setup lang="ts">
import HeaderLink from './HeaderLink.vue'
import Logo from '../svg/LogoSvg.vue'
import ThemeToggle from '../svg/ThemeTogleSvg.vue'
import { inject } from 'vue'

const theme: { value: string } = inject('theme')!

// const toggleTheme = () => (theme = theme == 'light' ? 'dark' : 'light')
const toggleTheme = () => (theme.value = theme.value == 'light' ? 'dark' : 'light')
</script>

<template>
  <div class="header">
    <Logo />
    <div class="links">
      <HeaderLink to="#about">about</HeaderLink>
      <HeaderLink to="#projects">projects</HeaderLink>
      <HeaderLink to="#blog">blog</HeaderLink>
      <HeaderLink to="#links">links</HeaderLink>
    </div>
    <div @click="toggleTheme">
      <ThemeToggle />
    </div>
  </div>
</template>

<style>
.header {
  display: grid;
  grid-template-columns: auto 1fr auto;
  padding: 16px 64px;
  align-items: center;
  justify-content: center;
  gap: 32px;
  color: var(--forground-color);
}
</style>
