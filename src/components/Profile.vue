<template>
  <section id="profile">
    <b-container
      class="text-light profile-container pb-5"
      :class="containerSize"
      fluid
    >
      <div class="header-content" :class="titleVisibility">
        <h1>Fullstack Web and Android Developer</h1>
        <p>Most powerful Developer on the Planet, with an IQ of over 9000.</p>
      </div>
    </b-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      titleVisibility: '',
      containerSize: '',
    };
  },
  props: {
    scrolledPastHeader: Boolean,
  },
  watch: {
    scrolledPastHeader(scrolledPast) {
      if (scrolledPast) {
        this.titleVisibility = 'hidden';
        this.containerSize = 'shrunk';
      } else {
        this.titleVisibility = '';
        this.containerSize = '';
      }
    },
  },
};
</script>

<style scoped>
.profile-container {
  background: #000000 url('../assets/desk-background.png') center top no-repeat fixed;
  height: 100vh;
  padding-top: 45vh;
  padding-bottom: 20vh;
  transition: all .7s ease-in-out;
}

.header-content {
  opacity: 1;
  transition: all .7s ease-in-out;
}

.shrunk {
  height: 0;
}

@media only screen and (max-width: 990px) {
  .shrunk {
    height: 0;
    margin-top: -120px;
  }
}

.hidden {
  opacity: 0;
  margin-top: -500px;
}

h1 {
  /* font-size: 3rem; */
  font-weight: 200;
}
</style>
