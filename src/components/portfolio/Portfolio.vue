<template>
  <section id="portfolio" class="portfolio">
    <b-container class="intro">
      <h1>My Recent Projects</h1>
      <p>
        The following are all personal projects that I've recently worked on.
        You can also find more on my
        <a href="https://github.com/LarsSpangenberg" target="_blank">Github</a>.
      </p>
    </b-container>
    <b-container class="project-list">
      <b-row>
        <project-card
          v-for="(project, index) in projects"
          :key="'project' + index"
          :project="project"
        />
      </b-row>
    </b-container>
  </section>
</template>

<script>
import projects from '@/data/portfolio-projects';
import ProjectCard from './ProjectCard.vue';

export default {
  data() {
    return {
      projects,
    };
  },
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
}

.project-list {
  margin-top: 3%;
}
</style>
