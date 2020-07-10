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
  data() {
    return {
      scrollPosition: null,
    };
  },
  computed: {
    showTitle() {
      return (this.scrollPosition < window.innerHeight / 3) ? '' : 'hidden';
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
