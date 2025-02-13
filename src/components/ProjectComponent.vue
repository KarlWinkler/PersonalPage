<script setup lang="ts">
type PropsType = {
  name: string
  description: string
}
const { name, description } = defineProps<PropsType>()
</script>

<template>
  <div class="card">
    <div class="image"><slot /></div>
    <h2 class="name">{{ name }}</h2>
    <div class="description">{{ description }}</div>
  </div>
</template>

<style>
.card {
  display: flex;

  flex-direction: column;
  border: 1px solid var(--forground-color);
  border-radius: 4px;

  padding: 12px;

  width: min-content;
}

.image > img {
  width: 300px;
  height: 175px;

  object-fit: cover;
}

.description {
  opacity: 50%;
}
</style>
