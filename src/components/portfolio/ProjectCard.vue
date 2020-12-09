<template>
  <b-col class="mb-4" lg="6">
    <b-card class="mx-auto" border-variant="dark" no-body>
      <b-card-img
        class="image"
        :src="project.image || require('@/assets/' + project.localImage)"
        alt="Project Image"
        height="275px"
        top
      />

      <b-card-body>
        <b-card-title class="mt-3" :class="project.technologies ? '' : 'mb-5'">
          {{ project.title }}
        </b-card-title>

        <b-card-sub-title v-if="project.technologies">
          {{ project.technologies }}
        </b-card-sub-title>

        <b-card-text class="card-text mt-4">{{ project.description }}</b-card-text>
      </b-card-body>

      <b-card-body class="project-links flex-grow-0 mb-2 mx-auto">
        <b-button variant="outline-secondary">Code</b-button>
        <b-button class="ml-5" variant="outline-secondary">Demo</b-button>
      </b-card-body>
    </b-card>
  </b-col>
</template>

<script>
export default {
  props: {
    project: Object,
  },
};
</script>

<style scoped>
.card {
  height: 100%;
  max-width: 500px;
}

/* .image {
  height: 250px;
} */

/* .card-subtitle {
  font-size: .9rem;
} */

.btn-demo {
  margin-left: 20px;
}
</style>
