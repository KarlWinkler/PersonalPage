<script setup lang="ts">
  import { RouterLink } from 'vue-router'

  const { to } = defineProps<{ to: string }>()
</script>

<template>
  <RouterLink :to=to><slot /></RouterLink>
</template>
