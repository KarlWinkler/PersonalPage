<script setup lang="ts">
  import Word from "/src/components/Word.vue"
</script>

<template>
  <main class="container">
    <div class="greeting">
      <div class="block">
        <p>
          <Word w="type" type="key" /> 
          <Word w=" Developer" type="type" />
          <Word w=" struct" type="key" /> {
        </p>
        <p class="indent">
          <Word w="Role" type="var" />: string
        </p>
        <p class="indent">
          <Word w="Languages" type="var" />:
          <Word w="[]" type="key" />string
        </p>
        <p class="indent">
          <Word w="Frameworks" type="var" />:
          <Word w="[]" type="key" />string
        </p>
        <p class="indent">
          <Word w="Tools" type="var" />:
          <Word w="[]" type="key" />string
        </p>
      <p>}</p>
      </div>
      <div class="block">
        <p>
          <Word w="func" type="key" />(d 
          <Word w="*" type="key" />
          <Word w="Developer" type="type" />)
          <Word w="KarlWinkler" type="var"/>(ctx
          <Word w="*" type="key" />
          <Word w="fiber.ctx" type="type"/>)
          (string, error) {
        </p>
        <p class="indent">
          [<Word w='"Python", "Go", "Javascript"' type="str" />]
        </p>
        <p class="indent">
          <Word w="return" type="key" />
          <Word w=' "FullStack"' type="str" />,
          <Word w="nil" type="key" />
        </p>
        <p>}</p>
      </div>
    </div>
  </main>
</template>

<style>
  .container {
    display: flex;
    justify-items: center;

    padding: 64px;
  }
  p {
    margin-bottom: 4px;
  }
  .indent {
    padding-left: 32px;
  }
  .block {
    margin-bottom: 16px;
  }
</style>

