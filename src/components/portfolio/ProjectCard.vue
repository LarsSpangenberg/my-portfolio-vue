<template>
  <div class="col-md-4 mb-4">
    <div class="card">
      <div class="card-head">
        <img
          alt="Vue logo"
          class="rounded-circle project-img"
          :src="project.image"
        />
        <h2>{{ project.title }}</h2>
      </div>
      <hr />
      <div class="card-body">
        <p>{{ project.description }}</p>
        <button type="button" class="btn btn-outline-secondary">More</button>
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
.project-img {
  width: 140px;
  height: 140px;
  margin: 50px;
}
</style>
