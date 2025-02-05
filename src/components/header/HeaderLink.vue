<script setup lang="ts">
import { RouterLink } from 'vue-router'

const { to } = defineProps<{ to: string }>()
</script>

<template>
  <RouterLink class="link" :to="to"><slot /></RouterLink>
</template>

<style>
.link {
  color: #333;
}
</style>
