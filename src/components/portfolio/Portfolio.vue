<template>
  <section id="portfolio" class="portfolio">
    <b-container class="intro">
      <h1>My Recent Projects</h1>
      <p>
        The following are all personal projects that I've recently worked on. You can also
        find more on my
        <a href="https://github.com/LarsSpangenberg" target="_blank">Github</a>.
      </p>
    </b-container>
    <b-container>
      <b-row>
        <project-card
          v-for="project in projects"
          :key="'project:' + project.title"
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
h1 {
  font-size: 2rem;
}

.portfolio {
  background-color: #f8f8f8;
  padding-top: 80px;
  padding-bottom: 80px;
}
</style>
