<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark" :class="navBackground">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarTogglerDemo03"
      aria-controls="navbarTogglerDemo03"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">Lars Spangenberg</a>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <!-- <li class="nav-item active">
          <a class="nav-link" href="#">
            Home
            <span class="sr-only">(current)</span>
          </a>
        </li> -->
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Portfolio</a>
        </li>
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
