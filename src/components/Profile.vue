<template>
  <section id="profile" class="profile">
    <div class="jumbotron-fluid text-light">
      <div class="container">
        <div class="header-content" :class="titleVisibility">
          <h1>Fullstack Web and Android Developer</h1>
          <p>Most powerful Developer on the Planet, with an IQ of over 9000.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    scrollPosition: Number,
  },
  computed: {
    titleVisibility() {
      const isSmallScreen = window.innerWidth < 990;
      if (isSmallScreen) {
        if (this.$props.scrollPosition < 100) {
          return '';
        }
      } else if (this.$props.scrollPosition < window.innerHeight / 3) {
        return '';
      }
      return 'hidden';
    },
  },
};
</script>

<style scoped>
.container {
  height: 100vh;
  padding-top: 45vh;
  padding-bottom: 20vh;
}

.profile {
  background: #000000 url('../assets/desk-background.png') center top no-repeat
    fixed;
}

.header-content {
  opacity: 1;
  transition: all .3s;
}

.hidden {
  opacity: 0;
}

h1 {
  /* font-size: 3rem; */
  font-weight: 200;
}
</style>
