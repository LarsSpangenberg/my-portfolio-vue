<template>
  <section class="portfolio">
    <h1>Portfolio</h1>
    <p>These are supposed to be sample projects</p>
    <div class="container">
      <div class="row">
        <project-card
          v-for="project in projects"
          :key="'project' + project.title"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>

<script>
import projects from '@/data/portfolio-projects';
import ProjectCard from './ProjectCard.vue';

export default {
  data: () => ({
    projects,
  }),
  components: {
    ProjectCard,
  },
};
</script>

<style scoped>
.portfolio {
  background-color: #34345238;
  padding-top: 8%;
  padding-bottom: 15%;
  /* padding:15% */
}

.portfolio-img {
  width: 140px;
  height: 140px;
  margin-top: 15px;
}
</style>
