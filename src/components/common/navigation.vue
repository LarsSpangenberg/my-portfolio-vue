<template>
  <nav
    id="main-navbar"
    class="navbar fixed-top navbar-expand-lg navbar-dark"
    :class="navBackground"
  >
    <!-- TODO: menu overlaps header title when toggled menu is active on small screens -->
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
        <!-- TODO: turn contact into button -->
        <li class="nav-item">
          <a
            class="nav-link"
            href="#"
            data-toggle="modal"
            data-target=".contact-modal"
          >Contact</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  transition: all .1s;
}
</style>

<script>
export default {
  // TODO: moved navigation out of App.vue now i can move this code to landing for dry code
  data() {
    return {
      scrollPosition: null,
    };
  },
  computed: {
    navBackground() {
      return (this.scrollPosition > window.innerHeight - 100) ? 'bg-dark' : 'bg-transparent';
    },
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
  created() {
    window.addEventListener('scroll', this.updateScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.updateScroll);
  },
};
</script>
