<script setup lang="ts">
import Word from '../components/Word.vue'
</script>

<template>
  <main class="container">
    <div class="category right-down">
      <div class="placeholder"></div>
      <div class="content"></div>
    </div>
    <div class="category left-down right-up">
      <div class="placeholder"></div>
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

  padding: 16px 64px;
}

.content {
  padding: 32px;
  color: black;
}

.category {
  position: relative;
  width: 100%;
  border-top: 2px solid black;
}

.left-up::before {
  position: absolute;
  content: '';
  top: -100px;
  left: 0;

  height: 100px;
  width: 100px;

  border-left: 2px solid black;
}

.left-down::after {
  position: absolute;
  content: '';
  top: 0;
  left: 0;

  height: 100px;
  width: 100px;

  border-left: 2px solid black;
}

.right-up::before {
  position: absolute;
  content: '';
  top: -100px;
  right: 0;

  height: 100px;
  width: 100px;

  border-right: 2px solid black;
}

.right-down::after {
  position: absolute;
  content: '';
  top: 0;
  right: 0;

  height: 100px;
  width: 100px;

  border-right: 2px solid black;
}

.category1 {
  position: relative;
  width: 100%;
  border-top: 2px solid black;
}

.category1::after {
  position: absolute;
  content: '';
  top: 0;
  right: 0;

  height: 100px;
  width: 100px;

  border-right: 2px solid black;
}

.category2 {
  position: relative;
  width: 100%;
  border-top: 2px solid black;
}

.category2::before {
  position: absolute;
  content: '';
  top: -100px;
  right: 0;

  height: 100px;
  width: 100px;

  border-right: 2px solid black;
}

.category2::after {
  position: absolute;
  content: '';
  top: 0;
  left: 0;

  height: 100px;
  width: 100px;

  border-left: 2px solid black;
}

.category3 {
  position: relative;
  width: 100%;
  border-top: 2px solid black;
}

.category3::before {
  position: absolute;
  content: '';
  top: -100px;
  left: 0;

  height: 100px;
  width: 100px;

  border-left: 2px solid black;
}

.category3::after {
  position: absolute;
  content: '';
  top: 0;
  right: 0;

  height: 100px;
  width: 100px;

  border-right: 2px solid black;
}

.category4 {
  position: relative;
  width: 100%;
  border-top: 2px solid black;
}
</style>
