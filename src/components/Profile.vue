<template>
  <section id="profile" class="profile">
    <div class="jumbotron-fluid text-light">
      <div class="container">
        <div class="header-content" :class="showTitle">
          <h1>Fullstack Web and Android Developer</h1>
          <p>Greatest Deveoper on the Planet</p>
        </div>
      </div>
      <!-- <button
        type="button"
        class="btn btn-primary btn-lg"
        data-toggle="modal"
        data-target=".contact-modal"
      >Contact</button>-->
    </div>
  </section>
</template>

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

<script>
export default {
  props: {
    scrollPosition: Number,
  },
  computed: {
    showTitle() {
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
