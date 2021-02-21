<template>
  <b-col class="mt-5 mx-auto" lg="6">
    <b-card class="mx-auto" border-variant="dark" no-body>
      <b-card-img
        class="image"
        :src="project.image || require('@/assets/' + project.localImage)"
        alt="Project Image"
      />

      <b-card-body>
        <b-card-title class="mt-3" :class="project.technologies ? '' : 'mb-5'">
          {{ project.title }}
        </b-card-title>

        <b-card-sub-title v-if="project.technologies">
          {{ project.technologies }}
        </b-card-sub-title>

        <b-card-text class="card-text mt-4">
          {{ project.description}}
        </b-card-text>
      </b-card-body>

      <b-card-body
        class="project-links d-flex justify-content-around flex-wrap flex-grow-0 px-sm-5 mb-2"
      >
        <b-button
          class="btn-xs-block px-5"
          v-if="project.codeUrl"
          :href="project.codeUrl"
          target="_blank"
          variant="outline-info"
        >
          Code
        </b-button>

        <b-button
          class="btn-xs-block px-5"
          v-if="project.liveUrl"
          :href="project.liveUrl"
          target="_blank"
          variant="secondary"
        >
          Demo
        </b-button>
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

.image {
  max-height: 275px;
}

/* .image__mobile {
  margin-top: 10px;
  width: auto;
  align-self: center;
} */

@media screen and (max-width: 420px) {
  .btn-xs-block {
    margin-top: 10px;
    width: 100%;
    display: block;
  }
}
</style>
