<script setup lang="ts">
    const { w, type } = defineProps<{ w: string, type: string }>()
</script>
<template>
  <span :class=type>{{ w }}</span>
</template>
<style>
.key {
  color: #a3d476;
}
.var {
  color: #7262ee
}
.type {
  color: #bb3737
}
.str {
  color: #32aa45
}
</style>