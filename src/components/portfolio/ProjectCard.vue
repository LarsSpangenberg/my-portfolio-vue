<template>
  <b-col class="mx-auto mb-4" lg="6">
    <b-card class="justify-content-between" border-variant="dark" no-body>
      <b-card-body>
        <b-card-img
          class="rounded-circle project-img"
          :src="project.image"
          alt="Project Image"
        />
        <b-card-title class="mt-3" :class="project.technologies ? '' : 'mb-5'">
          {{ project.title }}
        </b-card-title>
        <b-card-sub-title class="mb-5" v-if="project.technologies">
          {{ project.technologies }}
        </b-card-sub-title>
        <b-card-text class="card-text">{{ project.description }}</b-card-text>
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
}

.project-img {
  width: 140px;
  height: 140px;
  margin: 50px auto;
}

.card-subtitle {
  font-size: .9rem;
}

.btn-demo {
  margin-left: 20px;
}
</style>
