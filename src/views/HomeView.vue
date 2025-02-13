<script setup lang="ts">
import AboutSection from '@/components/AboutSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
</script>

<template>
  <main class="container">
    <div class="category right-down">
      <AboutSection />
    </div>
    <div class="category left-down right-up">
      <SkillsSection />
    </div>
    <div class="category left-up right-down">
      <div class="placeholder"></div>
    </div>
    <div class="category right-up"></div>
  </main>
</template>

<style>
.placeholder {
  height: 300px;
}
.container {
  position: relative;

  --border-width: 4px;

  padding: 16px 64px;
}

.content {
  padding: 32px;
  color: var(--forground-color);
}

.category {
  position: relative;
  width: 100%;
  border-top: var(--border-width) solid var(--forground-color);
}

.left-up::before {
  position: absolute;
  content: '';
  top: -100px;
  left: 0;

  height: 100px;
  width: 100px;

  border-left: var(--border-width) solid var(--forground-color);
}

.left-down::after {
  position: absolute;
  content: '';
  top: 0;
  left: 0;

  height: 100px;
  width: 100px;

  border-left: var(--border-width) solid var(--forground-color);
}

.right-up::before {
  position: absolute;
  content: '';
  top: -100px;
  right: 0;

  height: 100px;
  width: 100px;

  border-right: var(--border-width) solid var(--forground-color);
}

.right-down::after {
  position: absolute;
  content: '';
  top: 0;
  right: 0;

  height: 100px;
  width: 100px;

  border-right: var(--border-width) solid var(--forground-color);
}

.category1 {
  position: relative;
  width: 100%;
  border-top: var(--border-width) solid var(--forground-color);
}

.category1::after {
  position: absolute;
  content: '';
  top: 0;
  right: 0;

  height: 100px;
  width: 100px;

  border-right: 2px solid var(--forground-color);
}

.category2 {
  position: relative;
  width: 100%;
  border-top: 2px solid var(--forground-color);
}

.category2::before {
  position: absolute;
  content: '';
  top: -100px;
  right: 0;

  height: 100px;
  width: 100px;

  border-right: 2px solid var(--forground-color);
}

.category2::after {
  position: absolute;
  content: '';
  top: 0;
  left: 0;

  height: 100px;
  width: 100px;

  border-left: 2px solid var(--forground-color);
}

.category3 {
  position: relative;
  width: 100%;
  border-top: 2px solid var(--forground-color);
}

.category3::before {
  position: absolute;
  content: '';
  top: -100px;
  left: 0;

  height: 100px;
  width: 100px;

  border-left: 2px solid var(--forground-color);
}

.category3::after {
  position: absolute;
  content: '';
  top: 0;
  right: 0;

  height: 100px;
  width: 100px;

  border-right: 2px solid var(--forground-color);
}

.category4 {
  position: relative;
  width: 100%;
  border-top: 2px solid var(--forground-color);
}
</style>
