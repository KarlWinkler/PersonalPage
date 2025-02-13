<script setup lang="ts">
import ProjectComponent from './ProjectComponent.vue'
</script>

<template>
  <div class="projects">
    <ProjectComponent
      name="DnD Nearby"
      description="A hub for all things D&D, built as a proof of concept with React and designed with Figma."
    >
      <img src="../assets/dndnearby.png" />
    </ProjectComponent>
    <ProjectComponent
      name="NHL Predictions"
      description="A web app for users to make predictions for NHL games, built with Django / React and Postgres."
    >
      <img src="../assets/nhlprediction.png" />
    </ProjectComponent>
    <ProjectComponent
      name="Netflow Data Pipeline"
      description="A scalable Netflow data pipeline built using Java Spring, AWS EC2, Amazon SQS, and Solr."
    >
      <img src="../assets/NetflowProjectImage.png" />
    </ProjectComponent>
  </div>
</template>

<style>
.projects {
  display: grid;

  grid-template-columns: 1fr 1fr 1fr;

  justify-items: center;
  align-content: center;

  padding: 24px;
}
</style>
