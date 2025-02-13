<script setup lang="ts">
const { title } = defineProps<{ title: string }>()
</script>

<template>
  <div class="item">
    <slot />
    <p>{{ title }}</p>
  </div>
</template>

<style>
.item {
  display: flex;
  align-items: center;
  height: fit-content;

  margin: 24px;
  gap: 12px;
}
</style>
