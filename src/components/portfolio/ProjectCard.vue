<template>
  <div class="col-md-6 mx-auto mb-4">
    <div class="card border-dark">
      <div class="card-header">
        <img
          alt="Project Image"
          class="rounded-circle card-img-top project-img"
          :src="project.image"
        />
      </div>
      <div class="card-body d-flex flex-column justify-content-between">
        <h3 class="card-title">{{ project.title }}</h3>
        <h4
          v-if="project.technologies"
          class="card-subtitle mb-5 text-muted"
        >
          {{ project.technologies }}
        </h4>
        <p class="card-text">{{ project.description }}</p>
        <div class="project-links">
          <button type="button" class="btn btn-outline-secondary">Code</button>
          <button type="button" class="btn btn-outline-secondary btn-demo">Demo</button>
        </div>
      </div>
    </div>
  </div>
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
  margin: 50px;
}

.card-subtitle {
  font-size: .9rem;
}

.btn-demo {
  margin-left: 20px;
}
</style>
