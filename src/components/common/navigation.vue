<template>
  <b-navbar
    :class="navBackground"
    variant="dark"
    type="dark"
    fixed="top"
    toggleable="md"
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

    <b-navbar-brand to="#" v-scroll-to="scrollOptions('#intro')">Lars Spangenberg</b-navbar-brand>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="mr-auto mt-2 mt-lg-0">
        <b-nav-item to="#about" v-scroll-to="scrollOptions('#about')">About</b-nav-item>
        <b-nav-item to="#portfolio" v-scroll-to="scrollOptions('#portfolio')">Portfolio</b-nav-item>
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
  // data() {
  //   return {
  //     navItemClicked: false,
  //   };
  // },
  props: {
    scrolledPastHeader: Boolean,
  },
  computed: {
    navBackground() {
      return this.$props.scrolledPastHeader ? '' : 'bg-transparent';
    },
  },
  methods: {
    scrollOptions(to) {
      const v = this;
      return {
        el: to,
        onStart() {
          v.$emit('navItemClicked', true);
        },
        onDone() {
          v.$emit('navItemClicked', false);
        },
        onCancel() {
          v.$emit('navItemClicked', false);
        },
      };
    },
  },
};
</script>

<style scoped>
.navbar {
  transition: all .1s;
}
</style>
