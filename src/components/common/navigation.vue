<template>
  <b-navbar
    :class="navBackground"
    variant="dark"
    type="dark"
    fixed="top"
    toggleable="lg"
    v-b-scrollspy="300"
  >
    <b-navbar-toggle
      target="nav-collapse"
      aria-controls="nav-collapse"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </b-navbar-toggle>

    <b-navbar-brand to="#profile">Lars Spangenberg</b-navbar-brand>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="mr-auto mt-2 mt-lg-0">
        <b-nav-item to="#about">About</b-nav-item>
        <b-nav-item to="#portfolio">Portfolio</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav>
        <b-button
          class="my-2 my-lg-0"
          variant="outline-info"
          v-b-modal.contact-modal
        >
          Contact
        </b-button>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  props: {
    scrolledPastHeader: Boolean,
  },
  computed: {
    navBackground() {
      return this.$props.scrolledPastHeader ? '' : 'bg-transparent';
    },
  },
};
</script>

<style scoped>
.navbar {
  transition: all .1s;
}
</style>
