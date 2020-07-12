<template>
  <nav
    id="main-navbar"
    class="navbar fixed-top navbar-expand-lg navbar-dark"
    :class="navBackground"
  >
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarToggler"
      aria-controls="navbarToggler"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <a class="navbar-brand" href="#profile">Lars Spangenberg</a>
    <div class="collapse navbar-collapse" id="navbarToggler">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="#about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#portfolio">Portfolio</a>
        </li>
      </ul>
      <button
        class="btn navbar-btn btn-outline-info my-lg-0 my-2 "
        type="button"
        data-toggle="modal"
        data-target=".contact-modal"
      >
        Contact
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    scrollPosition: Number,
  },
  computed: {
    navBackground() {
      const isSmallScreen = window.innerWidth < 990;
      if (isSmallScreen) {
        if (this.$props.scrollPosition > window.innerHeight - 200) {
          return 'bg-dark';
        }
      } else if (this.$props.scrollPosition > window.innerHeight - 100) {
        return 'bg-dark';
      }
      return 'bg-transparent';
    },
  },
};
</script>

<style scoped>
.navbar {
  transition: all .1s;
}
</style>
