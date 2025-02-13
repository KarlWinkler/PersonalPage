<script setup lang="ts">
import LinkedinLogo from './svg/LinkedinLogo.vue'
import GithubMark from './svg/github-mark.vue'
</script>

<template>
  <div class="links">
    <a href="https://www.linkedin.com/in/karl-winkler-aa01421a0/" target="_blank">
      <img width="64px" height="auto" src="../assets/linkedin.png" />
    </a>
    <a href="https://github.com/karlwinkler" target="_blank">
      <GithubMark />
    </a>
  </div>
</template>

<style>
.links {
  display: flex;

  gap: 24px;
}

a {
  cursor: pointer;
}
</style>
