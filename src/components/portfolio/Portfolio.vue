<template>
  <section class="portfolio">
    <div class="container intro">
      <h1>My Recent Projects</h1>
      <p>The following are all personal projects that I've recently worked on. You can also find
        more on my Github.</p>
    </div>
    <div class="container project-list">
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
