<script setup lang="ts">
import LinksComponent from './LinksComponent.vue'
</script>

<template>
  <div class="about">
    <div>
      <h1>Karl Winkler</h1>
      <p class="paragraph">
        I like software, I like the way it works, or doesn't work. I like the little things about
        it. The quirks that make each piece unique. Little bugs here and there remind us of the
        complexity behind the scenes, they remind us of us.
      </p>
      <p class="paragraph">
        When I sat down so many years ago and asked myself a simple question "How does a program
        work?" I didn't know that it would be the goal that stuck. But now, so many years later I
        can't imagine not being one with my computer. I wish I could have an intimate knowledge of
        every part of my computer, but I am still on that journey.
      </p>
      <p class="paragraph">
        I have so many other things that keep me involved in society; distractions. I volunteer at a
        local homeless shelter, I run, I bike, I try to learn politics, maybe I'll do something some
        day?
      </p>
    </div>
    <LinksComponent />
  </div>
</template>

<style>
.about {
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: var(--forground-color);
  padding: 32px;

  align-items: end;
  justify-items: end;
}

.paragraph {
  margin: 32px;
}
</style>
