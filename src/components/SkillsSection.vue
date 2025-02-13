<script setup lang="ts">
import LinuxPenguin from './svg/LinuxPenguin.vue'
import ReactLogo from './svg/ReactLogo.vue'
import RailsLogo from './svg/RailsLogo.vue'
import DjangoLogo from './svg/DjangoLogo.vue'
import GoLogo from './svg/GoLogo.vue'
import Item from './ItemComponent.vue'
</script>

<template>
  <div class="skills">
    <Item title="Django"><DjangoLogo /></Item>
    <Item title="React"><ReactLogo /></Item>
    <Item title="Ruby on Rails"><RailsLogo /></Item>
    <Item title="Go"><GoLogo /></Item>
    <Item title="Linux"><LinuxPenguin /></Item>
  </div>
</template>
