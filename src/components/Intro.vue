<template>
  <section id="intro">
    <b-container
      class="text-light intro-container intro-background-img pb-5"
      fluid
    >
      <div class="header-content mx-3" :class="titleVisibility">
        <h1 class="header-title">Fullstack Web and Android Developer</h1>
        <p class="header-subtitle">
          Most powerful Developer on the Planet, with an IQ of over 9000.
        </p>
      </div>
    </b-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      titleVisibility: '',
    };
  },
  props: {
    scrolledPastHeader: Boolean,
    cancelAutoScroll: Boolean,
  },
  watch: {
    scrolledPastHeader(scrolledPast) {
      if (scrolledPast) {
        this.titleVisibility = 'hidden';
        if (!this.cancelAutoScroll) {
          this.$scrollTo('#about');
        }
      } else {
        this.titleVisibility = '';
      }
    },
  },
};
</script>

<style scoped>
.intro-container {
  background: #000000 center top no-repeat fixed;
  background-size: cover;
  height: 100vh;
  padding-top: 45vh;
  padding-bottom: 20vh;
  transition: all .7s ease-in-out;
}

.header-content {
  opacity: 1;
  transition: all .7s ease-in-out;
}

.header-title {
  font-weight: 200;
  transition: all .7s ease-in-out;
}

@media screen and (min-width: 769px) {
  .intro-background-img {
    background-image: url('../assets/portfolio-banner-lg.png');
  }
}

@media screen and (max-width: 768px) {
  .intro-background-img {
    background-image: url('../assets/portfolio-banner-md.png');
  }

  .header-title {
    font-size: 2rem;
  }
}

@media screen and (max-width: 480px) {
  .intro-background-img {
    background-image: url('../assets/portfolio-banner-sm.png');
  }
}

.hidden {
  opacity: 0;
  margin-top: -500px;
}
</style>
